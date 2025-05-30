import ComicCard from "./ComicCard";

export default function ComicsList({ comics }) {
  return (
    <div className="container">
      <div className="row g-3">
        {comics.map((comic) => (
          <ComicCard comic={comic} key={comic.id} />
        ))}
      </div>
    </div>
  );
}
