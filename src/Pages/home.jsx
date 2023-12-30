import { useEffect, useState } from "react";
import CardsGrid from "../Home/Grid/cardsGrid";
import { fetchTopics, BACKEND_API } from "../Scripts/api";
import SearchInput from "../Home/Search/searchInput";
import SearchBar from "../Home/Search/searchBar";
import Container from "../Containers/container";
import styled from "styled-components";

const MainContainer = styled(Container)`
    padding-top: 18px;
`
let sortOptions = ["Default", ""]
let filterOptions = ["Default", ""]

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
            <MainContainer>
                <SearchBar sortOptions={sortOptions} filterOptions={filterOptions}/>
                <CardsGrid topics={topics} />
            </MainContainer>
        </div>
    )
}

export default Home;