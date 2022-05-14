interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface selectedGenreProps {
  selectedGenre: GenreResponseProps;
}

export function ContentHeader({ selectedGenre }: selectedGenreProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
}
