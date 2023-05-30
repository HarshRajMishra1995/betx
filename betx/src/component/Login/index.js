/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./login.css";
import TransparentGif from "./images/transparent.gif";

function index() {
	return (
		<>
			<header className="login-head">
				<a href="/" className="close ui-link"></a>
				<h1>SKYEXCHANGE</h1>
				<div id="powerWrap" className="betfair-wrap">
					<p>Powered by</p>
					<span></span>
				</div>
			</header>
			<dl className="form-login">
				<dd id="loginNameErrorClass">
					<input
						type="email"
						id="loginName"
						data-role="none"
						placeholder="Username"
					/>
				</dd>
				<dd id="passwordErrorClass">
					<input
						type="password"
						id="password"
						data-role="none"
						placeholder="Password"
					/>
				</dd>

				<dd id="validCodeErrorClass">
					<input
						type="text"
						id="validCode"
						pattern="[0-9]*"
						data-role="none"
						placeholder="Validation Code"
						autocomplete="off"
						inputmode="numeric"
					/>{" "}
					<img
						id="authenticateImage"
						src="https://bxawscf.skyexch.com/verifycode.gr?v=1630928369129"
						alt=""
					/>
				</dd>
				<dd>
					<input
						name="valid"
						type="hidden"
						id="valid"
						value="8fca3c80-8f4d-40d8-8740-63d819dda9dc"
					/>
				</dd>
				<dd>
					<a className="btn-send ui-link" id="loginBtn">
						Login
					</a>
				</dd>
				<dd id="errorMsg" className="state"></dd>
			</dl>
			<ul className="policy-link" style={{ display: "block" }}>
				<li>
					<a
						href="javascript:MobileLoginHandler.showOverlayInfo('#footer-policy');"
						className="ui-link"
					>
						Privacy Policy
					</a>
				</li>
				<li>
					<a
						href="javascript:MobileLoginHandler.showOverlayInfo('#footer-gtc');"
						className="ui-link"
					>
						Terms and Conditions
					</a>
				</li>
				<li>
					<a
						href="javascript:MobileLoginHandler.showOverlayInfo('#footer-rar');"
						className="ui-link"
					>
						Rules and Regulations
					</a>
				</li>
				<li>
					<a
						href="javascript:MobileLoginHandler.showOverlayInfo('#footer-kyc');"
						className="ui-link"
					>
						KYC
					</a>
				</li>
				<li>
					<a
						href="javascript:MobileLoginHandler.showOverlayInfo('#footer-rg');"
						className="ui-link"
					>
						Responsible Gaming
					</a>
				</li>

				<li>
					<a
						href="javascript:MobileLoginHandler.showOverlayInfo('#footer-au');"
						className="ui-link"
					>
						About Us
					</a>
				</li>
				<li>
					<a
						href="javascript:MobileLoginHandler.showOverlayInfo('#footer-SkyExSep');"
						className="ui-link"
					>
						Self-Exclusion Policy
					</a>
				</li>
				<li>
					<a
						href="javascript:MobileLoginHandler.showOverlayInfo('#footer-SkyUnP');"
						className="ui-link"
					>
						Underage Policy
					</a>
				</li>
			</ul>
			<div id="supportWrap" className="support-wrap">
				<div className="support-service">
					<a id="support_email" href="#" className="support-mail ui-link open">
						<img src={TransparentGif} title="Email" />
					</a>
					<a
						id="support_whatsapp"
						href="#"
						className="support-whatsapp ui-link"
					>
						<img src={TransparentGif} title="WhatsApp" />
					</a>
					<a
						id="support_telegram"
						href="#"
						className="support-telegram ui-link"
					>
						<img src={TransparentGif} title="Telegram" />
					</a>
					<a id="support_skype" href="#" className="support-skype ui-link">
						<img src={TransparentGif} title="Skype" />
					</a>

					<a id="support_instagram" href="#" className="support-ig ui-link">
						<img src={TransparentGif} title="Instagram" />
					</a>
				</div>
				<div className="support-info">
					<div id="supportDetail_email" className="support-detail open">
						<a href="mailto:info@skyexchange.com" className="ui-link">
							<span>info@skyexchange.com</span>
						</a>
					</div>
					<div id="supportDetail_whatsapp" className="support-detail">
						<a
							href="https://api.whatsapp.com/send?phone=351913343771"
							className="ui-link"
						>
							<span>+351913343771</span>
						</a>

						<a
							href="https://api.whatsapp.com/send?phone=351912085916"
							className="ui-link"
						>
							<span>+351912085916</span>
						</a>
					</div>
					<div id="supportDetail_telegram" className="support-detail">
						<a
							href="https://www.t.me/officialskyexchangeinfo"
							className="ui-link"
						>
							<span>www.t.me/officialskyexchangeinfo</span>
						</a>

						<a
							href="https://www.t.me/skyexchangecustomersupport"
							className="ui-link"
						>
							<span>www.t.me/skyexchangecustomersupport</span>
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
		</>
	);
}

export default index;
