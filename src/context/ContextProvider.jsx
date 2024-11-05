<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import ShowContext from "./ShowContext.js";
import { getSiteData } from "../firebase/config.js";
=======
// ShowContextProvider.js
import React, { useState, useEffect } from "react";
import ShowContext from "./ShowContext";
import { getSiteData } from "../firebase/config";
>>>>>>> b64101c2b695ebf392c1c9fb3be032409fbd43bb

const ShowContextProvider = ({ children }) => {
  const [siteData, setSiteData] = useState(null);

  useEffect(() => {
<<<<<<< HEAD
    const fetchdata = async () => {
      try {
        const data = await getSiteData();
        setSiteData(data.siteData); // Make sure `SiteData` exists in the Firebase response
        console.log("Data from Firebase:", data.siteData); // Log data here after it is fetched
=======
    
    const fetchData = async () => {
      try {
        const data = await getSiteData();
        console.log("Fetched data from Firebase:", data); // Check raw data
        if (data) {
          console.log("Data includes SiteData:", data.SiteData); // Verify SiteData presence
          setSiteData(data.SiteData);
        } else {
          console.warn("Fetched data is empty or has unexpected structure.");
        }
>>>>>>> b64101c2b695ebf392c1c9fb3be032409fbd43bb
      } catch (error) {
        console.error("Error fetching site data:", error);
      }
    };
<<<<<<< HEAD

    fetchdata();
  }, []);
=======
    fetchData();
  }, []);
  
>>>>>>> b64101c2b695ebf392c1c9fb3be032409fbd43bb

  return (
    <ShowContext.Provider value={{ siteData }}>
      {children}
    </ShowContext.Provider>
  );
};

export default ShowContextProvider;
