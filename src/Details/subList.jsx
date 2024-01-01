import { IonIcon } from "@ionic/react";
import { checkmarkCircleOutline } from 'ionicons/icons';
import styled from "styled-components";
import { sortTopics } from "../Scripts/sort";

const SubListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    z-index: 1;
    padding-inline: 17.4rem;
    padding-top: 30px;
`
const SubListDiv = styled.div`
    height: auto;
    color: var(--body-text);
    border: solid 1px var(--lines-color) !important;
    align-self: flex-start;
    width: 100%;

    @media (min-width: 768px)
    {
            width: 60.5%;
    }
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

    return (
        <SubListContainer>

            <SubListDiv>
                <SubListTitle>
                    {title} Sub Topics
                </SubListTitle>
                {listItems?.map(item => (
                    <SubListItem key={item}>
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