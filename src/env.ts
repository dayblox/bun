import { z } from "zod"

const env = z.object({
  // PORT: z.coerce.number().min(1024).max(65535),
})

const parsed = env.safeParse(Bun.env)

if (!parsed.success) {
  console.error("Environment variables", parsed.error.flatten().fieldErrors)
  process.exit(1)
}

Object.assign(Bun.env, parsed.data)

declare global {
  namespace NodeJS {
    // @ts-ignore: Allow Zod to coerce to types other than string (e.g. number, date, boolean)
    interface ProcessEnv extends z.infer<typeof env> {}
  }
}
