import { useEffect, useState } from "react";
import CardsGrid from "../Home/Grid/cardsGrid";
import { fetchTopics, BACKEND_API } from "../Scripts/api";


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
            <CardsGrid topics = {topics}/>
        </div>
    )
}

export default Home;