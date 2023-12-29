import styled from "styled-components";
import SearchInput from "./searchInput";

const StyledSearchBar = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 5px var(--lines-color);
    border-radius: 10px;
    background-color: white;
    height: 100px;
`

const SearchBar = () =>{
    return(
    <StyledSearchBar>
        <SearchInput/>
    </StyledSearchBar>
    )
}

export default SearchBar