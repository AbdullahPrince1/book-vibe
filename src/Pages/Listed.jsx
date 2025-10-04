import { useEffect, useState } from "react";

export default function Listed() {
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    const listedData = JSON.parse(localStorage.getItem("readList"));

    setGetData(listedData);
  }, []);
  return (
    <>
      <div className="max-w-7xl mx-auto my-10">
        {getData.map((book) => (
          <div
            key={book.bookId}
            className="flex items-center gap-6 mb-6 bg-gray-400"
          >
            <div className="w-[20%]">
              <img className="h-64 w-44" src={book.image} alt={book.bookName} />
            </div>
            <div className="w-[80%]">
              <h2>{book.bookName}</h2>
              <h2>{book.author}</h2>
              <h2>{book.yearOfPublishing}</h2>
              <h2>{book.totalPages}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
