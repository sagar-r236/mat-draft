import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
    return (
        <>
            <Logo />
            <div className="bg-gradient-to-r from-orange-500 to-orange-300 min-h-7 flex justify-center items-center" style={{height: "5vh"}}>
                <div className="max-w-screen-xl w-full">
                    <ul className="flex justify-around font-medium">
                        <li className="hover:border-dotted hover:border-2 hover:border-black"><Link to="/">Home</Link></li>
                        <li className="hover:border-dotted hover:border-2 hover:border-black"><Link>Register</Link></li>
                        <li className="hover:border-dotted hover:border-2 hover:border-black"><Link>Member Login</Link></li>
                        <li className="hover:border-dotted hover:border-2 hover:border-black"><Link>Pricing</Link></li>
                        <li className="hover:border-dotted hover:border-2 hover:border-black"><Link>Wedding planner</Link></li>
                        <li className="hover:border-dotted hover:border-2 hover:border-black"><Link>FAQ</Link></li>
                        <li className="hover:border-dotted hover:border-2 hover:border-black"><Link>Reach Us</Link></li>
                    </ul>
                </div>
                
            </div>
        </>
    )
}


export default Header;