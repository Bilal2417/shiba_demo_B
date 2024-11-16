import '../../app/globals.css'; 

import "./content.css"
import usdtLogo from "../../images/images/usdt.png"
import solLogo from "../../images/images/sol.png"
import logo from "../../images/images/logo.png"
import Image from "next/image"
import cloudImg from "../../images/images/shibadino.png"

export default function PageContent(){
    return <>
    {/* <div className="abc"> */}

{/* <div className="content-back-img"> */}
    {/* <Image src={cloudImg} alt=""/> */}
{/* </div> */}
    <div className="main-content">
        <div className="content-block">
            <div className="content-head">
                <p>$Dino presale</p>
                <p>is now live</p>
            </div>
            <div className="content-time">

                <div className="time-block-content">
                    <div className="time-block">
                    <p className="timeNumber">00</p>
                    </div>
                <p className="time">days</p>
                </div>
                <div className="time-block-content">
                    <div className="time-block">
                    <p className="timeNumber">00</p>
                    </div>
                <p className="time">hrs</p>
                </div>
                <div className="time-block-content">
                    <div className="time-block">
                    <p className="timeNumber">00</p>
                    </div>
                <p className="time">mins</p>
                </div>
                <div className="time-block-content">
                    <div className="time-block">
                    <p className="timeNumber">00</p>
                    </div>
                <p className="time">secs</p>
                </div>
            </div>
            <div className="content-progress-block">

            <div className="content-progress-bar-block">
                <div className="content-progress-bar">
                    <p className="content-mini-progress-bar"></p>
                </div>
            </div>

            <div className="progress-raised">
                <p className="raised-amount">usdt raised</p>
                <p className="raised-amount">$785,579 / 150,000,000</p>
            </div>

            <div className="dino-exchange-block">
<div className="one-dino">
    <p>1 usdt = 357 dino</p>
</div>
<div className="dino-exchange">
    <p className="">your purchased</p>
    <p className="">0.00</p>
</div>
<p className="$DINO">$dino</p>
            </div>

            </div>

            <div className="exchange-content">
                <div className="exchange-block">
                    <Image src={usdtLogo} alt="usdt logo"/>
                    <p>usdt</p>
                </div>
                <div className="exchange-block">
                <Image src={solLogo} alt="sol logo"/>
                <p>sol</p>
                </div>
                <div className="exchange-block exchange-space">
                    <p>you pay</p>
                    <Image src={usdtLogo} alt="usdt logo"/>
                </div>
                <div className="exchange-block exchange-space">
                    <p>0</p>
                    <Image src={logo} alt="logo"/>
                </div>
            </div>

            <div className="header-img-btn center">
                <button className="header-wallet">connect wallet</button>
            </div>

        </div>
    </div>

    {/* </div> */}
    </>
}