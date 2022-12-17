const Form = () => {
  return (
    <form className="rounded bg-white p-4 shadow-xl">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">TODO</span>
        </label>
        <input
          type="text"
          placeholder="やること"
          className="form-input input-bordered input w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text-alt">必須</span>
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">説明</span>
        </label>
        <textarea
          className="form-textare textarea-bordered textarea h-24"
          placeholder=""
        ></textarea>
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">締切</span>
        </label>
        <input
          type="date"
          className="form-input input-bordered input w-full max-w-xs"
        />
      </div>
      <div className="form-control mt-4 w-full max-w-xs">
        <button className="btn-primary btn">登録</button>
      </div>
    </form>
  )
}

export default Form
