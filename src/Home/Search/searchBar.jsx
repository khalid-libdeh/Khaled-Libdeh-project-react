import styled from "styled-components";
import SearchInput from "./searchInput";
import Container from "../../Containers/container";
import DropDown from "./dropdown";


const StyledSearchBar = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 5px var(--lines-color);
    border-radius: 10px;
    background-color: white;
    height: 100px;

    @media (min-width: 768px){
        flex-direction: row;
        height: 50px;
        align-items: center;
    }
`

const DropDiv = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    border: 0;
    @media(min-width: 768px) {
            border: 0;
            width: 30%;
            height: 100%;
    }
`



const SearchBar = ({ sortOptions, filterOptions, updateSearchVal }) => {

    const sendSearchValToHome = (value)=>{
        updateSearchVal(value)
      }

    return (
        <StyledSearchBar>

            <SearchInput input="Search the website..." sendToSearchBar ={sendSearchValToHome.bind(this)}/>
            <DropDiv>
                <DropDown title="Sort by" options={sortOptions} />
                <DropDown title="Filter by" options={filterOptions} />
            </DropDiv>
        </StyledSearchBar>
    )
}

export default SearchBar