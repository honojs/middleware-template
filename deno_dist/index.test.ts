import { Hono } from 'https://raw.githubusercontent.com/honojs/hono/v1.6.3/deno_dist/mod.ts'
import { hello } from '../src/index.ts'

describe('X middleware', () => {
  const app = new Hono()

  app.use('/hello/*', hello())
  app.get('/hello/foo', (c) => c.text('foo'))

  app.use('/x/*', hello('X'))
  app.get('/x/foo', (c) => c.text('foo'))

  it('Should be hello message', async () => {
    const res = await app.request('http://localhost/hello/foo')
    expect(res).not.toBeNull()
    expect(res.status).toBe(200)
    expect(res.headers.get('X-Message')).toBe('Hello')
  })

  it('Should be X', async () => {
    const res = await app.request('http://localhost/x/foo')
    expect(res).not.toBeNull()
    expect(res.status).toBe(200)
    expect(res.headers.get('X-Message')).toBe('X')
  })
})
