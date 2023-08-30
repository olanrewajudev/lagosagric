
import logo from "../../assets/images/lagoslogo.png";
import fowl from "../../assets/images/lagosagrohen.jpg";
import chicken from "../../assets/images/chiken.png";
import pig from "../../assets/images/lagosagro10.png";
import cutter from "../../assets/images/lagosagro11.png";
import rabbit from "../../assets/images/lagosagro14.png";
import process from "../../assets/images/lagosagro13.png";
import farm from "../../assets/images/lagosagro9.png";
import leaf from "../../assets/images/lagosagro3.jpg";
import leaf1 from "../../assets/images/lagosagro4.jpg";
import leaf2 from "../../assets/images/lagosagro5.jpg";
import leaf3 from "../../assets/images/lagosagro6.jpeg";
import leaf4 from "../../assets/images/lagosagro7.jpg";
import { Link } from 'react-router-dom'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi';
import { FaBan, FaBars } from 'react-icons/fa';

const Home = () => {
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
        <div className=""> <FaBars className='text-3xl' /> </div>
      </div>

      <div className="mb-3">
        <div className="absolute z-10 mr-16 ml-8 lg:ml-60 my-20 text-white">
          <div className="tracking-[.27em] text-[0.9rem] mb-3 font-bold">OBASANJO FARMS OTA</div>
          <h3 className="lg:text-[4.5em] text-[2rem] mb-8 font-bold">Feeding Nigeria since 1979</h3>
          <p className="leading-7 mb-8">For more than four decades, we have pioneered agriculture systems in Nigeria that develop grow our industry and community. Our priority is you, our customers and partners. Here is to another forty years in your hearts.</p>
          <div className="px-6 py-2.5 border border-green-800 hover:border-green-700 hover:border-2 hover:scale-125 transition-all translate-1 w-fit text-center">Learn More</div>
        </div>
        <img src={fowl} alt="" className="w-screen h-[40rem] brightness-50 object-cover" />
      </div>

      <div className="mt-24">
        <div className="text-center">
          <p className="text-red-600 text-xl italic font-serif">What We Do</p>
          <h1 className="lg:text-5xl text-3xl font-bold">From chicken to agro-industrilisation</h1>
        </div>
        <div className="lg:flex grid items-center justify-center lg:mr-16 lg:ml-16 mt-20">
          <div className="px-20"> <img src={chicken} alt="" className=""/> <div className="text-center px- py-2">chicken</div> </div>
          <div className="px-20"> <img src={pig} alt="" className="" /> <div className="text-center py-2">pigs</div> </div>
          <div className="px-20"> <img src={cutter} alt="" className="" /> <div className="text-center py-2">GrassCutter</div> </div>
          <div className="px-20"> <img src={rabbit} alt="" className="" /> <div className="text-center py-2">Rabbit</div> </div>
          <div className="px-20"> <img src={process} alt="" className="" /> <div className="text-center py-2">Proccessing</div> </div>
          <div className=""> <img src={farm} alt="" className="" /> <div className="text-center py-2">Farm Equipments</div> </div>
        </div>
        <div className="text-center ml-16 mr-16 mb-12 mt-16">We offer some of the best poultry products in the market along with pork, rabbit and grasscutter to consumers. For our fellow partners in the agriculture industry, we can help to provide tools, machinery and services to help grow your agri-business. </div>
      </div>

      <div className="">
        <div className="mb-14 flex items-center  justify-center">
          <div className="border-b w-44 px-2 py-2 border-black hover:border-green-700 hover:scale-125 transition-all translate-1"> <div className="text-center text-xl font-semibold uppercase hover:text-green-700">More About Us</div> </div>
        </div>
        <div className="bg-gray-100 w-screen h-[50rem]">
          <div className="flex px-36 pt-24">
            <div className="">
              <p className="text-red-600 text-center text-xl italic font-serif">100% Natural</p>
              <h1 className="text-5xl tracking-wide text-center font-bold">There is only chicken  in our chicken</h1>

              <div className="mb-7 mt-8">
                <div className="flex gap-6"> <FaBan className='text-6xl text-red-700' /> <p className="leading-7"> <span className="text-2xl leading-10">No Additives. No Preservatives</span> <br />
                  We never use preservatives or chemicals on our products. We breed our chickens naturally and store them responsibly without chemicals. So that your food is as healthy as should be. </p> </div>
              </div>

              <div className="mb-7">
                <div className="flex gap-6"> <FaBan className='text-6xl text-red-700' /> <p className="leading-7"> <span className="text-2xl leading-10">No Additives. No Preservatives</span> <br />
                  We never use preservatives or chemicals on our products. We breed our chickens naturally and store them responsibly without chemicals. So that your food is as healthy as should be. </p> </div>
              </div>

              <div className="">
                <div className="flex gap-6"> <FaBan className='text-6xl text-red-700' /> <p className="leading-7"> <span className="text-2xl leading-10">No Additives. No Preservatives</span> <br />
                  We never use preservatives or chemicals on our products. We breed our chickens naturally and store them responsibly without chemicals. So that your food is as healthy as should be. </p> </div>
              </div>
            </div>
            <div className="mr-">
              <img src={leaf} alt="" className="w-[69rem] mb-5 h-[35rem]" />
              <div className="flex">
                <img src={leaf1} alt="" className="w-[6.7rem] mr-1" />
                <img src={leaf2} alt="" className="w-[6.7rem] mr-1" />
                <img src={leaf3} alt="" className="w-[6.7rem] mr-1" />
                <img src={leaf4} alt="" className="w-[6.7rem] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
