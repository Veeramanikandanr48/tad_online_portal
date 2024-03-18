import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomeCarusel from "../../components/HomeCarusel";
import "./index.css";

const travelData = {
  cards: [
    {
      title: "MAJOR RAILWAY STATIONS",
      image: {
        src: "https://img.icons8.com/clouds/100/train.png",
        alt: "train",
        width: 100,
        height: 100,
      },
    },
    {
      title: "AIRPORTS",
      image: {
        src: "https://img.icons8.com/clouds/100/airport.png",
        alt: "airport",
        width: 100,
        height: 100,
      },
    },
    {
      title: "BUS DEPOT",
      image: {
        src: "https://img.icons8.com/clouds/100/bus.png",
        alt: "bus",
        width: 100,
        height: 100,
      },
    },
    {
      title: "TAXI SERVICES",
      image: {
        src: "https://img.icons8.com/doodle/48/taxi--v1.png",
        alt: "taxi--v1",
        width: 48,
        height: 48,
      },
    },
    {
      title: "TRAIN TIMINGS",
      image: {
        src: "https://img.icons8.com/bubbles/50/last-24-hours.png",
        alt: "last-24-hours",
        width: 50,
        height: 50,
      },
    },
    {
      title: "BUS TIMINGS",
      image: {
        src: "https://img.icons8.com/dusk/64/bus--v1.png",
        alt: "bus--v1",
        width: 64,
        height: 64,
      },
    },
  ],
};

