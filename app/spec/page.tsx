import Image from "next/image";
import RightMenu from "@/components/SideMenu";
import { Code, Globe, PenTool } from "lucide-react";
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export default function SpecPage() {
  return (
    <div className="page-wrapper">
      <div className="page-card">

        {/* LEFT PROFILE */}
        <aside className="left-profile">

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

        </aside>


        {/* MAIN CONTENT */}
        <main className="spec-main">

          <h1 className="spec-title">
            My <span>Specializations</span>
          </h1>

          <div className="spec-list">

            <div className="spec-card">
              <Code size={20} className="spec-icon" />
              <h3>Front end-developer</h3>
              <p>
                Front-end is where I weave code and creativity to shape
                captivating and user-centric digital experiences.
              </p>
            </div>

            <div className="spec-card">
              <Globe size={20} className="spec-icon" />
              <h3>UI/UX Designer</h3>
              <p>
                UI/UX design is my palette for blending art and user psychology
                into seamless and delightful interactions.
              </p>
            </div>

            <div className="spec-card">
              <PenTool size={20} className="spec-icon" />
              <h3>Graphic designer</h3>
              <p>
                As a graphic designer, I transform ideas into visually striking
                and impactful designs.
              </p>
            </div>

          </div>

        </main>

        {/* RIGHT MENU */}
        <RightMenu />

      </div>
    </div>
  );
}