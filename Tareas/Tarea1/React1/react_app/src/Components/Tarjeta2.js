const Tarjeta = ({TarjetaProp}) => {
    return (
    <article className="blog-card">
      <img src={TarjetaProp.imageCard} alt="Imagen artículo" />
      <div className="blog-content">
        <span className="date">{TarjetaProp.dateCard}</span>
        <h2>{TarjetaProp.TitleCard}</h2>
        <p>{TarjetaProp.detailCard}</p>
        <div className="author">
          <img src={TarjetaProp.authorImageCard} alt="Avatar autora" />
          <span>
            <div>
              <b>{TarjetaProp.author}</b>
            </div>
            <div>{TarjetaProp.job}</div>
          </span>
          <span className="badge">{TarjetaProp.state}</span>
        </div>
      </div>
    </article>
    );
};

export default Tarjeta;