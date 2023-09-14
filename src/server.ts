import fastify from "fastify"
import {PrismaClient} from "@prisma/client";
import {z} from 'zod'
require('dotenv').config()


const app = fastify({ logger: true })

const prismaAction = new PrismaClient()
app.get('/users', async () => {
    const users = await prismaAction.user.findMany()
    return {users}
})

app.post('/users', async (request, reply) => {
    const createUserSchema = z.object({
        name: z.string(),
        email: z.string().email(),
    })

    const {
        name,
        email
    } = createUserSchema.parse(request.body)

    await prismaAction.user.create({
        data: {
            name,
            email
        }
    })

    return reply.status(201).send()
})
export default app