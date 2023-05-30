import React from "react";
import Header from "../Header";
import Slider from "../Slider";
import Footer from "../Footer";
import "./home.css";
import Image from "./images/banner_sports.png";
import BannerSaba from "./images/banner_SabaSport.png";
import BannerAeIndia from "./images/banner_AEIndia-half.png";
import BannerCasino from "./images/banner_casino-half.png";
import BannerBetGames from "./images/banner_betgames-half.png";
import BannerAndarBahar from "./images/banner_andarBahar-half.png";
import BannerSicbo from "./images/banner_sicbo-half.png";
import BannerSevenUpDown from "./images/banner_sevenUpDown-half.png";
import BannerCoinToss from "./images/banner_CoinToss-half.png";
import BannerTeenPatti from "./images/banner_teenPatti-half.png";
import BannerCardMatka from "./images/banner_cardMatka-half.png";
import BannerNumberMatka from "./images/banner_numberMatka-half.png";
import BannerBinaryHalf from "./images/banner-binary-half-landing.png";
import BannerVirtualSport from "./images/banner_virtualsports-half.png";
import BannerBPoker from "./images/banner_bpoker-half.png";
import TransparentGif from "./images/transparent.gif";
import BtnAppDlAndroid from "./images/btn-appdl-android.png";
import SupperOffer from "./images/super-offer.png";

