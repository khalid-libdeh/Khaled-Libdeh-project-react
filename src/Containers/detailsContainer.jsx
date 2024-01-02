import styled from "styled-components";

const StyledDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    background-color: var(--body-text);
    height: auto;
    color: var(--brand-secondary);
    padding-block: 30px;
    background-color: var(--body-text);
    height: auto;
    padding-inline: 5%;
    @media (min-width: 768px)
    {
        position: relative;
        padding-inline: 17.4rem;
        align-items: start;
    }
`
export default StyledDetails