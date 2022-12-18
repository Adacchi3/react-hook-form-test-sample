import { TodoInput } from '@/lib/types/TodoInput'
import { useFormContext } from 'react-hook-form'

const DescriptionTextArea = () => {
  const { register } = useFormContext<TodoInput>()

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">説明</span>
      </label>
      <textarea
        className="form-textare textarea-bordered textarea h-24"
        {...register('description')}
        placeholder=""
        data-testid="descriptionTextArea"
      ></textarea>
    </div>
  )
}

export default DescriptionTextArea
