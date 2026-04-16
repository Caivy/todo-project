import { db, todo } from '@repo/db'
import { createServerFn } from '@tanstack/react-start'
import { randomUUID } from 'node:crypto'
import { z } from 'zod'

const todoSchema = z.object({
  name: z.string(),
})

export const getTodoData = createServerFn().handler(async () => {
  return await db.select().from(todo)
})

export const createTodo = createServerFn({ method: 'POST' })
  .inputValidator(todoSchema)
  .handler(async ({ data }) => {
    return await db
      .insert(todo)
      .values({ id: randomUUID(), ...data })
      .returning()
  })
