import { TypeCompiler } from "@sinclair/typebox/compiler"
import { type Static, t } from "elysia"

const env = t.Object({
  // PORT: t.Numeric({ minimum: 1024, maximum: 65535 }),
})

const Env = TypeCompiler.Compile(env)
try {
  process.env = Env.Decode(process.env)
} catch (error) {
  const errors = [...Env.Errors(process.env)]
  console.error(errors.length ? errors : (error as Error).message)
  process.exit(1)
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Static<typeof env> {}
  }
}
