// pages/events.js
'use client';
import EventCard from "../../Components/EventCard";
import { useState } from "react";
import "./event.css";
import image1 from "../../assets/orientation.jpg";
import image2 from "../../assets/yrsc1.0.jpg";
import image3 from "../../assets/irsc2.jpg";
import image4 from "../../assets/IRSC3.png";
import image5 from "../../assets/yugaram.jpg";
import image6 from "../../assets/women.jpeg";
import image7 from "../../assets/ICIDSSD.png";
import image8 from "../../assets/copilot.jpg";
import image9 from "../../assets/yalgaar.jpg";
import image10 from "../../assets/boxing.jpg";
import image11 from "../../assets/innovationtank.jpg";
// import image11 from "../../assets/";

const events = [
  {
    id: 1,
    name: "Orientation Day",
    image: image1,
    date: "February 13, 2024",
    time: "10:00 AM",
    info: "The Ignite Society held its orientation on February 13, 2024, at the Archives Auditorium, Jamia Hamdard. The event featured the society’s founder and chairperson, Mr. Md Zubair Alam, executive committee members, and faculty coordinators Dr. Refia Wiquar and Mr. Tabish Mufti. Students were introduced to the society’s vision, mission, and objectives, along with its key domains such as Research & Innovation, Startup Culture, Project Development, and more. The program included introductions from executive members, interactive group activities to build camaraderie, and a Q&A session to address student queries. The event was highly successful, sparking excitement for the year ahead.",
    status: "past",
  },
  {
    id: 2,
    name: "IRSC 1.0",
    image: image2,
    date: "2023-03-15",
    time: "2:00 PM",
    info: "The program focused on raising awareness about road safety and the precautions necessary for safe driving. It emphasized the importance of first aid and emergency care immediately after an accident. Dr. Junaid Alam led the participants in taking an oath to commit to driving responsibly, adhering to safe speed limits, and following traffic guidelines. He also delivered a presentation showcasing real-life examples of the negative effects of road rage, illustrating the physical and mental harm it can cause.The event featured a live CPR (Cardiopulmonary Resuscitation) demonstration by Dr. Akansha Gaur and Dr. Ram Krishna Kumar. They taught the correct method for administering CPR and stressed its significance in saving lives during emergencies. Following the demonstration, students engaged in interactive activities, practicing CPR techniques on dummies, allowing them to gain hands-on experience with this critical life-saving skill. The session provided valuable knowledge and practical insights into handling road emergencies, ensuring greater awareness and preparedness among attendees.",
    status: "past",
  },
  {
    id: 3,
    name: "IRSC 2.0",
    image: image3,
    date: "2023-03-20",
    time: "10:00 AM",
    info: "The Road Safety Workshop was organized by Ignite Society Jamia Hamdard in collaboration with Unnat Bharat Abhiyan and the Indian Road Safety Campaign, highlighting the importance of road safety and accident prevention. This event, held on July 19, 2024, at Prajna Foundation, Kalkaji, New Delhi, aimed to educate participants on the critical aspects of road safety, promoting a culture of awareness and responsibility. The keynote speaker, Md. Zubair Alam, founder and chairperson of Ignite Society Jamia Hamdard, shared valuable insights into road safety practices, emphasizing the need for individual and community involvement in making roads safer.",
    status: "past",
  },
  {
    id: 4,
    name: "IRSC 3.0",
    image: image4,
    date: "2023-03-20",
    time: "10:00 AM",
    info: "The Safety First: Road Safety Extravaganza was organized by Ignite Society Jamia Hamdard in collaboration with the Indian Road Safety Campaign, highlighting the importance of road safety and accident prevention. This event, held on July 31, 2024, at GD Goenka Public School in Sarita Vihar, New Delhi, aimed to educate participants on the critical aspects of road safety, promoting a culture of awareness and responsibility. The keynote speaker, Md. Zubair Alam, founder and chairperson of Ignite Society Jamia Hamdard, shared valuable insights into road safety practices, emphasizing the need for individual and community involvement in making roads safer.",
    status: "past",
  },
  {
    id: 5,
    name: "Skit/Theatre: Yugarambh!",
    image: image5,
    date: "2023-03-20",
    time: "2:00 PM",
    info: "TEAM YUG-AARAMBH: The Ignite Society, in collaboration with UBA (Unnat Bharat Abhiyan, Jamia Hamdard) and Epoch Society, performed a street play on the occasion of Republic Day with a theme CASTE DISCRIMINATION at Jamia Hamdard. The team named Team Yug- Aarambh consisted of 22 members. The message was delivered through impactful dialogues, emotive performances, and creative storytelling, highlighting the devastating effects of caste discrimination on individuals and communities. This powerful portrayal resonated deeply with the audience, emphasizing the importance of peace, unity, and social equality amidst adversity. ",
    status: "past",
  },
  {
    id: 6,
    name: "All eyes on women empowerment",
    image: image6,
    date: "2023-03-20",
    time: "5:00 PM",
    info: "In response to the tragic incident at RG Kar Medical College and Hospital on August 9, 2024, the Ignite Society is organizing a rally to protest the ongoing injustice. We urge all members to join us in showing support and solidarity for Dr. Moumita and all victims of such crimes. Together, let us unite as a community to raise our voices and advocate for justice.",
    status: "past",
  },
  {
    id: 7,
    name: "ICIDSSD’24",
    image: image7,
    date: "2023-03-20",
    time: "5:00 PM",
    info: "The 2024 International Conference, orchestrated by the Ignite Society, successfully took place on the 23rd and 24th of April. With a focal theme of Digital and Sustainable Development, the conference attracted over 600 participants from across diverse industries worldwide. As a proud member and volunteer of the Ignite Society, we were deeply immersed in the operations and festivities of this enriching event. Serving as volunteer, our responsibilities spanned from crowd management to assisting in thecoordination of sessions. The experience was a practical deep dive into event managementunderpinned by robust team collaboration and leadership, skills that are invaluable for our professional growth.",
    status: "live",
  },
  {
    id: 8,
    name: "Webinar: CO-PILOT STUDIO",
    image: image8,
    date: "2023-03-20",
    time: "5:00 PM",
    info: "Microsoft Learn Student Ambassadors. The event began with Suniti Palwar delivering an overview of the Microsoft Learn Student Ambassador Program. She outlined the program's benefits, including leadership and communication skill development, networking with industry professionals, and access to exclusive training. Following this, Suniti transitioned into a deep dive into Copilot Studio, showcasing its functionalities through live demonstrations. She illustrated how Copilot Studio can enhance productivity, improve code quality, and facilitate collaboration among team members.",
    status: "live",
  },
  {
    id: 9,
    name: "Yalgaar: Nukkad Natak",
    image: image9,
    date: "2023-03-20",
    time: "5:00 PM",
    info: "The Nukkad Natak performance at NDIM College in March by team Yalgaar centered around the theme of war, delivered a poignant portrayal reflecting societal realities. With impactful dialogues and emotive performances, the team conveyed the devastating effects of conflict on individuals and communities. Through creative storytelling, we highlighted the importance of peace and unity amidst adversity. The performance garnered commendation for its powerful message and artistic execution, resonating deeply with the audience",
    status: "live",
  },
  {
    id: 10,
    name: "HOUSE OF BOXING: SELF DEFENSE SEMINAR ",
    image: image10,
    date: "2023-03-20",
    time: "5:00 PM",
    info: "The Self-Defense Seminar for Girls, held on 28th July 2024, organized by House of Boxing. Located at their facility on the 3rd floor of C-1, Panchsheel Vihar, Malviya Nagar, New Delhi, the seminar attracted participants from various backgrounds, regardless of their affiliation with the House of Boxing. This inclusive event was designed to empower women with essential self-defense skills, ensuring a safer and more confident future for all attendees.",
    status: "live",
  },

  {
    id: 11,
    name: "Innovation Tank",
    image: image11,
    date: "2023-03-20",
    time: "5:00 PM",
    info: "The Innovation Tank event, inspired by the popular television show Shark Tank, was successfully held at Jamia Hamdard University on 4th august,2024. The event attracted participants from various colleges, universities, and schools (11th-12th grade). This initiative provided a platform for young innovators to present their creative ideas and entrepreneurial projects. The Innovation Tank event was a tremendous success, providing a valuable platform for young minds to showcase their innovative ideas. The event fostered a spirit of entrepreneurship among the participants and was well-received by all attendees. The opportunity to engage with industry leaders and receive constructive feedback was highly appreciated by both participants and judges.",
    status: "latest",
  },
  // {
  //   id: 12,
  //   name: "Event 3",
  //   image: image1,
  //   date: "2023-03-20",
  //   time: "5:00 PM",
  //   info: "This is event 3",
  //   status: "live",
  // },
  // Add more events here...
];

const EventPage = () => {
  const [filter, setFilter] = useState("all");
  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    if (newFilter === "all") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter((event) => event.status === newFilter));
    }
  };

  return (
    <>
      <div className="event-page">
        <h1 className="event-title">Events</h1>
        <div className="filter-buttons">
          <button onClick={() => handleFilterChange("all")}>All</button>
          <button onClick={() => handleFilterChange("past")}>Past</button>
          <button onClick={() => handleFilterChange("upcoming")}>
            Upcoming
          </button>
          <button onClick={() => handleFilterChange("latest")}>Latest</button>
        </div>
        <div className="event-list">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event as any} />
          ))}
        </div>
      </div>
    </>
  );
};

export default EventPage;
