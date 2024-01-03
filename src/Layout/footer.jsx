import styled from "styled-components";
import { useDarkMode } from "../Dark Mode/darkModeProvider";
import { IonIcon } from "@ionic/react";
import { heart } from "ionicons/icons";
import Container from "../Containers/container";

const FooterContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
    ${({ $dark }) => $dark && `
        background-color: #282828;
        color: white;
    `};
`
const IconCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const RedHeart = styled(IonIcon)`
    color: var(--heart-color);
    font-size: 20px;
    align-self: center;
`
const FooterContent = styled.div`
    display: flex;
    padding-block: 30px;
    gap: 5px;
`
const Footer = () => {
    const { darkMode } = useDarkMode()
    return (
        <FooterContainer $dark={darkMode}>
            <FooterContent>
                Developed with
                <IconCont>
                    <RedHeart icon={heart} />
                </IconCont>
                 © 2023
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer
