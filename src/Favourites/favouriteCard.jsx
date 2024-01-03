import styled from "styled-components";
import FiveStarsRating from "./starsRating";
import { DarkModeContext } from "../Dark Mode/darkModeProvider";
import { useContext } from "react";

const StyledCard = styled.div`
    width: 120px;
    height: 110px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    background-color: transparent;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
    color: ${({ $dark }) => $dark ? `white` : `solid 1px black`};

`
const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`
const StyledImageContainer = styled.div`
    width: 100%;
    height: 3.7rem;
    overflow: hidden;
    background-color: ${({ $dark }) => $dark ? `white` : `transparent`};
`;

const Padding = styled.div`
    padding-inline: 10px;
    padding-block: 5px;
`
const Title = styled.h4`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`

const FavouriteCard = ({ title, imgPath, rating }) => {
    const { darkMode } = useContext(DarkModeContext)
    return (
        <StyledCard $dark={darkMode}>
            <StyledImageContainer $dark={darkMode}>
                <StyledImage src={imgPath} />
            </StyledImageContainer>
            <Padding>
                <Title>{title}</Title>
                <FiveStarsRating value={rating} />
            </Padding>
        </StyledCard>
    )
}

export default FavouriteCard