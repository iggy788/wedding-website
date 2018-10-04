/**
 * Main entry point for the client application.
 */
import React, { Component } from 'react';
import Sticky from 'react-stickynode';
import Menu from './components/Menu.component';
// import RSVPForm from './components/RSVPForm.component';
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
import lakemich from './assets/img/lake-mich.jpg';
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
          After completing the Chicago Marathon which was one of the hardest journeys of their lives they immediately took off on a flight to Canada that would change their lives forever.On the very last day of their vacation, Megan and Mike went on a 5 mile hike on the Johnston Canyon and the hike ended with canyon opening up to a huge meadow surrounded by pools of water that change colors throughout the day.  After making sure they were the only two people in the canyon valley, Mike nervously set up his iPhone to properly capture the moment.  As Megan strangely watched Mike, he got down on one knee and asked Megan to spend the rest of her life with him!
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
          <p>Located , in New Buffalo, Michigan which is about a 15 minute drive from Journeyman Distillery.  The church is US Highway 12, about 7 blocks west (and south) of the center of town. Also click on the link below to easily find directions to the church.
          </p>
              <p style={{textAlign: 'center'}}>
              <a href='https://goo.gl/maps/nY3cvNcVZ8T2'>Get Directions to St Mary of the Lake Church</a>
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
          <p style={{textAlign: 'center'}}>
              <a href='https://goo.gl/maps/695coch7gdM2'>Get Directions to Journeyman Distillery</a>
              </p>
          </div>
            <p style={{ textAlign: 'center' }}>
              <a href='./assets/img/three-oaks-map.jpg'><img src={citymap} alt='Tourist Map' /></a>
              </p>
        </div>

      <hr />

      <h2>ON THE WEDDING DAY</h2>
      <p>The ceremony will start at 2:00 PM at the St. Mary of the Lake Church. Please arrive 10 to 15 minutes before so everybody can get seated and so we can start on time.
      </p>
      <p>After the ceremony (which will last about 40 - 45 minutes because I know you all are interested in that) we will give you a few hours before greeting you all at the reception where drinks and appetizers will be served.
      </p>
      <p>
        Wedding attire is Spring formal, as well! However, we're not going to give you any guidelines... hopefully you all are smart enough to know what to wear at a wedding.
      </p>

      <hr/>

      <h2>DAY AFTER THE WEDDING (27 May)</h2>
      <p>Farewell brunch will be held at 10:00 at the&nbsp;
         <a href='http://www.suncanihvar.com/amfora-hvar-grand-beach-resort/maestral-balkan-grill.html'>The Sycamore Guesthouse</a>, which is located across the street from Journeyman Distillery.
         <a href='https://goo.gl/maps/dxWu5THMYfC2'> Groom's Mansion</a>.
      </p>
        </TopicContainer>

        <TopicContainer id='logistics' title='Logistics'>
          <p>We understand that going to a different State on a Holiday Weekend to attend a wedding can be a daunting experience. That's why in this section we have tried to compile information and links to help make your travel and hotel booking as simple as possible and to give you ideas for how to make a complete vacation out of your trip. Please read through it and if you feel you need any additional information or help, do not hesitate to contact us.
      </p>

      <hr />

      <h2>ACCOMMODATIONS NEAR JOURNEYMAN DISTILLERY</h2>
      <p>Being a popular summer tourist destination, getting to Three Oaks is relatively easy when traveling from Michigan or Illinois. &nbsp;
         <a href='https://goo.gl/maps/xhf5f65SdEs'>Direction from Chicago to Three Oaks, MI</a> OR &nbsp;
         <a href='https://goo.gl/maps/aRe5RDT378p'>Directions from Detroit to Three Oaks, MI</a>
      </p>
      <p>We were able to reserve a Hotel Block at <a href='https://www.ihg.com/holidayinnexpress/hotels/us/en/new-buffalo/nbumi/hoteldetail'>Holiday Inn Express & Suites New Buffalo, MI</a>. Which is about 15 minutes drive away from Journeyman Distillery. The hotel was able to do block rate of $150.95 per room (price does not include tax and is based on 1-2 adult occupancy in the rooms) and the cut off date for the block would be March 30, 2019. Check in time starts at 3pm eastern and checkout is 11am eastern. We weren't not able to accommodate early check in for groups. The hotel do offer free WiFi, free hot breakfast buffet, have indoor pool, hot tub and fitness room.  If interested please call <a href="tel: (269) 469-1400">(269) 469-1400</a> and use the full name of the bride and full name of the groom.
      </p>
      <p>However if you are planning on doing some touring before or after the wedding or just planning a visit to Michigan's Harbor Towns over the long Holiday Weekend we encourage you to book one of the many <a href='https://www.airbnb.com/s/Three-Oaks--MI--United-States/homes?refinement_paths%5B%5D=%2Fhomes&query=Three%20Oaks%2C%20MI%2C%20United%20States&place_id=ChIJCZ-MfiUfEYgRchAXqY2I3-I&allow_override%5B%5D=&s_tag=zLwd_OZY'>Airbnb's</a> or <a href='https://www.yelp.com/search?cflt=bedbreakfast&find_loc=Three+Oaks%2C+MI+49128'>Bed and Breakfast Hotels</a> that are plentiful throughout the area. If you're undecided on what option to choose, have a look at the 'Things to do section' further down for more information for what activities you can do while you're here.
         </p>
      <hr />

        </TopicContainer>

        <TopicContainer id='thingstodo' title='Things to do Near Three Oaks, MI'>
        <h2><a href='https://www.michigan.org/hot-spots/beachtowns'>MICHIGAN BEACHTOWNS</a></h2>
      <p> Since all of you are coming from different parts of the Midwest, we presume that you would like to take full advantage and experience the "Lake Effect" and dig in the sand anywhere along the 200 - mile stretch of Lake Michigan Beaches.In this section we are listing some of the main tourist places to visit and have suggestions for routes to take. As a disclaimer, some of these suggestions are compiled from various online sources not locations we have actually visited, but trust us - these are all awesome options if you wanted to spend Memorial Day Weekend relaxing in Michigan's Beachtowns before our Big Day!
      </p>
      <br />

      <h2><a href='https://www.michigan.org/sites/default/files/styles/15_6_desktop/public/beach.18.ss_.glory_.Stand%20Up%20Paddleboarding.jpg?itok=emZOJ4RR&amp;timestamp=1523039298'>HARBOR COUNTRY in MICHIGAN</a></h2>

      <br />
      <p>
        <img className='large-image' src={lakemich} alt='Lake Michigan Paddleboard' />
      </p>
      <p>Harbor Country is close by, yet a world away. It is a trademarked destination for an eclectic collection of 8 towns: Michiana, Grand Beach, New Buffalo, Three Oaks, Union Pier, Lakeside, Harbert, and Sawyer <a href='https://www.harborcountry.org/'>website.</a> Harbor Country combines the best of both worlds — endless days at the beach and countrysides brimming with farms and orchards. Add a vibrant arts and culture community, a lively local food scene, and an explosion of world-class wineries, craft breweries and distilleries, it’s no wonder that Harbor Country has also become a year-round home for ex-urbanites in search of a slower pace of life amid the natural beauty of the Lake Michigan shore.
      </p>
          <hr />

          <h2>Wineries</h2>
          {/*
            <table id="simple-board">
              <tbody>
            <tr id="row0">
              <td><a href='https://www.drinkmichigan.com/index.cfm?method=pages.showpage&pageid=9041EE9F-EBCD-4C9D-959A-47410B20BE46&isMarketingURL=1'>Round Barn UNION PIER Tasting Room</a></td>
              <td id="cell0-1"><a href='http://www.stjulian.com/unionpier'>St. Julian Winery-Union Pier</a></td>
              <td id="cell0-2"></td>
            </tr>
            <tr id="row1">
              <td id="cell1-0"></td>
              <td id="cell1-1"></td>
              <td id="cell1-2"></td>
            </tr>
            <tr id="row2">
              <td id="cell2-0"></td>
              <td id="cell2-1"></td>
              <td id="cell2-2"></td>
            </tr>
          </tbody>
        </table>
          */}
          <p>
            <ul>
              <li><a href='https://www.drinkmichigan.com/index.cfm?method=pages.showpage&pageid=9041EE9F-EBCD-4C9D-959A-47410B20BE46&isMarketingURL=1'>Round Barn UNION PIER Tasting Room</a></li>
              <li><a href='http://www.stjulian.com/unionpier'>St. Julian Winery-Union Pier</a></li>
              <li><a href='http://www.lemoncreekwinery.com/wordpress/'>Lemon Creek Winery</a></li>
              <li><a href='http://www.shadycreekwinery.com/'>Shady Creek Winery</a></li>
              <li><a href='https://www.hickorycreekwinery.com/'>Hickory Creek Winery</a></li>
              <li><a href='http://gravitywine.com/'>Gravity Vineyards and Winery</a></li>
              <li><a href='https://www.michiganwines.com/winery/winery_id/176'>Tabor Hill Champagne Cellar</a></li>
              <li><a href='https://www.freeruncellars.com/'>Free Run Cellars</a></li>
              <li><a href='https://www.dablon.com/'>Dablon Vineyards - Winery & Tasting Room</a></li>
              <li><a href='http://www.blackdragonmeadery.com/'>Black Dragon Meadery - Mead in Michigan</a></li>
              <li><a href='https://www.facebook.com/Lazy-Acre-Vineyard-150150435126164/'>Lazy Acre Vineyard</a></li>
              <li><a href='https://www.lazyballerinawinery.com/'>Lazy Ballerina Winery Tasting Room</a></li>
              <li><a href='https://www.michiganwines.com/winery/winery_id/156'>Wolfe Creek Winery</a></li>
            </ul>
          </p>
      <hr />

      <h2>Breweries</h2>
          <p>
            <ul>
              <li><a href='https://www.greenbushbrewing.com/'>Greenbush Brewing Company</a></li>
              <li><a href='https://burnembrewing.com/'>Burn 'Em Brewing</a></li>
              <li><a href='https://www.beerchurchbrewing.com/'>Beer Church Brewing Co.</a></li>
              <li><a href='https://www.shorelinebrewery.com/'>Shoreline Brewery</a></li>
              <li><a href='https://www.watermarkbrewing.com/'>Watermark Brewing Company</a></li>
              <li><a href='http://zornbrewworks.com/'>Zorn Brew Works Co.</a></li>
            </ul>
      </p>
      <hr />

      <h2>Fruit Picking</h2>
          <p>
            <ul>
              <li><a href='https://www.statelineblueberries.com/'>Stateline Blueberries</a></li>
              <li><a href='https://www.yelp.com/biz/williams-orchard-la-porte'>Williams Orchard</a></li>
              <li><a href='http://www.blueberriesofindiana.com/'>Blueberries of Indiana</a></li>
              <li><a href='https://www.twinmapleorchards.com/'>Twin Maple Orchards</a></li>
              <li><a href='http://www.shulerdairyfarms.com/'>Shuler Dairy Farms</a></li>
            </ul>
      </p>
          <hr />
          <h2>Casinos</h2>
          <p>
            <ul>
              <li><a href='https://www.fourwindscasino.com/'>Four Winds Casino</a></li>
              <li><a href='https://www.bluechipcasino.com/'>Blue Chip Casino Hotel Spa</a></li>
            </ul>
      </p>
          <hr />

      <h2>Beaches & Water Activities</h2>
          <p>
            <ul>
              <li><a href='https://harborcountryadventures.com/'>Harbor Country Adventures</a></li>
              <li><a href='https://www.michigan.org/property/new-buffalo-lakefront-park-and-beach'>New Buffalo Public Beach</a></li>
              <li><a href='https://www.bridgman.org/Facilities/Facility/Details/WEKO-Beach-1'>Weko Park</a></li>
              <li><a href='http://thirdcoastpaddling.com/'>Third Coast Paddling Kayaks & Stand-Up Paddleboards</a></li>
              <li><a href='http://www.captainmikesamusementpark.com/'>Captain Mike's Fun Park</a></li>
            </ul>
          </p>
          <hr />

      <h2>Shopping</h2>
          <p>
            <ul>
              <li><a href='https://www.tripadvisor.com/ShowUserReviews-g42774-d278903-r321533492-Antique_Mall_of_Union_Pier-Union_Pier_Berrien_County_Michigan.html'>Antique Mall of Union Pier</a></li>
              <li><a href='https://www.yelp.com/biz/harbert-antique-mall-lakeside
