import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./home2.css";
import "./inplay.css";
import "./sports.css";
import TransparentGif from "./images/transparent.gif";
import VirtualCricket from "./images/virtualcricket.webp";
function Index() {
	return (
		<>
			<Header />
			<Footer />
			<div className="mian-wrap">
				<div
					id="frame"
					className="wrap-highlight ps ps--theme_default ps--active-x"
					data-ps-id="44317bc1-a315-7c0a-e8e7-830c6aa22116"
				>
					<a className="a-tab_prev" href="#" style={{ display: "none" }}>
						prev
					</a>
					<ul id="label" style={{ left: "0px", overflow: "scroll" }}>
						<li className="menu-casino">
							<span className="tag-new">New</span>
							<a href="javascript:CommonTransferWalletHandler.openDepositPage('1', 'Casino', '', '', '', '', false)">
								<img className="icon-casino" src={TransparentGif} />
								Casino
							</a>
						</li>
						<li
							id="highlightTab4"
							onclick="MobileHighlightHandler.selectHighlight(this, 4);GoogleAnalyticsHandler.selectSport(PageCommonConfig.webSiteType, 'CRICKET');"
							className="select"
						>
							<span id="tagLive" className="tag-live">
								<strong></strong>2
							</span>
							<a href="#">
								<img className="icon-cricket" src={TransparentGif} />
								Cricket
							</a>
						</li>
						<li
							id="ipl_winner"
							className="highlightTab_IPL"
							onclick="navigate('ipl_winner')"
						>
							<a href="#">
								<img className="icon-cricket" src={TransparentGif} />
								IPL Winner
							</a>
						</li>

						<li
							id="highlightTab1"
							onclick="MobileHighlightHandler.selectHighlight(this, 1);GoogleAnalyticsHandler.selectSport(PageCommonConfig.webSiteType, 'SOCCER');"
						>
							<span id="tagLive" className="tag-live">
								<strong></strong>6
							</span>
							<a href="#">
								<img className="icon-soccer" src={TransparentGif} />
								Soccer
							</a>
						</li>

						<li
							id="highlightTab2"
							onclick="MobileHighlightHandler.selectHighlight(this, 2);GoogleAnalyticsHandler.selectSport(PageCommonConfig.webSiteType, 'TENNIS');"
						>
							<span id="tagLive" className="tag-live">
								<strong></strong>35
							</span>
							<a href="#">
								<img className="icon-tennis" src={TransparentGif} />
								Tennis
							</a>
						</li>

						<li>
							<a href="javascript:CommonTransferWalletHandler.openDepositPage('4', 'MT5', '', '', '', '', false)">
								<img className="icon-mt5" src={TransparentGif} />
								MT5
							</a>
						</li>
					</ul>
					<div
						className="ps__scrollbar-x-rail"
						style={{ width: "360px", left: "0px", bottom: "0px" }}
					>
						<div
							className="ps__scrollbar-x"
							tabindex="0"
							style={{ left: "0px", width: "210px" }}
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
				<div className="wrap-highlight_list" id="inPlayData">
					<div id="inPlayEventType_4" style={{ display: "block" }}>
						<h3>Cricket</h3>
						<ul className="highlight-list" id="inPlayList_4">
							<li id="inPlayEvent_-10154959" className="inplay-on">
								<a id="info" href="match.php">
									<dl>
										<span style={{ color: "#6bbd11", fontSize: "small" }}>
											In-Play
										</span>
										<dt>
											<span id="streamingIcon" className="game-live">
												game-live
											</span>
											<span
												id="lowLiquidityTag"
												className="game-low_liq"
												style={{ display: "none" }}
											>
												Low Liquidity
											</span>
											<span id="fancyBetIcon" className="game-fancy">
												Fancy
											</span>
											<span id="bookMakerIcon" className="game-bookmaker">
												BookMaker
											</span>
											<span
												id="feedingSiteIcon"
												className="game-sportsbook"
												style={{ display: "none" }}
											>
												Sportsbook
											</span>
											<span
												id="sportsBookIcon_1"
												className="game-sportsbook"
												style={{ display: "none" }}
											>
												Premium Tennis
											</span>
											<span
												id="sportsBookIcon_2"
												className="game-sportsbook"
												style={{ display: "flex" }}
											>
												Premium Cricket
											</span>
											<span
												id="sportsBookEIcon_1"
												className="game-E"
												style={{ display: "none" }}
											>
												<i></i>Soccer
											</span>
											<span
												className="game-E"
												id="sportsBookEIcon_4"
												style={{ display: "none" }}
											>
												<i></i>Cricket
											</span>
											<span
												id="sportsBookEIcon_2"
												className="game-E"
												style={{ display: "none" }}
											>
												<i></i>Tennis
											</span>
										</dt>
										<dd id="eventName">Virtual Cricket</dd>
									</dl>
								</a>
								<a id="multiMarketPin" className="pin-off" href="#"></a>
							</li>
							<li id="inPlayEvent_-10154959" className="inplay-on">
								<a id="info" href="match.php">
									<dl>
										<span style={{ color: "#6bbd11", fontSize: "small" }}>
											In-Play
										</span>
										<dt>
											<span id="streamingIcon" className="game-live">
												game-live
											</span>
											<span
												id="lowLiquidityTag"
												className="game-low_liq"
												style={{ display: "none" }}
											>
												Low Liquidity
											</span>
											<span id="fancyBetIcon" className="game-fancy">
												Fancy
											</span>
											<span id="bookMakerIcon" className="game-bookmaker">
												BookMaker
											</span>
											<span
												id="feedingSiteIcon"
												className="game-sportsbook"
												style={{ display: "none" }}
											>
												Sportsbook
											</span>
											<span
												id="sportsBookIcon_1"
												className="game-sportsbook"
												style={{ display: "none" }}
											>
												Premium Tennis
											</span>
											<span
												id="sportsBookIcon_2"
												className="game-sportsbook"
												style={{ display: "flex" }}
											>
												Premium Cricket
											</span>
											<span
												id="sportsBookEIcon_1"
												className="game-E"
												style={{ display: "none" }}
											>
												<i></i>Soccer
											</span>
											<span className="game-E" id="sportsBookEIcon_4">
												<i></i>Cricket
											</span>
											<span
												id="sportsBookEIcon_2"
												className="game-E"
												style={{ display: "none" }}
											>
												<i></i>Tennis
											</span>
										</dt>
										<dd id="eventName">Bangladesh T10 v Australia T10</dd>
									</dl>
								</a>
								<a id="multiMarketPin" className="pin-off" href="#"></a>
							</li>
						</ul>
					</div>
					<div className="game_ban my-3">
						<a href="#">
							<img style={{ width: "100%" }} alt="" src={VirtualCricket} />
						</a>
					</div>
					<div id="inPlayEventType_1" style={{ display: "block" }}>
						<h3>Soccer</h3>
						<ul className="highlight-list" id="inPlayList_1">
							<li id="inPlayEvent_-10154959" className="inplay-on">
								<a id="info" href="match.php">
									<dl>
										<span style={{ color: "#6bbd11", fontSize: "small" }}>
											In-Play
										</span>
										<span style={{ color: "darkgray", fontSize: "small" }}>
											<dt>
												<span id="streamingIcon" className="game-live">
													game-live
												</span>
												<span
													id="lowLiquidityTag"
													className="game-low_liq"
													style={{ display: "none" }}
												>
													Low Liquidity
												</span>
												<span
													id="fancyBetIcon"
													className="game-fancy in-play"
													style={{ display: "flex" }}
												>
													<pre>in-play</pre>Fancy
												</span>
												<span
													id="bookMakerIcon"
													className="game-bookmaker"
													style={{ display: "none" }}
												>
													BookMaker
												</span>
												<span
													id="feedingSiteIcon"
													className="game-sportsbook"
													style={{ display: "none" }}
												>
													Sportsbook
												</span>
												<span
													id="sportsBookIcon_1"
													className="game-sportsbook"
													style={{ display: "none" }}
												>
													Premium Tennis
												</span>

												<span className="game-E" id="sportsBookEIcon_1">
													<i></i>Soccer
												</span>
												<span
													id="sportsBookEIcon_4"
													className="game-E"
													style={{ display: "none" }}
												>
													<i></i>Cricket
												</span>
												<span
													id="sportsBookEIcon_2"
													className="game-E"
													style={{ display: "none" }}
												>
													<i></i>Tennis
												</span>
											</dt>
											<dd id="eventName">Virtual Football Bungesliga </dd>
										</span>
									</dl>
								</a>
								<a id="multiMarketPin" className="pin-off"></a>
							</li>
							<li id="inPlayEvent_-10154959" className="inplay-on">
								<a id="info" href="match.php">
									<dl>
										<span style={{ color: "#6bbd11", fontSize: "small" }}>
											In-Play
										</span>
										<span style={{ color: "darkgray", fontSize: "small" }}>
											<dt>
												<span id="streamingIcon" className="game-live">
													game-live
												</span>
												<span
													id="lowLiquidityTag"
													className="game-low_liq"
													style={{ display: "none" }}
												>
													Low Liquidity
												</span>
												<span
													id="fancyBetIcon"
													className="game-fancy in-play"
													style={{ display: "flex" }}
												>
													<pre>in-play</pre>Fancy
												</span>
												<span
													id="bookMakerIcon"
													className="game-bookmaker"
													style={{ display: "none" }}
												>
													BookMaker
												</span>
												<span
													id="feedingSiteIcon"
													className="game-sportsbook"
													style={{ display: "none" }}
												>
													Sportsbook
												</span>
												<span
													id="sportsBookIcon_1"
													className="game-sportsbook"
													style={{ display: "none" }}
												>
													Premium Tennis
												</span>

												<span className="game-E" id="sportsBookEIcon_1">
													<i></i>Soccer
												</span>
												<span
													id="sportsBookEIcon_4"
													className="game-E"
													style={{ display: "none" }}
												>
													<i></i>Cricket
												</span>
												<span
													id="sportsBookEIcon_2"
													className="game-E"
													style={{ display: "none" }}
												>
													<i></i>Tennis
												</span>
											</dt>
											<dd id="eventName">Virtual Football English League </dd>
										</span>
									</dl>
								</a>
								<a id="multiMarketPin" className="pin-off"></a>
							</li>
						</ul>
					</div>
					<div id="inPlayEventType_2" style={{ display: "block" }}>
						<h3>Tennis</h3>
						<ul className="highlight-list" id="inPlayList_2">
							<li id="inPlayEvent_-10154959" className="inplay-on">
								<a id="info" href="match.php">
									<dl>
										<span style={{ color: "#6bbd11", fontSize: "small" }}>
											In-Play
										</span>
										<span style={{ color: "darkgray", fontSize: "small" }}>
											<dt>
												<span id="streamingIcon" className="game-live">
													game-live
												</span>
												<span
													id="lowLiquidityTag"
													className="game-low_liq"
													style={{ display: "none" }}
												>
													Low Liquidity
												</span>
												<span
													id="fancyBetIcon"
													className="game-fancy in-play"
													style={{ display: "flex" }}
												>
													<pre>in-play</pre>Fancy
												</span>
												<span
													id="bookMakerIcon"
													className="game-bookmaker"
													style={{ display: "none" }}
												>
													BookMaker
												</span>
												<span
													id="feedingSiteIcon"
													className="game-sportsbook"
													style={{ display: "none" }}
												>
													Sportsbook
												</span>
												<span
													id="sportsBookIcon_1"
													className="game-sportsbook"
													style={{ display: "none" }}
												>
													Premium Tennis
												</span>

												<span className="game-E" id="sportsBookEIcon_1">
													<i></i>Tennis
												</span>
												<span
													id="sportsBookEIcon_4"
													className="game-E"
													style={{ display: "none" }}
												>
													<i></i>Cricket
												</span>
												<span
													id="sportsBookEIcon_2"
													className="game-E"
													style={{ display: "none" }}
												>
													<i></i>Tennis
												</span>
											</dt>
											<dd id="eventName">Virtual Tennis </dd>{" "}
										</span>
									</dl>
								</a>
								<a id="multiMarketPin" className="pin-off"></a>
							</li>
						</ul>
					</div>
					<div id="inPlayEventType_2" style={{ display: "block" }}>
						<h3>GreyHound Racing </h3>
						<ul className="highlight-list" id="inPlayList_2">
							<li id="inPlayEvent_-10154959" className="inplay-on">
								<a id="info" href="match.php">
									<dl>
										<span style={{ color: "#6bbd11", fontSize: "small" }}>
											In-Play
										</span>
										<span style={{ color: "darkgray", fontSize: "small" }}>
											<dt>
												<span id="streamingIcon" className="game-live">
													game-live
												</span>
												<span
													id="lowLiquidityTag"
													className="game-low_liq"
													style={{ display: "none" }}
												>
													Low Liquidity
												</span>
												<span
													id="fancyBetIcon"
													className="game-fancy in-play"
													style={{ display: "flex" }}
												>
													<pre>in-play</pre>Fancy
												</span>
												<span
													id="bookMakerIcon"
													className="game-bookmaker"
													style={{ display: "none" }}
												>
													BookMaker
												</span>
												<span
													id="feedingSiteIcon"
													className="game-sportsbook"
													style={{ display: "none" }}
												>
													Sportsbook
												</span>
												<span
													id="sportsBookIcon_1"
													className="game-sportsbook"
													style={{ display: "none" }}
												>
													Premium Tennis
												</span>
											</dt>
											<dd id="eventName">Virtual Dog </dd>{" "}
										</span>
									</dl>
								</a>
								<a id="multiMarketPin" className="pin-off"></a>
							</li>
						</ul>
					</div>
					<div id="inPlayEventType_2" style={{ display: "block" }}>
						<h3>Virtual Basket Ball</h3>
						<ul className="highlight-list" id="inPlayList_2">
							<li id="inPlayEvent_-10154959" className="inplay-on">
								<a id="info" href="match.php">
									<dl>
										<span style={{ color: "#6bbd11", fontSize: "small" }}>
											In-Play
										</span>
										<span style={{ color: "darkgray", fontSize: "small" }}>
											<dt>
												<span id="streamingIcon" className="game-live">
													game-live
												</span>
												<span
													id="lowLiquidityTag"
													className="game-low_liq"
													style={{ display: "none" }}
												>
													Low Liquidity
												</span>
												<span
													id="fancyBetIcon"
													className="game-fancy in-play"
													style={{ display: "flex" }}
												>
													<pre>in-play</pre>Fancy
												</span>
												<span
													id="bookMakerIcon"
													className="game-bookmaker"
													style={{ display: "none" }}
												>
													BookMaker
												</span>
												<span
													id="feedingSiteIcon"
													className="game-sportsbook"
													style={{ display: "none" }}
												>
													Sportsbook
												</span>
												<span
													id="sportsBookIcon_1"
													className="game-sportsbook"
													style={{ display: "none" }}
												>
													Premium Tennis
												</span>
											</dt>
											<dd id="eventName">Virtual Basket Ball </dd>{" "}
										</span>
									</dl>
								</a>
								<a id="multiMarketPin" className="pin-off"></a>
							</li>
						</ul>
					</div>
					<div id="inPlayEventType_2" style={{ display: "block" }}>
						<h3>Virtual Horse Racing</h3>
						<ul className="highlight-list" id="inPlayList_2">
							<li id="inPlayEvent_-10154959" className="inplay-on">
								<a id="info" href="match.php">
									<dl>
										<span style={{ color: "#6bbd11", fontSize: "small" }}>
											In-Play
										</span>
										<span style={{ color: "darkgray", fontSize: "small" }}>
											<dt>
												<span id="streamingIcon" className="game-live">
													game-live
												</span>
												<span
													id="lowLiquidityTag"
													className="game-low_liq"
													style={{ display: "none" }}
												>
													Low Liquidity
												</span>
												<span
													id="fancyBetIcon"
													className="game-fancy in-play"
													style={{ display: "flex" }}
												>
													<pre>in-play</pre>Fancy
												</span>
												<span
													id="bookMakerIcon"
													className="game-bookmaker"
													style={{ display: "none" }}
												>
													BookMaker
												</span>
												<span
													id="feedingSiteIcon"
													className="game-sportsbook"
													style={{ display: "none" }}
												>
													Sportsbook
												</span>
												<span
													id="sportsBookIcon_1"
													className="game-sportsbook"
													style={{ display: "none" }}
												>
													Premium Tennis
												</span>
											</dt>
											<dd id="eventName">Virtual Horse Racing </dd>{" "}
										</span>
									</dl>
								</a>
								<a id="multiMarketPin" className="pin-off"></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
export default Index;
