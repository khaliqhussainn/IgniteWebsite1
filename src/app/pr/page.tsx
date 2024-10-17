import Image from "next/image";
import React from "react";
import khaliq from "../../assets/khalique1.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import arkan from "../../assets/pr/ARKAN_HUSSAIN.jpeg";
import aafia from "../../assets/pr/AAFIYA.jpg";
import arham from "../../assets/pr/Arham Raza.jpg";
import humza from "../../assets/pr/HUMZAWASIM.jpg";
import arsalan from "../../assets/pr/MohammadArsalan.jpg";
import khisal from "../../assets/pr/MohammadKhisal.jpg";
import suditi from "../../assets/pr/SUDITISHARMA.jpg";
import shahin from "../../assets/pr/Shahin.jpg";


import "../team.css";
function pr() {
  return (
    <div className="team-main">
      <section>
        <h2>PUBLIC RELATION BOARD</h2>
{/* lead */}
        <div className="cards">
          <div className="card">
            <div className="card-img-wrapper">
              <Image src={arkan} alt="James Newton" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Arkan Hussain</h3>
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
          <div className="card">
            <div className="card-img-wrapper">
              <Image src={humza} alt="James Newton" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Humza Wasim</h3>
                <p> co-Head</p>
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
              <Image src={shahin} alt="Joss Anderson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Shahin</h3>
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
              <Image src={aafia} alt="Joss Anderson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Aafia</h3>
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
              <Image src={arham} alt="Joss Anderson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Arham</h3>
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
              <Image src={arsalan} alt="Joss Anderson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Arsalan</h3>
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
              <Image src={suditi} alt="Joss Anderson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Suditi Sharma</h3>
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
              <Image src={khisal} alt="Joss Anderson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Khisal</h3>
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

export default pr;
