import Image from "next/image";
import React from "react";
import khaliq from "../../assets/khalique1.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import hassan from "../../assets/marketing/Hassan Ahmed (co-head).jpg";
import aashiya from "../../assets/marketing/Aashiya .jpg";
import atiqul from "../../assets/marketing/Atiqul.jpg";
import ayesha from "../../assets/marketing/Ayesha Hasan .jpg";
import faizah from "../../assets/marketing/Faizah .jpg";
import insha from "../../assets/marketing/Insha Muzakkir .jpg";
import kaif from "../../assets/marketing/Kaif khan .jpg";
import armaan from "../../assets/marketing/Md Armaan Saifi (coordinator) .jpg";
import nawaid from "../../assets/marketing/Md Nawaid Ahmad .jpg";
import mukaan from "../../assets/marketing/Mukaan noori .jpg";
import parth from "../../assets/marketing/Parth Khanna .jpg";
import prapti from "../../assets/marketing/Prapti .jpg";
import rishab from "../../assets/marketing/Rishab gupta .jpg";
import sharad from "../../assets/marketing/Sharad Kumar .jpg";
import vaibhav from "../../assets/marketing/Vaibhav gupta .jpg";
import steven from "../../assets/marketing/Steven Samuel .jpg";
import zaina from "../../assets/marketing/Zaina Fatima .jpg";

import "../team.css";
function Mp() {
  return (
    <div className="team-main">
      <section>
        <h2>Marketing and Prduction</h2>
        <div className="cards">
          <div className="card">
            <div className="card-img-wrapper">
              <Image src={armaan} alt="James Newton" />
            </div>
            <a href="/" className="social-icon">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="/" className="card-content">
                <h3>Armaan</h3>
                <p>Co-Ordinator</p>
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
              <Image src={aashiya} alt="James Newton" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Aashiya</h3>
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
              <Image src={atiqul} alt="Noah Wilson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Atiqul</h3>
                {/* <p>seo expert</p> */}
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
              <Image src={ayesha} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Ayesha</h3>
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
              <Image src={sharad} alt="Noah Wilson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Sharad</h3>
                {/* <p>seo expert</p> */}
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
              <Image src={steven} alt="Noah Wilson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Steven</h3>
                {/* <p>seo expert</p> */}
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
              <Image src={hassan} alt="Noah Wilson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Hassan</h3>
                {/* <p>seo expert</p> */}
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
              <Image src={faizah} alt="Noah Wilson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Faizah</h3>
                {/* <p>seo expert</p> */}
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
              <Image src={insha} alt="Noah Wilson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Insha</h3>
                {/* <p>seo expert</p> */}
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
              <Image src={kaif} alt="Noah Wilson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Kaif</h3>
                {/* <p>seo expert</p> */}
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
              <Image src={vaibhav} alt="Noah Wilson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Vaibhav</h3>
                {/* <p>seo expert</p> */}
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
              <Image src={zaina} alt="Noah Wilson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Zaina</h3>
                {/* <p>seo expert</p> */}
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
              <Image src={parth} alt="Noah Wilson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Parth</h3>
                {/* <p>seo expert</p> */}
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
              <Image src={prapti} alt="Noah Wilson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Prapti</h3>
                {/* <p>seo expert</p> */}
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
              <Image src={rishab} alt="Noah Wilson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Rishab</h3>
                {/* <p>seo expert</p> */}
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
              <Image src={mukaan} alt="Noah Wilson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Mukaan</h3>
                {/* <p>seo expert</p> */}
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
              <Image src={nawaid} alt="Noah Wilson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Nawaid</h3>
                {/* <p>seo expert</p> */}
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

export default Mp;
