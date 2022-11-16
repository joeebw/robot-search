import './searchField.css'

const SearchField = ({filteredRobot}) => {
    return(
    <div>
        <input type='search' placeholder="search-robots" className="searchField" onChange={filteredRobot}/>
    </div>
    
    )
    
};

export default SearchField;