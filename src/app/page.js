import Image from "next/image";
import styles from "./page.module.css";
import Home from "@/components/mainPage/mainPage";
import HowBuy from "@/components/howBuy/howBuy";
import AboutDino from "@/components/aboutDino/about";

export default function () {
  return <>
  <section>
<Home/>
  </section>
  <section>
<HowBuy/>
  </section>
  <section>
<AboutDino/>
  </section>
  </>
}
