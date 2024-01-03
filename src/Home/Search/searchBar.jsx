import styled from "styled-components";
import SearchInput from "./searchInput";
import Container from "../../Containers/container";
import DropDown from "./dropdown";
import { DarkModeContext } from "../../Dark Mode/darkModeProvider";
import { useContext } from "react";

const StyledSearchBar = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 5px var(--lines-color);
    border-radius: 10px;
    background-color: white;
    height: 100px;

    ${({ $dark }) => $dark && `
    color: var(--bg-body);
    background-color: #1A1A1A;
    box-shadow: 0 0 5px black;
`};

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
    border-top: ${({ $dark }) => $dark ? `solid 1px black` : `solid 1px var(--lines-color)`};
    @media(min-width: 768px) {
        border: 0;
        width: 30%;
        height: 100%;
        
        }
    }
`



const SearchBar = ({ sortOptions, filterOptions, updateSearchVal, updateSort,updateFilter }) => {
    const {darkMode} = useContext(DarkModeContext)

    const sendSearchValToHome = (value) => {
        updateSearchVal(value)
    }

    const sendFilterToHome = (value) => {
        updateFilter(value)
    }

    const sendSortToHome = (value) => {
        updateSort(value)
    }

    return (
        <StyledSearchBar $dark={darkMode}>

            <SearchInput input="Search the website..." sendToSearchBar={sendSearchValToHome.bind(this)} />
            <DropDiv $dark={darkMode}>
                <DropDown title="Sort by" options={sortOptions} handleDropDownChange ={sendSortToHome.bind(this)}/>
                <DropDown title="Filter by" options={filterOptions} handleDropDownChange={sendFilterToHome.bind(this)} />
            </DropDiv>
        </StyledSearchBar>
    )
}

export default SearchBar