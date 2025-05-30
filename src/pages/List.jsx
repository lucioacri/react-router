import comics from "../data/comics";
import ComicsList from "../components/ComicsList";

export default function List() {
  return (
    <>
      <ComicsList comics={comics} />
    </>
  );
}
