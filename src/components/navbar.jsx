function Navbar(){
  return (
    <div className="flex items-center justify-between p-4 z-{100} w-full absolute">
      <h1 className="text-red-600 text-2xl font-bold cursor-pointer">
        MovieBox
      </h1>
      <div >
        <input placeholder="What do you want to watch" ></input>
      </div>
    </div>
  );
}
export default Navbar;