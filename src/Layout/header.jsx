import styled from "styled-components";
import Button from "./Components/button";
import { IonIcon } from '@ionic/react';
import { moonOutline, heartOutline } from 'ionicons/icons';
import Container from "../Containers/container";

const FlexHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 52px;
    width: 100%;
    
`;

const ButtonsCont = styled.div`
    display: flex;
    gap: 10px;
`

const Title = styled.span`
    font-weight: 700;
`

const Header = ({ title, titleColor }) => {
    return (
        <Container>
            <FlexHeader>

                <Title style={{ color: titleColor }}>{title}</Title>
                <ButtonsCont>
                    <Button icon={moonOutline} text="Dark Mode" />
                    <Button icon={heartOutline} text="Favourites">

                    </Button>
                </ButtonsCont>


            </FlexHeader>
        </Container>
    )
}

export default Header