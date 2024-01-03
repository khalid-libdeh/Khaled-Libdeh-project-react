import styled from "styled-components";
import { IonIcon } from '@ionic/react';
import { useDarkMode } from "../../Dark Mode/darkModeProvider";

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
    ${({ $dark }) => $dark && `
    color: white;
`};
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

const Button = ({ icon, text, handleButtons }) => {
    const { darkMode } = useDarkMode()
    let debounceTimeout
    const handleClick = () => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(()=>{
            handleButtons()
        }, 100)
        
    }

    return (
        <StyledButton $dark={darkMode} onClick={handleClick}>
            <StyledIcon icon={icon} />
            <Text>{text}</Text>
        </StyledButton>
    )
}

export default Button