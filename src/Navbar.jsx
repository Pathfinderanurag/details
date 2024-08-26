function Navbar() {
  return (
    <>
      <div id="navbar">
        <div className="logo-section">
          <img src="src\images\logo.png" alt="" />
        </div>

        <div className="menu-list">
          <>
            <input type="checkbox" name="" id="check" />
            <label htmlFor="check" id="checkbtn">
              <i className="fa fa-bars" />
            </label>
          </>

          <ul id="logo-list">
            <li>ABOUT MUIT</li>
            <li>PROGRAM</li>
            <li>ACADEMICS</li>
            <li>CAMPUS</li>
            <li>INFRASTRUCTURE</li>
            <li>
              <a href="sign.html" target="blank" id="enroll">
                ENROLLMENT{" "}
              </a>
            </li>
          </ul>
        </div>
        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="src\images\8a8ce13f-3bdb-43c4-a235-94767d294843_ENGINEERING&TECHNOLOGY.jpg"
                className="d-block w-100 h-20"
                alt="..."
              />
              
            </div>
            <div className="carousel-item active">
              <img
                src="src\images\42489376-509b-4c9a-817b-1cd276360580_TM1920x1080px.png"
                className="d-block w-100"
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="src\images\79bc8bd7-5653-4e2e-a2f2-c4cf9b46b44b_law.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src=" src\images\data.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="src\images\5e0a9202-eff5-41a6-90d0-61ba32929ff7_slider.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="poping-section">
          <marquee class="blink">
            Dear students, please be aware of a fraudulent website impersonating
            Maharishi University. Visit :—
            <a
              href="https://maharishiuniversity.ac.in/"
              style={{ color: "white" }}
              target="_blank"
            >
              {" "}
              1. www.maharishiuniversity.ac.in for official updates and
              information about Maharishi University, Lucknow campus.{" "}
            </a>
            <a
              href="  https://muitnoida.edu.in/ "
              style={{ color: "white" }}
              target="_blank"
            >
              {" "}
              2. www.muitnoida.edu.in for official updates and information about
              Maharishi University, Noida campus.{" "}
            </a>
            <a
              href="http://www.muitonline.com/ "
              style={{ color: "white" }}
              target="_blank"
            >
              {" "}
              3. www.muitonline.com for official updates and information about
              Maharishi University, Online Programs.{" "}
            </a>
            <a
              href="https://www.muit.in/"
              style={{ color: "white" }}
              target="_blank"
            >
              {" "}
              4. www.muit.in for official updates and information about
              Maharishi University.{" "}
            </a>
          </marquee>
        </div>
      </div>
    </>
  );
}
export default Navbar;
