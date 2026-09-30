import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FaComments, FaMicrophone, FaTimes } from "react-icons/fa";

const WELCOME =
  "Hi, I am Praveen's assistant. Ask about his work, projects, skills, or how to contact him.";

function localReply(question) {
  const q = question.toLowerCase();

  if (/grolynk/.test(q)) {
    return "Grolynk.com is a professional project Praveen delivered at Elymento.ai on the MERN stack: React, Node.js, Express, and MongoDB. It has reusable UI, dynamic routing, API integration, and responsive layouts. Live site: https://grolynk.com";
  }

  if (/xentto/.test(q)) {
    return "Xentto.ai is an AI product website Praveen built with Next.js and TypeScript at Elymento.ai. Live site: https://xentto.ai";
  }

  if (/\b(elymento|zehntech|experience|company|work|job)\b/.test(q)) {
    return "Praveen has 1 year of professional experience. He is a Software Engineer at Elymento.ai (October 2025 - Present), where he delivered Grolynk.com on MERN and Xentto.ai with Next.js and TypeScript. Before that he worked at Zehntech Pvt Ltd., Indore (September 2024 - December 2024).";
  }

  if (/skill|stack|mern|react|next\.?js|technolog/.test(q)) {
    return "Skills: React, Node.js, Express.js, MongoDB, JavaScript, Tailwind CSS, Bootstrap, HTML, CSS, Git/GitHub, and Next.js. Grolynk.com is MERN. Xentto.ai uses Next.js and TypeScript.";
  }

  if (/project|portfolio|food|commerce|beattube|quiz|employee/.test(q)) {
    return "Professional projects: Grolynk.com (MERN) and Xentto.ai (Next.js and TypeScript). Other projects: Food Delivery Website, E-Commerce Shopping Website, BeatTube, Quiz APK, and an Employee Management System.";
  }

  if (/educat|college|degree|mca|university|study/.test(q)) {
    return "Praveen completed an MCA in Software Engineering at Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore (2021 - October 2023), and a BSc in Information Technology at Devi Ahilya Vishwavidyalaya, Indore (2017 - May 2021).";
  }

  if (/hobby|hobbies|snooker|cricket|travel/.test(q)) {
    return "Hobbies: playing snooker, cricket, and traveling.";
  }

  if (/email|phone|contact|call|whatsapp|address|linkedin|github|reach/.test(q)) {
    return "Email: praveennigam1999@gmail.com. Phone: +91 9109481480. Address: 799, Sector R, Pioneer Institute, Indore, Madhya Pradesh, India, 452010. LinkedIn: linkedin.com/in/impraveen1999. GitHub: github.com/praveennigam.";
  }

  if (/\b(who|about|hello|hi|hey|name|praveen)\b/.test(q)) {
    return "Praveen Nigam is a MERN stack developer with 1 year of professional experience. He builds production web apps with React, Node.js, Express, and MongoDB, and he shipped Xentto.ai with Next.js and TypeScript.";
  }

  return "I can answer about Praveen's experience, skills, projects such as Grolynk.com and Xentto.ai, education, and contact details.";
}

async function askOpenAI(messages) {
  const response = await axios.post(
    "/api/chat",
    {
      messages: messages.map((message) => ({
        role: message.sender === "user" ? "user" : "assistant",
        content: message.text,
      })),
    },
    { timeout: 30000 }
  );

  return response.data?.text || null;
}

function maleVoice() {
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((voice) => voice.name === "Rishi") ||
    voices.find((voice) => voice.lang === "en-IN") ||
    voices.find((voice) => voice.lang.toLowerCase().startsWith("en"))
  );
}

let activeUtterance = null;
let keepAliveId = 0;

function isIos() {
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

function speakNow(text, volume = 1) {
  const synth = window.speechSynthesis;
  if (!synth || !text) return;

  const utterance = new SpeechSynthesisUtterance(text);
  const voice = maleVoice();
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang;
  } else {
    utterance.lang = "en-IN";
  }
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = volume;
  activeUtterance = utterance;
  synth.resume();
  synth.speak(utterance);

  window.clearInterval(keepAliveId);
  keepAliveId = window.setInterval(() => {
    if (!synth.speaking && !synth.pending) {
      window.clearInterval(keepAliveId);
      return;
    }
    synth.resume();
  }, 8000);
}

function unlockSpeech() {
  const synth = window.speechSynthesis;
  if (!synth) return;
  synth.resume();
  synth.getVoices();
  const prime = new SpeechSynthesisUtterance(" ");
  prime.volume = 0.01;
  prime.rate = 2;
  activeUtterance = prime;
  synth.speak(prime);
}

