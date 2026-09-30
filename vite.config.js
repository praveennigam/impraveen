import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { chatApiPlugin } from "./server/chatApi.js";
import { feedbackApiPlugin } from "./server/feedbackApi.js";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      chatApiPlugin(env.OPENAI_API_KEY),
      feedbackApiPlugin({
        user: env.EMAIL_USER,
        pass: env.EMAIL_PASS,
        to: env.FEEDBACK_TO || "praveennigam1999@gmail.com",
      }),
    ],
  };
});
