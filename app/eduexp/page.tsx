import Image from "next/image";
import RightMenu from "@/components/SideMenu";
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa6";

export default function EduExpPage() {
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
            Education & <span>Experience</span>
          </h1>

          <div className="timeline">

            {/* Experience */}
            <div className="timeline-item">
              <p className="year highlight">2022 - Present</p>
              <h3>UI/UX Designer</h3>
              <p className="sub">Freelance</p>
              <h3>Fullstack Web Developer</h3>
              <p className="sub">Freelance</p>
            </div>

            {/* University */}
            <div className="timeline-item">
              <p className="year">2023 - 2026 </p>
              <h3>Bachelor Degree in Computer Engineering</h3>
              <p className="sub">Southeast Asia University</p>
            </div>

            {/* High School */}
            <div className="timeline-item">
              <p className="year">2019  - 2022</p>
              <h3>High school</h3>
              <p className="sub"> Dipangkornwittayapat School</p>
            </div>

          </div>

        </div>

        {/* RIGHT MENU */}
        <RightMenu />

      </div>
    </div>
  );
}