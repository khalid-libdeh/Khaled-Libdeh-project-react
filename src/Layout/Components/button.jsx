import styled from "styled-components";
import { IonIcon } from '@ionic/react';

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    height: 32px;
    background-color: transparent;
    border-radius: 5px;
    border: solid 1px var(--lines-color);
    width: 6.7rem;
    font-size: 0.9rem;
`
const StyledIcon = styled(IonIcon)`
    
`

const Button = ({ icon, text }) => {
    return (
        <StyledButton>
            <StyledIcon icon={icon} />
            {text}
        </StyledButton>
    )
}

export default Button