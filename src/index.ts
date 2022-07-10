import { Context, Next } from 'hono'

export const hello = (message: string = 'Hello') => {
  return async (c: Context, next: Next) => {
    await next()
    c.res.headers.append('X-Message', message)
  }
}
