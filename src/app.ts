import Koa from 'koa'
import KoaRouter from 'koa-router'

// logger

async function main() {
  const app = await createApp();
  const port = process.env.SERVER_PORT || 3000

  app.listen(port)

  console.log(`Listening on port http://localhost:${port}`)
}

async function createApp(): Promise<Koa> {
  const app = new Koa()
  const router = new KoaRouter()

  router.get("/", (ctx: { body: string }) => {
    ctx.body = "Test"
  })

  app.use(router.routes())
  app.use(router.allowedMethods())

  return app
}

main()