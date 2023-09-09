import { describe, expect, test } from "bun:test"

describe("Bun.env", () => {
  test("should alias process.env", () => {
    expect(Bun.env).toBe(process.env)
  })
})
