import styled from "styled-components";
import Card from "./card";
import Container from "../../Containers/container";
import { Link } from "react-router-dom";

const Grid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 30px;
    
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: var(--line-colors);
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

const Loading = styled
const CardsGrid = ({ topics }) => {
    const path = process.env.PUBLIC_URL + "/Logos/"
    return (

        <Grid>
            {topics?.map(topic => (
                <StyledLink key={topic.id} to={{pathname:"/Khaled-Libdeh-project-react/details/"+ topic.id}}>
                    <Card key={topic.id} imgPath={path + topic.image} title={topic.topic} category={topic.category} author={topic.name} rating={topic.rating} />
                </StyledLink>
            ))}

        </Grid >


    )
}

export default CardsGrid