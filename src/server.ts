import fastify from "fastify";
import { Payments } from "./routes/payments.js";

const app = fastify({
  logger: {
    transport: {
      target: 'pino-pretty'
    }
  }
})

app.register(Payments)

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!")
})