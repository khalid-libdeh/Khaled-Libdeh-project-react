import { useEffect, useState } from "react";
import CardsGrid from "../Home/Grid/cardsGrid";
import { fetchTopics, BACKEND_API } from "../Scripts/api";
import SearchInput from "../Home/Search/searchInput";
import SearchBar from "../Home/Search/searchBar";
import Container from "../Containers/container";

function Home() {

    const [topics, setTopics] = useState(null)
    const [searchVal, setSearchVal] = useState('');

    useEffect(() => {
        fetchTopics(searchVal).then((data) => {
            if (data.status === 404)
                setTopics([])
            else
                setTopics(data)
        })

    }, [searchVal]);

    return (
        <div>
            <Container>
            <SearchBar/>
            <CardsGrid topics = {topics}/>
            </Container>
        </div>
    )
}

export default Home;