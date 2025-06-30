const authorImageCard = ({authorImageCard,author,job,state}) => {
    return (
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
    );
};

export default authorImageCard;