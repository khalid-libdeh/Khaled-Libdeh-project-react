import styled from "styled-components";


const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 115px;
    width: 100%;
    background-image:
        /* Top Left triangle*/
        linear-gradient(to top left, transparent 65%, var(--brand-secondary) 20%, var(--brand-primary) 10%),

        /* Top Right triangle*/
        linear-gradient(to top right, transparent 65%, var(--brand-secondary) 50%);
    background-size: 100% 100%;
    background-position: top;
    /* Width height*/

`
const WelcomeText = styled.div`
    margin-top: 20px;
`

const Heading = styled.h2`
    font-weight: bolder;
    font-size: 20px;
    color: var(--brand-secondary)
`

const Welcome = () => {
    return (

        <StyledDiv>
            <WelcomeText>
                <Heading>Welcome to our website!</Heading>
                <span>We have a new design that's fresh, modern, and easy to use.</span>
            </WelcomeText>
        </StyledDiv>
    )
}

export default Welcome