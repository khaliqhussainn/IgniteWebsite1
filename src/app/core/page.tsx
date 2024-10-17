import Image from "next/image";
import React from "react";
import khaliq from "../../assets/khalique1.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import farhan from "../../assets/core/farhan.jpg";
import rahemeen from "../../assets/core/rahemeen.jpg";
import saqlain from "../../assets/core/saqlain.jpg";
import saqib from "../../assets/core/saqib.jpg";
import afifah from "../../assets/core/afifah.jpg";

import "../team.css";
function Core() {
  return (
    <div className="team-main">
      <section>
        <h2>Core</h2>

        <div className="cards">
          <div className="card">
            <div className="card-img-wrapper">
              <Image src={farhan} alt="Joss Anderson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Farhaan Maqsood</h3>
                <p>President</p>
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
              <Image src={rahemeen} alt="Joss Anderson" />
            </div>

            <a
              href="https://www.instagram.com/rahemeeennn/profilecard/?igsh=Mm5tNGV2eDBhMzZ5"
              className="social-icon"
            >
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahemeen-rizvi-64b7a628b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              className="socials-icons"
            >
              <FaLinkedin style={{ color: "white" }} size={20} />
            </a>

            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Rahemeen</h3>
                <p>
                  As Vice President of Ignite Society, I am driven by a
                  commitment to inspire and elevate our community. My goal is to
                  create meaningful connections, foster collaboration, and lead
                  by example, ensuring that each voice is heard and valued.
                  Through dedication and vision, I strive to make a lasting
                  impact, empowering others to grow and contribute to the
                  collective success of our society.
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
        </div>

        <div className="cards">
          <div className="card">
            <div className="card-img-wrapper">
              <Image src={saqlain} alt="Joss Anderson" />
            </div>
            <a
              href="https://www.linkedin.com/in/sheikh-saqlain?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="social-icon"
            >
              <FaLinkedin style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Sheikh Saqlain</h3>
                <p> Associate Vice President</p>
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
              <Image src={saqib} alt="James Newton" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Saqib Sarfaraz - JOINT-SECRETARY</h3>
                <p>
                  Hi, I'm Saquib Sarfaraz, a BTech CSE student who thrives on
                  creativity! I enjoy pushing boundaries by creating fresh,
                  unique ideas—whether it's writing engaging reels or drafting
                  cutting-edge tech content. Let’s bring ideas to life!
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
              <Image src={afifah} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Afifah Kamal</h3>
                <p>Joint secretary</p>
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

export default Core;
