import { Hono } from 'hono'
import { hello } from '../src/index'
import { describe, expect, it } from 'bun:test'

// Test just only minimal patterns.
// Because others are tested well in Cloudflare Workers environment already.

describe('Hello middleware', () => {
  const app = new Hono()

  app.use('/hello/*', hello())
  app.get('/hello/foo', (c) => c.text('foo'))

  it('Should be hello message', async () => {
    const req = new Request('http://localhost/hello/foo')
    const res = await app.fetch(req)
    expect(res.status).toBe(200)
    expect(res.headers.get('X-Message')).toBe('Hello')
  })
})
