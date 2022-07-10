import { Context, Next } from 'https://deno.land/x/hono@v1.6.3/mod.ts'

export const hello = (message: string = 'Hello') => {
  return async (c: Context, next: Next) => {
    await next()
    c.res.headers.append('X-Message', message)
  }
}
