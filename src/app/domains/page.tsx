import Image from "next/image";
import React from "react";
import domains from "../../assets/domains.svg";
import bg from "../../assets/domain page bg.svg";
// import ignite from "../../assets/ignite logo.svg";
// import jamia from "../../assets/jamia hamdard.svg";
import "./domain.css";

const page = () => {
  return (
    <div className="flex flex-1 relative justify-center items-center  gap-6 flex-col">
      {/* backgound */}
      <Image
        src={bg}
        alt="bg"
        className="absolute left-0 w-full right-0 -top-20 bottom-0 -z-10"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "repeat",
        }}
      />

      {/*  */}
      {/* <Image
        src={ignite}
        alt="ignite"
        className="absolute -top-16 left-4 w-[70px]"
      />
      <Image
        src={jamia}
        alt="ignite"
        className="absolute -top-16 right-4 w-[60px]"
      /> */}
      <Image
        src={domains}
        alt="domains"
        className="self-end "
        style={
          {
            // backgroundSize: '100%'
          }
        }
      />

      {/* domain card */}
      {/* <Image
                src={domainCard}
                alt='domain'
            /> */}
      <div className="max-w-[90%] min-h-[100px] min-w-[50%] flex-col flex flex-1 justify-center glassmorphism p-4 items-center ">
        <h2 className="text-[#C92842] text-[50px] leading-[72px] font-bold">
          Domain
        </h2>
        <p className="leading-[72px] text-center text-[40px] font-normal tracking-[11%] opacity-70 max-md:text-[20px] max-md:leading-[20px]">
          Domain Dive into the word of IGNITE where each 'domain' represents our
          vibrant focus areas: Networking, Startup Culture, Learning
          Initiatives, Research & Innovation and Project Development."
        </p>
      </div>

      <div className="domain-1">
        <div className="section-net"></div>
        <div className="section-details">
          <h3 className="head">Networking</h3>
          Networking is a critical domain in the landscape of modern technology,
          playing a foundational role in enabling seamless communication between
          devices, systems, and applications across vast geographic distances.
          As the digital world becomes more interconnected, the importance of
          efficient, scalable, and secure networking infrastructure cannot be
          overstated. In the context of Ignite Society A focus on networking
          within Ignite Society goes beyond simply connecting devices; it
          emphasizes the design, establishment, and continuous maintenance of
          robust digital infrastructures that can meet the ever-growing demands
          of modern applications and services. These infrastructures must be
          resilient, ensuring minimal downtime and high availability, even
          during peak usage or unexpected events like cyberattacks or natural
          disasters.
        </div>
      </div>

      <div className="domain-2">
        <div className="section-details">
          <h3 className="head">Project Development</h3>
          Project development is at the heart of transforming ideas into
          tangible outcomes, encompassing all phases from conception to
          execution. Within Ignite Society, the project development domain
          focuses on structured, agile, and innovative methodologies to bring
          complex technological solutions to life.In Ignite Society, this phase
          involves stakeholders such as developers, designers, and business
          analysts coming together to brainstorm ideas that align with the
          broader goals of the organization or client.
        </div>
        <div className="section-net"></div>
      </div>

      <div className="domain-3">
        <div className="section-net"></div>
        <div className="section-details">
          <h3 className="head">StartUp Culture</h3>
          The startup culture domain within Ignite Society is driven by
          innovation, agility, and an entrepreneurial spirit, creating an
          environment where new ideas are not just encouraged but actively
          nurtured. It encompasses a mindset that embraces experimentation,
          risk-taking, and rapid iteration to bring transformative ideas to
          market quickly and efficiently. In this dynamic space, collaboration,
          creativity, and a strong sense of community are core values,
          supporting a culture where new ventures can thrive and adapt to an
          ever-changing technological landscape.
        </div>
      </div>

      <div className="domain-4">
        <div className="section-details">
          <h3 className="head">Learning Initiatives</h3>
          The learning initiatives domain within Ignite Society plays a pivotal
          role in fostering continuous growth, skill development, and knowledge
          sharing across the community. In today’s rapidly evolving
          technological landscape, the ability to learn and adapt quickly is
          essential for individuals, startups, and organizations alike. Ignite
          Society emphasizes the importance of creating a culture of lifelong
          learning, offering a variety of opportunities and platforms to equip
          individuals with the skills and knowledge they need to succeed in
          their fields.
        </div>
        <div className="section-net"></div>
      </div>

      <div className="domain-5">
        <div className="section-net"></div>
        <div className="section-details">
          <h3 className="head">Research & Innovation</h3>
          The Research & Innovation domain within Ignite Society is dedicated to
          advancing knowledge and creating new, disruptive technologies through
          rigorous exploration, experimentation, and collaboration. This domain
          forms the foundation for the development of cutting-edge solutions
          that address real-world challenges across industries such as
          healthcare, education, finance, and beyond. In an environment driven
          by curiosity and a desire to push the boundaries of what is possible,
          Ignite Society fosters a culture that supports bold ideas, creative
          thinking, and scientific rigor.
        </div>
      </div>
    </div>
  );
};

export default page;
