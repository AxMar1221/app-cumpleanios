import { Route, Routes } from "react-router-dom"
import { HomeRouter } from "../components/router/HomeRouter"
import { Footer, NavBar } from "../shared"


export const AppRouter = () => {
  return (
    <>
      <NavBar />

        <Routes>
            <Route path="/*" element={ <HomeRouter />} />
        </Routes>
      <Footer />
    </>
  )
}
