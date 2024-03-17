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
      <h2 className="text-center mb-4 p-5">
        About Tiruvannamalai Arunachalesvara Temple
      </h2>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <p>
            The Tiruvannamalai Arunachalesvara Temple is one of the most ancient
            and sacred temples in India, located in the town of Tiruvannamalai
            in the state of Tamil Nadu.
          </p>
          <p>
            Dedicated to Lord Shiva, the temple is renowned for its grand
            architecture, spiritual significance, and vibrant festivals.
          </p>
          <p>
            The temple complex covers a vast area and consists of several
            mandapams, shrines, and gopurams adorned with intricate carvings and
            sculptures.
          </p>
          <p>
            The temple is particularly famous for its annual Kartikai Deepam
            festival, during which a huge lamp is lit atop the Annamalai hill,
            attracting thousands of devotees and tourists from around the world.
          </p>
          <p>
            Devotees believe that circumambulating the Annamalai hill and
            offering prayers at the temple will fulfill their wishes and lead to
            spiritual liberation.
          </p>
          <p>
            Visiting the Tiruvannamalai Arunachalesvara Temple is considered a
            sacred pilgrimage for followers of Hinduism, attracting devotees
            seeking blessings, peace, and divine grace.
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
                style={{ width: "60px", borderTop: "2px solid #ffc232" }}
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
        <div className="row justify-content-around">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src="https://via.placeholder.com/200x400"
                      alt="Avatar"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <h1>John Doe</h1>
                    <p>Architect & Engineer</p>
                    <p>We love that guy</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div
      id="block-ourservicehomepagev1"
      className="banner-title bg-title-purple block text-center mt-5 pb-5"
      style={{ background: "linear-gradient(to top, #FFC232, #FFFFFF)" }}
    >
      <h2 className="block-title p-5">TRAVEL & DISTANCE CHART</h2>
      <div className="container">
        <div className="row">
          {travelData.cards.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-6 mb-4">
              <div className="card card-custom">
                <div className="card-body">
                  <img
                    src={card.image.src}
                    alt={card.image.alt}
                    width={card.image.width}
                    height={card.image.height}
                    className="rounded-circle"
                  />
                  <h5 className="card-title text-black">{card.title}</h5>
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
