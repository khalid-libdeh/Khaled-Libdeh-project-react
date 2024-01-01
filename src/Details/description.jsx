import styled from "styled-components";
import FiveStarsRating from "../Favourites/starsRating";

const StyledDescription = styled.div`
    width: 100%;
    background-color: var(--body-text);
    height: auto;
    display: flex;
    flex-direction: column;
    color: var(--brand-secondary);
    padding-inline: 17.4rem;
    padding-block: 30px;
`
const Details = styled.div`
    width: 62%;
`
const Title = styled.h2`
    color: var(--bg-default);
    font-weight: 700;
  
`
const Rating = styled(FiveStarsRating)`
    padding-top: 15px;
`

const DetailsText = styled.div`
    color: var(--bg-body);
    font-weight: 400;
    padding-top: 20px;

`

const Description = ({ topic }) => {
    return (
        <StyledDescription>
            <Details>
            <span>{topic.category} </span>
            <Title>{topic.topic}</Title>
            <Rating value={topic.rating} />
            <DetailsText>{topic.description}</DetailsText>
            </Details>
        </StyledDescription>
    )
}

export default Description