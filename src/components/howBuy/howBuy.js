import '../../app/globals.css'; 

import "./howBuy.css"
import treeImg from "../../images/images/how-to-three.png"
export default function HowBuy () {
    return <>
    <div className="buy-container" id="howBuy">

        <div className="buy-head">
            <div className="buy-heading-block">
                <h2 className="buy-heading">how to buy shibadino</h2>
            </div>
            <div className="buy-btn-block">
                <button className="buy-btn header-wallet">watch desktop tutorial</button>
                <button className="buy-btn header-wallet">watch mobile tutorial</button>
            </div>
        </div>

            <div className="buy-content">
                {/* FIRST BLOCK */}
            <div className="buy-content-block">
           <div className="buy-content-block-head">
    <p className="content-head-number">[1]</p>
    <p className="content-head-outline">connect your wallet</p>
            </div>
<div className="content-desc-block">
    <p className="content-desc">Go to the wallet connect button on the website and connect your wallet to the presale panel</p>
</div>
            </div>
            <div className="dummy-block"></div>
            <div className="dummy-block"></div>

  {/* SECOND BLOCK */}

            <div className="buy-content-block">
           <div className="buy-content-block-head">
    <p className="content-head-number">[2]</p>
    <p className="content-head-outline">select the amount</p>
            </div>
<div className="content-desc-block">
    <p className="content-desc">Select the currency you want to use to pay, enter the amount you want to spend</p>
</div>
            </div>

  {/* THIRD BLOCK */}

            <div className="buy-content-block">
           <div className="buy-content-block-head">
    <p className="content-head-number">[3]</p>
    <p className="content-head-outline">confirm and go</p>
            </div>
<div className="content-desc-block">
    <p className="content-desc">Click on the confirm button and approve. Congrats you have now purchased $DINO!</p>
</div>
            </div>
            </div>
    </div>
    </>
}