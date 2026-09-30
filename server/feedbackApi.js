import nodemailer from "nodemailer";

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

function textValue(value) {
  return String(value || "").trim().slice(0, 500);
}

function attach({ user, pass, to }) {
  return async (req, res) => {
    if (req.method !== "POST") {
      res.statusCode = 405;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Method not allowed" }));
      return;
    }

    if (!user || !pass || !to) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Mail credentials are missing" }));
      return;
    }

    try {
      const body = await readJson(req);
      const name = textValue(body.name);
      const email = textValue(body.email);
      const phone = textValue(body.phone);
      const subject = textValue(body.subject);
      const rating = textValue(body.rating);

      if (!name || !email || !phone || !subject) {
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "Name, email, phone, and subject are required" }));
        return;
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user,
          pass: pass.replace(/\s+/g, ""),
        },
      });

      await transporter.sendMail({
        from: `"Portfolio Feedback" <${user}>`,
        to,
        replyTo: email,
        subject: `Portfolio feedback: ${subject}`,
        text: [
          "New feedback from the portfolio form.",
          "",
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          `Rating: ${rating}`,
          `Subject: ${subject}`,
        ].join("\n"),
      });

      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ ok: true }));
    } catch (error) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: error.message || "Could not send email" }));
    }
  };
}

export function createFeedbackHandler(mail) {
  return attach(mail);
}

export function feedbackApiPlugin(mail) {
  const handler = attach(mail);
  return {
    name: "feedback-mail",
    configureServer(server) {
      server.middlewares.use("/api/feedback", handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use("/api/feedback", handler);
    },
  };
}
