import { createContext, useEffect, useState } from "react";
import { getFromLocalStorage, setLocalStorage } from "../Scripts/localStorage";
export const FavContext = createContext();

const Favourites = ({ children }) => {
    const [favourites, setFavourites] = useState(getFromLocalStorage('favourites')|| [])

    useEffect(()=>{
        setLocalStorage('favourites', favourites)
    },[favourites])
    return (
        <FavContext.Provider value={[favourites, setFavourites]}>
            {children}
        </FavContext.Provider>
    )
}

export default Favourites