const Card = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">アドカレの記事を書く</h2>
        <p>Mantineを使ってみたけど、互換性が悪かった</p>
        <p className="">2022/12/20</p>
        <div className="card-actions justify-end">
          <button className="btn-secondary btn">完了</button>
        </div>
      </div>
    </div>
  )
}

export default Card
