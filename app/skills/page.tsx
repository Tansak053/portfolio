import Image from "next/image";
import RightMenu from "@/components/SideMenu";
import { FaReact, FaFigma, FaHtml5, FaGithub, FaJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa6";

export default function SkillPage() {
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

          </div>

          <button className="hire-btn">
            HIRE ME !
          </button>

        </aside>


        {/* MAIN CONTENT */}
        <main className="skill-main">

          <h1 className="skill-title">
            My <span>Skills</span>
          </h1>

          <div className="skill-grid">

            <div className="skill-card">
              <div className="skill-item">
                <FaReact size={50} />
                <p>60%</p>
              </div>
              <span className="skill-name">React</span>
            </div>

            <div className="skill-card">
              <div className="skill-item">
                <FaFigma size={50} />
                <p>85%</p>
              </div>
              <span className="skill-name">Figma</span>
            </div>

            <div className="skill-card">
              <div className="skill-item">
                <FaHtml5 size={50} />
                <p>80%</p>
              </div>
              <span className="skill-name">HTML/CSS</span>
            </div>

            <div className="skill-card">
              <div className="skill-item">
                <SiNextdotjs size={50} />
                <p>80%</p>
              </div>
              <span className="skill-name">Next.js</span>
            </div>

            <div className="skill-card">
              <div className="skill-item">
                <FaJs size={50} />
                <p>60%</p>
              </div>
              <span className="skill-name">JavaScript</span>
            </div>

            <div className="skill-card">
              <div className="skill-item">
                <FaGithub size={50} />
                <p>90%</p>
              </div>
              <span className="skill-name">GitHub</span>
            </div>

          </div>

        </main>

        <RightMenu />

      </div>
    </div>
  );
}