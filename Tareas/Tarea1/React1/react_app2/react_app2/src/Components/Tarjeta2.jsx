import AuthorImageCard from "./authorImageCard"

const Tarjeta2 = ({TarjetaProp}) => {
    return (
    <article className="blog-card">
      <img src={TarjetaProp.imageCard} alt="Imagen artículo" />
      <div className="blog-content">
        <span className="date">{TarjetaProp.dateCard}</span>
        <h2>{TarjetaProp.titleCard}</h2>
        <p>{TarjetaProp.detailCard}</p>
        <AuthorImageCard 
          authorImageCard={TarjetaProp.authorImageCard}
          author={TarjetaProp.author}
          job={TarjetaProp.job}
          state={TarjetaProp.state}
        />
      </div>
    </article>
    );
};

export default Tarjeta2;