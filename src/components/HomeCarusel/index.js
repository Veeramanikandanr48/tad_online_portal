import React from 'react';

const HomeCarousel = () => (
  <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://4.bp.blogspot.com/-4bSv34WB_-Y/V9KmfoqrqYI/AAAAAAAAu0U/qOP8MN2-9N0ZNGs88ES0hBKHs4BlU_xnACLcB/s1600/ArunachaleswaraTemple.2.jpg" className="d-block w-100" alt="tvm" style={{ height: '500px', objectFit: 'cover' }} />
      </div>
      <div className="carousel-item">
        <img src="https://trendaroundus.in/wp-content/uploads/2020/09/Shri-Arunachaleswarar-Temple-1024x576.jpg" className="d-block w-100" alt="..." style={{ height: '500px', objectFit: 'cover' }} />
      </div>
      <div className="carousel-item">
        <img src="https://2.bp.blogspot.com/-5acI9wNwFEk/VnbXpJ0wbnI/AAAAAAAAAMY/8wdIeybXjnY/s1600/Sri%2BApeethakuchambal%2BSametha%2BSri%2BArunachaleswara%2BSwamy%2521.jpg" className="d-block w-100" alt="..." style={{ height: '500px', objectFit: 'cover' }} />
      </div>
    </div>
  </div>
);

export default HomeCarousel;
