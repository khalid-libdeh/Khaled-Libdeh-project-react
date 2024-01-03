import { IonIcon } from "@ionic/react";
import { checkmarkCircleOutline } from 'ionicons/icons';
import styled from "styled-components";
import { sortTopics } from "../Scripts/sort";
import { useDarkMode } from "../Dark Mode/darkModeProvider";

const SubListContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    position: relative;
    z-index: 1;
    padding-top: 30px;
    padding-inline: 5%;
    @media (min-width: 1024px)
    {  
        padding-inline: 17.4rem;
    }
    ${({ $dark }) => $dark && `
    background-color: #282828;
    color: var(--bg-body);
`};
`
const SubListDiv = styled.div`
    height: auto;
    width: 100%;
    color: var(--body-text);
    border: solid 1px var(--lines-color) !important;
    align-self: flex-start;

    @media (min-width: 1024px)
    {
            width: 60.5%;
    }
    ${({ $dark }) => $dark && `
    background-color: #1A1A1A;
    border: solid 1px black !important;
    color: var(--bg-body);
`};
`


const SubListItem = styled.li`
    background-color: var(--bg-default);
    display: flex;
    gap: 15px;
    height: auto;
    max-height: 56px;
    padding-block: 20px;
    align-items: center;
    border-top: solid 1px var(--lines-color);
    font-weight: 400;
    font-size: 16px;
    padding-left: 30px;
    width: 100%;
    ${({ $dark }) => $dark && `
    background-color: #1A1A1A;
    border: solid 1px black !important;
    color: var(--bg-body);
`};
 
`
const SubListTitle = styled(SubListItem)`
    font-size: 25px;
    font-weight: 700;
    
`

const IconCont = styled.div`
    display: flex;
    align-items: center;

`

const CheckIcon = styled(IonIcon)`
    height: 1.5rem;
    width: 2rem;
    stroke: currentcolor;
    color: var(--brand-secondary);
`


const SubList = ({ title, listItems }) => {
    const {darkMode} = useDarkMode()
    return (
        <SubListContainer $dark={darkMode}>
            <SubListDiv $dark={darkMode}>
                <SubListTitle $dark={darkMode}>
                    {title} Sub Topics
                </SubListTitle>
                {listItems?.map(item => (
                    <SubListItem key={item} $dark={darkMode}>
                        <IconCont>
                        <CheckIcon icon={checkmarkCircleOutline} />
                        </IconCont>
                        <span>{item}</span>
                    </SubListItem>
                ))}
            </SubListDiv>
        </SubListContainer>
    )
}

export default SubList