function speak(text) {
  const synth = window.speechSynthesis;
  if (!synth || !text) return;

  const start = () => {
    if (isIos()) {
      speakNow(text);
      return;
    }
    synth.cancel();
    window.setTimeout(() => speakNow(text), 80);
  };

  if (isIos() || synth.getVoices().length) start();
  else synth.addEventListener("voiceschanged", start, { once: true });
}

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{ text: WELCOME, sender: "bot" }]);
  const [isLoading, setIsLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [voiceError, setVoiceError] = useState("");
  const listRef = useRef(null);
  const recognitionRef = useRef(null);
  const loadingRef = useRef(false);
  const messagesRef = useRef(messages);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, isLoading, open]);

  useEffect(() => {
    loadingRef.current = isLoading;
  }, [isLoading]);

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
      window.speechSynthesis?.cancel();
    };
  }, []);

  const sendMessage = async (rawText) => {
    const text = rawText.trim();
    if (!text || loadingRef.current) return;

    setInput("");
    setVoiceError("");
    loadingRef.current = true;
    setIsLoading(true);

    const nextMessages = [...messagesRef.current, { text, sender: "user" }];
    messagesRef.current = nextMessages;
    setMessages(nextMessages);

    let reply = null;

    try {
      reply = await askOpenAI(nextMessages.filter((message) => message.text !== WELCOME));
    } catch (error) {
      console.error("Chatbot API error:", error?.response?.data || error.message);
    }

    const withReply = [
      ...nextMessages,
      { text: reply || localReply(text), sender: "bot" },
    ];
    messagesRef.current = withReply;
    setMessages(withReply);
    speak(reply || localReply(text));
    loadingRef.current = false;
    setIsLoading(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    unlockSpeech();
    sendMessage(input);
  };

  const toggleListening = () => {
    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setVoiceError("Voice input is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";
    recognition.interimResults = true;
    recognition.continuous = false;
    let finalText = "";

    recognition.onresult = (event) => {
      finalText = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join(" ")
        .trim();
      setInput(finalText);
    };

    recognition.onerror = (event) => {
      setListening(false);
      if (event.error === "aborted") return;
      setVoiceError("Could not hear you. Allow the microphone and try again.");
    };

    recognition.onend = () => {
      setListening(false);
      if (finalText) sendMessage(finalText);
    };

    window.speechSynthesis?.cancel();
    unlockSpeech();
    recognitionRef.current = recognition;
    setVoiceError("");
    setListening(true);
    recognition.start();
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-20 left-4 z-[1000] flex h-[min(70vh,520px)] w-[min(92vw,380px)] flex-col overflow-hidden rounded-2xl border border-cyan-200/25 bg-slate-950/95 shadow-2xl shadow-black/40 backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <h2 className="text-base font-semibold text-white">Chatbot</h2>
            <button
              type="button"
              onClick={() => {
                window.speechSynthesis?.cancel();
                recognitionRef.current?.stop();
                setListening(false);
                setOpen(false);
              }}
              className="text-slate-300 transition hover:text-white"
              aria-label="Close chatbot"
            >
              <FaTimes />
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender === "user" ? "text-right" : "text-left"}>
                <div
                  className={`inline-block max-w-[85%] rounded-lg px-3 py-2 text-sm text-white ${
                    msg.sender === "user" ? "bg-cyan-700" : "bg-slate-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {listening && <p className="text-sm text-rose-300">Listening...</p>}
            {isLoading && <p className="text-sm text-slate-400">Typing...</p>}
            {voiceError && <p className="text-sm text-rose-300">{voiceError}</p>}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-white/10 p-3">
            <button
              type="button"
              onClick={toggleListening}
              disabled={isLoading}
              className={`rounded-lg px-3 py-2 text-white transition disabled:opacity-60 ${
                listening ? "bg-rose-600 hover:bg-rose-500" : "bg-slate-700 hover:bg-slate-600"
              }`}
              aria-label={listening ? "Stop voice input" : "Speak a message"}
            >
              <FaMicrophone />
            </button>
            <input
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              className="w-full rounded-lg border border-cyan-300/30 bg-slate-900 px-3 py-2 text-sm text-slate-50 outline-none focus:ring-2 focus:ring-cyan-400"
              placeholder={listening ? "Listening..." : "Type a message..."}
              aria-label="Message"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="rounded-lg bg-cyan-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-cyan-500 disabled:opacity-60"
              disabled={isLoading}
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() =>
          setOpen((value) => {
            if (value) {
              window.speechSynthesis?.cancel();
              recognitionRef.current?.stop();
              setListening(false);
            } else {
              unlockSpeech();
            }
            return !value;
          })
        }
        className="fixed bottom-6 left-4 z-[1000] flex h-12 w-12 items-center justify-center rounded-full border border-cyan-200/30 bg-cyan-600 text-white shadow-lg shadow-cyan-900/40 transition hover:scale-105 hover:bg-cyan-500"
        aria-label={open ? "Close chatbot" : "Open chatbot"}
      >
        {open ? <FaTimes /> : <FaComments />}
      </button>
    </>
  );
};

export default Chatbot;
