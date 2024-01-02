import styled from "styled-components";
import { Link } from "react-router-dom";
import ButtonFav from "./buttonFav";
import { useContext } from "react";


const StyledCard = styled.div`
    box-shadow: 0 0 5px var(--lines-color);
    color: var(--body-text);
    max-width: 320px;
    max-height: 600px;
    background: var(--bg-default);

    @media (min-width: 768px){
        position: absolute;
        top: 10%;
        left: 58.6%;
        z-index: 2;
    }
`
const CardImgCont = styled.div`
    width: 100%;
    height: 12.7rem;
    overflow: hidden;
`

const CardImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    padding: 1px 1px 1px 1px;
`

const CardText = styled.div`
    margin: 15px;
`
const CardTitle = styled.span`
    font-weight: 700;
    font-size: 16px;
`
const FavBox = styled.div`
    border: solid 1px var(--lines-color);
    margin-bottom: 6%;
    display: flex;
    flex-direction: column;
    height: 140px;
    margin-inline: 15px;
    padding-inline: 22px;
`
const FavBoxTop = styled.span`
    display: flex;
    align-items: end;
    align-self: baseline;
    height: 30%;
    text-align: center;
    font-weight: 700;
`
const FavBoxBottom = styled.span`
    align-self: center;
    vertical-align: middle;
    font-size: 13px;
    height: 30px;
    color: var(--lines-color);
`
const FavCard = ({ topic, imgPath }) => {

    return (
        <StyledCard>
            <CardImgCont>
                <CardImg src={imgPath} />
            </CardImgCont>
            <CardText>
                <CardTitle>{topic.topic} </CardTitle>
                by
                <a href="#"> {topic.name}</a>
            </CardText>
            <FavBox>
                <FavBoxTop>Interested about this topic?</FavBoxTop>
                <ButtonFav topic={topic} />
                <FavBoxBottom>Unlimted Credits</FavBoxBottom>
            </FavBox>
        </StyledCard>
    )
}

export default FavCard