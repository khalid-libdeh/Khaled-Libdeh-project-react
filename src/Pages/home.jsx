import { useEffect, useState } from "react";
import CardsGrid from "../Home/Grid/cardsGrid";
import { fetchTopics, BACKEND_API } from "../Scripts/api";
import SearchInput from "../Home/Search/searchInput";
import SearchBar from "../Home/Search/searchBar";

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
            <SearchBar/>
            <CardsGrid topics = {topics}/>
        </div>
    )
}

export default Home;