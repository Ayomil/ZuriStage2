function Navbar(){
  return (
    <div className="flex items-center justify-between  p-4 z-{100} w-full absolute">
      <h1 className="text-red-600 text-2xl font-bold cursor-pointer">
        MovieBox
      </h1>
      <div className="items-center justify-center cursor-pointer">
        <input name="myInput" placeholder="What to watch next?" />
      </div>
    </div>
  );
}
export default Navbar;