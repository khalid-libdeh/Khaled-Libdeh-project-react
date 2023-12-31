import styled from "styled-components";
import FiveStarsRating from "./starsRating";
import { useDarkMode } from "../Dark Mode/darkModeProvider";

const StyledCard = styled.div`
    width: 120px;
    height: 110px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    background-color: transparent;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
    color: ${({ $dark }) => $dark ? `white` : `black`};

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
    background-color: white;
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
    const { darkMode } = useDarkMode()
    return (
        <StyledCard $dark={darkMode}>
            <StyledImageContainer>
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