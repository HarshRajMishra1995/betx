import React from "react";
import "./footer.css";
import Casino from "./images/casino.gif";

function index() {
	return (
		<>
			<nav>
				<ul>
					<li id="mini" class="main-nav">
						<a
							href="/login"
							className="ui-link"
							style={{ marginTop: "-6.26667vw" }}
						>
							<img class="icon-promote" src={Casino} alt="mini" />
						</a>
					</li>
					<li id="sports" className="navlink">
						<a className="ui-link" href="/sports">
							<span className="icon-sports"></span>
							Sports
						</a>
					</li>
					<li id="inPlay" className="navlink">
						<a className="ui-link" href="/inplay">
							<span className="icon-inplay"></span>
							In-Play
						</a>
					</li>
					<li id="index" className="navlink">
						<a className="ui-link" href="/">
							<span className="icon-home"></span>
							Home
						</a>
					</li>
					<li id="account" className="navlink">
						<a className="ui-link" href="/login">
							<span className="icon-account"></span>
							Account
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default index;
