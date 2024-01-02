import styled from "styled-components";
import FiveStarsRating from "./starsRating";
const StyledCard = styled.div`
    width: 120px;
    height: 100px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    background-color: transparent;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
`
const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: transparent;
`
const StyledImageContainer = styled.div`
    width: 100%;
    height: 3.7rem;
    overflow: hidden;
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

const FavouriteCard = ({ title, imgPath }) => {

    return (
        <StyledCard>
            <StyledImageContainer>
                <StyledImage src={imgPath} />
            </StyledImageContainer>
            <Padding>
                <Title>React</Title>
                <FiveStarsRating value= {4.3}/>
            </Padding>
        </StyledCard>
    )
}

export default FavouriteCard