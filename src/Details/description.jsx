import styled from "styled-components";

const styledDescription = styled.div`
    width: 100%;
    background-color: var(--body-text);
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: var(--brand-secondary);
    padding-inline: 20%;
    padding-block: 30px;
`

const Description = ({topic}) => {
    return (
        <styledDescription>
            <span> </span>
        </styledDescription>
    )
}

export default Description