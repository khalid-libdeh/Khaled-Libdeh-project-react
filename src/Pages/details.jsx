import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchTopic } from "../Scripts/api";
import Description from "../Details/description";
import styled from "styled-components";
import SubList from "../Details/subList";
import DetailsContainer from "../Containers/detailsContainer";
import FavCard from "../Details/favCard";
import { Link } from "react-router-dom";
import { FavContext } from "../Favourites/favourites";
import { DarkModeContext } from "../Dark Mode/darkModeProvider";

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: ${({ $dark }) => $dark ? `#282828` : `transparent`};

`

const Details = ({}) => {
    let { id } = useParams();
    const path = process.env.PUBLIC_URL + "/Logos/"
    const [topic, setTopic] = useState(null)
    const [favourites, setFavourites] = useContext(FavContext)
    const {darkMode} = useContext(DarkModeContext)

    useEffect(() => {
        fetchTopic(id).then(res => {
            setTopic(res.data)
        }).catch(err => {
            console.log(err)
        })
      
    },[id])

    return (
        <>
            {
                topic ? (
                    <MainContainer $dark ={darkMode}>
                        <DetailsContainer>
                            <Description topic={topic} />
                            <FavCard topic={topic} imgPath={path + topic.image}/>
                        </DetailsContainer>
                        <SubList title={topic.topic} listItems={topic.subtopics} im/>
                    </MainContainer >
                ) : null
            }

        </>
    )
}

export default Details