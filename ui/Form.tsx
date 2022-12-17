'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TodoInput, TodoInputSchema } from '@/lib/types/TodoInput'

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TodoInput>({
    mode: 'onChange',
    resolver: zodResolver(TodoInputSchema),
  })
  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form onSubmit={onSubmit} className="rounded bg-white p-4 shadow-xl">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">TODO</span>
          <span className="label-text-alt">必須</span>
        </label>
        <input
          type="text"
          placeholder="やること"
          {...register('title')}
          className="form-input input-bordered input w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text-alt text-red-400">
            {errors['title']?.message}
          </span>
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">説明</span>
        </label>
        <textarea
          className="form-textare textarea-bordered textarea h-24"
          {...register('description')}
          placeholder=""
        ></textarea>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">締切</span>
        </label>
        <input
          type="text"
          placeholder="yyyy/mm/dd"
          {...register('date')}
          className="form-input input-bordered input w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text-alt text-red-400">
            {errors['date']?.message}
          </span>
        </label>
      </div>
      <div className="form-control mt-4 w-full max-w-xs">
        <button type="submit" className="btn-primary btn" disabled={!isValid}>
          登録
        </button>
      </div>
    </form>
  )
}

export default Form
