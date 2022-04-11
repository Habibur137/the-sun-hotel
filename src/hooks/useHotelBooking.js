import { useEffect, useState } from "react";

const useHotelBooking = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("room.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return [services, setServices];
};

export default useHotelBooking;
