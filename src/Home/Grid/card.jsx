import styled from "styled-components"
import FiveStarsRating from "../../Favourites/starsRating";

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: transparent;
`
const StyledImageContainer = styled.div`
    width: 100%;
    height: 18rem;
    overflow: hidden;
`;

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 280px;
    background-color: var(--bg-default);
    box-shadow: 0 0 2px var(--lines-color);
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;

`
const CardInfo = styled.div`
    font-size: 13px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    padding-inline: 15px;
    padding-top: 15px;
    width: auto;
    height: 100%;
`

const Tilte = styled.h4`
    font-size: 14.5px;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`

const Author = styled.span`
    font-weight: 400;
    margin-top: 15px;
    color: var(--card-author-color);
`

const Category = styled.span`
    display: -webkit-box;   
    -webkit-line-clamp: 1;   
    -webkit-box-orient: vertical;     
    overflow: hidden; 
`

let Card = ({ imgPath, category, title, rating, author }) => {

    return (
        <StyledCard>
            <StyledImageContainer>
                <StyledImage src={imgPath} />
            </StyledImageContainer>
            <CardInfo>
                <Category>{category}</Category>
                <Tilte>{title}</Tilte>
                <FiveStarsRating value={rating}/>
                <Author>Author: {author}</Author>
            </CardInfo>

        </StyledCard>
    )
}

export default Card