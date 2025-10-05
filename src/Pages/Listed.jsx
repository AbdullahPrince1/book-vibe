import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function Listed() {
  const [getData, setGetData] = useState([]);
  const [getWishlistFromLs, setGetWishlistFromLs] = useState([]);
  // * read list
  useEffect(() => {
    const listedData = JSON.parse(localStorage.getItem("readList"));
    setGetData(listedData);
  }, []);
  // * wishlist
  useEffect(() => {
    const wishlistBooks = JSON.parse(localStorage.getItem("wishList"));
    setGetWishlistFromLs(wishlistBooks);
  }, []);
  console.log(getWishlistFromLs);
  return (
    <>
      <Tabs className={"max-w-7xl mx-auto my-10"}>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="">
            {getData.map((book) => (
              <div
                key={book.bookId}
                className="flex items-center gap-6 mb-6 bg-gray-400"
              >
                <div className="w-[20%]">
                  <img
                    className="h-64 w-44"
                    src={book.image}
                    alt={book.bookName}
                  />
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
        </TabPanel>
        <TabPanel>
          <div className="">
            {getWishlistFromLs.map((wBook) => (
              <div
                key={wBook.bookId}
                className="flex items-center gap-6 mb-6 bg-gray-400"
              >
                <div className="w-[20%]">
                  <img
                    className="h-64 w-44"
                    src={wBook.image}
                    alt={wBook.bookName}
                  />
                </div>
                <div className="w-[80%]">
                  <h2>{wBook.bookName}</h2>
                  <h2>{wBook.author}</h2>
                  <h2>{wBook.yearOfPublishing}</h2>
                  <h2>{wBook.totalPages}</h2>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
}
