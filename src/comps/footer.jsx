import logo from "../assets/logo.jpg" 
const Footer = () => {
    return ( 
    <footer className="flex justify-center footer w-full ">
            <div className="w-full flex justify-between items-center">

            <div>
                <img src={logo} alt="Little lemon" className="logo brightness-[1000%] saturate-0" /> 
            </div>
            <div className="text-xs">
                &copy; all rights receved
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;