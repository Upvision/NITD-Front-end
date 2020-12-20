import React from 'react';
import Header from './navbar'; 
import Searchbar from '../Shared/Searchbar';
import GridView from './gridviewAlumni';

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
