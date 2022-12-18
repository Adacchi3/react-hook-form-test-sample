import { TodoInput } from '@/lib/types/TodoInput'
import { useFormContext } from 'react-hook-form'

const DateInputField = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<TodoInput>()

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">締切</span>
      </label>
      <input
        type="text"
        placeholder="yyyy/mm/dd"
        {...register('date')}
        className="form-input input-bordered input w-full max-w-xs"
        data-testid="dateInputField"
      />
      <label className="label">
        <span
          className="label-text-alt text-red-400"
          data-testid="dateErrorMessage"
        >
          {errors['date']?.message}
        </span>
      </label>
    </div>
  )
}

export default DateInputField
