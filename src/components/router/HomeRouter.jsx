import { Navigate, Route, Routes } from "react-router-dom"
import { BirthdayOfTheDay, BirthdayTable, BirthdaysOfMonth, GreetingCardApp, HomeApp } from "../pages"


export const HomeRouter = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="home" element={<HomeApp />}/>
          <Route path="birthDay" element={<BirthdayOfTheDay />}/>
          <Route path="birthMonth" element={<BirthdaysOfMonth />}/>
          <Route path="birthTable" element={<BirthdayTable />}/>
          <Route path="greetingCard" element={<GreetingCardApp />}/>

          <Route path="/*" element={<Navigate to="/home" />}/>
          
        </Routes>
      </div>  
    </>
  )
}