const HomePage = () => (
  <>
    <Header />
    <HomeCarusel />
    <div
      className="about_temple_section p-5"
      style={{ background: "linear-gradient(to top,#FFC232,#FFFFFF)" }}
    >
      <h2 className="text-center mb-4 p-5 text-decoration-underline">
        About Tiruvannamalai Arunachalesvara Temple
      </h2>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <p>
            திருவண்ணாமலை அருணாச்சலேஸ்வரர் கோயில் இந்தியாவின் மிகப் பழமையான
            மற்றும் புனிதமான கோயில்களில் ஒன்றாகும், இது தமிழ்நாட்டின்
            திருவண்ணாமலை நகரில் அமைந்துள்ளது.
          </p>
          <p>
            சிவபெருமானுக்கு அர்ப்பணிக்கப்பட்ட இந்த ஆலயம் அதன் பிரம்மாண்டமான
            கட்டிடக்கலை, ஆன்மீக முக்கியத்துவம் மற்றும் துடிப்பான
            திருவிழாக்களுக்கு பெயர் பெற்றது.
          </p>
          <p>
            கோவில் வளாகம் ஒரு பரந்த பகுதியை உள்ளடக்கியது மற்றும் சிக்கலான
            சிற்பங்கள் மற்றும் சிற்பங்களால் அலங்கரிக்கப்பட்ட பல மண்டபங்கள்,
            கோவில்கள் மற்றும் கோபுரங்களைக் கொண்டுள்ளது.
          </p>
          <p>
            இக்கோயில் ஆண்டுதோறும் கார்த்திகை தீபத்திற்கு பிரசித்தி பெற்றது
            திருவிழாவின் போது அண்ணாமலை மலையில் பெரிய தீபம் ஏற்றப்படுகிறது. உலகம்
            முழுவதிலுமிருந்து ஆயிரக்கணக்கான பக்தர்கள் மற்றும் சுற்றுலாப் பயணிகளை
            ஈர்க்கிறது.
          </p>
          <p>
            அண்ணாமலை மலையை வலம் வருவதை பக்தர்கள் நம்புகின்றனர் கோவிலில் வழிபாடு
            செய்தால் அவர்களின் விருப்பங்கள் நிறைவேறும் ஆன்மீக விடுதலை.
          </p>
          <p>
            திருவண்ணாமலை அருணாச்சலேஸ்வரர் கோயிலுக்குச் செல்வது ஒரு
            கருதப்படுகிறது இந்து மதத்தைப் பின்பற்றுபவர்களுக்கான புனித யாத்திரை,
            பக்தர்களை ஈர்க்கிறது ஆசீர்வாதம், அமைதி மற்றும் தெய்வீக கிருபையை
            நாடுகின்றனர்.
          </p>
        </div>
      </div>
    </div>

    <div
      id="section-main-content"
      className="flex justify-content-center text-center"
      style={{ background: "linear-gradient(to top, #FFFFFF,#FFC232)" }}
    >
      <div className="section-inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="text-center mt-5">
                POOJAS TIMINGS AND RATE OF OFFERINGS
              </h3>
              <hr
                className="mx-auto"
                style={{ width: "60px", borderTop: "2px solid #000000" }}
              />
            </div>
          </div>
          <div className="row mt-5 justify-content-around">
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="card text-center h-100 border-0 bg-transparent">
                <div className="card-body p-4">
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-star-astrology-flaticons-flat-flat-icons.png"
                    alt="external-star-astrology-flaticons-flat-flat-icons"
                  />
                  <h5 className="card-title mt-3">TODAYS</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="card text-center h-100 border-0 bg-transparent">
                <div className="card-body p-4">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/ios/50/lotus.png"
                    alt="lotus"
                  />
                  <h5 className="card-title mt-3">SPECIAL POOJAS</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="card text-center h-100 border-0 bg-transparent">
                <div className="card-body p-4">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/emoji/48/diya-lamp-emoji.png"
                    alt="diya-lamp-emoji"
                  />
                  <h5 className="card-title mt-3">VAZHIPADU RATES</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="card text-center h-100 border-0 bg-transparent">
                <div className="card-body p-4">
                  <img
                    width="58"
                    height="58"
                    src="https://img.icons8.com/external-sbts2018-flat-sbts2018/58/external-calender-diwali-sbts2018-flat-sbts2018.png"
                    alt="external-calender-diwali-sbts2018-flat-sbts2018"
                  />
                  <h5 className="card-title mt-3">TEMPLE CALENDER</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-5 container">
      <div className="text-center">
        <h3 className="mb-4">Related Temples</h3>
        <hr
          className="mx-auto"
          style={{ width: "60px", borderTop: "2px solid #ffc232" }}
        />
        <p>Other famous temples near Sabarimala</p>
      </div>
      <div className="pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="https://3.imimg.com/data3/EL/PY/MY-9082869/sri-ramanasramam-ashram-1000x1000.jpg"
                    alt="Avatar"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }} // Added object-fit and border radius
                  />
                </div>
                <div
                  className="flip-card-back"
                  style={{ padding: "20px", borderRadius: "8px" }}
                >
                  <h1
                    className="h5 mb-3"
                    style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                  >
                    Sri Ramanasramam
                  </h1>{" "}
                  {/* Adjusted font size and weight */}
                  <p
                    className="text-xs"
                    style={{ fontSize: "0.9rem", lineHeight: "1.4" }}
                  >
                    {" "}
                    {/* Adjusted font size and line height */}
                    As a boy of sixteen in 1896, he challenged death by a
                    penetrating enquiry into the source of his being. Later
                    hailed as Bhagavan Sri Ramana Maharshi he revealed the
                    direct path of practice of Self-enquiry and awakened mankind
                    to the immense spiritual power of the holy Arunachala Hill,
                    the spiritual heart of the world.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="http://img1.dinamalar.com/Kovilimages/T_500_1177.jpg"
                    alt="Avatar"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }} // Added object-fit and border radius
                  />
                </div>
                <div
                  className="flip-card-back"
                  style={{ padding: "20px", borderRadius: "8px" }}
                >
                  <h1
                    className="h5 mb-3"
                    style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                  >
                    Sri Yogi Ramsuratkumar Temple
                  </h1>{" "}
                  {/* Adjusted font size and weight */}
                  <p
                    className="text-xs"
                    style={{ fontSize: "0.9rem", lineHeight: "1.4" }}
                  >
                    {" "}
                    {/* Adjusted font size and line height */}
                    Sri Yogi Ramsuratkumar Temple in Tiruvannamalai beckons seekers with its serene aura, offering solace and spiritual guidance in devotion to the revered saint
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="https://media-cdn.tripadvisor.com/media/photo-s/11/c1/7c/d3/20180112-104738-largejpg.jpg"
                    alt="Avatar"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }} // Added object-fit and border radius
                  />
                </div>
                <div
                  className="flip-card-back"
                  style={{ padding: "20px", borderRadius: "8px" }}
                >
                  <h1
                    className="h5 mb-3"
                    style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                  >
                    Virupaksha Cave
                  </h1>{" "}
                  {/* Adjusted font size and weight */}
                  <p
                    className="text-xs"
                    style={{ fontSize: "0.9rem", lineHeight: "1.4" }}
                  >
                    {" "}
                    {/* Adjusted font size and line height */}
                    Virupaksha Cave, nestled atop Arunachala Hill in Tiruvannamalai, is a sacred sanctuary where devotees seek solace and meditative wisdom in the serene embrace of nature
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/ab/c0/e1/skandasramam-cave-meditation.jpg?w=1200&h=-1&s=1"
                    alt="Avatar"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }} // Added object-fit and border radius
                  />
                </div>
                <div
                  className="flip-card-back"
                  style={{ padding: "20px", borderRadius: "8px" }}
                >
                  <h1
                    className="h5 mb-3"
                    style={{ fontSize: "1.2rem", fontWeight: "bold" }}
                  >
                    Skandashramam
                  </h1>{" "}
                  {/* Adjusted font size and weight */}
                  <p
                    className="text-xs"
                    style={{ fontSize: "0.9rem", lineHeight: "1.4" }}
                  >
                    {" "}
                    {/* Adjusted font size and line height */}
                    Skandashramam, perched serenely atop Arunachala Hill in Tiruvannamalai, invites seekers to bask in the tranquil ambiance and spiritual resonance, echoing the meditative legacy of Sage Ramana Maharshi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="h6 text-center">See More..</p>
      </div>
    </div>

    <div
  id="block-ourservicehomepagev1"
  className="banner-title bg-title-purple block text-center mt-5 pb-5 d-flex justify-content-center align-items-center" // Added d-flex justify-content-center align-items-center classes
  style={{ background: "linear-gradient(to top, #FFC232, #FFFFFF)", minHeight: "300px" }} // Added minHeight style
