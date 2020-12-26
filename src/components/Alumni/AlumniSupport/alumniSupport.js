import React from "react";
import Header from '../navbar'; 
import Searchbar from '../../Shared/Searchbar';
import img from '../Image/help.png';

const alumniSupport = () => (
  <>
  <Header/>
  <Searchbar/>
  <div class="card">
  <div class="card-body">
  <div class="d-flex flex-row">
  <div style={{marginRight:"20px"}}>
  <img src={img} width="300" height="300" style={{width:"100%",height:"100%"}} alt="..."/>
  </div>
    <div>
    <h5>Saptrang Cultural Fest</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <div class="progress" style={{marginTop:"10px",marginBottom:"10px",border:"1px solid white"}}>
    <div class="progress-bar" role="progressbar" style={{width: "40%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">40%</div>
    </div>
    <br/><br/>
    <a href="#" class="btn btn-primary" style={{position: "absolute",bottom: "20px"}}>🤍 Donate Now</a>
    </div>
  </div>
  </div>
  </div>
  <div class="card">
  <div class="card-body">
  <div class="d-flex flex-row">
  <div style={{marginRight:"20px"}}>
  <img src={img} width="300" height="300" style={{width:"100%",height:"100%"}} alt="..."/>
  </div>
    <div>
    <h5>Hostel Wifi</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <div class="progress" style={{marginTop:"10px",marginBottom:"10px",border:"1px solid white"}}>
    <div class="progress-bar" role="progressbar" style={{width: "40%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">40%</div>
    </div>
    <br/><br/>
    <a href="#" class="btn btn-primary" style={{position: "absolute",bottom: "20px"}}>🤍 Donate Now</a>
    </div>
  </div>
  </div>
  </div>
  <div class="card">
  <div class="card-body">
  <div class="d-flex flex-row">
  <div style={{marginRight:"20px"}}>
  <img src={img} width="300" height="300" style={{width:"100%",height:"100%"}} alt="..."/>
  </div>
    <div>
    <h5>Saptrang Cultural Fest</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <div class="progress" style={{marginTop:"10px",marginBottom:"10px",border:"1px solid white"}}>
    <div class="progress-bar" role="progressbar" style={{width: "40%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">40%</div>
    </div>
    <br/><br/>
    <a href="#" class="btn btn-primary" style={{position: "absolute",bottom: "20px"}}>🤍 Donate Now</a>
    </div>
  </div>
  </div>
  </div>
  <div class="card">
  <div class="card-body">
  <div class="d-flex flex-row">
  <div style={{marginRight:"20px"}}>
  <img src={img} width="300" height="300" style={{width:"100%",height:"100%"}} alt="..."/>
  </div>
    <div>
    <h5>Saptrang Cultural Fest</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <div class="progress" style={{marginTop:"10px",marginBottom:"10px",border:"1px solid white"}}>
    <div class="progress-bar" role="progressbar" style={{width: "40%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">40%</div>
    </div>
    <br/><br/>
    <a href="#" class="btn btn-primary" style={{position: "absolute",bottom: "20px"}}>🤍 Donate Now</a>
    </div>
  </div>
  </div>
  </div>
  
  </>
);

export default alumniSupport;