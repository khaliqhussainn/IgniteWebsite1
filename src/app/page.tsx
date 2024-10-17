"use client";
import Image from "next/image";
import TeamSpirit from "../assets/Team spirit.svg";
import aboutus from "../assets/about us.svg";
import vector1 from "../assets/home page vector.svg";
import temp from "../assets/temp.svg";
import vision from "../assets/vision.svg";
import projectDevelopment from "../assets/project development.svg";
import research from "../assets/Research paper.svg";
import Footer from "@/Components/Footer";
import event from "../assets/IGNITE SOCIETY.png";
import tabish from "../assets/tabish.jpg";
import refia from "../assets/refia.jpg";
import zubair from "../assets/zubair.jpg";
import collab1 from "../assets/collaborators/IMG-20241015-WA0041.jpg";
import collab2 from "../assets/collaborators/IMG-20241015-WA0042.jpg";
import collab3 from "../assets/collaborators/IMG-20241015-WA0043.jpg";
import collab4 from "../assets/collaborators/IMG-20241015-WA0044.jpg";
import collab5 from "../assets/collaborators/IMG-20241015-WA0045.jpg";
import collab6 from "../assets/collaborators/IMG-20241015-WA0046.jpg";
import collab7 from "../assets/collaborators/IMG-20241015-WA0047.jpg";
import collab8 from "../assets/collaborators/IMG-20241015-WA0048.jpg";
import collab9 from "../assets/collaborators/IMG-20241015-WA0049.jpg";
import collab10 from "../assets/collaborators/IMG-20241015-WA0050.jpg";
import collab11 from "../assets/collaborators/IMG-20241015-WA0051.jpg";
import collab12 from "../assets/collaborators/IMG-20241015-WA0052.jpg";
import collab13 from "../assets/collaborators/IMG-20241015-WA0053.jpg";
import collab14 from "../assets/collaborators/IMG-20241015-WA0054.jpg";
import collab15 from "../assets/collaborators/IMG-20241015-WA0055.jpg";
import collab16 from "../assets/collaborators/IMG-20241015-WA0056.jpg";
import collab17 from "../assets/collaborators/america center.jpg";
import collab18 from "../assets/collaborators/satyarth.jpg";
import collab19 from "../assets/collaborators/WhatsApp Image 2024-10-15 at 23.31.42_998407a3.jpg";
import collab20 from "../assets/collaborators/WhatsApp Image 2024-10-16 at 09.31.54_414340bd.jpg";

import "./team.css";

