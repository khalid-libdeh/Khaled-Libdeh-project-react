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
    height: 50px;
    font-size: 17px;
    margin-block: 10px;
    cursor: pointer;
`

const ButtonGreen = () => {
    return (
        <StyledButton>
            
        </StyledButton>
    )
}

export default ButtonGreen