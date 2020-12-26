import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class register extends Component{
	render() {
		return (
			<>
			<div className="container-fluid social">
				<div class="pattern">
						<span class="red"></span>
						<span class="indigo"></span>
						<span class="blue"></span>
						<span class="green"></span>
						<span class="orange"></span>
				</div>
				<div className="auth-main particles_js">
					<div className="auth_div vivify popIn">
						<div className="card">
							<div className="body">
								<div className="auth_brand">
									<p className="lead" align="center">Getting started</p>
								</div>
								<div className="form-group">
									<input type="text" className="form-control round" placeholder="First Name" id="fname" required />
								</div>
								<div className="form-group">
									<input type="text" className="form-control round" placeholder="Last Name" id="lname" required />
								</div>								
								<div className="form-group">									
									<label for="batch">Batch of:</label><br></br>
									<select name="Batch" id="batch" placeholder="Batch" >
										<option value="2010">2010</option>											
										<option value="2011">2011</option>
										<option value="2012">2012</option>
										<option value="2013">2013</option>
										<option value="2014">2014</option>
										<option value="2015">2015</option>
										<option value="2016">2016</option>
										<option value="2017">2017</option>
										<option value="2018">2018</option>
										<option value="2019">2019</option>
										<option value="2020">2020</option>
										<option value="2021">2021</option>
										<option value="2022">2022</option>
										<option value="2023">2023</option>
										<option value="2024">2024</option>
										<option value="2025">2025</option>											
									</select>
									</div>
									<div className="form-group">
										<label for="major">Major:</label><br></br>
										<select name="Major" id="major" placeholder="Major" >
											<option value="ugcse">B.Tech. CSE</option>
											<option value="ugece">B.Tech. ECE</option>
											<option value="ugeee">B.Tech. EEE</option>
											<option value="pgcse">M.Tech. CSE</option>
											<option value="pgece">M.Tech. ECE</option>
											<option value="pgeee">M.Tech. EEE</option>
											<option value="phdcse">Ph.D. CSE</option>
											<option value="phdece">Ph.D. ECE</option>
											<option value="phdeee">Ph.D. EEE</option>
											<option value="phdme">Ph.D. ME</option>
										</select>
									</div>
								<div className="form-group">
									<label for="gender">Gender: </label><br></br>
									<select name="Gender" id="gender" placeholder="Gender" required>
										<option value="male">Male</option>
										<option value="female">Female</option>
										<option value="other">Other</option>									
									</select>
								</div>
								<div className="form-group">
									<label for="dob">Date of Birth: </label><br></br>
									<input type="date" id="dob" />
								</div>
								<div>
									<Link to="/">
										<button type="submit" className="btn btn-primary btn-round btn-block">Submit</button>
									</Link>
								</div>
							</div>
						</div>					    
					</div>
				</div>
			</div>
			</>
		);
	}
}