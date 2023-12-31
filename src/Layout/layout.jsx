import Container from "../Containers/container"
import Header from "./header"
import { Outlet } from "react-router-dom"
import FavContainer from "../Favourites/favContainer"
import { useEffect, useState, useContext, createContext } from "react"
import { FavContext } from "../Favourites/favourites"
import Footer from "./footer"

export const ToggleFavContext = createContext()

const Layout = () => {
    const [favourites, setFavourites] = useContext(FavContext)
    const [show, setShow] = useState(false)
    useEffect(() => {

    }, [favourites])
    return (
        <div>
            <ToggleFavContext.Provider value={[show, setShow]}>
                <Header title="Web Topics" titleColor="var(--brand-primary)" />
                <Outlet />
                {show ? <FavContainer favourites={favourites} />: null }
                <Footer/>
            </ToggleFavContext.Provider>
        </div>
    )
}

export const useToggleFav = () =>{
    return useContext(ToggleFavContext)
}

export default Layout