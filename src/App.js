import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Support from "./Support";
import Contact from "./Contact";
import PrivacyPolicy from "./PrivacyPolicy";
import "./index.css";

class Main extends Component {
	render() {
		return (
			<HashRouter>
				<div>
					<h1 style={{ color: "white", fontSize: 60 }}>Optify</h1>
					<ul className="header">
						<li id="home">
							<NavLink exact to="/">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/contact">Contact</NavLink>
						</li>
						<li>
							<NavLink to="/support">Support</NavLink>
						</li>
						<li>
							<NavLink to="/privacypolicy">Privacy Policy</NavLink>
						</li>
					</ul>
					<div className="content">
						<Route exact path="/" component={Home} />
						<Route path="/support" component={Support} />
						<Route path="/contact" component={Contact} />
						<Route path="/privacypolicy" component={PrivacyPolicy} />
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default Main;
