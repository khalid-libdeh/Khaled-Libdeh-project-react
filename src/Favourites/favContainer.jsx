import styled from "styled-components";
import CardFlex from "./cardFlex";
import FavouriteCard from "./favouriteCard";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../Dark Mode/darkModeProvider";

const FavCont = styled.div`
    display: flex;
    padding-inline: 4%;
    padding-block: 15px;
    flex-direction: column;
    gap: 13px;
    position: fixed;    
    height: 175px;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 4;
    background-color: var(--bg-default);
    ${({ $dark }) => $dark && `
    background-color: #1A1A1A;
    border: solid 1px black !important;
    color: var(--bg-body);
`};
`
const Title = styled.span`
    font-weight: 700;
    font-size: 16px;
`

const FavContainer = ({ favourites }) => {
    const path = process.env.PUBLIC_URL + "/Logos/"
    const { darkMode } = useContext(DarkModeContext)
    return (
        <FavCont $dark={darkMode}>
            <Title>My Favourite Topics</Title>
            <CardFlex>
                {favourites?.map(fav => (
                    <Link key={fav.id} to={{ pathname: "/details/" + fav.id }}>
                        <FavouriteCard key={fav.topic} title={fav.topic} imgPath={path + fav.image} rating={fav.rating} />
                    </Link>
                ))}
            </CardFlex>
        </FavCont>
    )
}

export default FavContainer