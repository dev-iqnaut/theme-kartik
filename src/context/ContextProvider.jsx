// ShowContextProvider.js
import React, { useState, useEffect } from "react";
import ShowContext from "./ShowContext";
import { getSiteData } from "../firebase/config";

const ShowContextProvider = ({ children }) => {
  const [siteData, setSiteData] = useState(null);

  useEffect(() => {
    
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
      } catch (error) {
        console.error("Error fetching site data:", error);
      }
    };
    fetchData();
  }, []);
  

  return (
    <ShowContext.Provider value={{ siteData }}>
      {children}
    </ShowContext.Provider>
  );
};

export default ShowContextProvider;
