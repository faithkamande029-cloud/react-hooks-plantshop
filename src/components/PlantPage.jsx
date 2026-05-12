import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants,addPlant, searchTerm, setSearchTerm }) {

  const filtered = plants.filter(plant =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantList plants={filtered}/>
    </main>
  );
}

export default PlantPage;
