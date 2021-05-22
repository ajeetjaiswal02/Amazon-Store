import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t  to-trasparent bottom-0 z-20" />
            <Carousel
             autoPlay
             infiniteLoop
             showStatus={false}
             showIndicators={false}
             showThumbs={false}
             interval={8000}       
            >
                <div>
                    <img className="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg" alt="banner 1" />
                </div>

                <div>
                    <img className="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/Grocery_1500x600._CB669573043_.jpg" alt="banner 2" />
                </div>

                <div>
                <img className="lazy" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/May/M17/non-reg/1500x600_Hero-Tall_JPN._CB668432235_.jpg" alt="banner 3" />
                </div>

                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Javed/GTM/HeroPC_1500x600_CBCC._CB669049594_.jpg" alt="banner 4" />
                </div>

                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/PSS/Personal-Safety_1500x600._CB668022827_.jpg" alt="banner-5" />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
