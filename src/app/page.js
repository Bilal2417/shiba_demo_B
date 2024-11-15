import Image from "next/image";
import styles from "./page.module.css";
import Home from "@/components/mainPage/mainPage";
import HowBuy from "@/components/howBuy/howBuy";
import AboutDino from "@/components/aboutDino/about";
import Tokenomics from "@/components/tokenomics/token";
import RoadMap from "@/components/roadmap/roadmap";
import SmartContract from "@/components/smartContract/smartContract";
import Faq from "@/components/faq/faq";
import Footer from "@/components/footer/footer";

export default function () {
  return <>
  <section className="header-section">
<Home/>
  </section>
  <section className="info-section">

<HowBuy/>
<AboutDino/>
  </section>
  <section className="tokenomics-section">
<Tokenomics/>
  </section>
  <section className="roadmap-section">
    <RoadMap/>
  </section>
  <section className="contract-section">
    <SmartContract/>
    <Faq/>
  <section className="footer-section">
    <Footer/>
  </section>
  </section>
  </>
}
