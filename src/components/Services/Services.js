import React from "react";
import useHotelBooking from "../../hooks/useHotelBooking";
import Service from "../Service/Service";
import "./services.css";

const Services = () => {
  const [services] = useHotelBooking();
  return (
    <section>
      <h1 className="heading">Our Services</h1>
      <div className="service-container">
        {services.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </div>
    </section>
  );
};

export default Services;
