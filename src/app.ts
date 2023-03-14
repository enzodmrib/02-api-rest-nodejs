import fastify from 'fastify'
import { transacitonsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

export const app = fastify()

app.register(cookie)
// Global preHandler => function executed by scope, as a preHandler, therefore, before any other function (Sort of a interceptor)
// app.addHook('preHandler', async (request, reply) => {})
app.register(transacitonsRoutes, {
  prefix: 'transactions',
})
