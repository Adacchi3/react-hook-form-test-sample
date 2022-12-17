import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from '../Card'

test('TODOのすべての項目が埋まっているとき', async () => {
  const todo = {
    id: 'id',
    title: 'title',
    description: 'description',
    date: '2022/01/01',
    createdAt: new Date(),
  }
  render(<Card todo={todo} />)

  expect(screen.getByTestId('todo-title')).toHaveTextContent(todo.title)
  expect(screen.getByTestId('todo-description')).toHaveTextContent(
    todo.description,
  )
  expect(screen.getByTestId('todo-date')).toHaveTextContent(todo.date)
})
