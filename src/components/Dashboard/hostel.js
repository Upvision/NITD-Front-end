import React from 'react';
import { Link } from 'react-router-dom';
const Hostel = () => {
    return (
       <div>
            <div className="container-fluid">
                <div className="block-header ">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12 ">
                            <h1>HOSTEL</h1>
                        </div>
                        
                    </div>
                </div>
            </div>
                <div className="container">
                <div className="row clearfix">
                <div className="col-lg-8 col-md-12">
                        <div className="single-blog">
                            <div className="post-thumb ">

                                <img src="http://pnaf.in/images/nit/nit_dehli.jpg" className="img-fluid rounded" alt="Avatar" />
                            </div>
                            
                            <div className="post-content overflow">
                                <h2 className="post-title bold">HOSTEL</h2>
                                
                                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber [...]</p>
                                <Link to="#"  className="read-more">Visit College Site</Link>
                                
                            </div>
                        </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-12">
                        <div className="table-responsive ">
                        <table className="table table-hover table-custom spacing5">
                                <tbody>
                                <tr>
                                    <td>   
                                    <h3 className="post-title  " >Mess Menu:</h3>
                                    </td>
                                    
                                    <td>
                                        <a href="/" className="btn btn-sm btn-primary mr-1">Download</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                                    <br></br>
                                    <br></br>
                                    
                            <table className="table table-hover table-custom spacing5">
                                <tbody>
                                                                      
                                    <tr>
                                        <td>
                                        <h3 className="post-title  " >Common Rooms :</h3>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                        <span>Rooms: M8 Ground Floor</span>
                                        </td>
                                        </tr>
                                        <tr>
                                        <td>
                                        <span>Rooms: M7 </span>
                                        </td>
                                        </tr>
                                    </tbody>
                                 </table>
                               
                            </div>
                            </div>
                        </div>
                 
                        <div className="col-lg-8 col-md-12">
                            <div className="card post-content overflow">
                            <div className="header">
                                <h2>Events</h2>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-custom2 table-hover">
                                    <thead>

                                        <tr>
                                            <th>Event Name</th>
                                            <th>Date</th>
                                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><span>Event 1</span></td>
                                            
                                            <td><span className="text-green">Date 1</span></td>
                                            </tr> 
                                        <tr>
                                            <td><span>Event 2</span></td>
                                            
                                            <td><span className="text-green">Date 2</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>Event 3</span></td>
                                            
                                            <td><span className="text-green">Date 3</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>Event 4</span></td>
                                            
                                            <td><span className="text-green">Date 4</span></td>
                                            
                                        </tr>
                                        <tr>
                                            <td><span>Event 5</span></td>
                                            
                                            <td><span className="text-green">Date 5</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>Event 6</span></td>
                                            
                                            <td><span className="text-green">Date 6</span></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                   
                        <div className="single-blog post-content overflow">
                            <div className="post-thumb">
                            <h1 className="post-title bold">HOSTEL EVENTS</h1>
                                <img src="https://i.ytimg.com/vi/exxUG4J-sQ0/maxresdefault.jpg" className="img-fluid rounded" alt="Avatar" />
                            </div>

                            <div className="post-content overflow">
                                <h2 className="post-title bold">ESPL</h2>
                                
                                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber [...]</p>
                                           
                            </div>
                        </div>
                    </div>
                </div>
        </div>
            
        
        
    );

}


export default Hostel;