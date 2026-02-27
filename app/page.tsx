import Image from "next/image";
import RightMenu from "@/components/SideMenu";
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa6";
import { GrGoogle } from "react-icons/gr";

export default function HomePage() {
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
            STUID: 6519410053
          </p>

          <p className="job-title">
            Fullstack Web Developer
          </p>

          <div className="social-icons">

            <IoLogoFacebook
              size={22}
              className="text-white hover:text-blue-500 transition cursor-pointer"
            />

            <FaXTwitter
              size={22}
              className="text-white hover:text-orange-500 transition cursor-pointer"
            />

            <RiInstagramFill
              size={22}
              className="text-white hover:text-pink-500 transition cursor-pointer"
            />

            <FaTelegram
              size={22}
              className="text-white hover:text-sky-400 transition cursor-pointer"
            />

            <GrGoogle
              size={22}
              className="text-white hover:text-red-500 transition cursor-pointer"
            />

          </div>

          <button className="hire-btn">
            HIRE ME !
          </button>

        </div>


        {/* CENTER CONTENT */}
        <div className="main-content">

          <p className="top-text">
            Lets Work <span>Together !</span>
          </p>

          <h1 className="main-title">
            Hi From <span>Tanasak</span>, <br />
            Interactive Designer & Fullstack <br />
            Web Developer
          </h1>

          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iusto maxime tempora at neque a adipisci nulla voluptatem?
            Mollitia, officiis, architecto earum voluptates obcaecati
            corrupti voluptatem.
          </p>

          <div className="stats">

            <div>
              <h2>3+</h2>
              <p>Years of Experience</p>
            </div>

            <div>
              <h2>10+</h2>
              <p>Projects Completed</p>
            </div>

          </div>

        </div>

        {/* RIGHT MENU */}
        <RightMenu />

      </div>
    </div>
  );
}