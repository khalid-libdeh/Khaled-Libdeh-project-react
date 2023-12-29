import styled from "styled-components";
import Card from "./card";
import Container from "../../Containers/container";


const Grid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 30px;
    margin-top: 30px;
    
`

const CardsGrid = ({ topics }) => {
    const path = process.env.PUBLIC_URL + "/Logos/"
    return (
        <Container>
            <Grid>
                {topics?.map(topic => (
                    <Card key={topic.id} imgPath={path + topic.image} title={topic.topic} category={topic.category} author={topic.name} rating ={topic.rating}/>
                ))}

            </Grid >
        </Container>

    )
}

export default CardsGrid