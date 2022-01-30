export default function SearchBar() {
  return (
    <>
      <div className="topnav">
        <a href="/" className="active">
          Home
        </a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <div className="search-container">
          <form onSubmit={""}>
            <input
              type="text"
              name="search"
              value={""}
              placeholder="Search..."
              onChange={""}
            />
            <button type="submit">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>

      <div className="search-body">
        <h2>Responsive Search Bar</h2>
        <p>Navigation bar with a search box and a submit button inside of i</p>
        <p>Resize the browser window to see the responsive effect.</p>
      </div>
    </>
  );
}
