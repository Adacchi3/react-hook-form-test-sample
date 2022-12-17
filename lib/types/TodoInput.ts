import * as zod from 'zod'
import { type Todo } from './Todo'

export type TodoInput = Omit<Todo, 'createdAt'>

export const TodoInputSchema = zod.object({
  title: zod.string().min(1),
  description: zod.string().nullable(),
  date: zod
    .string()
    .regex(/^([0-9]{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])||)$/)
    .nullable(),
})
