import { Star } from "lucide-react";
import { Link, useLoaderData } from "react-router";

export default function Home() {
  const booksData = useLoaderData();

  return (
    <>
      <div>
        <h1 className="font-bold text-center text-5xl p-4">Books</h1>
        <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto my-10">
          {booksData.map((book) => (
            <Link
              to={`/details/${book.bookId}`}
              className="shadow-sm"
              key={book.bookId}
            >
              <figure>
                <img
                  className="h-[550px] w-full"
                  src={book.image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {book.tags.map((tag, i) => (
                    <p key={i}>{tag}</p>
                  ))}
                </h2>
                <h2 className="font-semibold text-2xl">{book.bookName}</h2>
                <h2 className="text-neutral-400">By: {book.author}</h2>
                <div className="card-actions justify-between mt-4">
                  <h3>{book.category}</h3>
                  <div className="flex items-center gap-2">
                    {book.rating} <Star />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
