import { useEffect, useState } from "react";
import CardsGrid from "../Home/Grid/cardsGrid";
import Loading from "../Components/Loading";
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
    const [sort, setSort] = useState('default')
    const [filter, setFilter] = useState(null)
    
    useEffect(() => {
        setLoading(true)
        fetchTopics(searchVal).then((res) => {
            setTopics(res.data)
            setLoading(false)
            
        }).catch(err => {
            console.log(err)
            setLoading(false)
        })
    }, [searchVal]);


    useEffect(() =>{
        console.log(filter)
    },[filter])
    return (
        <div>
            <MainContainer>
                <SearchBar sortOptions={sortOptions} filterOptions={filterOptions} updateSearchVal={setSearchVal} updateFilter={setFilter}/>
                {loading ? <Loading/> : <CardsGrid topics={topics}/>}
         
            </MainContainer>
        </div>
    )
}

export default Home;