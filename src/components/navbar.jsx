import SearchComponent from "./SearchBar";

function Navbar() {
  return (
    <div className="relative">
      <div className="flex items-center justify-between  p-4 z-{100} w-full absolute">
        <div></div>
        <div className="absolute inset-0 left-0 right-0 top-4 lg:text-center">
          <h1 className="text-red-600 brightness-200 text-2xl md:text-3xl lg:text-3xl font-bold cursor-pointer">
            MovieBox
          </h1>
        </div>
        <div style={{ zIndex: 100000 }}>
          <SearchComponent />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
