import { Context, Next } from 'https://raw.githubusercontent.com/honojs/hono/v1.6.3/deno_dist/mod.ts'

export const hello = (message: string = 'Hello') => {
  return async (c: Context, next: Next) => {
    await next()
    c.res.headers.append('X-Message', message)
  }
}
