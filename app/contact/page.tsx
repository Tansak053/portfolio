import Image from "next/image";
import RightMenu from "@/components/SideMenu";
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa6";


export default function ContactPage() {
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


        {/* MAIN */}
        <main className="contact-main">

          <h1 className="contact-title">
            Contact <span>Me</span>
          </h1>

          <p className="contact-sub">
            Let’s get in touch!
          </p>

          <form className="contact-form">

            <div className="form-grid">
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Address" />
            </div>

            <textarea placeholder="Content"></textarea>

            <label className="checkbox">
              <input type="checkbox" />
              I would like to receive the newsletter.
            </label>

            <button
              type="submit"
              className="submit-btn"
            >
              Submit
            </button>

          </form>

        </main>

        <RightMenu />

      </div>
    </div>
  );
}