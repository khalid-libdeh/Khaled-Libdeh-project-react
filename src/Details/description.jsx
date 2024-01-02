import styled from "styled-components";
import FiveStarsRating from "../Favourites/starsRating";

const Details = styled.div`
    @media (min-width: 768px)
    {
        width: 60.5%;
    }
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
        <Details>
            <span>{topic.category} </span>
            <Title>{topic.topic}</Title>
            <Rating value={topic.rating} />
            <DetailsText>{topic.description}</DetailsText>
        </Details>
    )
}

export default Description