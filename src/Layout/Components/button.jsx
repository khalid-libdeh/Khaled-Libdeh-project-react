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
    border: solid 1.5px var(--lines-color);
    width: 6.8rem;
    font-size: 0.9rem;
    cursor: pointer;
    @media (max-width: 600px){
        width: 3rem;
   }

`
const StyledIcon = styled(IonIcon)`
    

`

const Text = styled.span`
    @media (max-width: 600px){
     display: none;
}
`

const Button = ({ icon, text }) => {
    return (
        <StyledButton>
            <StyledIcon icon={icon} />
            <Text>{text}</Text>
        </StyledButton>
    )
}

export default Button