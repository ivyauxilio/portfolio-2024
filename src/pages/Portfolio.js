const Portfolio = () => {
  return (
    <>
      <section id="portfolio" class="portfolio section">
        <div class="container section-title">
          <h2>Portfolio</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div class="container">
          <div
            class="isotope-layout"
          >
            <ul
              class="portfolio-filters isotope-filters"
            >
              <li data-filter="*" class="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-product">Card</li>
              <li data-filter=".filter-branding">Web</li>
            </ul>

            <div
              class="row gy-4 isotope-container"
            >
              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <img
                  src="assets/img/masonry-portfolio/masonry-portfolio-1.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>App 1</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-1.jpg"
                    title="App 1"
                    data-gallery="portfolio-gallery-app"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <img
                  src="assets/img/masonry-portfolio/masonry-portfolio-2.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Product 1</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-2.jpg"
                    title="Product 1"
                    data-gallery="portfolio-gallery-product"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <img
                  src="assets/img/masonry-portfolio/masonry-portfolio-3.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Branding 1</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-3.jpg"
                    title="Branding 1"
                    data-gallery="portfolio-gallery-branding"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <img
                  src="assets/img/masonry-portfolio/masonry-portfolio-4.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>App 2</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-4.jpg"
                    title="App 2"
                    data-gallery="portfolio-gallery-app"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <img
                  src="assets/img/masonry-portfolio/masonry-portfolio-5.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Product 2</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-5.jpg"
                    title="Product 2"
                    data-gallery="portfolio-gallery-product"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <img
                  src="assets/img/masonry-portfolio/masonry-portfolio-6.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Branding 2</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-6.jpg"
                    title="Branding 2"
                    data-gallery="portfolio-gallery-branding"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <img
                  src="assets/img/masonry-portfolio/masonry-portfolio-7.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>App 3</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-7.jpg"
                    title="App 3"
                    data-gallery="portfolio-gallery-app"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                <img
                  src="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Product 3</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-8.jpg"
                    title="Product 3"
                    data-gallery="portfolio-gallery-product"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                <img
                  src="assets/img/masonry-portfolio/masonry-portfolio-9.jpg"
                  class="img-fluid"
                  alt=""
                />
                <div class="portfolio-info">
                  <h4>Branding 3</h4>
                  <p>Lorem ipsum, dolor sit</p>
                  <a
                    href="assets/img/masonry-portfolio/masonry-portfolio-9.jpg"
                    title="Branding 2"
                    data-gallery="portfolio-gallery-branding"
                    class="glightbox preview-link"
                  >
                    <i class="bi bi-zoom-in"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    title="More Details"
                    class="details-link"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;