export default function Home() {
  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7b851046-dff6-4ece-ad42-e6535c220a6a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      event.target.reset(); // Reset form after successful submission
    }
  }
  const containerStyle =
    "flex px-10 flex-1 gap-2 flex-wrap-reverse justify-center max-md:flex-col max-md:my-10 ";
  return (
    <>
      <div className="flex flex-1 gap-[50px] flex-col mt-10 justify-center items-center max-md:gap-0">
        {/* heading container */}
        <div className={containerStyle}>
          <div className="flex flex-1 flex-col justify-center">
            <h2 className="font-bold text-[95px] leading-[90px] text-[#333333] max-md:text-[60px] max-md:leading-[60px]">
              Ignite Society
            </h2>
            <h4 className="font-medium text-[49px] text-[#333333]">
              Empowering Change, Inspiring Innovation
            </h4>

            {/* btn */}
            <div className="flex mt-4 gap-5">
              <button className="rounded-full capitalize-full px-5 p-2 text-white bg-gradient-to-r from-[#C92842] via-[#EF4136] to-[#FE7136]">
                signup
              </button>
              <div className="rounded-full flex justify-center items-center bg-gradient-to-r from-[#C92842] via-[#EF4136] to-[#FE7136]">
                <button className="bg-white capitalize p-2 m-[1.5px] px-5 rounded-full">
                  log in
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center ">
            <Image src={TeamSpirit} alt="team spirit" className="self-center" />
          </div>
        </div>

        {/* about us container */}
        <div className={containerStyle}>
          <div className="flex-1 flex justify-center items-center">
            <Image src={aboutus} alt="about us" />
          </div>

          <div className="flex-1 flex flex-col justify-center gap-10 max-md:gap-[5px] ">
            <h2 className="text-[48px] text-[#333333] leading-[48px] font-medium max-md:text-[20px]">
              Get To Know Us.
            </h2>

            <div className="gap-5 flex flex-col">
              <p className="font-medium text-[31px] leading-[31px] text-[#626262] max-md:text-[30px]">
                Introducing the Ignite Society
              </p>
              <p className="font-medium text-[20px] leading-[20px] text-justify max-md:text-[13px]">
                A{" "}
                <strong className="text-[#C92842]">
                  student-led initiative
                </strong>{" "}
                at Jamia Hamdard, dedicated to cultivating collaboration,
                innovation, and entrepreneurship among aspiring changemakers. We
                offer a dynamic platform for students to connect, develop
                skills, and turn ideas into impactful projects. With a focus on
                project development, research, learning exposure, startup
                culture, and networking, we empower students to unleash their
                potential and drive positive change in their communities.{" "}
              </p>
            </div>
          </div>
        </div>

        {/* see what other say */}
        <div
          className=" flex flex-1 w-[100%] relative py-[auto] gap-4 h-[auto] justify-center items-center flex-col min-h-[600px] max-md:min-h-[200px] "
          style={{
            backgroundImage: `url('${vector1.src}')`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* <h2 className="font-medium text-center text-[48px] z-[1] leading-[48px] text-[rgb(230,96,96)] max-md:text-[30px] ">
            <span className="text-[#fcfafb]"> IGNITE</span> SOCIETY JAMIA
            HAMDARD
          </h2> */}
          {/*  */}

          <div className="support">
            <a href="https://twitter.com/DevLoop01" target="_blank">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="https://codepen.io/dev_loop/" target="_blank">
              <i className="fab fa-codepen"></i>
            </a>
          </div>
        </div>

        {/* vision container */}
        <div
          className={`mt-10 w-[90%] flex flex-1 justify-center items-center flex-col min-h-[300px]`}
          style={{
            backgroundImage: `url('${vision.src}')`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <q className="font-medium text-center text-[25px] z-[1] leading-[48px] text-[rgb(230,96,96)] max-md:text-[20px] max-md:leading-[20px]">
            Our vision is to provide a gateway to opportunities where students
            can unleash their potential, explore their passions, and cultivate
            the skills needed for success. Ignite Society covers diverse domains
            such as Research and Innovation, Startup Culture, Project
            Development, Networking, Learning Exposures, Nukkad-Natak, Cultural
            Activities, Literature-Based Activities, Medical and Pharmaceutical
            Fields and many more.
          </q>
        </div>

        {/* events container */}
        <div className="flex flex-1 w-[100%] container bg-[#c92842] gap-8 flex-col p-5 mx-5 justify-center items-center">
          <h2 className="font-medium text-[48px] leading-[48px] text-[#E5E5E5] text-start ">
            Upcoming Events
          </h2>
          <div className="flex-1 flex flex-col gap-3 justify-center items-center">
            <Image src={event} alt="event" className="w-[100%] h-[50%]" />
            <h2 className="text-[25px] text-[#E5E5E5]">Name:  Ignite Anniversary </h2>
            <p className="text-[25px] text-[#E5E5E5]">Date: 18-Oct-2024</p>
            <p className="text-[25px] text-[#E5E5E5]">Time: 11:00 A.M </p>
            {/* <p>Info: </p> */}
          </div>
        </div>

        {/* teacher */}
        <div className="flex flex-col w-[100%] items-center justify-center mb-10">
          <div>
            <div className="w-[100%] flex items-center justify-center gap-20 mb-10 max-md:flex-col">
              <Image
                src={zubair}
                alt="teacher"
                className="w-[50%] h-[20%] max-md:w-[100%]"
              />
              {/* transition-transform duration-300 ease-in-out hover:scale-105 shadow-md hover:shadow-1xl border border-gray-200" */}
              <div className="text-center">
                <h1 className="font-bold text-[40px] leading-[48px] text-[#c92842]">
                  Md Zubair Alam
                </h1>
                <h3 className="font-medium text-[30px] text-[#626262]">
                  Founder
                </h3>
                <q className="font-medium text-[20px] text-[#626262]">
                  Ignite Society Jamia Hamdard New Delhi
                </q>
              </div>
            </div>

            <div>
              <div className="flex flex-row w-[100%] gap-6 px-5 max-md:flex-col max-md:px-0">
                <div className="w-[50%] flex items-center justify-center flex-col max-md:w-[100%]">
                  <Image
                    src={refia}
                    alt="teacher"
                    className="w-[100%] h-[500px] "
                    // transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl border border-gray-200"
                  />
                  <div className="text-center">
                    <h1 className="font-bold text-[40px] mt-10 leading-[48px] text-[#c92842] case">
                      DR. REFIA WIQUAR
                    </h1>
                    <h3 className="font-medium text-[20px] text-[#626262]">
                      Assistant Professor ( Management )
                    </h3>
                    <q className="font-medium text-[15px] text-[#626262]">
                      Department Of Computer Science & Engineering School Of
                      Engineering Sciences & Technology
                    </q>
                  </div>
                </div>

                <div className="w-[50%] flex items-center justify-center flex-col max-md:w-[100%]">
                  <Image
                    src={tabish}
                    alt="teacher"
                    className="w-[100%] h-[500px] "
                    // transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-2xl border border-gray-200
                  />
                  <div className="text-center">
                    <h1 className="font-bold text-[40px] mt-10 leading-[48px] text-[#c92842]">
                      DR. TABISH MUFTI
                    </h1>
                    <h3 className="font-medium text-[20px] text-[#626262]">
                      Assistant Professor
                    </h3>
                    <q className="font-medium text-[15px] text-[#626262]">
                      Department Of Computer Science & Engineering School Of
                      Engineering Sciences & Technology
                    </q>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-[40px] leading-[48px] text-[#c92842]">
            {" "}
            Our Collaborators
          </h1>
        </div>
        {/* <div className="marquee">
          <div className="marquee__group">
            <Image src={collab1} alt="collab" className="image" />
            <Image src={collab2} alt="collab" className="image" />
            <Image src={collab3} alt="collab" className="image" />
            <Image src={collab4} alt="collab" className="image" />
            <Image src={collab5} alt="collab" className="image" />
            <Image src={collab6} alt="collab" className="image" />
            <Image src={collab7} alt="collab" className="image" />
            <Image src={collab8} alt="collab" className="image" />
            <Image src={collab9} alt="collab" className="image" />
            <Image src={collab10} alt="collab" className="image" />
            <Image src={collab11} alt="collab" className="image" />
            <Image src={collab12} alt="collab" className="image" />
            <Image src={collab13} alt="collab" className="image" />
            <Image src={collab14} alt="collab" className="image" />
            <Image src={collab15} alt="collab" className="image" />
            <Image src={collab16} alt="collab" className="image" />
            <Image src={collab17} alt="collab" className="image" />
            <Image src={collab18} alt="collab" className="image" />
            <Image src={collab19} alt="collab" className="image" />
            <Image src={collab20} alt="collab" className="image" />
          </div>
          <div className="marquee__group">
            <Image src={collab1} alt="collab" className="image" />
            <Image src={collab2} alt="collab" className="image" />
            <Image src={collab3} alt="collab" className="image" />
            <Image src={collab4} alt="collab" className="image" />
            <Image src={collab5} alt="collab" className="image" />
            <Image src={collab6} alt="collab" className="image" />
            <Image src={collab7} alt="collab" className="image" />
            <Image src={collab8} alt="collab" className="image" />
            <Image src={collab9} alt="collab" className="image" />
            <Image src={collab10} alt="collab" className="image" />
            <Image src={collab11} alt="collab" className="image" />
            <Image src={collab12} alt="collab" className="image" />
            <Image src={collab13} alt="collab" className="image" />
            <Image src={collab14} alt="collab" className="image" />
            <Image src={collab15} alt="collab" className="image" />
            <Image src={collab16} alt="collab" className="image" />
            <Image src={collab17} alt="collab" className="image" />
            <Image src={collab18} alt="collab" className="image" />
            <Image src={collab19} alt="collab" className="image" />
            <Image src={collab20} alt="collab" className="image" />
          </div>
        </div> */}
        <div className="marquee">
          <div className="marquee__inner">
            <div className="marquee__group">
              <Image src={collab1} alt="collab" className="image" />
              <Image src={collab2} alt="collab" className="image" />
              <Image src={collab3} alt="collab" className="image" />
              <Image src={collab4} alt="collab" className="image" />
              <Image src={collab5} alt="collab" className="image" />
              <Image src={collab6} alt="collab" className="image" />
              <Image src={collab7} alt="collab" className="image" />
              <Image src={collab8} alt="collab" className="image" />
              <Image src={collab9} alt="collab" className="image" />
              <Image src={collab10} alt="collab" className="image" />
              <Image src={collab11} alt="collab" className="image" />
              <Image src={collab12} alt="collab" className="image" />
              <Image src={collab13} alt="collab" className="image" />
              <Image src={collab14} alt="collab" className="image" />
              <Image src={collab15} alt="collab" className="image" />
              <Image src={collab16} alt="collab" className="image" />
              <Image src={collab17} alt="collab" className="image" />
              <Image src={collab18} alt="collab" className="image" />
              <Image src={collab19} alt="collab" className="image" />
              <Image src={collab20} alt="collab" className="image" />
            </div>
            <div className="marquee__group two">
              <Image src={collab1} alt="collab" className="image" />
              <Image src={collab2} alt="collab" className="image" />
              <Image src={collab3} alt="collab" className="image" />
              <Image src={collab4} alt="collab" className="image" />
              <Image src={collab5} alt="collab" className="image" />
              <Image src={collab6} alt="collab" className="image" />
              <Image src={collab7} alt="collab" className="image" />
              <Image src={collab8} alt="collab" className="image" />
              <Image src={collab9} alt="collab" className="image" />
              <Image src={collab10} alt="collab" className="image" />
              <Image src={collab11} alt="collab" className="image" />
              <Image src={collab12} alt="collab" className="image" />
              <Image src={collab13} alt="collab" className="image" />
              <Image src={collab14} alt="collab" className="image" />
              <Image src={collab15} alt="collab" className="image" />
              <Image src={collab16} alt="collab" className="image" />
              <Image src={collab17} alt="collab" className="image" />
              <Image src={collab18} alt="collab" className="image" />
              <Image src={collab19} alt="collab" className="image" />
              <Image src={collab20} alt="collab" className="image" />
            </div>
          </div>
        </div>
          
          <div>
            <h1 className="contact-title">Send us a message! For Collaboration</h1>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="contact-input"
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="contact-input"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              className="contact-input"
            ></textarea>
            <button type="submit" className="custom-btn btn-5">
              Submit
            </button>
          </form>

      </div>
      <Footer />
    </>
  );
}
