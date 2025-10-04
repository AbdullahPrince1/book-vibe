// const getData = () => {
//   const getFromLS = localStorage.getItem("readList");
//   if (getFromLS) {
//     const parse = JSON.parse(getFromLS);
//     return parse;
//   } else {
//     return [];
//   }
// };

// const addToLS = (book) => {
//   const storedData = getData();

//   if (storedData.includes(Number(book.bookId))) {
//     alert("Already Exist");
//   } else {
//     storedData.push(book);
//     const strData = JSON.stringify(storedData);
//     localStorage.setItem("readList", strData);
//   }
// };
// export { addToLS };
