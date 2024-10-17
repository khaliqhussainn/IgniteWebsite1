import Image from "next/image";
import React from "react";
import khaliq from "../../assets/khalique1.jpg";
import { FaLinkedin } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import shahista from "../../assets/em/shahista.jpg";
import shiwangi from "../../assets/em/shiwangi.jpg";
import numair from "../../assets/em/4a804549-8f48-4abc-8677-0d4d745367bf.jpg";
import aazka from "../../assets/em/aazka.jpg";
import belal from "../../assets/em/6b03b858-d9e2-4124-9163-5e4f4a8126e1.jpg";
import ashad from "../../assets/em/7b3852bc-ceec-44f4-b487-168dfccd4f91.jpg";
import asbah from "../../assets/em/asbah.jpg";
import maryam from "../../assets/em/maryam.jpg";
import sarwat from "../../assets/em/sarwat.jpg";
import maaz from "../../assets/em/maaz.jpg"; //coordinator
import qazi from "../../assets/em/qazi.jpg";
import afridi from "../../assets/em/afridi.jpg";
import aiman from "../../assets/em/aiman.jpg";
import hiba from "../../assets/em/hiba.jpg";
import prathistha from "../../assets/em/prathistha.jpg";
import amir from "../../assets/em/amir.jpg";
import kavya from "../../assets/em/kavya.jpg";
import sharmeen from "../../assets/em/sharmeen.jpg";
import arsalan from "../../assets/em/arsalan.jpg";
import purnima from "../../assets/em/purnima.jpg";
import ambiya from "../../assets/em/ambiya.jpg";
import hibakhan from "../../assets/em/hibakhan.jpg";
import fiza from "../../assets/em/fiza.jpg";
import aaliya from "../../assets/em/aaliyah.jpg";
import hamdan from "../../assets/em/hamdan.jpg";
import vedika from "../../assets/em/vedika.jpg";
import faisal from "../../assets/em/faisal.jpg";
import belalrashid from "../../assets/em/belalrashid.jpg";
import pragya from "../../assets/em/pragya.jpg";
import prachi from "../../assets/em/prachi.jpg";
import ken from "../../assets/em/ken.png";

import "../team.css";
function Em() {
  return (
    <div className="team-main">
      <section>
        <h2 className="heading-team"> Event Management Board</h2>
        <div className="cards">
          <div className="card">
            <div className="card-img-wrapper">
              <Image src={ken} alt="Joss Anderson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Ken Kurian</h3>
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

          <div className="card">
            {/* <div className="card-img-wrapper">
              <Image src={khaliq} alt="Joss Anderson" />
            </div> */}
            <a href="#" className="social-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>joss anderson</h3>
                <p>art director</p>
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
              <Image src={purnima} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Purnima</h3>
                {/* <p>web designer</p> */}
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
              <Image src={shahista} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Purnima</h3>
                {/* <p>web designer</p> */}
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
              <Image src={shiwangi} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>shiwangi</h3>
                {/* <p>web designer</p> */}
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
              <Image src={sharmeen} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Sharmeen</h3>
                {/* <p>web designer</p> */}
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
              <Image src={ambiya} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Ambiya</h3>
                {/* <p>web designer</p> */}
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
              <Image src={aaliya} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Aaliya</h3>
                {/* <p>web designer</p> */}
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
              <Image src={aazka} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Aazka</h3>
                {/* <p>web designer</p> */}
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
              <Image src={afridi} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Afridi</h3>
                {/* <p>web designer</p> */}
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
              <Image src={aiman} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Aiman</h3>
                {/* <p>web designer</p> */}
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
              <Image src={asbah} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Asbah</h3>
                {/* <p>web designer</p> */}
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
              <Image src={arsalan} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Arsalan</h3>
                {/* <p>web designer</p> */}
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
              <Image src={ashad} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Ashad</h3>
                {/* <p>web designer</p> */}
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
              <Image src={hamdan} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Hamdan</h3>
                {/* <p>web designer</p> */}
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
              <Image src={hiba} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Hiba</h3>
                {/* <p>web designer</p> */}
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
              <Image src={numair} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Numair</h3>
                {/* <p>web designer</p> */}
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
              <Image src={hibakhan} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Hiba Khan</h3>
                {/* <p>web designer</p> */}
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
              <Image src={amir} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Amir</h3>
                {/* <p>web designer</p> */}
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
              <Image src={qazi} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Qazi</h3>
                {/* <p>web designer</p> */}
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
              <Image src={prachi} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Prachi</h3>
                {/* <p>web designer</p> */}
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
              <Image src={pragya} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Pragya</h3>
                {/* <p>web designer</p> */}
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
              <Image src={prathistha} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Prathistha</h3>
                {/* <p>web designer</p> */}
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
              <Image src={belal} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Belal</h3>
                {/* <p>web designer</p> */}
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
              <Image src={maryam} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Maryam</h3>
                {/* <p>web designer</p> */}
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
              <Image src={maaz} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Maaz</h3>
                {/* <p>web designer</p> */}
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
              <Image src={sarwat} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Sarwat</h3>
                {/* <p>web designer</p> */}
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
              <Image src={kavya} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Kavya</h3>
                {/* <p>web designer</p> */}
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
              <Image src={faisal} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Faisal</h3>
                {/* <p>web designer</p> */}
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
              <Image src={fiza} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Fiza</h3>
                {/* <p>web designer</p> */}
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
              <Image src={vedika} alt="Oliver Jones" />
            </div>
            <a href="#" className="social-icon">
              <SlSocialInstagram style={{ color: "white" }} size={20} />
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>Vedika</h3>
                {/* <p>web designer</p> */}
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

          {/*  */}
          <div className="card">
            <div className="card-img-wrapper">
              <Image src={belalrashid} alt="Noah Wilson" />
            </div>
            <a href="#" className="social-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <div className="card-content-wrapper">
              <a href="#" className="card-content">
                <h3>noah wilson</h3>
                <p>seo expert</p>
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

export default Em;
