import React from "react";
import { useState, useEffect, useRef } from "react";

function FullHeader(){
  return (
    <>
      <SearchBar />
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

return <div>

<input
   type="search"
   placeholder="Search here"
//    onChange={handleChange}
//    value={searchInput} 
/>

</div>

};

export default fullheader;
