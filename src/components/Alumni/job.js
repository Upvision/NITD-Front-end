import React from 'react';
import Header from './navbar'; 
import Searchbar from '../Shared/Searchbar';
import ThemeSetting from '../Shared/ThemeSetting';
import img from './Image/amazon.png';

import './job.css';
const job = () => {
    return(
        <div>
        <Header/>
        <Searchbar/>
        <ThemeSetting/>

        
      <div class="s01">
      <form>
        <div class="inner-form">
          <div class="input-field first-wrap">
            <input id="search" type="text" style={{border: "5px solid white"}} placeholder="Search by title,skill or company" />
          </div>
          <div class="input-field third-wrap">
            <button class="btn-search" type="button">Search</button>
          </div>
          <div class="input-field third-wrap">
            <button class="btn-search" style={{background:"Blue", marginLeft:"10px"}} type="button">Add Job</button>
          </div>
        </div>
      </form>
    </div>
   



    



    <div class="container" >
  <div class="row">
    <div class="col-sm">
    <div className="container"  style={{marginBottom:"30px"}}>
                        <small className="text-muted"><h5>JOB POSITION</h5></small>
                    <ul className="list-group mt-2">
                        <li className="list-group-item">Software Engineer</li>
                        <li className="list-group-item">ML and Data Science</li>
                        <li className="list-group-item">DevOps</li>
                        <li className="list-group-item">Business Analyst</li>
                        <li className="list-group-item">Other</li>
                      </ul>
    </div>
    </div>
    <div class="col-sm">
    <div className="container">
                    <small className="text-muted"><h5>LOCATION</h5></small>
                    <ul className="list-group mt-2 mb-4">
                        <li className="list-group-item d-flex justify-content-between align-items-center">Delhi<span className="badge badge-info">14</span></li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">Banglore<span className="badge badge-primary">2</span></li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">Noida<span className="badge badge-warning">1</span></li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">Work From Home<span className="badge badge-danger">14</span></li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">Other<span className="badge badge-danger">14</span></li>
                       </ul>
    </div>
    </div>
    <div class="col-sm">
    <div className="container">
                    <small className="text-muted"><h5>Job Type</h5></small>
                    <ul className="list-group mt-2 mb-4">
                        <li className="list-group-item d-flex justify-content-between align-items-center">Internship<span className="badge badge-info">14</span></li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">Full-Time<span className="badge badge-primary">2</span></li>
                     </ul>
    </div>
    </div>
  </div>
</div>

    <div class="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-4">
  <div class="col">
    <div class="card">
      <div class="card-body">
      <img src={img} width="100px" height="100px" style={{marginBottom:"10px"}} class="card-img-top" alt="..."/>
        <h5 class="card-title">Job position</h5>
        <p class="card-text">
        Description:-
        <br/>
        Experience:-
        <br/>
        Location:-
        <br/>
        </p>
        <button class="btn-view-job" type="button">View Job</button>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
      <img src={img} width="100px" height="100px" style={{marginBottom:"10px"}} class="card-img-top" alt="..."/>
        <h5 class="card-title">Job position</h5>
        <p class="card-text">
        Description:-
        <br/>
        Experience:-
        <br/>
        Location:-
        <br/>
        </p>
        <button class="btn-view-job" type="button">View Job</button>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">     
      <div class="card-body">
      <img src={img} width="100px" height="100px" style={{marginBottom:"10px"}} class="card-img-top" alt="..."/>
        <h5 class="card-title">Job position</h5>
        <p class="card-text">
        Description:-
        <br/>
        Experience:-
        <br/>
        Location:-
        <br/>
        </p>
        <button class="btn-view-job" type="button">View Job</button>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">     
      <div class="card-body">
      <img src={img} width="100px" height="100px" style={{marginBottom:"10px"}} class="card-img-top" alt="..."/>
      
        <h5 class="card-title">Job position</h5>
        <p class="card-text">
        Description:-
        <br/>
        Experience:-
        <br/>
        Location:-
        <br/>
        </p>
        <button class="btn-view-job" type="button">View Job</button>

      </div>
    </div>
  </div>
</div>
        </div>
    );
} 

export default job;
