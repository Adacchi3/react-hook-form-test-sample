import { TodoInput } from '@/lib/types/TodoInput'
import { useFormContext } from 'react-hook-form'

const TitleInputField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<TodoInput>()

  return (
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
  )
}

export default TitleInputField
