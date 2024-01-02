import styled from "styled-components";
import { IonIcon } from "@ionic/react";
import { heartOutline } from "ionicons/icons";

const StyledButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 0;
    background-color: var(--brand-secondary);
    width: 100%;
    color: var(--bg-default);
    gap: 10px;
    height: 55px;
    font-size: 21px;
    margin-block: 10px;
    cursor: pointer;
`
const StyledIcon = styled(IonIcon)`
    height: 25rem;
    width: 2rem;
`

const ButtonFav= () => {
    return (
        <StyledButton>
            Add to Favourites
            <StyledIcon icon={heartOutline}/>
        </StyledButton>
    )
}

export default ButtonFav