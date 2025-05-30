export default function ComicCard({ comic }) {
  return (
    <div className="col-3">
      <div className="card">
        <img src={comic.thumb} alt={comic.title} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">{comic.title}</p>
        </div>
      </div>
    </div>
  );
}
