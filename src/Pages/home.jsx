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
let sortOptions = ["Default", "Topic Title","Author Name"]
let filterOptions = ["Default", "Web Development Languages", "Frontend Frameworks and Libraries","Backend Frameworks and Libraries","Databases and APIs","Web Development Concepts and Technologies"]

function Home() {

    const [topics, setTopics] = useState(null)
    const [loading, setLoading] = useState(false)
    const [searchVal, setSearchVal] = useState('');
    
    const handleSearch = (val) =>{ 
        setSearchVal(val)
    }

    useEffect(() => {
        fetchTopics(searchVal).then((data) => {
            setLoading(true)
            if (data.status === 404){
                setTopics([])
            }
                
            else
                setTopics(data)

            setLoading(false)
        })

    }, [searchVal,loading]);

    return (
        <div>
            <MainContainer>
                <SearchBar sortOptions={sortOptions} filterOptions={filterOptions}/>
                <CardsGrid topics={topics} loading={loading} updateSearch={handleSearch}/>
            </MainContainer>
        </div>
    )
}

export default Home;