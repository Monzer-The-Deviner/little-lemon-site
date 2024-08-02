import Footer from "./comps/footer";
import Header from "./comps/header";
import Main from "./comps/Main";

const App = () => {
  return ( 
    <>
      <Header />
    <div className="w-full flex bg-[#f0f3f3] justify-center">
      <Main />
    </div>
      <Footer />
    </>
   );
}
 
export default App;