>
  <div className="container">
    <div className="p-5">
    <h2 className="block-title">TRAVEL & DISTANCE CHART</h2>
    <hr
          className="mx-auto"
          style={{ width: "60px", borderTop: "2px solid #000000" }}
        /></div>
    <div className="row">
      {travelData.cards.map((card, index) => (
        <div key={index} className="col-lg-4 col-md-6 col-sm-6 mb-4">
          <div className="card-custom d-flex justify-content-center align-items-center h-100"> {/* Added h-100 class */}
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <img
                src={card.image.src}
                alt={card.image.alt}
                width={card.image.width}
                height={card.image.height}
                className="rounded-circle"
              />
              <h5 className="card-title text-black p-3">{card.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


    <div
      id="block-evenmorefeaturerich"
      className="text-center block-overlay white-section blockmb-5 p-5"
      style={{ background: "linear-gradient(to top, #FFFFFF,#FFC232)" }}
    >
      <div
        style={{ backgroundColor: "#000", opacity: 0.6 }}
        className="block-overlay-inner"
      ></div>
      <div className="text-center h3">
        <h1>INFRASTRUCTURE & SERVICES</h1>
        <hr />
      </div>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-md-4">
            <div className="mb-4">
              <h5 className="mt-3">FIRST AID LOCATIONS</h5>
              <p className="card-text">
                Sannidhanam: 04735-202101
                <br />
                Pampa: 04735-202101, 04735-203590, 203591
              </p>
            </div>
            <div className="mb-4">
              <h5 className="mt-3">POLICE CONTROL ROOMS</h5>
              <p>
                Pampa: 04735-203386
                <br />
                Sannidhanam: 04735-202016
              </p>
            </div>
            <div className="mb-4">
              <h5 className="mt-3">POLICE STATIONS</h5>
              <p>
                Pampa: 04735-203412
                <br />
                Sannidhanam: 04735-202014
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://2.bp.blogspot.com/-5acI9wNwFEk/VnbXpJ0wbnI/AAAAAAAAAMY/8wdIeybXjnY/s1600/Sri%2BApeethakuchambal%2BSametha%2BSri%2BArunachaleswara%2BSwamy%2521.jpg"
                className="card-img-top rounded"
                alt="ayyappan"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-4">
              <h5 className="mt-3">FIRE FORCE</h5>
              <p>Sannidhanam: 04735-202033</p>
            </div>
            <div className="mb-4">
              <h5 className="mt-3">AMBULANCE</h5>
              <p>
                Pampa: 04735-203590, 04735-203591
                <br />
                Nilackal: 04735-1298
              </p>
            </div>
            <div className="mb-4">
              <h5 className="mt-3">BANKS & ATMS</h5>
              <p>
                Sannidhanam: Dhanalakshmi Bank ATM1, SBI ATM - Near Valiya
                Nadappanthal
                <br />
                Pampa: ICICI Bank - Near KSRTC Busstand
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </>
);

export default HomePage;
