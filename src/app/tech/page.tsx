import Image from "next/image";
import React from "react";
import khaliq from "../../assets/khalique1.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import swaleha from "../../assets/tech/swaleha.jpg";
import samar from "../../assets/tech/samar.jpg";
import bilal from "../../assets/tech/bilal.jpg";
import aliya from "../../assets/tech/aliya.jpg";
import charu from "../../assets/tech/charu.jpg";
import aisha from "../../assets/tech/aisha.jpg";
import habiba from "../../assets/tech/habiba.jpg";

import "../team.css";
function Tech() {
  return (
    <div className="team-main">
      <section>
        <h2>Technical Board</h2>

        <div className="cards">
          <div className="card">
            <div className="card-img-wrapper">
              <Image src={khaliq} alt="Joss Anderson" />
            </div>

            <a
              href="https://www.instagram.com/khaliqhussain_/profilecard/?igsh=emM0eWQ2OWlzZXhj"
              className="social-icon"
            >
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <a
              href="http://linkedin.com/in/khaliquehussain7"
              className="socials-icons"
            >
              <FaLinkedin style={{ color: "white" }} size={20} />
            </a>

            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Khalique Hussain</h3>
                <h3>Tech Lead</h3>
                <p>
                  As the Tech Lead of Ignite, I oversee the technical direction
                  of the company, leading a team of developers, ensuring best
                  practices, and driving innovation. I am responsible for the
                  architecture and development of key projects, guiding both
                  strategic decisions and hands-on implementation. My focus is
                  on ensuring that Ignite stays at the forefront of technology,
                  consistently delivering high-quality products and solutions.
                </p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-img-wrapper">
              <Image src={samar} alt="Joss Anderson" />
            </div>

            <a
              href="https://www.instagram.com/samar_x.io?igsh=MThlbTgwb2NjY2EyeA%3D%3D&utm_source=qr"
              className="social-icon"
            >
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-samar-iqbal-9b619129b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="socials-icons"
            >
              <FaLinkedin style={{ color: "white" }} size={20} />
            </a>

            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Samar</h3>
                {/* <h3>Tech Lead</h3> */}
                <p>Co-Lead</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <div className="card-img-wrapper">
              {/* <Image src={} alt="Joss Anderson" /> */}
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Alfishah Roshan</h3>
                <p>Tech Team Member</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-img-wrapper">
              <Image src={swaleha} alt="James Newton" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Swaleha</h3>
                {/* <p>UX Designer</p> */}
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-img-wrapper">
              <Image src={bilal} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Bilal</h3>
                <p>Hey,I am bilal ,Ui/Ux designer and a front-end devloper</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-img-wrapper">
              <Image src={aliya} alt="Noah Wilson" />
            </div>
            <a
              href="https://www.linkedin.com/in/aliyanad"
              className="social-icon"
            >
              <FaLinkedin style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Aliya nadeem </h3>
                <p>Btech cse</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-img-wrapper">
              <Image src={charu} alt="Noah Wilson" />
            </div>
            <a
              href="https://www.linkedin.com/in/charu-gupta-0a5a49299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="social-icon"
            >
              <FaLinkedin style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Charu</h3>
                <p>Backend developing enthusiast</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-img-wrapper">
              <Image src={aisha} alt="Noah Wilson" />
            </div>
            <a
              href="https://www.linkedin.com/in/aliyanad"
              className="social-icon"
            >
              <FaLinkedin style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Aisha Bano</h3>
                <p>Btech CSE (1st year)</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-img-wrapper">
              <Image src={habiba} alt="Noah Wilson" />
            </div>
            <a
              href="https://www.instagram.com/shahid_areebah/profilecard/?igsh=ZTEyYmYzazFlOWRh"
              className="social-icon"
            >
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Habiba Shahid</h3>
                <p>Btech CSE (1st year)</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tech;