function index() {
	return (
		<>
			<Header />
			<Slider />
			{/* <!-- main content --> */}

			<div className="mian-wrap">
				<div className="gamehall">
					<a>
						<dl className="entrance-title">
							<dt>Sports</dt>
							<dd>
								<span>Play Now</span>
							</dd>
						</dl>
						<dl id="onLiveBoard" className="on_live">
							<dt>
								<p className="live_icon">
									<span></span> LIVE
								</p>
							</dt>
							<dd id="onLiveCount_CRICKET">
								<p>Cricket</p>
								<span id="count">2</span>
							</dd>

							<dd id="onLiveCount_SOCCER">
								<p>Soccer</p>
								<span id="count">0</span>
							</dd>

							<dd id="onLiveCount_TENNIS">
								<p>Tennis</p>
								<span id="count">2</span>
							</dd>
						</dl>
						<img src={Image} alt="" draggable="false" />
					</a>

					{/* <!-- SABA sports --> */}

					<a style={{ cursor: "pointer" }}>
						<dl className="entrance-title">
							<dt>Saba Sports Book</dt>
							<dd>
								<span>Play Now</span>
							</dd>
						</dl>
						<img src={BannerSaba} alt="" draggable="false"></img>
					</a>

					{/* <!-- SABA sports kabaddi --> */}

					<a
						className="entrance-half"
						href="javascript:AwcTransferWalletHandler.openDepositPage('TEEN PATTI','SEXYBCRT', '', 'SEXYBCRT_MX_LIVE_001', 'EMPEROR',true)"
					>
						<dl class="entrance-title">
							<dt>AE India</dt>
							<dd>
								<span>Play Now</span>
							</dd>
						</dl>
						<img src={BannerAeIndia} alt="" draggable="false" />
					</a>
					<a
						class="entrance-half"
						href="javascript:AwcTransferWalletHandler.openDepositPage('Casino', '','','','',false)"
					>
						<dl class="entrance-title">
							<dt>Live Casino</dt>
							<dd>
								<span>Play Now</span>
							</dd>
						</dl>
						<img src={BannerCasino} alt="" draggable="false" />
					</a>

					{/* <!-- BetGames --> */}
					<a
						className="entrance-half"
						href="javascript:AwcTransferWalletHandler.openDepositPage('BetGames','BETGAMES', '','BETGAME_BACCARAT','',true)"
						style={{ cursor: "pointer" }}
					>
						<dl class="entrance-title">
							<dt>BetGames</dt>
							<dd>
								<span>Play Now</span>
							</dd>
						</dl>
						<img src={BannerBetGames} alt="" draggable="false" />
					</a>

					{/* <!-- KM Andar Bahar --> */}

					<a
						className="entrance-half"
						href="javascript:AwcTransferWalletHandler.openDepositPage('Andar Bahar','KINGMAKER', '','KM_ANDAR_BAHAR','',true)"
						style={{ cursor: "pointer" }}
					>
						<dl className="entrance-title">
							<dt>Andar Bahar</dt>
							<dd>
								<span>Play Now</span>
							</dd>
						</dl>
						<img src={BannerAndarBahar} alt="" draggable="false" />
					</a>

					{/* <!-- KM_Sicbo --> */}

					<a
						className="entrance-half"
						href="javascript:AwcTransferWalletHandler.openDepositPage('Sicbo','KINGMAKER', '','KM_SICBO','',true)"
						style={{ cursor: "pointer" }}
					>
						<dl className="entrance-title">
							<dt>Sicbo</dt>
							<dd>
								<span>Play Now</span>
							</dd>
						</dl>
						<img src={BannerSicbo} alt="" draggable="false" />
					</a>

					{/* <!-- KM_7up7down --> */}

					<a
						className="entrance-half"
						href="javascript:AwcTransferWalletHandler.openDepositPage('7 UP 7 Down','KINGMAKER', '','KM_7UP_7DOWN','',true)"
						style={{ cursor: "pointer" }}
					>
						<dl className="entrance-title">
							<dt>7 UP 7 Down</dt>
							<dd>
								<span>Play Now</span>
							</dd>
						</dl>
						<img src={BannerSevenUpDown} alt="" draggable="false" />
					</a>

					<a className="entrance-half" style={{ cursor: "pointer" }}>
						<dl className="entrance-title">
							<dt>Coin Toss</dt>
							<dd>
								<span>Play Now</span>
							</dd>
						</dl>
						<img src={BannerCoinToss} alt="" draggable="false" />
					</a>

					{/* <!-- Teen Patti --> */}

					<a
						className="entrance-half"
						href="javascript:AwcTransferWalletHandler.openDepositPage('Teen Patti','JILI', '','JILI_TEEN_PATTI','',true)"
						style={{ cursor: "pointer" }}
					>
						<dl className="entrance-title">
							<dt>Teen Patti</dt>
							<dd>
								<span>Play Now</span>
							</dd>
						</dl>
						<img src={BannerTeenPatti} alt="" draggable="false" />
					</a>

					<a
						class="entrance-half"
						href="javascript:AwcTransferWalletHandler.openDepositPage('KingMaker','KINGMAKER', '','KM_CARD_MATKA','',true)"
						style={{ cursor: "pointer" }}
					>
						<dl class="entrance-title">
							<dt>Card Matka</dt>
							<dd>
								<span>Play Now</span>
							</dd>
						</dl>
						<img src={BannerCardMatka} alt="" draggable="false" />
					</a>

					<a
						className="entrance-half"
						href="javascript:AwcTransferWalletHandler.openDepositPage('KingMaker','KINGMAKER', '','KM_CARD_MATKA','',true)"
						style={{ cursor: "pointer" }}
					>
						<dl class="entrance-title">
							<dt>Number Matka</dt>
							<dd>
								<span>Play Now</span>
							</dd>
						</dl>
						<img src={BannerNumberMatka} alt="" draggable="false" />
					</a>
					<a className="entrance-half mobile-img">
						<dl className="entrance-title">
							<dt>Binary</dt>
							<dd>
								<span>Play Now</span>
							</dd>
						</dl>
						<img src={BannerBinaryHalf} alt="" draggable="false" />
					</a>

					<a
						className="entrance-half"
						href="javascript:AwcTransferWalletHandler.openDepositPage('BetRadar','SPORTRADAR', '', 'SPORTRADAR_VIRTUAL_001','',true)"
					>
						<dl className="entrance-title">
							<dt>Virtual Sports</dt>
							<dd>
								<span>Play Now</span>
							</dd>
						</dl>
						<img src={BannerVirtualSport} alt="" draggable="false" />
					</a>

					<a className="entrance-half" id="pokerLoginBtn">
						<dl className="entrance-title">
							<dt>Bpoker</dt>
							<dd>
								<span>Play Now</span>
							</dd>
						</dl>
						<img src={BannerBPoker} alt="" draggable="false" />
					</a>
				</div>
				<div id="supportWrap" className="support-wrap">
					<div className="support-service">
						<a id="support_email" class="support-mail open">
							<img src={TransparentGif} title="Email" />
						</a>
						<a id="support_whatsapp" class="support-whatsapp">
							<img src={TransparentGif} title="WhatsApp" />
						</a>

						<a id="support_telegram" class="support-telegram">
							<img src={TransparentGif} title="Telegram" />
						</a>

						<a id="support_skype" class="support-skype">
							<img src={TransparentGif} title="Skype" />
						</a>

						<a id="support_instagram" class="support-ig">
							<img src={TransparentGif} title="Instagram" />
						</a>
					</div>
					<div className="support-info">
						<div id="supportDetail_email" className="support-detail open">
							<a href="mailto:info@skyexchange.com">
								<span>info@skyexchange.com</span>
							</a>
						</div>
						<div id="supportDetail_whatsapp" className="support-detail">
							<a href="https://api.whatsapp.com/send?phone=351913343771">
								<span>+351913343771</span>
							</a>

							<a href="https://api.whatsapp.com/send?phone=351912085916">
								<span>+351912085916</span>
							</a>
						</div>
						<div id="supportDetail_telegram" className="support-detail">
							<a href="https://www.t.me/officialskyexchangeinfo">
								<span>www.t.me/officialskyexchangeinfo</span>
							</a>

							<a href="https://www.t.me/skyexchangecustomersupport">
								<span>www.t.me/skyexchangecustomersupport</span>
							</a>
						</div>

						<div id="supportDetail_skype" className="support-detail">
							<a href="skype:skyexchangeofficial?chat">
								<span>skyexchangeofficial</span>
							</a>
						</div>

						<div id="supportDetail_instagram" className="support-detail">
							<a
								href="https://www.instagram.com/officialskyexchange"
								class="ui-link"
							>
								<span>officialskyexchange</span>
							</a>
						</div>
					</div>
				</div>
				<ul className="policy-link">
					<li>
						<a href="javascript:MobileLoginHandler.showOverlayInfo('#footer-policy');">
							Privacy Policy
						</a>
					</li>
					<li>
						<a href="javascript:MobileLoginHandler.showOverlayInfo('#footer-gtc');">
							Terms and Conditions
						</a>
					</li>
					<li>
						<a href="javascript:MobileLoginHandler.showOverlayInfo('#footer-rar');">
							Rules and Regulations
						</a>
					</li>
					<li>
						<a href="javascript:MobileLoginHandler.showOverlayInfo('#footer-kyc');">
							KYC
						</a>
					</li>
					<li>
						<a href="javascript:MobileLoginHandler.showOverlayInfo('#footer-rg');">
							Responsible Gaming
						</a>
					</li>

					<li>
						<a href="javascript:MobileLoginHandler.showOverlayInfo('#footer-au');">
							About Us
						</a>
					</li>
					<li>
						<a href="javascript:MobileLoginHandler.showOverlayInfo('#footer-SkyExSep');">
							Self-Exclusion Policy
						</a>
					</li>
					<li>
						<a href="javascript:MobileLoginHandler.showOverlayInfo('#footer-SkyUnP');">
							Underage Policy
						</a>
					</li>
				</ul>
				<div className="extra-wrap">
					<div
						id="powerWrap"
						className="power-wrap-b"
						style={{ display: "block" }}
					>
						<span>Powered by</span>
						<img src={TransparentGif} />
					</div>
					<div class="appdl-link-android" style={{ display: "block" }}>
						<a target="_blank" href="/exchange/mobile/member/downloadApp.jsp">
							<img src={BtnAppDlAndroid} alt="" />
						</a>
						<p>v1.07 - 2020-11-11 - 8.2MB</p>
					</div>
				</div>
			</div>

			{/* <!-- left-side sticky start --> */}
			<div class="sticky-left-container">
				<ul class="sticky-left">
					<li>
						<a href="/exchange/Account/Dviewwinners">
							<img
								class="star"
								width="32"
								height="32"
								title=""
								alt="offer-icon"
								src={SupperOffer}
							/>
							<p>Betx365 Offer</p>
						</a>
					</li>
				</ul>
			</div>
			{/* <!-- left-side sticky ends --> */}
			<Footer />
		</>
	);
}

export default index;
