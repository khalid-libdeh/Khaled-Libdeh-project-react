import Container from "../Containers/container"
import Header from "./header"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <Header title="Web Topics" titleColor="var(--brand-primary)" />
            <Outlet />
        </div>
    )
}

export default Layout