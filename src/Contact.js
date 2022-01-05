import reachImg from "./images/reach.png";

const Contact = () => {
  return (
    <div className="contact">
      <header className="contact__header">
        <div className="contact__header__content">
          <h3 className="contact__header__text t-uppercase mb-1">
            FOR INQUIRIES, COMPLIMENTS, RECRUITMENT,
            <span>OR TO DISCUSS BUSINESS OPPORTUNITIES,</span>
            <span>WE'D LOVE TO HEAR FROM YOU.</span>
          </h3>
          <h1 className="heading-1 mb-2">
            <span className="d-block">give us</span>
            <span className="d-block">a holler</span>
          </h1>
          <button className="contact__header__button mb-2">
            Get Support Now
          </button>
          <h4 className="contact__header__text">
            We are here to assist you 24/7/365
          </h4>
        </div>
      </header>
      <main className="contact__main">
        <section className="contact__contact-options">
          <h1 className="heading-1 heading-1--body align-center">
            For SFAN Venture Building, Career Support or Partnerships
          </h1>
          <div className="options-container">
            <article className="contact__contact-options__option">
              <h3 className="contact__contact-options__option__title">
                Live Chat
              </h3>
              <p className="contact__contact-options__option__body">
                The quickest approach to obtain a response to your Venture
                Building, Career Support or Partnership query.
              </p>
              <a
                href="#chat"
                className="contact__contact-options__option__link"
              >
                Chat With Us
              </a>
            </article>
            <article className="contact__contact-options__option">
              <h3 className="contact__contact-options__option__title">
                Call Us
              </h3>
              <p className="contact__contact-options__option__body">
                The quickest approach to obtain a response to your Venture
                Building, Career Support or Partnership query.
              </p>
              <a
                href="tel:+233302802935"
                className="contact__contact-options__option__link"
              >
                Call: +233302802935
              </a>
            </article>
            <article className="contact__contact-options__option">
              <h3 className="contact__contact-options__option__title">Email</h3>
              <p className="contact__contact-options__option__body">
                The quickest approach to obtain a response to your Venture
                Building, Career Support or Partnership query.
              </p>
              <a
                href="mailto:info@sfanonline.org"
                className="contact__contact-options__option__link"
              >
                Contact Us
              </a>
            </article>
          </div>
        </section>
        <section className="contact__resources">
          <h1 className="heading-1 heading-1--body align-center">
            Rather TIY? Check Out
            <span className="d-block">These Resources</span>
          </h1>
          <div className="resources-container">
            <article className="card contact__resources__resource">
              <p className="contact__resources__resource__content">
                DELAWARE-BASED SAAS COMPANY LAUNCHES AND CRUNCHES INDUSTRY
                BENCHMARK WITH SFAN SUPPORT.
              </p>
              <a href="/" className="contact__resources__resource__link">
                Read More
              </a>
            </article>
            <article className="card contact__resources__resource">
              <p className="contact__resources__resource__content">
                GHANA'S FIRST BUILDING MATERIAL AND CONSTRUCTION EQUIPMENT MALL
                LAUNCHED WITH SFAN SUPOPORT.
              </p>
              <a href="/" className="contact__resources__resource__link">
                Read More
              </a>
            </article>
          </div>
        </section>
        <section className="contact__socials">
          <div className="contact__socials__social">
            <a
              href="https://www.instagram.com/sfanonline/"
              className="contact__socials__link"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAKaADAAQAAAABAAAAKAAAAADeiI/VAAAEPElEQVRYCe1YO2wTQRCdIBposARtyFWkxFBCwfFpgXTQxUSiooiDaFGMaChAhBqJLC0Nhh7hFKYEpwwNF6AEKWkogffuMne79t7HpzMVIz3t7O7M7PN+5nY9J89//5FZye1Dc02EPtREkFnH+E+yqRk+PFWgH5HI6I3I5y2RX3si30ZJmR+kaL8jgCCAsBwACCwRMCFzlQ7OV8R6dVdkZzARoOEGDrAGkHwq5XtyaEQenv0XBEkqBN4DHSCV4uUeGhGzkhrHyvEFkfaSyPxpkROB2zdee3zp4niTVW9BbwMBgIByDKCwfTPWMDrL/OXmEnMGVY4gxo2nIuc72lJeTpcnuwjYA5TsHnT+yFH+cnMPqpDgPazCNATVt3q5AdMQ2D9waaHErIj4SfIU7wzYn8id1yIn21prslxGMPx6WQdIagT0AJUQSuAnOeqrkQj34CJtG5clRDRACPSALkDZAHQ2WV/yk9xBHlThIZlWmEOTGBfg2spxb4+1h1a9b+mh/3RzEBWe4ipCn3fPRIYvRX5G6jE4UNhgABjEyRuFkAiXWcWogjKy9Jaf5PftzKYszdByaJJkb/84tmcSQO0BXWANMMAIOAMsHegkrRKpgnLBTzJ/MMv3QN1cEflgJtv9LS00bwIB0ANIlBiXyGrIOTiWRaE6NJMEL6+K3P8o+NzSdQ7gbGEPOMJl7jgtBRX/wSlwSLs42+O5lORuIrW56Yoz1QFIdh9QgWHuoVKbuKxP8u0D9wbEZO+ScwZChWRDq7EFvWvVc9X6JHllU+ESFxNUSxK1l35ZO4rKeiS51FmaETlXaSzlsaEKygBoWXWvWo8kL7u2VJtF9Rhzjm9C2uct65H0hppdYz2S822XEa911WXMOX46FHrXI3m0lVw8NPQH+yxoY27ZtXp2LT1XrUeS4c51sqD8ZlebTc6ifcpMFiRfq0/yCtIOL8MqTy6VESVBJNNUmNg30lqBUp8kl5zPCRWmJT43+C13Z5XkNoFPAJxS6UKDU7n4LxjlfokFnxN8g9t7kpeN7MLxJyfUA7TDsJr4Z9JexrI4tzBJnRfu0uf7cIlvAb18k7gnsPp3/STtFMP3TplwRh99Ebm67p76zI+nmLMXAAYok8AyiPzLzf2m8m1bteKSPtdAkuD+5FcpeXdDqbb3rAECS9/zz+TihczGvkhkrcUaCS+GtBkAYDy1XLc8Bn6S9uOLF4mhsXxmrvYwAn5lKn0/Sb5rTlmzycutm1bSCA0rbcTDfkllC1rkJ0mb8RzIZG2nmjROY8oqIjGXqjATdFnJ/y+IvUODs7hCLRPuN26HEws4yUGCrNfVHl8M3QanFqCmQEBniVGNU5WhUkySFkMzSZTtsxOdQaND5C+3WjAH8oFl71Hta77kHgwBA6RSPpOpKZT47+h+8heKPiF+7toW0+h0jIA9YAAgsPPPBaqJ/AXgGwwiifO3twAAAABJRU5ErkJggg=="
                alt="Instagram"
              />
            </a>
            <h2>Our Update & Vibes</h2>
          </div>
          <div className="contact__socials__social">
            <a
              href="https://www.instagram.com/sfanonline/"
              className="contact__socials__link"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAoCAYAAAB0HkOaAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAI6ADAAQAAAABAAAAKAAAAADspFCMAAADsElEQVRYCdVYTUhUURQ+9+nYJILiQigciWqQtDCzjT/5A2JuktRRWlRgmzJKISN0YbxE6YckRaFNmzZWGii0aqVCIJGGoUlRi8KxVcWUiqMzvtu57/nuzJs3o/fV+NOFmXu/c879zjf37903cGuCnoQdUiRKoVOmVNoJeiQgkAkTcGFniGEqCHTI4zR+uwXp05OCQpq3WwyRJ3DVsELBCxIckI+Rb5DqKsbh0uyqcwu+FnzvYnkaAnYU1IG4DkUNM3VbWhJiS/Rp0vOeb5ukmTrY6jowMlpmSfFDr0EEhVED3ixAiSdUDNtZxYZ8s8+N2OCMLgidpuiyW2Qzj0wkAkdVG4BUqLrZaKVVNwMl5SpeXKyAhPgixE0qVkgLzA2MRaKKZBcXQ0gGkhRxIgrpOKUa3m23oX0Px7CazOMsNHbUNG0oRn5L96o/zqe0AlVwKvDDiqLc5nhu8AeekS84JjGWp4hRbjxNFO5i3DmQyH4g5CDrhOslW631L4bZGUnWDETJxhjdK1grMxuLATiLD9EHcpWrDrNZzSAoBMOo9HjDaVLZSMhBKJ7CUqTIyDDC3MP5eT3Tr8a6LLFbCab0jagYcF2/Vn6zDw7VErJqJYeVWGExSOqcGJ1vhNSah2ETuAeWIOl0EiTYssL6Ixnx6gCeIQ9zC4vpv3cfZsZed+L1ojMsb2r1VVzg0yDR4bD+SEa8OoAHRphbbAFHIoqyXXhkYmJtYIuLU9P7V3xeShXFoIWAP+Q+9gvxpCFGBwSOYjNRh3otLKawpgpyykrVfitL3q997Xcu6SRaTT7hYeHkNiYk0vXD4RoJPMd4D/E1M/zkGVszes907WqqQ6wVRVszQSarzf9zzaSkpcHS/ILhx857PLPf3e7PmpHOBR5OhjBhILxmis/UmkkpsCd6mXycfFCd6iuOOUzUIixmqLsXPo6Pc96MvFw4VX8xBnfMIzQWcMc/NITFrCx7YWlhkafyeZe1NoF8fBGslXNIP3eyBqFZ4HCFPwCZj983Ar2is4ApdJnf1UkS5isO+wH0hSnCI1PZcAUqLtdzihhbUFeC918Kreh8yQP+ohHEuH5vm90O7Na9TmmqvNH4dPBed8k6MWbXgp+f0sJizCwhFgK2rPyCzkH3idIQjzAM/AsR1OXL1HuO9h2x+OpNoRK3+hAnsNAIK8ZCf3MohdnkRHA2OMnadjOHRLJEZzcFsxNw/PwNLcEm0Xb0xWiZm9unqENUhB63WWJ2+ZehR08iWv8BV6v9bV7MZgsAAAAASUVORK5CYII="
                alt="News"
              />
            </a>
            <h2>Our Insights & News Updates</h2>
          </div>
          <div className="contact__socials__social">
            <a
              href="https://www.instagram.com/sfanonline/"
              className="contact__socials__link"
            >
              <img
                src="data:image/png;base64,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"
                alt="Twitter"
              />
            </a>
            <h2>Thoughts & Vibes from SFAN</h2>
          </div>
        </section>
        <section className="contact__directions">
          <div className="contact__directions__image">
            <img src={reachImg} alt="Location" />
          </div>
          <div className="contact__directions__content">
            <h1 className="contact__directions__content__heading">
              Want to reach us at our office?
            </h1>
            <p className="contact__directions__content__body">
              SFAN partners with corporates, international development agencies,
              governments, charitable foundations, and individuals to unlock the
              potential of young people and create a global community of
              innovators. Our goal is to assemble a critical mass of
              collaborators to drive distinctive, scalable innovation in youth
              employment, entrepreneurship, and education. We believe that
              investment in young people is not only the right thing to do, but
              it is also the smart thing to do, and the time is now!
            </p>
            <a
              href="#directions"
              className="contact__directions__content__link"
            >
              Get Directions
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
