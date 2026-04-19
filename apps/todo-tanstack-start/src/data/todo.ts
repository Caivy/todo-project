import { db, todo } from '@repo/db'
import { createServerFn } from '@tanstack/react-start'
import { eq } from 'drizzle-orm'

import { randomUUID } from 'node:crypto'
import { z } from 'zod'

const todoSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
})

const deleteTodoSchema = z.string()

export const getTodoData = createServerFn().handler(async () => {
  const result = await db.select().from(todo)
  return result
})

export const createTodo = createServerFn({ method: 'POST' })
  .inputValidator(todoSchema)
  .handler(async ({ data }) => {
    return await db
      .insert(todo)
      .values({ id: randomUUID(), ...data })
      .returning()
  })

export const deleteTodo = createServerFn({ method: 'POST' })
  .inputValidator(deleteTodoSchema)
  .handler(async ({ data }) => {
    return await db.delete(todo).where(eq(todo.id, data)).returning()
  })
