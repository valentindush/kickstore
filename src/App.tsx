import { Outlet } from "react-router"
import Nav from "./components/Nav"

function App() {
  return (
   <div className="flex flex-col w-screen h-fit pb-[4rem] bg-[#f5f5f5] overflow-x-hidden">
    <Nav />
    <Outlet />
   </div>
  )
}

export default App
