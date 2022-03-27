function SearchBar({value, onSearch}) {
    return (
        <div className="form-inline my-3">
            <input 
                className="form-control mr-sm-2" 
                type="search" 
                placeholder="Search" 
                aria-label="Search"
                value={value}
                onChange={ (event) => { onSearch(event.target.value) } }
            />
        </div>
    );
}

export default SearchBar;