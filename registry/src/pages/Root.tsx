import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root () {
    return (
        <div className="container mx-auto px-10">
            <Header />
            {/* Outlet will become our desired page */}
            <Outlet />
        </div>
    )
}