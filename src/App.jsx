
import { BirthdayOfTheDay } from "./components/pages/BirthdayOftheDay"
import { BirthdayTable } from "./components/pages/BirthdayTable"
import { BirthdaysOfMonth } from "./components/pages/BirthdaysOfMonth"


function App() {

  return (
    <>
      <BirthdayTable />
      <BirthdaysOfMonth />
      <BirthdayOfTheDay />
    </>
  )
}

export default App
