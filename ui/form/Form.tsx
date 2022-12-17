'use client'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TodoInput, TodoInputSchema } from '@/lib/types/TodoInput'
import TitleInputField from './fields/TitleInputField'
import DescriptionTextArea from './fields/DescriptionTextArea'
import DateInputField from './fields/DateInputField'

const Form = () => {
  const methods = useForm<TodoInput>({
    mode: 'onChange',
    resolver: zodResolver(TodoInputSchema),
  })
  const handleSubmit = methods.handleSubmit
  const isValid = methods.formState.isValid
  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="rounded bg-white p-4 shadow-xl">
        <TitleInputField />
        <DescriptionTextArea />
        <DateInputField />
        <div className="form-control mt-4 w-full max-w-xs">
          <button type="submit" className="btn-primary btn" disabled={!isValid}>
            登録
          </button>
        </div>
      </form>
    </FormProvider>
  )
}

export default Form
