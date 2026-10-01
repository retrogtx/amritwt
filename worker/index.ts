import { Resend } from "resend";

type Env = {
  ASSETS: { fetch(request: Request): Promise<Response> };
  RESEND_API_KEY: string;
  RESEND_AUDIENCE_ID: string;
};

async function subscribe(request: Request, env: Env) {
  if (!env.RESEND_AUDIENCE_ID) {
    return Response.json({ error: "RESEND_AUDIENCE_ID is not set." }, { status: 500 });
  }

  const body: unknown = await request.json().catch(() => null);
  const email = body && typeof body === "object" && "email" in body ? body.email : null;
  if (typeof email !== "string" || !email) {
    return Response.json({ error: "Email is required" }, { status: 400 });
  }

  const resend = new Resend(env.RESEND_API_KEY);
  const { data, error } = await resend.contacts.create({
    email,
    audienceId: env.RESEND_AUDIENCE_ID,
  });

  if (error) {
    console.error("Resend API error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ data });
}

export default {
  async fetch(request: Request, env: Env) {
    const { pathname } = new URL(request.url);
    if (pathname === "/api/subscribe" && request.method === "POST") {
      return subscribe(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
