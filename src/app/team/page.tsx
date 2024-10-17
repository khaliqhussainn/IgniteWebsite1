import Image from "next/image";
import React from "react";
import tech from "../../assets/tech.jpg";
import event from "../../assets/em1.jpg";
import pr from "../../assets/pr1.jpg";
import td from "../../assets/td.jpg";
import graphic from "../../assets/graphic2.jpg";
import content from "../../assets/content.jpg";
import sm from "../../assets/sm.jpg";
import media from "../../assets/media1.jpg";
import creative from "../../assets/creative.jpg";
import mp from "../../assets/mp1.jpg";


import Link from "next/link";
import "./style.css";

function Team() {
  return (
    <div>
      <div className="main">
        <h1 className="main-team-h1">Our Boards</h1>

        {/*  */}
        <ul className="mainteam-cards core-team">
          <li className="mainteam-cards_item core-team-item">
            <div className="mainteam-card">
              <div className="mainteam-card_image">
                <Image src={content} alt="tech" />
              </div>
              <div className="mainteam-card_content">
                <h2 className="mainteam-card_title">BOARD</h2>

                <Link href="/core">
                  <button className="mainteam-btn mainteam-card_mainteam-btn">
                    Meet Our Team Members
                  </button>
                </Link>
              </div>
            </div>
          </li>
        </ul>

        {/*  */}
        <ul className="mainteam-cards">
          <li className="mainteam-cards_item">
            <div className="mainteam-card">
              <div className="mainteam-card_image">
                <Image src={tech} alt="tech" />
              </div>
              <div className="mainteam-card_content">
                <h2 className="mainteam-card_title">TECHNICAL BOARD</h2>
                {/* <p className="mainteam-card_text">
                  
                </p> */}

                <Link href="/tech">
                  <button className="mainteam-btn mainteam-card_mainteam-btn">
                    Meet Our Team Members
                  </button>
                </Link>
              </div>
            </div>
          </li>
          <li className="mainteam-cards_item">
            <div className="mainteam-card">
              <div className="mainteam-card_image">
                <Image src={graphic} alt="tech" />
              </div>
              <div className="mainteam-card_content">
                <h2 className="mainteam-card_title">GRAPHIC DESIGNING BOARD</h2>
                {/* <Link href="/graphic"> */}
                <Link href="/">
                  <button className="mainteam-btn mainteam-card_mainteam-btn">
                    Meet Our Team Members
                  </button>
                </Link>
              </div>
            </div>
          </li>
          <li className="mainteam-cards_item">
            <div className="mainteam-card">
              <div className="mainteam-card_image">
                <Image src={td} alt="tech" />
              </div>
              <div className="mainteam-card_content">
                <h2 className="mainteam-card_title">
                  THEATRE AND DRAMATIC BOARD
                </h2>
                {/* <Link href="/theatre"> */}
                <Link href="/">
                  <button className="mainteam-btn mainteam-card_mainteam-btn">
                    Meet Our Team Members
                  </button>
                </Link>
              </div>
            </div>
          </li>
          <li className="mainteam-cards_item">
            <div className="mainteam-card">
              <div className="mainteam-card_image">
                <Image src={event} alt="tech" />
              </div>
              <div className="mainteam-card_content">
                <h2 className="mainteam-card_title">EVENT MANAGEMENT BOARD</h2>

                <Link href="/em">
                  <button className="mainteam-btn mainteam-card_mainteam-btn">
                    Meet Our Team Members
                  </button>
                </Link>
              </div>
            </div>
          </li>
          <li className="mainteam-cards_item">
            <div className="mainteam-card">
              <div className="mainteam-card_image">
                <Image src={pr} alt="tech" />
              </div>
              <div className="mainteam-card_content">
                <h2 className="mainteam-card_title">PUBLIC RELATION BOARD</h2>
                <Link href="/pr">
                  <button className="mainteam-btn mainteam-card_mainteam-btn">
                    Meet Our Team Members
                  </button>
                </Link>
              </div>
            </div>
          </li>
          <li className="mainteam-cards_item">
            <div className="mainteam-card">
              <div className="mainteam-card_image">
                <Image src={content} alt="tech" />
              </div>
              <div className="mainteam-card_content">
                <h2 className="mainteam-card_title">CONTENT BOARD</h2>

                {/* <Link href="/content"> */}
                <Link href="/">
                  <button className="mainteam-btn mainteam-card_mainteam-btn">
                    Meet Our Team Members
                  </button>
                </Link>
              </div>
            </div>
          </li>

          <li className="mainteam-cards_item">
            <div className="mainteam-card">
              <div className="mainteam-card_image">
                <Image src={creative} alt="tech" />
              </div>
              <div className="mainteam-card_content">
                <h2 className="mainteam-card_title">CREATIVE BOARD</h2>

                <Link href="/creative">
                  <button className="mainteam-btn mainteam-card_mainteam-btn">
                    Meet Our Team Members
                  </button>
                </Link>
              </div>
            </div>
          </li>

          <li className="mainteam-cards_item">
            <div className="mainteam-card">
              <div className="mainteam-card_image">
                <Image src={mp} alt="tech" />
              </div>
              <div className="mainteam-card_content">
                <h2 className="mainteam-card_title">
                  MARKETING AND PRODUCTION BOARD
                </h2>

                <Link href="/mp">
                  <button className="mainteam-btn mainteam-card_mainteam-btn">
                    Meet Our Team Members
                  </button>
                </Link>
              </div>
            </div>
          </li>

          <li className="mainteam-cards_item">
            <div className="mainteam-card">
              <div className="mainteam-card_image">
                <Image src={media} alt="tech" />
              </div>
              <div className="mainteam-card_content">
                <h2 className="mainteam-card_title">MEDIA BOARD</h2>

                <Link href="/media">
                  <button className="mainteam-btn mainteam-card_mainteam-btn">
                    Meet Our Team Members
                  </button>
                </Link>
              </div>
            </div>
          </li>

          <li className="mainteam-cards_item">
            <div className="mainteam-card">
              <div className="mainteam-card_image">
                <Image src={sm} alt="tech" />
              </div>
              <div className="mainteam-card_content">
                <h2 className="mainteam-card_title">SOCIAL MEDIA BOARD</h2>

                <Link href="/social">
                  <button className="mainteam-btn mainteam-card_mainteam-btn">
                    Meet Our Team Members
                  </button>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Team;
