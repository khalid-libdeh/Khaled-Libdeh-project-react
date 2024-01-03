import { useEffect, useState, useContext } from "react";
import CardsGrid from "../Home/Grid/cardsGrid";
import Loading from "../Components/Loading";
import { fetchTopics, BACKEND_API } from "../Scripts/api";
import SearchInput from "../Home/Search/searchInput";
import SearchBar from "../Home/Search/searchBar";
import Container from "../Containers/container";
import styled from "styled-components";
import { sortArrayByString, sortTopics } from "../Scripts/sort";
import { DarkModeContext } from "../Dark Mode/darkModeProvider";

const MainContainer = styled(Container)`
    padding-top: 18px;
    ${({ $dark }) => $dark && `
    color: var(--bg-body);
    background-color: #282828;
`};
    
`

const SearchResult = styled.div`
    font-weight: 700;
    font-size: 20px;
    margin-block: 20px;
`

let sortOptions = ["Default", "Topic Title", "Author Name"]
let filterOptions = ["Default", "Web Development Languages", "Frontend Frameworks and Libraries", "Backend Frameworks and Libraries", "Databases and APIs", "Web Development Concepts and Technologies"]

function Home() {

    const [topics, setTopics] = useState(null)
    const [filteredTopics, setFilteredTopics] = useState(topics)
    const [loading, setLoading] = useState(false)
    const [searchVal, setSearchVal] = useState('');
    const [sort, setSort] = useState('Default')
    const [filter, setFilter] = useState("Default")
    const { darkMode } = useContext(DarkModeContext)
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


    useEffect(() => {
        if (filter === "Default")
            setFilteredTopics(sortTopics(topics, sort))
        else
            setFilteredTopics(
                sortTopics(topics, sort)?.filter((el) => {
                    return (el.category === filter)
                })
            )
    }, [filter, topics, sort])

    return (
        <div>
            <MainContainer $dark={darkMode}>
                <SearchBar sortOptions={sortOptions} filterOptions={filterOptions} updateSearchVal={setSearchVal} updateSort={setSort} updateFilter={setFilter} />
                <SearchResult>"{topics? filteredTopics.length : null}" Topics Found</SearchResult>
                {loading ? <Loading /> : <CardsGrid topics={filteredTopics} />}
            </MainContainer>
        </div>
    )
}

export default Home;