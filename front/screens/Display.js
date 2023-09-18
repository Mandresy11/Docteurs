import React, { useState, useEffect } from "react";
import { CardDoctor } from "../components/CardDoctor/CardDoctor";
import axios from "axios";

function Display() {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    // Make an API request to fetch data from the backend
    axios
      .get("http://127.0.0.1:3000/doctor/allDoctor") // Add "http://" before the URL
      .then((response) => {
        // Store the fetched data in the state
        setDoctors(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      {doctors.map((doctor) => {
        <CardDoctor
          photo={doctor.photo}
          name={doctor.name}
          firstname={doctor.firstname}
          contact={doctor.contact}
          id={doctor.id}
        />;
      })}
    </>
  );
}

export default Display;
