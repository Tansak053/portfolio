import Image from "next/image";
import RightMenu from "@/components/SideMenu";
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa6";

export default function AboutMePage() {
  return (
    <div className="home-wrapper">
      <div className="home-card">

        {/* LEFT PROFILE CARD */}
        <div className="profile-card">

          <h4 className="profile-name">
            <span>T</span>anasak
          </h4>

          <div className="profile-image">
            <Image
              src="/imag/ccc.png"
              alt="profile"
              width={200}
              height={200}
            />
          </div>

          <p className="student-id">STU ID: 6519410053</p>

          <p className="job-title">
            Fullstack Web Developer
          </p>

         <div className="social-icons">
         
           <a
             href="https://www.facebook.com/gard.tnasak.5/"
             target="_blank"
             rel="noopener noreferrer"
           >
             <IoLogoFacebook
               size={22}
               className="text-white transition cursor-pointer"
             /> 
           </a>
         
           <a
             href="https://twitter.com"
             target="_blank"
             rel="noopener noreferrer"
           >
             <FaXTwitter
               size={22}
               className="text-white hover:text-orange-500 transition cursor-pointer"
             />
           </a>
         
           <a
             href="https://instagram.com"
             target="_blank"
             rel="noopener noreferrer"
           >
             <RiInstagramFill
               size={22}
               className="text-white hover:text-pink-500 transition cursor-pointer"
             />
           </a>
         
           <a
             href="https://t.me"
             target="_blank"
             rel="noopener noreferrer"
           >
             <FaTelegram
               size={22}
               className="text-white hover:text-sky-400 transition cursor-pointer"
             />
           </a>
         </div>
         
          <button className="hire-btn">
            HIRE ME !
          </button>

        </div>

        {/* MAIN CONTENT */}
        <div className="main-content">

          <p className="top-text">
            About <span>Me</span>
          </p>

          <h1 className="main-title">
            <p>I find fulfillment in blending</p>
            <p>visual design with the power of</p>
            <p>coding to create meaningful</p>
            <p>experiences.</p>
          </h1>

          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iusto maxime tempora at neque a adipisci nulla voluptatem?
            Mollitia, officiis, architecto earum voluptates obcaecati
            corrupti voluptatem. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>

        </div>

        {/* RIGHT MENU */}
        <RightMenu />

      </div>
    </div>
  );
}