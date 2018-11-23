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
              <h3>From Mike:</h3>
                  <a href='./assets/img/megan-baby.jpg'><img src={megan} className='thumbnail' alt='Megan' />
                  </a>
                  Most of you know Megan for her affectionate personality and her amazing laugh.  Not only do I get to experience those things on a daily basis, but I also get to see the sweet and giving girl who always sees the beauty in life. I don't know how I ever convinced her to move to Chicago, but I'm so glad she did.  Not only am I extremely proud that she has dedicated her life to improving the lives of children with communication disorders. I am also extremely thankful that Megan decided come along with me on the crazy adventures we get into, even if some of them are a result of my irrational thinking.  Megan means the world to me and has the most beautiful and caring personality I have ever seen in someone.  I hope you all get to experience it at least once in your life and if your funny enough, you may even get to hear her amazing laugh.
                  </p>
              </div>

              <div className='one-half column'>
                <p>
                  <h3>From Megan:</h3>
                  <a href='./assets/img/mike-baby.jpg'><img className='thumbnail' src={mike} alt='Mike' /></a>
                  What can I say? Mike is wonderful and kind. He grew up in Park Ridge, Illinois and thankfully, made the decision to go to college at Michigan State University (<a href='https://www.youtube.com/watch?v=Dqv48MwEbaQ'>Go Green!</a>). We first met each other in Armstrong Hall and started dating in 2011. 7 years later (including a move to Chicago) and we've already accomplished so much. Mike has managed to work his way up to a position at DialogTech, where he worked to make custom projects for clients and has learned lots about coding from attending the Northwestern Coding Bootcamp. Throughout our time together, Mike has grown into a hardworking, passionate and caring person. I'm so lucky.
                  </p>
              </div>
            </div>
          </div>
          <hr />


          <h2>OUR STORY</h2>
          <p>
          Our engagement story begins in May of 2017 when Mike came home one day stating that he was running the Chicago Marathon (thanks to Jim Borgaard) with Ronald McDonald House Charities. Megan could never let Mike run a marathon without her, and before they knew it they were both signed up for a summer of training and a big 26.2 jog on October 8th, 2017.
          </p>
          <p>
          After the little jog, Mike had planned a vacation to Banff in Alberta, Canada...perfect time for a vacation filled with hiking after a marathon! Ha! Regardless, on the last hike on the last day of their trip...Mike Proposed!
          </p>
          <p>
            <img src={proposal} className='large-image' alt='Mike Proposing To Megan' />
          </p>
        </TopicContainer>

        <TopicContainer id='wedding' title='Wedding'>
          <div className='container'>
            <div className='one-half column'>
              <h2>CEREMONY</h2>
              {/*
                <p>2:00 PM @ St Mary of the Lake Church</p>
              */}
              <p>St Mary of the Lake Church</p>
              <p>
                <a href='./assets/img/church.jpg'><img src={church} className='location-image' alt='St Mary of the Lake Church' /></a>
              </p>
              <p style={{ textAlign: 'center' }}>
          </p>
    {/**
      <p>Located , in New Buffalo, Michigan which is about a 15 minute drive from Journeyman Distillery.  The church is US Highway 12, about 7 blocks west (and south) of the center of town. Also click on the link below to easily find directions to the church.
  </p>
     */}
              <p>The Ceremony will be performed at St. Mary of the Lake church, in New Buffalo, Michigan, which is just a 12 minute drive from Journeyman Distillery.
          </p>
              <p style={{textAlign: 'center'}}>
              <a href='https://goo.gl/maps/nY3cvNcVZ8T2'>Get Directions to St Mary of the Lake Church</a>
              </p>
        </div>
        <div className='one-half column'>
          <h2>RECEPTION</h2>
          <p>Journeyman Distillery</p>
          <p>
            <a href='./assets/img/location.jpg'><img className='location-image' src={journeyman} alt='Journeyman Distillery' /></a>
            </p>
              <p style={{ textAlign: 'center' }}>
              </p>
          <p> Located in Three Oaks, Michigan which is just 75 miles east from Chicago, 30 miles west of South Bend, and 75 miles south of Kalamazoo.
          </p>
          <p style={{textAlign: 'center'}}>
              <a href='https://goo.gl/maps/695coch7gdM2'>Get Directions to Journeyman Distillery</a>
              </p>
          </div>
          </div>
            <p style={{ textAlign: 'center' }}>
              <a href='./assets/img/three-oaks-map.jpg'><img className='large-image' src={citymap} alt='Tourist Map' /></a>
              </p>
      <hr />

      <h2>WEDDING CEREMONY</h2>
      <p>The ceremony will be at the St. Mary of the Lake Church. Please arrive 10 to 15 minutes before so everybody can get seated.
      </p>
      <p>After the ceremony (which will last about 40 - 45 minutes because I know you all are interested in that) we will give you a few hours before greeting you all at the reception where drinks and appetizers will be served.
      </p>

      <hr/>

      <h2>WEDDING RECEPTION</h2>
      <p>The reception will be held at Journeyman Distillery in beautiful &nbsp;
         <a href='https://www.journeymandistillery.com/warren-hall/'>Warren Hall</a> on the second floor, in Three Oaks, Michigan. Journeyman Distillery was once a Featherbone Factory and has since transformed itself into a beautiful and vintage industrial venue.
         </p>
         <p>
            Journeyman Distillery is also home to makers of hand-crafted, organic whiskey and spirits. Feel free to watch this short video to gain more information about the unique and flavorful spirits! <a href='https://vimeo.com/38956218'> Yeah Click Here for the Video</a>.
          </p>
        </TopicContainer>

        <TopicContainer id='logistics' title='Logistics'>
          <p>
            We have compiled information and links to help make your travel and hotel booking as simple as possible on this holiday weekend. Please read through it and if you feel you need any additional information or help, do not hesitate to contact us!
          </p>

      <hr />

      <h2>ACCOMMODATIONS NEAR JOURNEYMAN DISTILLERY</h2>
      <p>Because it is a popular tourist destination, getting to Three Oaks and the New Buffalo, MI area is relatively easy when traveling from Michigan or Illinois. Here are directions from&nbsp;
        <a href='https://goo.gl/maps/xhf5f65SdEs'>Chicago to Three Oaks, MI</a> as well as directions from&nbsp;<a href='https://goo.gl/maps/aRe5RDT378p'>Detroit to Three Oaks, MI</a>
      </p>
      <p>We were able to reserve a hotel block at <a href='https://www.ihg.com/holidayinnexpress/hotels/us/en/new-buffalo/nbumi/hoteldetail'>Holiday Inn Express & Suites New Buffalo, MI</a>. This hotel is about a 15 minutes drive away from Journeyman Distillery. We were able to book a block rate for Saturday May 25th at $150.95 and for Sunday May 26th for $109.95 per room. This rate does not include tax and is based on 1-2 adult occupancy in the rooms. The cut off date for the block is March 30th 2019. Check in time begins at 3 PM EST and checkout is 11 AM EST. The hotel offers free WiFi, free hot breakfast buffet, an indoor pool, hot tub and a fitness room.  If interested please call <a href="tel: (269) 469-1400">(269) 469-1400</a> and use the full name of the bride and full name of the groom.
      </p>
      <p>If you are planning on visiting the area over the long holiday weekend, we encourage you to book one of the many <a href='https://www.airbnb.com/s/Three-Oaks--MI--United-States/homes?refinement_paths%5B%5D=%2Fhomes&query=Three%20Oaks%2C%20MI%2C%20United%20States&place_id=ChIJCZ-MfiUfEYgRchAXqY2I3-I&allow_override%5B%5D=&s_tag=zLwd_OZY'>Airbnb's</a> or <a href='https://www.yelp.com/search?cflt=bedbreakfast&find_loc=Three+Oaks%2C+MI+49128'>Bed and Breakfast Hotels</a> that are found throughout the area. If you need ideas on what to do in the area, take a look below for more information for what activities you can do while you're here.
         </p>
      <hr />

        </TopicContainer>

        <TopicContainer id='thingstodo' title='Things to do Near Three Oaks, MI'>
        <h2><a href='https://www.michigan.org/hot-spots/beachtowns'>MICHIGAN BEACHTOWNS</a></h2>
      <p>Feel free to take full advantage and experience the "Lake Effect" of the 200  — mile stretch of Lake Michigan Beaches. We haven't personally visited all of these locations, but they are all awesome options if you want to spend Memorial Day weekend relaxing in Michigan's Beachtowns before our Big Day!
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
          <p>If you wish to access our<a href='https://www.zola.com/registry/michaelandmeganwedding?preview=true'> Registry</a>, please click on this<a href='https://www.zola.com/registry/michaelandmeganwedding?preview=true'> link</a>.
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
