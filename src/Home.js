import React from 'react';

import Text from './Parts/Text/Text';
import Banner from './Parts/Banner/Banner';
import Logo from './Parts/Logo/Logo';
import Cards from './Component/Cards/Cards';
import WhyChooseUs from './Component/WhyChooseUs/WhyChooseUs';
import Description from './Component/Description/Description';
import LatestFromBlog from './Component/LatestFromBlog/LatestFromBlog';
import PricingPlan from './Component/PricingPlan/PricingPlan';
import LastPart from './Parts/LastPart/LastPart';
import ClientFeedback from './Parts/ClientFeedback/ClientFeedback';
import DigiMarkets from './Component/DigiMarket/DigiMarkets';
import Product from './Component/Cards/Product';
import {Data} from './Parts/ClientFeedback/Data';
import ScrollToTop from './Component/Scroll/ScrollToTop';

const Home = () => {
  return (
    <div>
      <Banner />
      <Logo />
      <ScrollToTop />
      <div className="container">
        <div className="card-first">
          <div className="row">
            <div className="d-flex justify-content-between">
              <h1>Featured Items</h1>
              <button>All Items</button>
            </div>
            <p>Nemo enim ipsam voluptatem quia voluptas aspernatur</p>
          </div>

          <div className="row grid-3">
            <Cards
              title="What is lorem"
              images="../images/5.JPG"
              newPrice="$300 - 500"
              text="Photography WordPress Theme"
            />

            <Cards
              title="cheptarOne"
              images="../images/2(1).JPG"
              newPrice="$400"
              text="Photography WordPress Theme"
            />

            <Cards
              title="Avtoria"
              images="../images/8.JPG"
              newPrice="$200"
              text="Photography WordPress Theme"
            />
          </div>
        </div>
      </div>

      <div className="section">
        <Text title="Why Choose Leading Leadies" />
        <div className="row">
          <WhyChooseUs
            title="We are Open Source"
            text="Lorem ipsum dummy text in print and website industry are usually use in these section"
          />

          <WhyChooseUs
            title="Problem Solvers"
            text="Lorem ipsum dummy text in print and website industry are usually use in these section"
          />

          <WhyChooseUs
            title="Regular Updates and Bug fixes"
            text="Lorem ipsum dummy text in print and website industry are usually use in these section"
          />
        </div>
      </div>

      <div className="section">
        <Text title="All Items" />

        <div className="item-button text-center">
          <button style={{color:"#fff", background:"linear-gradient(to right, #FF416C, #FF4B2B)"}}>All Items</button>
          <button>Site Template</button>
          <button>CMS Theme</button>
          <button>eCommerce</button>
          <button>Joomla</button>
        </div>
        <Product />
    
        <div className="text-center">
          <button className="product"><i className="fa fa-cart-arrow-down"></i>More Products</button>
        </div>
      </div>

      <div className="row">
       <Description />
      </div>

      <div className="section">
        <Text title="DigiMarket Features" />
        <DigiMarkets />
      </div>

      <div className="center">
        <Text title="Our Clients Feedback" />
      </div>

     <ClientFeedback slides={Data} />

      <div className="section">
        <Text title="Pricing Plan" />
          <div className="row text-center">
           <PricingPlan  />
          </div>
      </div>

      <div className="center1">
        <Text title="Latest From Blog" />
      </div>
      <div className="Blog">
        <div className="row grid-3">
          <LatestFromBlog
            title="20+ Best Free HTML Marketplace Templates"
            images="../images/4(1).JPG"
            pText="ThemeBing "
            date="- April 3, 2018"
            text="Marketing is the and management of exchange relationships. Marketing ..."
          />

          <LatestFromBlog
            title="Best Free Responsive WordPress Themes in..."
            images="../images/4(2).JPG"
            pText="ThemeBing "
            date=" - May 11, 2018"
            text="Marketing is the and management of exchange relationships. Marketing ..."
          />

          <LatestFromBlog
            title="Top Web Design Trends You Must..."
            images="../images/4(3).JPG"
            pText="ThemeBing "
            date="- June 12, 2018"
            text="Marketing is the and management of exchange relationships. Marketing ..."
          />
        </div>
      </div>

      <div className="join">
        <div className="row">
          <div className="d-flex justify-content-between">
            <h1 className="textColor">Join Us Today </h1>
            <button className="btn px-4">Join Us Today</button>
          </div>
          <div>
            <p className="textColor">
              Over 75,000 designers and developers trust the DigiMarket.
            </p>
          </div>
        </div>
      </div>
      <LastPart />
    </div>
  );
};
export default Home;
