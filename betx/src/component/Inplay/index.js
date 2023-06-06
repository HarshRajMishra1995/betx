import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./home2.css";
import "./inplay.css";
import "./sports.css";
function Index() {
	return (
		<>
			<Header />
			<Footer />
			<div className="mian-wrap">
				<div className="tab-wrap">
					<ul>
						<li id="inplay" className="select">
							<a href="javascript:MobileInPlayPage.changeTab('inplay');">
								In-Play
							</a>
						</li>
						<li id="today">
							<a href="javascript:MobileInPlayPage.changeTab('today');">
								Today
							</a>
						</li>
						<li id="tomorrow">
							<a href="javascript:MobileInPlayPage.changeTab('tomorrow');">
								Tomorrow
							</a>
						</li>
						<li id="result">
							<a onclick="navigate('result')">Result</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
export default Index;
