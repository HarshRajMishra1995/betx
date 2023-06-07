import React from "react";
import Header from "../Header";
import TransparentGif from "./images/transparent.gif";
import "./match.css";

function index() {
	return (
		<>
			<Header />
			<div
				className="game-wrap"
				eventtype="1"
				eventid="-10155308"
				marketid="-10155340"
			>
				<div className="game-wrap">
					<h4 id="gameInfo" className="game-info">
						Cricket
						<ul id="infoIcon" className="info-icon">
							<li id="inPlayIcon">
								<img class="info-inplay" src={TransparentGif} />
								In-Play
							</li>
							<li style={{ display: "none" }}>
								<img class="info-cashout" src={TransparentGif} />
								Cash Out
							</li>
							<li id="fancyBetIcon" style={{ display: "none" }}>
								<span class="game-fancy">Fancy</span>
							</li>
							<li id="bookMakerIcon" style={{ display: "none" }}>
								<span class="game-bookmaker">BookMaker</span>
							</li>
							<li id="feedingSiteIcon" style={{ display: "none" }}>
								<span class="game-sportsbook">Sportsbook</span>
							</li>
							<li>
								<span
									id="lowLiquidityTag"
									class="game-low_liq"
									style={{ display: "none" }}
								>
									Low
								</span>
							</li>
						</ul>
					</h4>
				</div>
				<table className="game-team">
					<tbody>
						<tr>
							<th style={{ padding: "5px" }}>
								<h4>Hyderabad T10</h4>
								<h4>Rajasthan T10</h4>
								<ul className="scores-time">
									<li>06 Jun, 17:20</li>
								</ul>
							</th>
						</tr>
					</tbody>
				</table>
				<div
					id="naviMarket"
					className="market-type ps ps--theme_default"
					data-ps-id="58e5ab5c-a535-fae1-3297-e47b297f1637"
				>
					<ul id="naviMarketList">
						<li id="naviMarketTemaplate" style={{ display: "none" }}>
							<a></a>
						</li>
						<li
							id="naviMarket_-10155340"
							style={{ display: "list-item" }}
							className="select"
						>
							<a href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=1&amp;eventId=-10155308&amp;marketId=-10155340",true)'>
								Match Odds
							</a>
						</li>
					</ul>
					<div
						className="ps__scrollbar-x-rail"
						style={{ left: "0px", bottom: "0px" }}
					>
						<div
							className="ps__scrollbar-x"
							tabindex="0"
							style={{ left: "0px", width: "0px" }}
						></div>
					</div>
					<div
						className="ps__scrollbar-y-rail"
						style={{ top: "0px", right: "0px" }}
					>
						<div
							className="ps__scrollbar-y"
							tabindex="0"
							style={{ top: "0px", height: "0px" }}
						></div>
					</div>
				</div>
			</div>
		</>
	);
}

export default index;
