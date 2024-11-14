/* eslint-disable no-case-declarations */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './comps/footer';
import Header from './comps/header';
import ReservationForm from './pages/reservationForm';
import HomePage from './pages/HomePage';
import ItemDetails from './pages/ItemDetails';
import CategoryPage from './pages/CategoryPage';
import Menupage from './pages/Menupage';
import OrderPage from './pages/OrderPage';
import AuthPage from './pages/AuthPage';


const App = () => {

  return ( 
    <>
      <Router>
        <div className="w-full min-h-screen flex flex-col justify-between bg-[#f0f3f3]">
          <Header />
          <main className="main px-2 mt-16 w-full lg:max-w-[80rem] self-center flex gap-4 flex-col">
            <Routes>
              <Route path="/order" element={<OrderPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/reservation" element={<ReservationForm />} />
              <Route path="/menu" element={<Menupage />} />
              <Route path="/menu/:id/*" element={<ItemDetails />} />
              <Route path="/category/:slug/*" element={<CategoryPage />} />
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
