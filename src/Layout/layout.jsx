import Container from "../Containers/container"
import Header from "./header"
import { Outlet } from "react-router-dom"
import FavContainer from "../Favourites/favContainer"
import { MyContext } from "./context"

const Layout = () => {
    return (
        <div>

            <Header title="Web Topics" titleColor="var(--brand-primary)" />
            <Outlet />
            <FavContainer />
        </div>
    )
}

export default Layout