import styled from "styled-components";
import { IonIcon } from "@ionic/react";
import { heartOutline } from "ionicons/icons";
import { useContext } from "react";
import { FavContext } from "../Favourites/favourites";

const StyledButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 0;
    background-color: var(--brand-secondary);
    width: 100%;
    color: var(--bg-default);
    gap: 10px;
    height: 55px;
    font-size: 21px;
    margin-block: 10px;
    cursor: pointer;
`
const StyledIcon = styled(IonIcon)`
    height: 25rem;
    width: 2rem;
`

const ButtonFav = ({ topic }) => {
    const [favourites, setFavourites] = useContext(FavContext)

    const handleClick = () => {
        let copy = [...favourites]
        if (copy.some(obj => obj.id === topic.id))
            copy = copy.filter(obj => obj.id !== topic.id)
        else
            copy.push(topic)
        setFavourites(copy)
    }

    return (
        <StyledButton onClick={handleClick}>
            {favourites.some(obj => obj.id === topic.id) ? <span>Remove From Favourites</span> : <span>Add to Favourites</span>}
            <StyledIcon icon={heartOutline} />
        </StyledButton>
    )
}

export default ButtonFav