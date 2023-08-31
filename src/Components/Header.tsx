import logo from "../assets/images/lagoslogo.png";
import { Link } from 'react-router-dom'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';

const Header = () => {
    const Iconcs = 'w-fit bg-green-700 rounded-full py-2 px-2 flex items-center m-3 justify-center';

    return (
        <div>
            <div className="flex items-center mb-16 gap-4 justify-between mx-20">
                <Link to='' className=""> <img src={logo} alt="" className=" w-72" /> </Link>
                <div className="lg:flex hidden">
                    <Link to='' className=" font-semibold text-xl px-2">Home</Link>
                    <Link to='' className="font-semibold text-xl px-2">Who we Are</Link>
                    <Link to='' className="font-semibold text-xl px-2">Contact Us</Link>
                </div>
                <div className="lg:flex hidden">
                    <div className={`${Iconcs}`}> <Link to='' className='text-white text-3xl'> <BiLogoFacebook /> </Link> </div>
                    <div className={`${Iconcs}`}> <Link to='' className='text-white text-3xl'> <BiLogoTwitter /> </Link> </div>
                    <div className={`${Iconcs}`}> <Link to='' className='text-white text-3xl'> <BiLogoInstagram /> </Link> </div>
                </div>
                <div className="lg:hidden"> <FaBars className='text-3xl' /> </div>
            </div>
        </div>
    )
}

export default Header
