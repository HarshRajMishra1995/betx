import React from "react";
import Header from "../Header";
import Slider from "../Slider";
import Footer from "../Footer";
import "./home2.css";
import "./sports.css";
import TransparentGif from "./images/transparent.gif";

function index() {
	return (
		<>
			<Header />
			<Slider />
			<div className="mian-wrap">
				<div id="highlightLabel" className="highlight-fix">
					<a
						className="a-search"
						href="#"
						onclick="javascript:MobileSearchEventHandler.openSearchWrap();"
					>
						Search
					</a>
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
				</div>
				<div className="wrap-highlight_list">
					<h3>Highlights</h3>
					<ul id="highlightList" className="highlight-list">
						<li id="noDatali" style={{ display: "none" }}>
							There are no events to be displayed.
						</li>
						<li id="highLightEventTemplate" style={{ display: "none" }}>
							<a id="info" href="#">
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											className="game-fancy"
											style={{ display: "none" }}
										>
											Fancy
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
										<span
											id="sportsBookIcon_2"
											className="game-sportsbook"
											style={{ display: "none" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" className="time">
											In-Play
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
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
									<dd id="eventName"></dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_-10154695" className="inplay-on">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=-10154695&amp;marketId=-10154727",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "flex" }}
										>
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
											className="game-bookmaker in-play"
											style={{ display: "flex" }}
										>
											<pre>in-play</pre>BookMaker
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
											style={{ display: "none" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" class="time">
											In-Play
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
											<i></i>Soccer
										</span>
										<span
											id="sportsBookEIcon_4"
											className="game-E"
											style={{ display: "flex" }}
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
									<dd id="eventName">
										Hyderabad T10 (Virtual) vs Rajasthan T10 (Virtual)
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_-10154745" className="inplay-on">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=-10154745&amp;marketId=-10154777",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											className="game-fancy"
											style={{ display: "none" }}
										>
											Fancy
										</span>
										<span
											id="bookMakerIcon"
											className="game-bookmaker in-play"
											style={{ display: "flex" }}
										>
											<pre>in-play</pre>BookMaker
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
										<span id="dateTimeInfo" className="time">
											In-Play
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
											<i></i>Soccer
										</span>
										<span
											id="sportsBookEIcon_4"
											className="game-E"
											style={{ display: "flex" }}
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
									<dd id="eventName">
										Sunrisers Hyderabad SRL T20 vs Chennai Super Kings SRL T20
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_-10154776" className="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=-10154776&amp;marketId=-10154808",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											className="game-fancy"
											style={{ display: "none" }}
										>
											Fancy
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
										<span
											id="sportsBookIcon_2"
											className="game-sportsbook"
											style={{ display: "flex" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" className="time">
											15:00
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
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
									<dd id="eventName">
										Kolkata Heroes vs Krishnanagar Challengers
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_-10154696" className="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=-10154696&amp;marketId=-10154728",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "flex" }}
										>
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
											className="game-bookmaker in-play"
											style={{ display: "flex" }}
										>
											<pre>in-play</pre>BookMaker
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
											style={{ display: "none" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" className="time">
											{" "}
											16:00
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
											<i></i>Soccer
										</span>
										<span
											id="sportsBookEIcon_4"
											className="game-E"
											style={{ display: "flex" }}
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
									<dd id="eventName">
										Punjab T10 (Virtual) vs Delhi T10 (Virtual)
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_-10154746" className="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=-10154746&amp;marketId=-10154778",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											className="game-fancy"
											style={{ display: "none" }}
										>
											Fancy
										</span>
										<span
											id="bookMakerIcon"
											className="game-bookmaker"
											style={{ display: "flex" }}
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
										<span
											id="sportsBookIcon_2"
											className="game-sportsbook"
											style={{ display: "flex" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" class="time">
											{" "}
											17:00
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
											<i></i>Soccer
										</span>
										<span
											id="sportsBookEIcon_4"
											className="game-E"
											style={{ display: "flex" }}
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
									<dd id="eventName">
										Kolkata Knight Riders SRL T20 vs Delhi Capitals SRL T20
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_-10154697" className="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=-10154697&amp;marketId=-10154729",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "flex" }}
										>
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
											className="game-bookmaker in-play"
											style={{ display: "flex" }}
										>
											<pre>in-play</pre>BookMaker
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
											style={{ display: "none" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" class="time">
											{" "}
											17:00
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
											<i></i>Soccer
										</span>
										<span
											id="sportsBookEIcon_4"
											className="game-E"
											style={{ display: "flex" }}
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
									<dd id="eventName">
										Rajasthan T10 (Virtual) vs Bangalore T10 (Virtual)
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_30901498" className="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=30901498&amp;marketId=1.187651294",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											style={{ display: "flex" }}
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
										<span
											id="sportsBookIcon_2"
											className="game-sportsbook"
											style={{ display: "none" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" class="time">
											{" "}
											18:30
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
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
									<dd id="eventName">
										Scotland <span>v</span> Zimbabwe
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_-10154777" className="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=-10154777&amp;marketId=-10154809",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											className="game-fancy"
											style={{ display: "none" }}
										>
											Fancy
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
										<span
											id="sportsBookIcon_2"
											className="game-sportsbook"
											style={{ display: "flex" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" className="time">
											{" "}
											19:00
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
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
									<dd id="eventName">
										Kanchenjunga Warriors vs Kharagpur Blasters
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_30904347" className="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=30904347&amp;marketId=1.187694209",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											style={{ display: "flex" }}
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
										<span
											id="sportsBookIcon_2"
											className="game-sportsbook"
											style={{ display: "flex" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" className="time">
											{" "}
											19:30
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
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
									<dd id="eventName">
										St Lucia Kings <span>v</span> St Kitts &amp; Nevis Patriots
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_30903382" className="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=30903382&amp;marketId=1.187679258",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											className="game-fancy"
											style={{ display: "none" }}
										>
											Fancy
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
										<span
											id="sportsBookIcon_2"
											className="game-sportsbook"
											style={{ display: "flex" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" className="time">
											Tomorrow 16:00
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
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
									<dd id="eventName">
										Oman <span>v</span> USA
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_30890094" className="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=30890094&amp;marketId=1.187511328",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											className="game-fancy"
											style={{ display: "flex" }}
										>
											Fancy
										</span>
										<span
											id="bookMakerIcon"
											className="game-bookmaker"
											style={{ display: "flex" }}
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
										<span
											id="sportsBookIcon_2"
											className="game-sportsbook"
											style={{ display: "flex" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" className="time">
											Tomorrow 17:30
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
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
									<dd id="eventName">
										England Women <span>v</span> New Zealand Women
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_30902229" className="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=30902229&amp;marketId=1.187653857",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											style={{ display: "flex" }}
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
										<span
											id="sportsBookIcon_2"
											className="game-sportsbook"
											style={{ display: "flex" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" className="time">
											Tomorrow 19:30
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
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
									<dd id="eventName">
										West Indies Women <span>v</span> South Africa Women
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_30903470" class="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=30903470&amp;marketId=1.187680593",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											className="game-fancy"
											style={{ display: "none" }}
										>
											Fancy
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
										<span
											id="sportsBookIcon_2"
											className="game-sportsbook"
											style={{ display: "none" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" className="time">
											2021-09-17 15:00
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
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
									<dd id="eventName">
										England U19 <span>v</span> West Indies U19
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_-10154497" className="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=-10154497&amp;marketId=-10154529",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											className="game-fancy"
											style={{ display: "none" }}
										>
											Fancy
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
										<span
											id="sportsBookIcon_2"
											className="game-sportsbook"
											style={{ display: "none" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" className="time">
											2021-09-17 15:00
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
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
									<dd id="eventName">
										Northern Knights vs North-west Warriors
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_30890303" className="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=30890303&amp;marketId=1.187515889",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											className="game-fancy"
											style={{ display: "flex" }}
										>
											Fancy
										</span>
										<span
											id="bookMakerIcon"
											className="game-bookmaker"
											style={{ display: "flex" }}
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
										<span
											id="sportsBookIcon_2"
											className="game-sportsbook"
											style={{ display: "flex" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" className="time">
											2021-09-17 15:00
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
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
									<dd id="eventName">
										Pakistan <span>v</span> New Zealand
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_-10154498" className="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=-10154498&amp;marketId=-10154530",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											className="game-fancy"
											style={{ display: "none" }}
										>
											Fancy
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
										<span
											id="sportsBookIcon_2"
											className="game-sportsbook"
											style={{ display: "flex" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" className="time">
											2021-09-17 19:30
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
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
									<dd id="eventName">Leinster Lightning vs Munster Reds</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_30902233" className="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=30902233&amp;marketId=1.187684118",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											className="game-fancy"
											style={{ display: "none" }}
										>
											Fancy
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
										<span
											id="sportsBookIcon_2"
											className="game-sportsbook"
											style={{ display: "flex" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" className="time">
											2021-09-18 15:00
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
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
									<dd id="eventName">
										Lightning <span>v</span> Central Sparks
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_30902234" className="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=30902234&amp;marketId=1.187684122",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											className="game-fancy"
											style={{ display: "none" }}
										>
											Fancy
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
										<span
											id="sportsBookIcon_2"
											className="game-sportsbook"
											style={{ display: "none" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" className="time">
											2021-09-18 15:00
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
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
									<dd id="eventName">
										South East Stars <span>v</span> Thunder
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_30902247" className="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=30902247&amp;marketId=1.187684146",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											className="game-fancy"
											style={{ display: "none" }}
										>
											Fancy
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
										<span
											id="sportsBookIcon_2"
											className="game-sportsbook"
											style={{ display: "flex" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" className="time">
											2021-09-18 15:00
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
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
									<dd id="eventName">
										Southern Vipers <span>v</span> Northern Diamonds
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_30902235" className="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=30902235&amp;marketId=1.187684275",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											className="game-fancy"
											style={{ display: "none" }}
										>
											Fancy
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
										<span
											id="sportsBookIcon_2"
											className="game-sportsbook"
											style={{ display: "flex" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" className="time">
											2021-09-18 15:00
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
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
									<dd id="eventName">
										Western Storm <span>v</span> Sunrisers
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_30854350" className="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=30854350&amp;marketId=1.187096623",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											className="game-fancy"
											style={{ display: "flex" }}
										>
											Fancy
										</span>
										<span
											id="bookMakerIcon"
											className="game-bookmaker"
											style={{ display: "flex" }}
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
										<span
											id="sportsBookIcon_2"
											className="game-sportsbook"
											style={{ display: "flex" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" className="time">
											2021-09-18 15:30
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
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
									<dd id="eventName">
										Hampshire <span>v</span> Somerset
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_30854352" className="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=30854352&amp;marketId=1.187096748",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											className="game-fancy"
											style={{ display: "none" }}
										>
											Fancy
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
										<span
											id="sportsBookIcon_2"
											className="game-sportsbook"
											style={{ display: "flex" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" className="time">
											2021-09-18 19:00
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
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
									<dd id="eventName">
										Kent <span>v</span> Sussex
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_30792003" className="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=30792003&amp;marketId=1.186381181",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											className="game-fancy"
											style={{ display: "flex" }}
										>
											Fancy
										</span>
										<span
											id="bookMakerIcon"
											className="game-bookmaker"
											style={{ display: "flex" }}
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
										<span
											id="sportsBookIcon_2"
											className="game-sportsbook"
											style={{ display: "flex" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" className="time">
											2021-09-19 19:30
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
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
									<dd id="eventName">
										Chennai Super Kings <span>v</span> Mumbai Indians
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_30792006" className="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=30792006&amp;marketId=1.186382725",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											className="game-fancy"
											style={{ display: "flex" }}
										>
											Fancy
										</span>
										<span
											id="bookMakerIcon"
											className="game-bookmaker"
											style={{ display: "flex" }}
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
										<span
											id="sportsBookIcon_2"
											className="game-sportsbook"
											style={{ display: "flex" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" className="time">
											2021-09-20 19:30
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
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
									<dd id="eventName">
										Kolkata Knight Riders <span>v</span> Royal Challengers
										Bangalore
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
						<li id="highlightEvent_30792007" className="inplay-off">
							<a
								id="info"
								href='javascript:MobileMenuHandler.loadPage("fullMarket.jsp?eventType=4&amp;eventId=30792007&amp;marketId=1.186384374",true)'
							>
								<dl>
									<dt>
										<span
											id="streamingIcon"
											className="game-live"
											style={{ display: "none" }}
										>
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
											className="game-fancy"
											style={{ display: "flex" }}
										>
											Fancy
										</span>
										<span
											id="bookMakerIcon"
											className="game-bookmaker"
											style={{ display: "flex" }}
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
										<span
											id="sportsBookIcon_2"
											className="game-sportsbook"
											style={{ display: "flex" }}
										>
											Premium Cricket
										</span>
										<span id="dateTimeInfo" className="time">
											2021-09-21 19:30
										</span>
										<span
											id="sportsBookEIcon_1"
											className="game-E"
											style={{ display: "none" }}
										>
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
									<dd id="eventName">
										Punjab Kings <span>v</span> Rajasthan Royals
									</dd>
								</dl>
							</a>
							<a id="multiMarketPin" className="pin-off" href="#"></a>
						</li>
					</ul>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default index;
