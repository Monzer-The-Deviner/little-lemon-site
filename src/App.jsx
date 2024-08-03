import Footer from "./comps/footer";
import Header from "./comps/header";
import ReservationForm from "./comps/reservationForm";
import HomePage from "./comps/HomePage";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [avilableTimes] = useState([
    {date:'2024-08-03',time:['12:12','08:30','11:20','07:40','01:21','10:20']},
    {date:'2024-08-04',time:['09:30','10:20','03:40','04:20','12:30']},
    {date:'2024-08-05',time:['14:12','20:30','06:20','08:40','02:21','11:20','13:45']},
  ])
  const [selectedDate, setSelectedDate] = useState(null);
  const handleSelectDate = (date)=>{
    const existedDate = avilableTimes.find(item=>item.date==date)
    setSelectedDate(existedDate)
  }
  // useEffect(()=>{
  //   fetch()
  // },[])

  return ( 
    <>
    <Router>
        <Header />
      <div className="w-full flex bg-[#f0f3f3] justify-center">
       <main className="main w-full lg:max-w-5xl flex gap-4 flex-col">
          <Routes>
            <Route path="/reservation" Component={()=>ReservationForm({
              avilableTimes: selectedDate&&selectedDate.time,
              handleSelectDate,

              })} />
            <Route path="/" Component={HomePage}/>
          </Routes>
        </main>
      </div>
        <Footer />
    </Router>
    </>
   );
}
 
export default App;