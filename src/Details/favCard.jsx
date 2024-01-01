import styled from "styled-components";

const StyledCard = styled.div`
    box-shadow: 0 0 5px var(--lines-color);
    color: var(--body-text);
    width: auto;
    max-width: 300px;
    max-height: 600px;
    background: var(--bg-default);

    @media (min-width: 768px){
        position: absolute;
        top: 10%;
        left: 60%;
        z-index: 2;
    }
`
const CardImg = styled.img`
    height: 45%;
    width: 100%;
    object-fit: fill;
    padding: 1px 1px 1px 1px;
`

const CardText = styled.div`
    margin: 20px;
`



const FavCard = ({ title, imgsrc, author }) => {

    return (
        <StyledCard>
            <CardImg />
            <CardText>
                <span>{title}</span>
                by
                <Link>author</Link>
            </CardText>
        </StyledCard>
    )
}

export default FavCard