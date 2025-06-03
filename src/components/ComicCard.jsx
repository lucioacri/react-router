import { Link } from "react-router";
import pages from "../data/pages";

export default function ComicCard({ comic }) {
  return (
    <div className="col-3">
      <div className="card">
        <img src={comic.thumb} alt={comic.title} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">{comic.title}</p>
          <Link to={pages.detail(comic.id)} className="btn btn-success">
            See details
          </Link>
        </div>
      </div>
    </div>
  );
}
