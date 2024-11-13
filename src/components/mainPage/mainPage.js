import '../../app/globals.css'; 

import "./mainPage.css"
import icon from "../../images/images/header-icon.png"
import logo from "../../images/images/logo.png"
import egg from "../../images/images/title-egg.png"
import flower from "../../images/images/title-flower.png"
import cloudImg from "../../images/images/shibadino.png"
import Image from "next/image"
import PageContent from "../mainPageContent/content"
export default function Home () {
    return <>
    <div className="container">

        <div className="main-header">
            <div className="header-content">

            <div className="header-img content-hide">
             <Image src={icon} alt="header-icon"/>
            </div>
            <div className="header-img">
             <Image src={logo} alt="header-logo"/>
            </div>
            <div className="header-img-btn">
                <button className="header-wallet">connect wallet</button>
            </div>
            </div>
        </div>

<div className="main-container">

        <div className="main-block">
            <div className="block-head">
                <div className="jungle-heading-block">
            <p className="jungle-heading">from the jungle</p>
                </div>
            <div className="block-star">
            <svg width="25" height="25" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M64 32C34.2069 33.2333 33.2117 34.2286 32 64C30.7667 34.2069 29.7715 33.2116 0 32C29.7931 30.7667 30.7884 29.7714 32 0C33.2333 29.7931 34.2285 30.7884 64 32Z" fill="white"/>
</svg>

            </div>
            <div className="heading-block">

<h2 className="block-heading">SHIBADIN</h2>
<Image src={egg} alt="heading-egg"/>
            </div>
            <div className="flower-block">
                <Image src={flower} alt="flower"/>
            </div>
            </div>
        </div>
</div>
<div className="pageBlock">

<PageContent/>
</div>
<div className="close-block">
    
</div>
    </div>
    </>
}