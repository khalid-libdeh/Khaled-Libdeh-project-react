import styled from "styled-components";
import Container from "../../Containers/container";
import { IonIcon } from "@ionic/react";
import { searchOutline } from 'ionicons/icons';


const SearchBox = styled.div`
    width: 70%;
    border-right: var(--lines-color);
    display: flex;
    align-items: center;
    gap: 15px;
    padding-left: 10px;
    color: var(--lines-color);
    height: 50%;
`

const StyledInput = styled.input`
    border: 0;
    font-weight: 400;
    height: 100%;
    font-size: 18px;
    width: 100%;
`
const StyledIcon = styled(IonIcon)`
    color: var(--body-text);
`

const SearchInput = ({input}) => {

    return (
        <SearchBox>
            <StyledIcon icon={searchOutline}/>
            <StyledInput type="text" placeholder={input}/>
        </SearchBox>
    )
}

export default SearchInput