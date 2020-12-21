import React from 'react';
import { Link } from 'react-router-dom';

const PageProfile = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h2>User Profile</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Upvision</Link></li>
                                    <li className="breadcrumb-item"><a href="/">Pages</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <a href="/" className="btn btn-sm btn-primary btn-round" title="">Add New</a>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-md-12">
                        <div className="card social">
                            <div className="profile-header d-flex justify-content-between justify-content-center">
                                <div className="d-flex">
                                    <div className="mr-3">
                                        <img src="../assets/images/user.png" className="rounded" alt="Avatar" />
                                    </div>
                                    <div className="details">
                                        <h5 className="mb-0">Name</h5>
                                        <span className="text-light">Intro</span>
                                        {/* <p className="mb-0"><span>Posts: <strong>321</strong></span> <span>Followers: <strong>4,230</strong></span> <span>Following: <strong>560</strong></span></p> */}
                                        <p className="mb-0"><span>about</span></p>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-success btn-sm">Message</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-5">
                        <div className="card">
                            <div className="header">
                                <h2>About</h2>
                            </div>
                            <div className="body">
                                <small className="text-muted">Roll No: </small>
                              
                                <p>Roll No</p>
                                <hr />
                                <small className="text-muted">Email address: </small>
                                <p>Email</p>
                                <hr />
                                <small className="text-muted">Contact Details </small>
                                <p>Contact </p>
                                <hr />
                          
                                <small className="text-muted">Social: </small>
                                <p><i className="fa fa-twitter m-r-5"></i> twitter.com/example</p>
                                <p><i className="fa fa-facebook  m-r-5"></i> facebook.com/example</p>
                                <p><i className="fa fa-github m-r-5"></i> github.com/example</p>
                                <p><i className="fa fa-instagram m-r-5"></i> instagram.com/example</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-8 col-lg-8 col-md-7">
                        <div className="card">
                            <div className="header">
                                <h2>Skills</h2>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-12">
                                        <b>
                                            <div className="form-group">
                                                <span>Employment _status Title</span>
                                            </div>
                                        </b>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <b>
                                                <span>Employment _type </span>
                                            </b>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="form-group">
                                            <b>
                                                <div>Interships Companies</div>
                                            </b>
                                        </div>
                                    </div>
                                    <ul>
                                        <li>
                                            
                                            <div className="row clearfix">
                                                <div className="table-responsive">
                                                    <table className="table table-hover table-custom spacing5">
                                                        <tbody>
                                                            <tr>
                                                                <td className="w60">
                                                                    Orr-Avtar
                                                                </td>
                                                                <td>
                                                                    Organization-Name
                                                                </td>
                                                                <td>
                                                                <td>
                                                                    <div style={{float:'right'}}>
                                                                        <input data-provide="datepicker"  data-date-autoclose="true" className="form-control" placeholder="Starting From" />
                                                                        <input data-provide="datepicker" data-date-autoclose="true" className="form-control" placeholder="Till Date..." />
                                                                        
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    Woked as
                                                                </td>
                                                                <td>
                                                                <p>Desc_about job Done</p> </td>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="w60">
                                                                    Orr-Avtar
                                                                </td>
                                                                <td>
                                                                    Organization-Name
                                                                </td>
                                                                <td>
                                                                <td>
                                                                    <div style={{float:'right'}}>
                                                                        <input data-provide="datepicker"  data-date-autoclose="true" className="form-control" placeholder="Starting From" />
                                                                        <input data-provide="datepicker" data-date-autoclose="true" className="form-control" placeholder="Till Date..." />
                                                                        
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    Woked as
                                                                </td>
                                                                <td>
                                                                <p>Desc_about job Done</p> </td>
                                                                </td>
                                                            </tr>
                                                            
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                        </li>
                                        <li>
                                            <div className="row clearfix">
                                                <div className="table-responsive">
                                                    <b>Projects/Showcase</b>
                                                    <table class="table table-hover table-custom spacing4">
                                                        <tbody>
                                                            
                                                            <tr>
                                                                <td>
                                                                    Project Name
                                                                </td>
                                                                <td>
                                                                    Main Idea
                                                                </td>
                                                                <td>
                                                                    Used Languages
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    Project Name
                                                                </td>
                                                                <td>
                                                                    Main Idea
                                                                </td>
                                                                <td>
                                                                    Used Languages
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div></div>
                                             
                                    <div className="col-lg-4 col-md-12">
                                        <div className="row clearfix">
                                            <div className="col-lg-12">
                                                <b>My Site/works</b>
                                                <div className="table-responsive">
                                                   <table className="table table-hover table-custom spacing5">
                                                        <tbody>
                                                            <tr>
                                                                Portfolio Site
                                                            </tr>
                                                        </tbody>
                                                   </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="col-12">
                                        <ul className="list-group mb-3 tp-setting">
                                            <li className="list-group-item" style={{float:'center'}}><b>Skillset</b></li>
                                            <li className="list-group-item">
                                               C++
                                            <div className="float-right">
                                                   
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                React
                                            <div className="float-right">
                                                    
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                Grpahql
                                            <div className="float-right">
                                                   
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                Lol
                                            <div className="float-right">
                                                    
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                             
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </>
    );

}
export default PageProfile


