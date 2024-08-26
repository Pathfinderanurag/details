function Course() {
  return (
    <>
      <div className="body-section">
        <div className="text-area">
          <h2 id="body-text">STUDY AT MUIT </h2>
          <p id="body-para">
            MUIT disseminates quality education in line with the requirements of
            today’s competitive industry and rapid development in technology and
            further provides an environment conducive to harnessing the
            intellectual potential and personal strengths of students through
            excellent teaching, attracting talent, fostering creativity,
            research, and innovation.
          </p>
        </div>
        <div className="advantage">
          <h2 id="h1">9 + </h2>
          <span id="Experience">Years Of Experience</span>
        </div>
      </div>
      <div className="student-section">
        <div id="image-one">
          <img src="https://muitnoida.edu.in/upload/Image/eed00c8e-e46e-4d03-80bb-315b33f96443_DSC09336.JPG " alt="" />
        </div>
        <div className="image-two">
<img src="src\images\name.png" alt="" />
        </div>
      </div>{" "}
    
      <div className="notice">
        <div className="notice-item">
          <img
            src="https://muitnoida.edu.in/upload/Image/4cf7c296-c54d-4da0-9096-aef17583d33b_muit-noida%20(2).jpg"
            alt=""
          />
        </div>
        <div className="notice-item">
          <img
            src="https://muitnoida.edu.in/upload/Image/f4f1691b-e08f-4bc7-a5a3-38b553d1a76c_Library-20.jpg"
            alt=""
          />
        </div>
        <div className="notice-item">
          <img
            src="https://muitnoida.edu.in/upload/Image/d96faa5c-0cac-4413-8b19-717c83b994bc_913b3d03-bedf-4a4d-b09f-229f0bf77a0e_mpl-2.jpg"
            alt=""
          />
        </div>
      </div>{" "}
      <div className="student-work">
        <div className="item">
          {" "}
          <img
            src="https://muitnoida.edu.in/upload/Image/936c4046-ae06-4c91-a1a9-6675f839a89e_WhatsApp%20Image%202023-05-07%20at%205.12.04%20PM%20(1).jpeg"
            alt=""
          />
          <h5>Media Teach Work</h5>{" "}
        </div>
        <div className="item">
          <img
            src="https://muitnoida.edu.in/upload/Image/8b53f3ec-196a-4132-945a-b9c50d8c2da1_01.jpg"
            alt=""
          />
          <h5>Data Science Work</h5>
        </div>
        <div className="item">
          <img
            src="https://muitnoida.edu.in/upload/Image/15213fc1-8283-4fca-b8e1-3bc178017a7a_WhatsApp%20Image%202023-05-09%20at%204.32.54%20PM.jpeg"
            alt=""
          />
          <h5>Business Studies Work</h5>
        </div>
      </div>
      <div className="events">
        <div className="praogram">
          <img id="zoom"
            src="https://muitnoida.edu.in/upload/Image/26b8948e-e1d7-4f40-af14-4256ed5a10a9_banner.jpg"
            alt=""
          />
        </div>
      </div>
      <>
        <div className="about">
          <div className="end-logosection">
            <img src="src\images\logo.png" alt="" />
          </div>
          <div className="address">
            <p>
              {" "}
              Sector 110, Noida , PO- Maharishi Nagar, Distt. Gautam Budh Nagar,
              Uttar Pradesh 201304, India
            </p>
          </div>
          <span id="contact-one">+91 9870200341</span>
          <span id="mail"> admissions.noida@muit.in</span>
          <div className="map-section">
            <iframe
              id="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.2053837124763!2d77.38249177613466!3d28.53354578856765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce8ba85555525%3A0x7bb4aa0809ceeddd!2sMaharishi%20University%20of%20Information%20Technology%20Noida!5e0!3m2!1sen!2sin!4v1723284872067!5m2!1sen!2sin"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* <hr id="hori"> */}
            <iframe
              id="youtube"
              width={255}
              height={143}
              src="https://www.youtube.com/embed/EQ0Ho1HW7TE"
              title="School of Data Science | MUIT Noida"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen=""
            />
          </div>
        </div>
        <div className="end-line">
          <div className="text">
            <p style={{ color: "#20364B" }}>
              © 2023 Maharishi University of Information Technology. All Rights
              Reserved{" "}
            </p>
            <p id="refund" style={{ color: "#20364B" }}>
              Terms and condtion | Privcy policy | Refund Policy
            </p>
          </div>
        </div>
      </>
    </>
  );
}
export default Course;
