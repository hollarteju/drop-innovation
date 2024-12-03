import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
// import { TbCurrencyNaira } from "react-icons/tb";
import { TbCircleLetterC } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import playStore from "../assets/playStore.png";
import Logo from "../assets/LetsellifyLogistics logo 1.png";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const path = [
    "/",
  ];

  function navigateToHomepape() {
    navigate("/");
  }

  const data = [
    {
      header: "Company",
      mobile: "About",
      details: ["About Us", "Our Story", "Partners", "Team"],
    },

    {
      header: "Features",
      mobile: "Shop",
      details: [
        "Vendors",
        "Agents",
        "Dispatchers",
        "Payments",
        "Api documentation",
      ],
    },

    {
      header: "Support",
      mobile: "Help",
      details: [
        "Contact Us",
        "Vendors’s guide",
        "Agent’s guide",
        "Dispatcher’s guide",
      ],
    },
  ];

  const download =
    "flex gap-2 items-center px-3 py-2 bg-black text-center rounded-xl 2xl:text-[12px] xl:text-[12px] text-[10px] cursor-pointer";
  return (
    <>
      {path.includes(currentPath) && (
        <>
          <div
            className="w-full relative flex 2xl:flex-row xl:flex-row flex-col 2xl:gap-24 xl:gap-24 gap-12 items-center 
              2xl:px-[4rem] xl:px-[4rem] px-[1rem] py-8 bg-black text-white 2xl:text-[14px] xl:text-[14px] text-[10px] font-medium"
          >
            <div className="flex 2xl:text-[18px] xl:text-[18px] font-semibold">
              <div className="flex gap-1 items-center px-4 border-r-2 border-white">
                <BiWorld />
                <span>Nigeria</span>
              </div>
              <div className="px-4 border-r-2 border-white">
                <small>English (US)</small>
              </div>
              {/*/ <div className="flex gap-1 items-center px-4 border-r-2 border-white">
              //   <TbCurrencyNaira />
              //   <small>(NGN)</small>
              // </div>*/}
            </div>
            <div className="flex gap-2">
              <TbCircleLetterC />

              <span>2024 Drop, Inn.</span>
            </div>
            <div className="flex gap-6 items-center">
              <Link to="/legal">Terms of Use</Link>
              <span>Privacy Policies</span>
              <span>Cookies Policy</span>
            </div>
          </div>
        </>
      )}
    </>
  );
}
