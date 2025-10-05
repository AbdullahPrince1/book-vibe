import { useLoaderData } from "react-router";
// import { addToLS } from "../utility/utility";

import { useEffect, useState } from "react";
// * Read list
const getInitialData = () => {
  const getData = localStorage.getItem("readList");
  if (getData) {
    const parsedData = JSON.parse(getData);
    return parsedData;
  } else {
    return [];
  }
};

// * Wish List
const getInitialWishlistData = () => {
  const getWishlist = localStorage.getItem("wishList");
  if (getWishlist) {
    const parseWishlist = JSON.parse(getWishlist);
    return parseWishlist;
  } else {
    return [];
  }
};

export default function Details() {
  const selectedBook = useLoaderData();
  const [readList, setReadList] = useState(getInitialData());
  const [wishlistBook, setWishlistBook] = useState(getInitialWishlistData());
  // * read list
  useEffect(() => {
    localStorage.setItem("readList", JSON.stringify(readList));
  }, [readList]);

  // * wish list
  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishlistBook));
  }, [wishlistBook]);
  // * read list
  const addToRead = (book) => {
    // addToLS(book);
    const isExist = readList.find((bk) => bk.bookId == book.bookId);
    if (isExist) {
      alert("already exist");
    } else {
      alert("Added");
      setReadList([...readList, book]);
    }
  };
  // * Wish list
  const addToWishList = (book) => {
    const checkWishlist = wishlistBook.find(
      (allBook) => allBook.bookId == book.bookId
    );
    if (checkWishlist) {
      alert("already exist to wishlist");
    } else {
      alert("added to wish list");
      setWishlistBook([...wishlistBook, book]);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center gap-12 max-w-7xl mx-auto my-10">
        <div className="w-[40%]">
          <figure>
            <img src={selectedBook.image} alt="" />
          </figure>
        </div>
        <div className="w-[50%] space-y-5">
          <div>
            <h1 className="font-bold text-5xl mb-2">{selectedBook.bookName}</h1>
            <h3 className="font-medium text-xl text-neutral-500">
              By: {selectedBook.author}
            </h3>
          </div>
          <p className="font-medium text-xl text-neutral-500 border-b border-t py-3">
            {selectedBook.category}
          </p>
          <p className="font-medium  text-neutral-500">
            <span className="text-black font-bold">Review: </span>{" "}
            {selectedBook.review}
          </p>
          <div className="flex items-center gap-4">
            Tag:
            {selectedBook.tags.map((tag, i) => (
              <p key={i}>{tag}</p>
            ))}
          </div>
          <div>
            <h2>Number of Pages: {selectedBook.totalPages}</h2>
            <h2>Publisher: {selectedBook.publisher}</h2>
            <h2>Year Of Publishing: {selectedBook.yearOfPublishing}</h2>
            <h2>Rating: {selectedBook.rating}</h2>
          </div>
          <div className="flex items-center justify-end gap-4">
            <button
              onClick={() => addToRead(selectedBook)}
              className="ring-2 ring-green-400 font-semibold text-lg  px-4 py-2 rounded-lg"
            >
              Read
            </button>
            <button
              onClick={() => addToWishList(selectedBook)}
              className="bg-green-500 font-semibold text-lg  px-4 py-2 rounded-lg"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
