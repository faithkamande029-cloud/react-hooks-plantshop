import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const PLANT_URL = ("http://localhost:6001/plants")

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch(PLANT_URL)
    .then(res => {
      if(!res.ok){
        throw new Error("Failed to load plants")
      }
      return (res).json()
    })      
    .then((data) => setPlants(data))
    .catch(error => {console.error(error)}
    );
  }, [])

  const addPlant = (newPlant) => {
    setPlants([...plants, newPlant])
  }
  return (
    <div className="app">
      <Header />
      <PlantPage 
        plants={plants} 
        addPlant={addPlant} 
        searchTerm={searchTerm} 
      />
    </div>
  );
}

export default App;
