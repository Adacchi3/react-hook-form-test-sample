import { Todo } from '@/lib/types/Todo'
import { atom, selector, useRecoilValue, useRecoilCallback } from 'recoil'
import { TodoInput } from '@/lib/types/TodoInput'
import { ulid } from 'ulid'

const TodosState = atom<Todo[]>({
  key: 'TodosState',
  default: [],
})

type TodoActions = {
  useTodos: () => Todo[]
  useSetTodo: () => (todo: TodoInput) => void
  useCompletedTodo: () => (id: string) => void
}

export const todoManager: TodoActions = {
  useTodos: () =>
    useRecoilValue(
      selector<Todo[]>({
        key: 'TodosSelector',
        get: ({ get }) => {
          return get(TodosState)
        },
      }),
    ),
  useSetTodo: () =>
    useRecoilCallback(({ set }) => (todo: TodoInput) => {
      const newTodo = { ...todo, id: ulid(), createdAt: new Date() }
      set(TodosState, (prev: Todo[]) => prev.concat(newTodo))
    }),
  useCompletedTodo: () =>
    useRecoilCallback(({ set }) => (id: string) => {
      set(TodosState, (prev: Todo[]) => prev.filter((todo) => todo.id != id))
    }),
}
