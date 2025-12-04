export default function HomePage() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav__wrapper">
          <figure className="nav__img--mask">
            <img className="nav__img" src="/assets/logo.png" alt="Summarist logo" />
          </figure>

          <ul className="nav__list--wrapper">
            <li className="nav__list nav__list--login">Login</li>
            <li className="nav__list nav__list--mobile">About</li>
            <li className="nav__list nav__list--mobile">Contact</li>
            <li className="nav__list nav__list--mobile">Help</li>
          </ul>
        </div>
      </nav>

      {/* LANDING SECTION */}
      <section id="landing">
        <div className="container landing__container">
          <div className="landing__text">
            <h1 className="landing__header">
              Understand books in minutes, not hours.
            </h1>
            <p className="landing__subheader">
              Get the key ideas from bestselling nonfiction books in minutes.
            </p>
            <button className="landing__btn">Get Started</button>
          </div>

          <figure className="landing__img--wrapper">
            <img
              className="landing__img"
              src="/assets/landing-page-book.png"
              alt="Book summary preview"
            />
          </figure>
        </div>
      </section>

      {/* WHY SUMMARIES */}
      <section id="why">
        <div className="container">
          <h2 className="why__header">Why summaries?</h2>
          <p className="why__subheader">
            We help you extract the key insights and learn faster.
          </p>

          <div className="why__cards">
            <div className="why__card">
              <img src="/assets/bolt.svg" alt="Fast" className="why__icon" />
              <h3 className="why__title">Fast Learning</h3>
              <p className="why__text">
                Consume critical ideas in just minutes.
              </p>
            </div>

            <div className="why__card">
              <img src="/assets/headphones.svg" alt="Audio" className="why__icon" />
              <h3 className="why__title">Audio & Text</h3>
              <p className="why__text">
                Read or listen anytime, anywhere.
              </p>
            </div>

            <div className="why__card">
              <img src="/assets/book-open.svg" alt="Library" className="why__icon" />
              <h3 className="why__title">Huge Library</h3>
              <p className="why__text">
                New summaries added weekly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <div className="container features__container">
          <figure className="features__img--wrapper">
            <img
              className="features__img"
              src="/assets/man-reading.png"
              alt="Man reading"
            />
          </figure>

          <div className="features__text">
            <h2 className="features__header">Learn smarter</h2>
            <p className="features__subheader">
              Save time. Learn the key lessons without reading the full book.
            </p>

            <ul className="features__list">
              <li className="features__item">✔ Highlights of the key ideas</li>
              <li className="features__item">✔ Professional summaries</li>
              <li className="features__item">✔ Audio versions included</li>
              <li className="features__item">✔ New books added weekly</li>
            </ul>

            <button className="features__btn">Start Free Trial</button>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing">
        <div className="container">
          <h2 className="pricing__header">Choose your plan</h2>

          <div className="pricing__cards">
            <div className="pricing__card">
              <h3 className="pricing__title">Monthly</h3>
              <p className="pricing__price">$14.99/mo</p>
              <ul className="pricing__features">
                <li>Unlimited summaries</li>
                <li>Audio & text</li>
                <li>Cancel anytime</li>
              </ul>
              <button className="pricing__btn">Choose</button>
            </div>

            <div className="pricing__card pricing__card--highlight">
              <h3 className="pricing__title">Yearly</h3>
              <p className="pricing__price">$99/yr</p>
              <ul className="pricing__features">
                <li>Unlimited summaries</li>
                <li>1 month free</li>
                <li>Audio & text</li>
              </ul>
              <button className="pricing__btn">Choose</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer__container">
          <figure className="footer__img--mask">
            <img className="footer__img" src="/assets/logo.png" alt="logo" />
          </figure>

          <ul className="footer__links">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Contact</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

