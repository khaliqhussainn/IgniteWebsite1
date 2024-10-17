import Image from "next/image";
import React from "react";
import khaliq from "../../assets/khalique1.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import hamdan from "../../assets/creative/ham.jpg";
import shreen from "../../assets/creative/shreen.jpg";
import samia from "../../assets/creative/samia.jpg";

import "../team.css";
function creative() {
  return (
    <div className="team-main">
      <section>
        <h2>our team</h2>
        {/* lead */}
        <div className="cards">
          <div className="card">
            <div className="card-img-wrapper">
              <Image src={samia} alt="James Newton" />
            </div>
            <a
              href="https://www.instagram.com/samia_abid/profilecard/?igsh=MTR1bTY2b3h2YThqMw=="
              className="social-icon"
            >
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Samia Abid</h3>
                <h3>Co-head</h3>
                <p>
                  Leading with creativity and collaboration. I turn ideas into
                  impact, pushing boundaries to inspire and ignite imagination.
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
              {/* <Image src={khaliq} alt="James Newton" /> */}
            </div>
            {/* <a href="#" className="social-icon">
              <i className="fa-brands fa-x-twitter"></i>
            </a> */}
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Ashar Hussain</h3>
                <p>Head</p>
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
              <Image src={shreen} alt="Joss Anderson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Shreen</h3>
                {/* <p>Co-Ordinator</p> */}
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
              <Image src={hamdan} alt="Joss Anderson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Hamdan</h3>
                {/* <p>Co-Ordinator</p> */}
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

export default creative;