'>Harbert Antique Mall</a></li>
              <li><a href='http://www.sawyer-antiques.com/'>Sawyer Antique Mall</a></li>
              <li><a href='https://www.premiumoutlets.com/outlet/lighthouse-place'>Lighthouse Place Premium Outlets</a></li>
            </ul>
          </p>
          <hr />
      <h2>Hiking & Camping</h2>
          <p>
            <ul>
              <li><a href='http://www.berriencounty.org/1297/Galien-River-County-Park'>Galien River County Park</a></li>
              <li><a href='https://www.michigan.org/property/warren-dunes-state-park'>Warren Dunes State Park</a></li>
              <li><a href='http://swmlc.org/project/kesling-nature-preserve/'>Kesling Nature Preserve</a></li>
              <li><a href='https://www.michigan.org/property/warren-woods-state-park'>Warren Woods State Park</a></li>
              <li><a href='http://naturepreserves.ohiodnr.gov/mudlakebog'>Spicer Lake County Park</a></li>
              <li><a href='http://www.jadrolinija.hr/en/ferry-croatia'>Mud Lake Bog Nature Preserve</a></li>
            </ul>
      </p>

      <hr />
        </TopicContainer>

        <TopicContainer id='gifts' title='Gifts'>
      <p>Dear family and friends,</p>
          <p>I know locating a couple's wedding registry and worrying about finding the perfect gift can be stressful, trust me we've all been there. For this reason we want to put it all in one spot so please click on this link to access our
                <a href='https://www.zola.com/registry/michaelandmeganwedding?preview=true'> Registry.</a>
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
