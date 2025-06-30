const Tarjeta = ({ imageCard, dateCard, TitleCard, detailCard, authorImageCard, author, job, state }) => {
    return (
    <article className="blog-card">
      <img src={imageCard} alt="Imagen artículo" />
      <div className="blog-content">
        <span className="date">{dateCard}</span>
        <h2>{TitleCard}</h2>
        <p>{detailCard}</p>
        <div className="author">
          <img src={authorImageCard} alt="Avatar autora" />
          <span>
            <div>
              <b>{author}</b>
            </div>
            <div>{job}</div>
          </span>
          <span className="badge">{state}</span>
        </div>
      </div>
    </article>
    );
};

export default Tarjeta;