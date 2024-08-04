import Footer from "./comps/footer";
import Header from "./comps/header";
import ReservationForm from "./comps/reservationForm";
import HomePage from "./comps/HomePage";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { useReducer } from "react";
const initalizeTimes= ()=>{
//logic comes next
  return ['12:12','08:30','11:20','07:40','01:21','10:20','09:30','10:20','03:40','04:20','12:30']
}
const updateTimes=(state,action)=>{
  switch (action.type) {
    case 'SET_TIMES':
      //LOGIC COMES NEXT
      return state
  
    default:
      throw new Error('Unknown type')
  }
}
const App = () => {
  const [avilableTimes,dispatch] = useReducer(updateTimes,[],initalizeTimes)
  return ( 
    <>
    <Router>

      <div className="w-full min-h-screen flex flex-col justify-between bg-[#f0f3f3]">
        <Header />
       <main className="main w-full lg:max-w-5xl flex gap-4 flex-col">
          <Routes>
            <Route path="/reservation" Component={()=>ReservationForm({
              avilableTimes,
              dispatch,

              })} />
            <Route path="/" Component={HomePage}/>
          </Routes>
        </main>
        <Footer />     
      </div>
    </Router>
    </>
   );
}
 
export default App;