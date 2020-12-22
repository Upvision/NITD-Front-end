import React from "react";
import Header from '../navbar'; 
import Searchbar from '../../Shared/Searchbar';
import Map from "./Maps";
import places from "./places.json";

const alumniLocation = () => (
  <>
  <Header/>
  <Searchbar/>
  <Map
    center={{ lat: 22.0574, lng: 78.9382 }}
    zoom={5}
    places={places}
  />
  </>
);

export default alumniLocation;