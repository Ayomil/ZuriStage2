import React from "react";
import { useState, useEffect, useRef } from "react";
import "./Header.css";

function FullHeader(){
  return (
    <>
      <SearchBar />
      <BckgroundImg/>
    </>
  );
};


function SearchBar(){

//  const [searchInput, setSearchInput] = useState("");
//  const Listofnames = [
//     // JSON with only movie names
//  ];
//  const handleChange = (e) => {
//   e.preventDefault();
//   setSearchInput(e.target.value);
// };

// if (searchInput.length > 0) {
//     Listofnames.filter((moviename) => {
//     return moviename.name.match(searchInput);
// });
// }

return (
  <div>
    <input
      id="searchbar"
      type="search"
      placeholder="What do you want to watch?"
      //    onChange={handleChange}
      //    value={searchInput}
    />
  </div>
);

};

function BckgroundImg(){
    return (
      <>
        <img
          src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/07/John-Wick-Chapter-4-Poster.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            transform: "translateY(-47px)",
            width:"1200px",
            height:"100&"
          }}
        />
      </>
    );
};

export default FullHeader;
