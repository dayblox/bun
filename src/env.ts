import z from "zod/v4"

const env = z.object({
  // PORT: z.coerce.number().positive().max(65535).default(3000),
})

try {
  // @ts-ignore Allow override
  process.env = env.parse(process.env)
} catch (error) {
  console.error(z.prettifyError(error as z.ZodError))
  process.exit(1)
}

declare global {
  namespace NodeJS {
    // @ts-ignore Allow extension with other types than string
    interface ProcessEnv extends z.infer<typeof env> {}
  }
}
