import React from 'react'
import { Todo } from '@/lib/types/Todo'
import { todoManager } from '@/lib/stores/Todo'

type Props = {
  todo: Todo
}

const Card: React.FC<Props> = ({ todo }) => {
  const completedTodo = todoManager.useCompletedTodo()

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title" data-testid="todo-title">
          {todo.title}
        </h2>
        <p data-testid="todo-description">{todo?.description}</p>
        <p className="" data-testid="todo-date">
          {todo?.date}
        </p>
        <div className="card-actions justify-end">
          <button
            className="btn-secondary btn"
            onClick={() => completedTodo(todo.id)}
          >
            完了
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
