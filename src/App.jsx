/* eslint-disable no-case-declarations */
import { useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './comps/footer';
import Header from './comps/header';
import ReservationForm from './comps/reservationForm';
import HomePage from './comps/HomePage';

export const initializeTimes = () => {
  const today = new Date();
  const times =  window.fetchAPI(today);
  return times;
}

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'SET_TIMES':
      const times = window.fetchAPI(action.payload);
      return times;
    default:
      throw new Error('Unknown action type');
  }
}

const App = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return ( 
    <>
      <Router>
        <div className="w-full min-h-screen flex flex-col justify-between bg-[#f0f3f3]">
          <Header />
          <main className="main w-full lg:max-w-5xl flex gap-4 flex-col">
            <Routes>
              <Route path="/reservation" element={<ReservationForm availableTimes={availableTimes} dispatch={dispatch} />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />     
        </div>
      </Router>
    </>
  );
}

export default App;
