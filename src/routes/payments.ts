import axios from "axios";
import { FastifyInstance } from "fastify";
import { SANDBOX_KEY, SANDBOX_URL } from "../utils/config.js";

export async function Payments(app: FastifyInstance) {
  app.post('/api/payment/pix', async (request, reply) => {
    try {
      const { data } = await axios.post(`${SANDBOX_URL}/v3/pix/qrCodes/static`, request.body, {
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          access_token: SANDBOX_KEY,
        }
      })

      return reply.status(200).send(data)
    } catch (error) {
      return reply.status(500).send('Error: ' + error)
    }
  })
}