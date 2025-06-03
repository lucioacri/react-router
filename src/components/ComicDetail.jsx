import { Link, useParams } from "react-router";
import pages from "../data/pages";
import comics from "../data/comics";

export default function ComicDetail() {
  const { id } = useParams();
  const comic = comics.find((comic) => comic.id === parseInt(id));

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>{comic.title}</h1>
          <p>{comic.description}</p>
          <p>{comic.price}</p>
          <img src={comic.thumb} alt={comic.title} className="card-img-top" />
          <Link to={pages.list()} className="btn btn-primary">
            Back to the list
          </Link>
        </div>
      </div>
    </div>
  );
}
