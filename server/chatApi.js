function todayInIndia() {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
}

function systemPrompt() {
  return `You are Praveen Nigam's portfolio assistant. Answer any question helpfully and briefly.
Today's date is ${todayInIndia()} (India time). Use this exact date for questions about today, the current day, month, or year. Do not use your training cutoff or any other date.
When the question is about Praveen, use only these facts:
- Praveen Nigam is a MERN stack developer with 1 year of professional experience.
- Skills: React, Node.js, Express.js, MongoDB, JavaScript, Tailwind CSS, Bootstrap, HTML, CSS, Git/GitHub, Next.js. He also uses TypeScript on Xentto.ai.
- Elymento.ai, Software Engineer, October 2025 - Present. He delivered Grolynk.com on the MERN stack (React, Node.js, Express, MongoDB). Do not say Grolynk uses Next.js. He built Xentto.ai with Next.js and TypeScript.
- Zehntech Pvt Ltd., Indore, Software Engineer, September 2024 - December 2024.
- Other projects: Food Delivery Website, E-Commerce Shopping Website, BeatTube, Quiz APK, Employee Management System.
- Education: MCA, Software Engineering, Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore, 2021 - October 2023. BSc, Information Technology, Devi Ahilya Vishwavidyalaya, Indore, 2017 - May 2021.
- Hobbies: playing snooker, cricket, traveling.
- Email praveennigam1999@gmail.com. Phone +91 9109481480. Address 799, Sector R, Pioneer Institute, Indore, Madhya Pradesh, India, 452010.
- LinkedIn linkedin.com/in/impraveen1999. GitHub github.com/praveennigam. Portfolio impraveen.onrender.com.
- Grolynk live site https://grolynk.com. Xentto live site https://xentto.ai.
For questions that are not about Praveen, answer them normally.`;
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
      try {
        const raw = Buffer.concat(chunks).toString("utf8");
        resolve(raw ? JSON.parse(raw) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function attach(apiKey) {
  return async (req, res) => {
    if (req.method !== "POST") {
      res.statusCode = 405;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Method not allowed" }));
      return;
    }

    if (!apiKey) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "OpenAI key is missing" }));
      return;
    }

    try {
      const body = await readJson(req);
      const history = Array.isArray(body.messages) ? body.messages : [];
      const messages = history
        .filter(
          (message) =>
            message &&
            (message.role === "user" || message.role === "assistant") &&
            typeof message.content === "string"
        )
        .slice(-12)
        .map((message) => ({ role: message.role, content: message.content.slice(0, 2000) }));

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          temperature: 0.4,
          messages: [{ role: "system", content: systemPrompt() }, ...messages],
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        res.statusCode = response.status;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: data?.error?.message || "OpenAI request failed" }));
        return;
      }

      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ text: data.choices?.[0]?.message?.content?.trim() || "" }));
    } catch (error) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: error.message || "Chat request failed" }));
    }
  };
}

export function createChatHandler(apiKey) {
  return attach(apiKey);
}

export function chatApiPlugin(apiKey) {
  const handler = attach(apiKey);
  return {
    name: "openai-chat",
    configureServer(server) {
      server.middlewares.use("/api/chat", handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use("/api/chat", handler);
    },
  };
}
