// components/EventCard.js
'use client';
import Image from "next/image";
import "../../src/app/event/event.css";
import Event from "@/types/event";

const EventCard = ({ event }: { event: Event }) => {
  return (
    <>
      <div className="event-card">
        <Image src={event.image} alt={event.name} width={300} height={200} />
        <h2>{event.name}</h2>
        <p>Date: {event.date}</p>
        <p>Time: {event.time}</p>
        <p>Info: {event.info}</p>
      </div>
    </>
  );
};

export default EventCard;
