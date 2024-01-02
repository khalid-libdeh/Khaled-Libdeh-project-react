import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchTopic } from "../Scripts/api";
import Description from "../Details/description";
import styled from "styled-components";
import SubList from "../Details/subList";
import DetailsContainer from "../Containers/detailsContainer";
import FavCard from "../Details/favCard";
import { Link } from "react-router-dom";

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`

const Details = ({}) => {
    let { id } = useParams();
    const path = process.env.PUBLIC_URL + "/Logos/"
    const [topic, setTopic] = useState(null)

    useEffect(() => {
        fetchTopic(id).then(res => {
            setTopic(res.data)
        }).catch(err => {
            console.log(err)
        })
      
    },[])

    return (
        <>
            {
                topic ? (
                    <MainContainer>

                        <DetailsContainer>
                            <Description topic={topic} />
                            <FavCard title={topic.topic} author={topic.name} imgPath={path + topic.image}/>
                        </DetailsContainer>
                        <SubList title={topic.topic} listItems={topic.subtopics} im/>
                    </MainContainer >
                ) : null
            }

        </>
    )
}

export default Details