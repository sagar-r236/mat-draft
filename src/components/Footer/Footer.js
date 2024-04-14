import { Link } from "react-router-dom";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

const Footer = () => {
    return (
        <div className="flex justify-center bg-black p-4">
            <div className="text-white flex max-w-screen-xl w-full justify-around ">
                <div>
                    <p className="font-bold">Information</p>
                    <ul className="p-2">
                        <li className="hover:text-orange-300 cursor-pointer">About us</li>
                        <li className="hover:text-orange-300 cursor-pointer">Contact us</li>
                        <li className="hover:text-orange-300 cursor-pointer">Success Stories</li>
                        <li className="hover:text-orange-300 cursor-pointer">FAQ</li>
                    </ul>
                </div>
                <div>
                <p className="font-bold">Other links</p>
                    <ul className="p-2">
                        <li className="hover:text-orange-300 cursor-pointer">Report Abuse</li>
                        <li className="hover:text-orange-300 cursor-pointer">Disclaimer</li>
                        <li className="hover:text-orange-300 cursor-pointer">Refund & Cancellation</li>
                        <li className="hover:text-orange-300 cursor-pointer">Terms of Use</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-black text-black text-2xl bg-gradient-to-r from-orange-500 to-orange-300">NELAKKII BOLCHAA</h1>
                    <p className="text-white pt-4 hover:text-orange-400 cursor-pointer"><Link><FontAwesomeIcon icon={faEnvelope} /></Link> Email: nelakkii@gmail.com</p>
                </div>
                
            </div>
        </div>
    )
}


export default Footer;