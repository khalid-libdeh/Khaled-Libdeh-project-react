import styled from "styled-components";

const Loader = styled.div`
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3498db;
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite;
    place-self: center;
    /* Safari */
    animation: spin 2s linear infinite;
`

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%
`


const Loading = () => {

    return (
        <LoaderContainer>
            <Loader/>
        </LoaderContainer>
    )
}

export default Loading