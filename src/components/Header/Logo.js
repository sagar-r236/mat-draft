import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Logo = () => {

    return (
        <div className="bg-black min-h-14 flex justify-center" style={{height:"10vh"}}>
            <div className="max-w-screen-xl w-full h-full flex justify-between items-center">
                <h1 className="font-black text-2xl bg-gradient-to-r from-orange-500 to-orange-300">NELAKKII BOLCHAA</h1>
                <div>
                    <p className="text-white"><Link><FontAwesomeIcon icon={faEnvelope} /></Link> Email: nelakkii@gmail.com</p>      
                </div>
            </div>
        </div>
    )

}


export default Logo;