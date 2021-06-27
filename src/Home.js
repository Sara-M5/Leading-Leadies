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
import DigiMarket from './Component/DigiMarket/DigiMarket';

const Home = () => {
  return (
    <div>
      <Banner />
      <Logo />

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

        <div className="center1">
          <button className="product">All Items</button>
          <button>Site Template</button>
          <button>CMS Theme</button>
          <button>eCommerce</button>
          <button>Joomla</button>
        </div>

        <div className="row grid-3">
          <Cards
            title="MyAgency"
            images="../images/2.JPG"
            newPrice="$59.00 - $199.00"
            text="Photography WordPress Theme"
          />

          <Cards
            title="AppSo"
            images="../images/3.JPG"
            newPrice="$39.00"
            text="Photography WordPress Theme"
          />

          <Cards
            title="Munio"
            images="../images/4.JPG"
            newPrice=" $19.00"
            oldPrice="$49.00"
            text="Photography WordPress Theme"
          />
          <Cards
            title="BenchMark"
            images="../images/5.JPG"
            newPrice="$159.00 - $199.00"
            text="Photography WordPress Theme"
          />

          <Cards
            title="Instive"
            images="../images/6.JPG"
            newPrice="$39.00"
            text="Photography WordPress Theme"
          />
          <Cards
            title="Fourmusic"
            images="../images/7.JPG"
            newPrice="$69.00"
            text="Photography WordPress Theme"
          />
          <Cards
            title="Avtorai"
            images="../images/8.JPG"
            newPrice="$40.00"
            text="Photography WordPress Theme"
          />

          <Cards
            title="Birdily"
            images="../images/9.JPG"
            newPrice="$20.00"
            oldPrice="$40.00"
            text="Photography WordPress Theme"
          />

          <Cards
            title="Daeron"
            images="../images/10.JPG"
            newPrice="$59.00"
            oldPrice="$79.00"
            text="Photography WordPress Theme"
          />
        </div>

        <div className="center1">
          <button className="product">More Products</button>
        </div>
      </div>

      <div className="row">
        <div className="d-flex justify-content-between">
          <Description
            images="../images/logo1.JPG"
            amount="30"
            text="Total Items"
          />

          <Description
            images="../images/logo2.JPG"
            amount="48"
            text="Total Sells"
          />

          <Description
            images="../images/logo3.JPG"
            amount="104"
            text="Customers"
          />

          <Description images="../images/logo4.JPG" amount="45" text="Rating" />
        </div>
      </div>

      <div className="section">
        <Text title="DigiMarket Features" />

        <div className="row">
          <DigiMarket
            title="We are Open Source"
            text="Lorem ipsum dummy text in print and website industry are usually use in these section"
          />
          <DigiMarket
            title="Problem Solvers"
            text="Lorem ipsum dummy text in print and website industry are usually use in these section"
          />
          <DigiMarket
            title="Highly-Rated Support"
            text="Lorem ipsum dummy text in print and website industry are usually use in these section"
          />
        </div>

        <div className="row">
          <DigiMarket
            title="Feature-Rich Free And Pro Plugins"
            text="Lorem ipsum dummy text in print and website industry are usually use in these section"
          />

          <DigiMarket
            title="Regular Updates And Bug fixes"
            text="Lorem ipsum dummy text in print and website industry are usually use in these section"
          />

          <DigiMarket
            title="Extensions to step-up your game"
            text="Lorem ipsum dummy text in print and website industry are usually use in these section"
          />
        </div>
      </div>

      <div className="center">
        <Text title="Our Clients Feedback" />
      </div>

      <ClientFeedback
        images="../images/3(1).JPG"
        text="Awesome Product highly recomended Lorem ipsum dolor alamet, nsectetur mayalipol tempor eiusmod tempor recomended Lorem ipsum dolor alamet, nsec tetur mayalipol tempor eiusmod tempor incubto ectetur alasiqua enim ad nim veniam, quis nostrud ullam "
        name="Nancoda Mao"
        job="Ui/Ux Designer And Product Designer "
      />

      <div className="section">
        <Text title="Pricing Plan" />
        <div className="center1">
          <div className="row grid-3">
            <PricingPlan
              title="Basic"
              images="../images/pricing1.JPG"
              Price="$ 59"
            />

            <PricingPlan
              title="Standard"
              images="../images/pricing2.JPG"
              Price="$ 59"
            />

            <PricingPlan
              title="Premium"
              images="../images/pricing3.JPG"
              Price="$ 120"
            />
          </div>
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
