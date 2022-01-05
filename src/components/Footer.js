import sfanImage from "../images/sfan.png";
import locationImage from "../images/location.png";
import telephoneImage from "../images/telephone.png";
import mailImage from "../images/mail.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main">
        <section className="footer__contact">
          <h2 className="footer__heading">Get in touch</h2>
          <form method="post" className="form">
            <input
              type="text"
              name="name"
              className="form__input"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              className="form__input"
              placeholder="Email"
            />
            <textarea
              placeholder="Comment"
              className="form__input form__input--textarea"
              name="comment"
            ></textarea>
            <button type="submit" className="form__submit">
              contact us now
            </button>
          </form>
        </section>
        <section className="footer__links">
          <h2 className="footer__heading">Quick Links</h2>
          <div className="footer__links__top">
            <ul className="footer__links__left">
              <li className="footer__links__item">
                <a href="#venture-studio" className="footer__link">
                  Venture Studio
                </a>
              </li>
              <li className="footer__links__item">
                <a href="#readyforwork" className="footer__link">
                  ReadyforWork
                </a>
              </li>
              <li className="footer__links__item">
                <a href="#events" className="footer__link">
                  Events
                </a>
              </li>
              <li className="footer__links__item">
                <a href="#media" className="footer__link">
                  Media
                </a>
              </li>
            </ul>
            <ul className="footer__links__right">
              <li className="footer__links__item">
                <a href="#starsweare" className="footer__link">
                  #StarsWeAre
                </a>
              </li>
              <li className="footer__links__item">
                <a href="#resume-service" className="footer__link">
                  Resume Service
                </a>
              </li>
              <li className="footer__links__item">
                <a href="#help-center" className="footer__link">
                  Help Center
                </a>
              </li>
              <li className="footer__links__item">
                <a href="#privacy" className="footer__link">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__links__bottom">
            <a href="#twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#youtube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#linkedin">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </section>
        <section className="footer__address">
          <img
            src={sfanImage}
            alt="SFAN Logo"
            className="footer__address__image"
          />
          <p className="footer__address__text">
            SFAN is unlocking the potential of Africa's young geniuses by
            helping them turn their passion into businesses and fulfilling
            careers.
          </p>
          <div className="footer__address__contact">
            <div>
              <img
                className="mr-1 width-2"
                src={locationImage}
                alt="Location"
              />
              <p className="footer__address__text m-0">
                King Solomon's Height, 26, Mango St, Accra
              </p>
            </div>
            <div>
              <img
                className="mr-1 width-2"
                src={telephoneImage}
                alt="Telephone"
              />
              <p className="footer__address__text m-0">
                <a href="tel:+233302803935">030 280 2935</a>
              </p>
            </div>
            <div>
              <img className="mr-1 width-2" src={mailImage} alt="Mail" />
              <p className="footer__address__text m-0">
                <a href="mailto:info@sfanonline.org">info@sfanonline.org</a>
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="footer__credits">
        <hr />
        <p className="footer__credits__text">
          Copyright&copy; 2022 Stars From All Nations Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
