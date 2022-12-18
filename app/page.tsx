'use client'

import { todoManager } from '@/lib/stores/Todo'
import Card from '@/ui/Card'
import Form from '@/ui/form/Form'

export default function Page() {
  const todos = todoManager.useTodos()
  const cards = todos.map((todo) => {
    return <Card todo={todo} key={todo.id} />
  })

  return (
    <div className="flex items-center justify-center">
      <div className="my-4 space-y-6">
        <Form />
        {cards}
      </div>
    </div>
  )
}
