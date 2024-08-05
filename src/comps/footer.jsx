import logo from "../assets/logo.jpg" 
const Footer = () => {
    return ( 
    <footer className="footer w-full items-center">
        <div>
            <img src={logo} alt="Little lemon" className="logo brightness-[1000%] saturate-0" /> 
        </div>
        <div className="text-xs">
            &copy; all rights receved
        </div>
    </footer>
     );
}
 
export default Footer;