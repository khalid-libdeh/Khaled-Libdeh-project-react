import styled from "styled-components";
import Container from "../../Containers/container";
import { IonIcon } from "@ionic/react";
import { searchOutline } from 'ionicons/icons';
import { useDarkMode } from "../../Dark Mode/darkModeProvider";

const SearchBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
    padding-left: 10px;
    color: var(--lines-color);
    height: 50%;

    @media(min-width: 768px){
        width: 70%;
    }
    
`

const StyledInput = styled.input`
    border: 0;
    font-weight: 400;
    height: 100%;
    font-size: 18px;
    width: 100%;
    transition: none;
    ${({ $dark }) => $dark && `
    color: var(--bg-body);
    background-color: #1A1A1A;
    border: 0;
`};
`
const StyledIcon = styled(IonIcon)`
    color: var(--body-text);
`

const SearchInput = ({input, sendToSearchBar}) => {
    const {darkMode} = useDarkMode()
    let debounceTimeout
    const handleInput = (event) => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(()=>{
            sendToSearchBar(event.target.value)
        }, 300)
        
    }

    return (
        <SearchBox >
            <StyledIcon icon={searchOutline}/>
            <StyledInput $dark={darkMode} type="text" placeholder={input} onInput={handleInput}/>
        </SearchBox>
    )
}

export default SearchInput