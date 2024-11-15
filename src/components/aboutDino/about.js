import '../../app/globals.css'; 
import "./queries.css"
import "./about.css"
import Image from "next/image"
import aboutEggImg from "../../images/images/about-image-egg.png"
import aboutShibImg from "../../images/images/about-shib-read.png"
import aboutWhyImg from "../../images/images/about-shib-why.png"
export default function AboutDino () {
    return <>
    <div className="about-container">
        <div className="section-head">
            <h2 className="section-heading">about shibadino</h2>
            <div className="about-q-block">
                <p className="about-q">what is shibadino?</p>
            </div>
        </div>

<div className="about-full-content">

        <div className="about-content">
{/* ////////////////////////////////////////// FIRST BLOCK ////////////////////////////////////////// */}
            <div className="about-content-block">
                <div className="about-content-img">
                    <Image src={aboutEggImg} alt="dino-egg"/>
                </div>
                <div className="about-content-desc about-width">
                    <p className="">ShibaDino is more than just a token. It is a
community, a meme and a movement. Inspired
by explosive popularity of Siba Inu in 2021,
ShibaDino brings a playful twists by combining
the classic Shiba Inu dog with a dinosaur mask</p>

<p className="">Immerse yourself in the fascinating world of
ShibaDino, the new Solana token that combines
the best of the past and the future</p>

<p className="">The result is a charming and irresistible
combination that will appeal to NFT collectors
and investors alike</p>
                </div>
            </div>

<div className="short-flex">

            <div className="about-q-block block-width">
                <p className="about-q">the story</p>
            </div>
            <div className="dummy-block"></div>
</div>


{/* ////////////////////////////////////////// SECOND BLOCK ////////////////////////////////////////// */}
            <div className="about-content-block-2">
                <div className="about-content-img">
                    <Image src={aboutShibImg} alt="shib-read"/>
                </div>
                <div className="about-content-desc content-width">
                    <p className="">In a distant, mysterious world, deep in
an untouched jungle, there was a
glowing egg. One day, it hatched
ShibaDino—a unique creature with a
knack for hiding magical eggs. These
eggs, known for bringing fortune and
success, quickly caught the attention of
adventurers and curious treasure
hunters. Each time an egg was found
and opened, another ShibaDino was
born, rewarding the lucky finder with
great wealth</p>
            </div>
        </div>
        </div>
{/* //////////////////////////////////////////THIRD BLOCK ////////////////////////////////////////// */}
<div className="short-flex-2">

            <div className="dummy-block"></div>
            <div className="about-q-block block-width">
                <p className="about-q">why shibadino?</p>
            </div>
</div>


            <div className="about-content-block about-content-block-3">
                <div className="about-content-img">
                    <Image src={aboutWhyImg} alt="dino-egg"/>
                </div>
                <div className="about-content-desc">
                    <p className="">ShibaDino is released on the Solana
blockchain, which is known for its fast
transactions and low fees. This ensures
that your investment is efficient and
cost-effective</p>

<p className="">Our NFT collection consists of 222
unique ShibaDinos designed in a trendy
pixel design. Each NFT is a unique
work of art and a coveted collector's
item</p>

<p className="">At ShibaDino, we rely on the strength of
our community by reaching important
milestones together. As soon as these
milestones are reached, we reward our
community members with token
airdrops. This way you benefit directly
from the success of the project</p>
                </div>
            </div>
            
            
</div>
    </div>
    </>
}