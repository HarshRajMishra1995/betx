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
				<ul className="match-btn">
					<li>
						<a style={{ cursor: "pointer" }} className="btn-pin">
							<i className="bi bi-pin-fill"></i>
							<p>Pin</p>
						</a>
					</li>
					<li>
						<a style={{ cursor: "pointer" }} className="btn-refresh">
							<i className="bi bi-arrow-clockwise"></i>
							Refresh
						</a>
					</li>
				</ul>
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
				<div className="bets-wrap">
					<div
						id="minMaxBox"
						className="limit_info-popup"
						style={{ display: "none" }}
					>
						<a class="close" onclick="javascript:$j('#minMaxBox').fadeOut();">
							Close
						</a>
						<dl>
							<dt id="minMaxDt">Min / Max</dt>
							<dt id="maxDt" style={{ display: "none" }}>
								Max
							</dt>
							<dd id="minMaxInfo">100 / 12500</dd>
						</dl>
					</div>
					<a
						id="minMaxButton"
						onclick="javascript:$j('#minMaxBox').fadeIn().css('display', 'flex');"
						className="bet-limit"
					></a>
					<dl id="betsHead" className="bets-selections-head">
						<dt>
							<a className="a-depth" id="marketDepthBtn">
								Markets Depth
							</a>
							{/* <p>
								<span>Matched</span>
								<strong id="totalMatched">PIN 0</strong>
							</p> */}
						</dt>
						<dd className="mode-land"></dd>
						<dd className="mode-land"></dd>
						<dd>Back</dd>
						<dd>Lay</dd>
						<dd className="mode-land"></dd>
						<dd className="mode-land"></dd>
					</dl>
					<dl className="bets-selections" style={{ display: "flex" }}>
						<dt>
							<div
								id="horseInfo"
								class="horse-info"
								style={{ display: "none" }}
							>
								<ul id="horseBox" class="horse-box">
									<li id="clothNumberAlpha"></li>
									<li id="stallDraw"></li>
								</ul>
								<div id="uniform" class="uniform">
									<img src="" />
								</div>
								<ul id="horseName" class="horse-name">
									<li id="runnerName"></li>
									<li id="jockyName"></li>
								</ul>
							</div>
							<h4>Hyderabad T10</h4>
						</dt>
						{/* <dd id="back_3" className="mode-land">
							<a className="back-3">
								<span></span>
							</a>
						</dd>
						<dd id="back_2" className="mode-land">
							<a className="back-2">
								<span></span>
							</a>
						</dd> */}
						<dd id="back_1">
							<a className="back-1">
								<strong>--</strong>
								<span>--</span>
							</a>
						</dd>
						<dd id="lay_1">
							<a className="lay-1">
								<span>
									<strong>--</strong>
									<span>--</span>
								</span>
							</a>
						</dd>
						{/* <dd id="lay_2" className="mode-land">
							<a className="lay-2">
								<span></span>
							</a>
						</dd>
						<dd id="lay_3" className="mode-land">
							<a className="lay-3">
								<span></span>
							</a>
						</dd> */}
					</dl>
					<dl className="bets-selections" style={{ display: "flex" }}>
						<dt>
							<div
								id="horseInfo"
								class="horse-info"
								style={{ display: "none" }}
							>
								<ul id="horseBox" class="horse-box">
									<li id="clothNumberAlpha"></li>
									<li id="stallDraw"></li>
								</ul>
								<div id="uniform" class="uniform">
									<img src="" />
								</div>
								<ul id="horseName" class="horse-name">
									<li id="runnerName"></li>
									<li id="jockyName"></li>
								</ul>
							</div>
							<h4>Rajasthan T10</h4>
						</dt>
						{/* <dd id="back_3" className="mode-land">
							<a className="back-3">
								<span></span>
							</a>
						</dd>
						<dd id="back_2" className="mode-land">
							<a className="back-2">
								<span></span>
							</a>
						</dd> */}
						<dd id="back_1">
							<a className="back-1">
								<strong>--</strong>
								<span>--</span>
							</a>
						</dd>
						<dd id="lay_1">
							<a className="lay-1">
								<span>
									<strong>--</strong>
									<span>--</span>
								</span>
							</a>
						</dd>
						{/* <dd id="lay_2" className="mode-land">
							<a className="lay-2">
								<span></span>
							</a>
						</dd>
						<dd id="lay_3" className="mode-land">
							<a className="lay-3">
								<span></span>
							</a>
						</dd> */}
					</dl>
					<div id="bookMakerWrap">
						<div id="bookMakerTempTable" style={{ display: "none" }}></div>
						<div
							id="bookMakerMarketTemplate"
							className="bets-wrap bets-bookmaker"
							style={{ display: "block" }}
						>
							<h4>
								<span>Bookmaker Market</span>
								<p>| Zero Commission</p>
								<a className="btn-fancy_info"></a>
							</h4>
						</div>
					</div>
					<dl id="betsHead" className="bets-selections-head">
						<dt>
							{/* <a className="a-depth" id="marketDepthBtn">
								Markets Depth
							</a> */}
							{/* <p>
								<span>Matched</span>
								<strong id="totalMatched">PIN 0</strong>
							</p> */}
						</dt>
						<dd className="mode-land"></dd>
						<dd className="mode-land"></dd>
						<dd>Back</dd>
						<dd>Lay</dd>
						<dd className="mode-land"></dd>
						<dd className="mode-land"></dd>
					</dl>
					<dl className="bets-selections" style={{ display: "flex" }}>
						<dt>
							<div
								id="horseInfo"
								class="horse-info"
								style={{ display: "none" }}
							>
								<ul id="horseBox" class="horse-box">
									<li id="clothNumberAlpha"></li>
									<li id="stallDraw"></li>
								</ul>
								<div id="uniform" class="uniform">
									<img src="" />
								</div>
								<ul id="horseName" class="horse-name">
									<li id="runnerName"></li>
									<li id="jockyName"></li>
								</ul>
							</div>
							<h4>Rajasthan T10</h4>
						</dt>
					</dl>
				</div>
			</div>
		</>
	);
}

export default index;
