/**
 * Main entry point for the client application.
 */
import React, { Component } from 'react';
import Sticky from 'react-stickynode';
import Menu from './components/Menu.component';
// import RSVPForm from './components/RSVPForm.component';
import SecretTooltip from './components/SecretTooltip.component';
import TitleBar from './components/TitleBar.component';
import TopicContainer from './components/TopicContainer.component';
import './assets/css/normalize.css';
import './assets/css/skeleton.css';
import './assets/css/style.css';
/**
 * Importing Images
 */
import megan from './assets/img/megan-baby.jpg';
import mike from './assets/img/mike-baby.jpg';
import church from './assets/img/church.jpg';
import proposal from './assets/img/proposal.jpg';
import citymap from './assets/img/three-oaks-map.jpg';
import journeyman from './assets/img/location.jpg';
import save from './assets/img/save.jpg';
import lakemich from './assets/img/lake-mich.jpg';
import lake from './assets/img/lake.jpg';
import car from './assets/img/friends.jpg';
/**
 * Done Importing Components
 */
class App extends Component {
  render() {
    return (
      <div>
        <TitleBar id='titlebar'>
        </TitleBar>
        <div style={{ height: '200px' }}></div>

        <Sticky enabled={true}>
          <Menu id='menu'
            items={[{ label: 'THE BRIDE & GROOM', href: 'brideandgroom' },
                { label: 'THE WEDDING', href: 'wedding' },
                { label: 'LOGISTICS', href: 'logistics' },
                { label: 'THINGS TO DO', href: 'thingstodo' },
              { label: 'GIFTS', href: 'gifts' }]}>
          </Menu>
        </Sticky>

        <TopicContainer id='brideandgroom' name='brideandgroom' title='The Bride and Groom'>
          <div className='container'>
            <div className='row'>
              <div className='one-half column'>
                <p>
                  <a href='./assets/img/megan-baby.jpg'><img src={megan} className='thumbnail' alt='Megan' />
                  </a>
                  Megan is a sweet and giving girl who always sees the beauty in people. As exciting as it was to be raised in Novi, MI. She made it her mission to live and explore as many beautiful cities as she could. Thanks to her beloved sister Wendy it was possible to jump from the neon nights of Miami, through the diverse city of London, to then learn the leisurely ways of Italy. While Jocelyn was exploring and realizing her passion in life, she realized she needed to find her way back to the city she knew her dream job was waiting for her in fashion.
                  </p>
              </div>

              <div className='one-half column'>
                <p>
                  <a href='./assets/img/mike-baby.jpg'><img className='thumbnail' src={mike} alt='Mike' /></a>
                  Mike is a burly and impatient Eastern European. He moved from his homeland Bulgaria to the lovely city of Toronto at the young and tender age of 22. Kal then found himself in the IT mecca of Seattle and realized after 9 years of the beautiful mountain backdrop and serene lakes that he needs to escape to the center of the universe, New York.
                  </p>
              </div>
            </div>
          </div>
          <hr />


          <h2>OUR STORY</h2>
          <p>
          It all started when Mike had a brainstorm and asked Megan if she would be willing to run the Chicago Marathon with him in the upcoming fall of 2017.  He then had another brainstorm and thought it was good idea to go hiking in Banff National Park in Alberta, Canada immediately after running 26.2 miles.  Somehow Mike was able to convince Megan that this was a good idea and his plan was in motion.
          </p>
          <p>
          After completing the Chicago Marathon which was one of the hardest journeys of their lives they immediately took off on a flight to Canada that would change their lives forever.On the very last day of their vacation, Megan and Mike went on a 5 mile hike on the Johnston Canyon and the hike ended with canyon opening up to a huge meadow surrounded by pools of water that change colors throughout the day.  After making sure they were the only two people in the canyon valley, Mike nervously set up his iPhone to properly capture the moment.  As Megan strangley watched Mike, he got down on one knee and asked Megan to spend the rest of her life with him!
          </p>
          <p>
            <img src={proposal} className='large-image' alt='Mike Proposing To Megan' />
          </p>
        </TopicContainer>

        <TopicContainer id='wedding' title='Wedding'>
          <div className='container'>
            <div className='one-half column'>
              <h2>CEREMONY</h2>
              <p>2:00 PM @ St Mary of the Lake Church</p>
              <p>
                <a href='./assets/img/church.jpg'><img src={church} className='location-image' alt='St Mary of the Lake Church' /></a>
              </p>
              <p style={{ textAlign: 'center' }}>
          </p>
          <p>Located to the left of the Loggia and Clock Tower (the Town Hall) and behind the market and row of shops at the back of the
             harbour. Follow signs to the Hotel Park and continue past the café until you arrive at the Church. Also have a look at the
             tourist map above.
          </p>
        </div>
        <div className='one-half column'>
          <h2>RECEPTION</h2>
          <p>6:00 PM @ Journeyman Distillery</p>
          <p>
            <a href='./assets/img/location.jpg'><img className='location-image' src={journeyman} alt='Journeyman Distillery' /></a>
            </p>
              <p style={{ textAlign: 'center' }}>
            </p>
          <p> Located in Three Oaks, Michigan which is about a 10 minute drive from the Indiana and Michigan state line.Journeyman Distillery boasts some of the most unique & flavorful spirts in the Midwest.  You will be treated from a farm to table meal and be able to try all the unique spirts that Journeyman has to offer.
          </p>
          </div>
          <p style={{textAlign: 'center'}}>
              <a href='https://goo.gl/maps/695coch7gdM2'>Google Maps</a>
              </p>
            <p style={{ textAlign: 'center' }}>
              <a href='./assets/img/three-oaks-map.jpg'><img src={citymap} alt='Tourist Map' /></a>
              </p>
        </div>

      <hr />

      <h2>ON THE WEDDING DAY</h2>
      <p>The ceremony will start at 2:00 PM at the St. Mary of the Lake Church. Please arrive 10 to 15 minutes before so everybody can get seated and so we can start on time.
      </p>
      <p>After the ceremony we will raise a glass of champagne and someone will lead you to the reception where drinks and appetizers will be served.
      </p>
      <p>
        Wedding attire is S pring formal. Gentlemen, please wear a light suit with which you will be comfortable with the heat. And ladies,
        you look pretty as you are, in your formal summer dresses
      </p>

      <hr />

      <h2>DAY BEFORE THE WEDDING (30 August)</h2>
      <p>Welcome cocktails will be held on the terrace of <a href='https://goo.gl/Vd3ZJd'>Restaurant Park Hvar</a> from 18:30 to 23:30.
      </p>
      <p>
         Cocktail night attire is dressy-casual.
      </p>

      <hr />

      <h2>DAY AFTER THE WEDDING (27 May)</h2>
      <p>Farewell brunch will be held at 11:00 at the&nbsp;
         <a href='http://www.suncanihvar.com/amfora-hvar-grand-beach-resort/maestral-balkan-grill.html'>Maestral Restaurant</a>. It is located
         just a few meters on the path that takes you to the <a href='https://goo.gl/r9TFHt'>wedding venue</a>.
      </p>
      <p>
         Brunch attire is wear anything you want
      </p>
        </TopicContainer>



        <TopicContainer id='logistics' title='Logistics'>
      <p>We understand that going to a different State on a Holiday Weekend to attend a wedding can be a daunting experience. That's why in this section we have tried to compile information and links to help make your travel and hotel booking as simple as possible and to give you ideas for how to make a complete vacation out of your trip. Please read through it and if you feel you need any additional information or help, do not hesitate to contact us.
      </p>

      <hr />

      <h2>GETTING TO NEW BUFFALO, MI</h2>
      <p>Being a popular summer tourist destination, getting to Croatia is relatively easy. The closest major city to Hvar is&nbsp;
         <a href='https://goo.gl/maps/a8JeWAEuugN2'>Split</a> and it is fairly well connected by pretty much all European airlines
         and some low-cost carriers, such as&nbsp;
         <a href='https://wizzair.com/#/booking/select-flight/LTN/SPU/2017-08-22/2017-09-02/1/0/0'>WizzAir</a> and&nbsp;
         <a href='https://www.eurowings.com/en.html'>Eurowings</a>
      </p>
      <p>The second closest major airport is in <a href='https://goo.gl/maps/goc5oZWa3wC2'>Dubrovnik</a>. It is about 5 hours away
         from Hvar via a ferry, which is kind of far, but if you are planning on doing some touring before or after the wedding it is
         a great location to visit. Have a look at the 'Things to do section' further down for more information on that.
      </p>
      <p>As of the time of writing there are no&nbsp;
         <a href='https://www.kayak.com/flights/NYC-SPU/2017-08-25/2017-09-02/2adults'>direct flights</a>&nbsp;
         from the US or Canada to Croatia, so guests coming from there will have to do at least one connection in a major European hub
         such as Frankfurt, Zurich or Amsterdam.
      </p>

      <hr />

      <p>
        <img className='large-image' src={lakemich} alt='Hvar town' />
      </p>

      <h2>HARBOR COUNTRY in MICHIGAN</h2>
      <p>Harbor Country is close by, yet a world away. It is a trademarked destination for an eclectic collection of 8 towns: Michiana, Grand Beach, New Buffalo, Three Oaks, Union Pier, Lakeside, Harbert, and Sawyer <a href='https://www.harborcountry.org/'>website.</a> Harbor Country combines the best of both worlds — endless days at the beach and countrysides brimming with farms and orchards. Add a vibrant arts and culture community, a lively local food scene, and an explosion of world-class wineries, craft breweries and distilleries, it’s no wonder that Harbor Country has also become a year-round home for ex-urbanites in search of a slower pace of life amid the natural beauty of the Lake Michigan shore.
      </p>

      <div id='gmap'></div>

      <p>The bus or taxi will drop you off at the Split bus station, which is on the water. The bus drop-off is only 5 minutes walk
         from the ferry ticket kiosk. There you can buy tickets or ask for the terminal from which your ferry leaves if it is unclear
         from the large electronic panel infront of it, listing the departures. The ferry ticket kiosk looks like this:
      </p>
      <p>
         <img className='large-image' src={save} alt='Ferry tickets kiosk' />
      </p>

      <p>Once you are at the seaport and looking for transportation to the island, please note that there are two landing spots on the
         island - Hvar Town and the Old Town (Stari Grad). The wedding will be in Hvar Town, which is in the south-west end of the island,
         not in the Old Town, which is on the nortern end. Please make sure you are boarding the right ferry, but even if you make a
         mistake, stay calm because there is a very convenient bus between the two. As a rule, the car ferries go to Old Town (Stari Grad)
         and take about 2 hours to travel and the fast passenger ferries (catamaran) go directly to Hvar Town and take 1 hour.
      </p>

      <div id='gmap'></div>

      <p>There are two ferry companies which serve the route from Split to Hvar - Jadrolinija and Kapetan Luka. Below we have information
         for each of them.
      </p>

      <h3><a href='http://www.jadrolinija.hr/en/ferry-croatia'>Jadrolinija</a></h3>
      <p>This is a high-speed catamaran service from Split to Hvar Town which takes about 65 min. This is the fastest option and costs
         around 10 EUR/11 USD per person. If you have a car, this site also contains the schedule and pricing for the ferries, which
         transport cars to the island.
      </p>
      <br />

      <h3><a href='http://www.krilo.hr/en/index.html'>Kapetan Luka</a></h3>
      <p>This is the regular ferry service which takes about 2.5 hours and should cost around 5-10 EUR/6-11 USD per person.
      </p>
      <br />

      <h3><a href='https://www.atlantis-marine.net/en/croatia-boat-transfers'>Chartered Speed Boat</a></h3>
      <p>If you are coming as a group or feel like a one percenter, this site has information for inclusive transportation packages with
         pickup from the airport. The sailing part of the journey takes between 45 min to 1 hour, which is similar to the catamaran service,
         but is a little bit more convenient because it also includes a pickup from the airport. If you choose this option, there is a 5%
         discount using <SecretTooltip fnTooltip={() => { return 'adriaticweddings'; }}>this code</SecretTooltip> (please click on the
         'this' in order to show it).
      </p>

      <hr />

      <h2>DRIVING</h2>
      <p>For those renting a car or driving to Croatia, we found the driving conditions on the island to be good and there is a
         parking spot right in the center of the town for 1 EUR/hour or 12 EUR/day.
      </p>
      <p>
         Please note that unless you are coming by car to the island of Hvar, there should not be a need for you to rent one. There are
         many organized boat trips to discover the surrounding Dalmatian islands and cabrio cars can be rented daily at a fairly decent
         price from Hvar itself and the paperwork is not that much. For example we rented this funny car for about 60 USD for a day trip:
      </p>
      <p>
         <img className='large-image' src={car} alt='Day car rental' />
      </p>

      <hr />

      <h2>ACCOMMODATIONS</h2>
      <p>Once on the island in Hvar Town there are various accommodation options ranging from fancy hotels to renting an apartment
         on <a href='https://goo.gl/uHTDYn'>AirBnB</a>. The wedding will be in the Amfora Resort so any accommodation within walking
         distance from there should be fine.
      </p>
      <p>From our research we have found that hotels are fairly expensive and there are very nice AirBnB options available, so we highly
         recommend doing that.
      </p>
      <p>For guests wishing to stay in a hotel, the <a href='http://www.suncanihvar.com/'>Suncani Hvar</a> chain of hotels offers a 20%
         discount using <SecretTooltip fnTooltip={() => { return 'WEDDKALOIANJOCELYN'; }}>this code</SecretTooltip> (please click on the
         'this' in order to show it). The code must be entered in the <i>'Corporate/Promo Code ?'</i> section for the discounted prices to
         apply and is valid for staying 5 days prior and 5 days after the wedding day. While this code indeed reduces the listed prices,
         we have found that booking through <a href='https://goo.gl/2xzaIg'>Expedia</a> or <a href='https://goo.gl/z6zsZk'>Hotels.com</a>&nbsp;
         shows about the same prices or in some cases even cheaper, so please bear that in mind as well.
      </p>
        </TopicContainer>

        <TopicContainer id='thingstodo' title='Things to do Near Three Oaks, MI'>
      <p> Since all of you are coming from different parts of the Midwest, we presume that you would like to take full advantage and experience the "Lake Effect" and dig in the sand anywhere along the 200 - mile stretch of Lake Michigan Beaches.In this section we are listing some of the main tourist places to visit and have suggestions for routes to take. As a disclaimer, some of these suggestions are compiled from various online sources not locations we have actually visited, but trust us - these are all awesome options if you wanted to spend Memorial Day Weekend relaxing in Michigan's Beachtowns before our Big Day!
      </p>
      <br />

      <h2><a href='https://www.michigan.org/hot-spots/beachtowns'>MICHIGAN BEACHTOWNS</a></h2>
      <p>
        <img className='large-image' src={lakemich} alt='Dubrovnik old city' />
      </p>
      <p>Located in the very south of the country, Dubrovnik was once called the 'Pearl of the Adriatic' for its architecture and importance
         in trade. We won't pretend that we know much about its history, but it is a place which must be visited and is also a convenient
         location to fly into and work your way up the coast to Hvar. On top of that, for the 'Game of Thrones' fans, quite a few scenes from
         this show were filmed in Dubrovnik. See&nbsp;
         <a href='http://www.telegraph.co.uk/travel/maps-and-graphics/game-of-thrones-filming-locations-guide/'>this article</a> for more
         information.
      </p>
      <br />

      <h2><a href='https://www.michigan.org/sites/default/files/styles/15_6_desktop/public/beach.18.ss_.glory_.Stand%20Up%20Paddleboarding.jpg?itok=emZOJ4RR&amp;timestamp=1523039298'>LAKE MICHIGAN</a></h2>
      <p>
        <img className='large-image' src={lake} alt='Plitvice lakes' />
      </p>
      <p>This is a beautiful national park covered with heavy forests and waterfalls. It is in the northern half of the country and is about 2 hours
         drive from Zagreb, the capital of Croatia and 4-5 hours from Split. If you find good flights to Zagreb, Plitvice Lakes can serve as a good
         midway destination to visit while making you way to the south of the country.
      </p>
      <br />

      <h2><a href='https://www.lonelyplanet.com/croatia/dalmatia/hvar-island'>HVAR AND THE DALMATIAN ISLANDS</a></h2>
      <p>
        <img className='large-image' src={lakemich} alt='Mljet' />
      </p>
      <p>The Dalmatian islands (one of which is Hvar) offer amazing scenery, nice beaches and sailing opportunities. Island hopping, swimming and
         sunbathing is great way to spend a few days or even a week. Of these islands, Hvar is deemed as the 'party island' while&nbsp;
         <a href='https://www.lonelyplanet.com/croatia/dalmatia/mljet-island'>Mljet</a> is the most scenic and tranquil. It is located between Hvar
         and Dubrovnik.
      </p>
        </TopicContainer>

        <TopicContainer id='gifts' title='Gifts'>
      <p>Dear family and friends,</p>
      <p>We feel honoured that you are all travelling a long way to come and celebrate our special day with us. For this reason we don't
         want anyone to feel obliged to buy us gifts. Your presence is the biggest gift.
      </p>
      <p>If you do feel that you want to give us a gift please remember that just like you, we will only have a suitcase full of clothes
        so we won't be able to carry any items back.
      </p>
      <p>Thank you in advance!
      </p>
    </TopicContainer>

      </div>
    );
  }
}

export default App;
// ReactDOM.render(websiteContent, document.getElementById('content'));
