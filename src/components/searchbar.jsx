function SearchBar({ searchTerm, setSearchTerm }) {

  return (
    <section>

      <input
        type="text"
        placeholder="Search Projects"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

    </section>
  );

}

export default SearchBar;