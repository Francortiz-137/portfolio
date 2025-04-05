import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Layout = () => {
  return (
    <>
    <div className="min-w-screen min-h-screen flex flex-col bg-white dark:bg-gray-900 text-black dark:text-white">
        <Navbar/>
        <main className="flex-grow my-6 mx-2">
            <Outlet />
        </main>
        <Footer/>
    </div>
    </>
  )
}

export default Layout