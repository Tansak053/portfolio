import Image from "next/image";
import RightMenu from "@/components/SideMenu";
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa6";

export default function ProjectPage() {
  return (
    <div className="home-wrapper">
      <div className="home-card">

        {/* LEFT PROFILE */}
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

          <p className="student-id">
            STU ID: 6519410053
          </p>

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

          <h1 className="main-title">
            Featured <span>Projects</span>
          </h1>

          <div className="project-content">

            <h3 className="project-title">
              Manage Task App - fullstack web development
            </h3>

            <p className="project-desc">
              Here's my latest project built with Next.js and Laravel,
              using TailwindCSS on the front-end. Watch the video to see
              the responsive landing page in action!
            </p>

            <div className="project-image">
              <Image
                src="/imag/avgt.png"
                alt="profile"
                width={600}
                height={350}
              />
            </div>

          </div>

        </div>

        {/* RIGHT MENU */}
        <RightMenu />

      </div>
    </div>
  );
}