import React from 'react';
import Header from './navbar'; 
import Searchbar from '../Shared/Searchbar';
import GridView from './gridviewAlumni';
import './alumniHub.css';

const alumni = () => {
    return(
        <div>
        <Header/>
        <Searchbar/>
        <GridView/>
        </div>
    );
} 

export default alumni;
