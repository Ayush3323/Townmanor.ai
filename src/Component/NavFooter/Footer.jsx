import React from "react";
import "./Footer.css"
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="bg-dark text-light py-5 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img
                src="/footer-logo.png"
                width="220"
                alt="Townmanor Logo"
                className="mb-3"
              />
              <p>
                Townmanor Technologies Pvt Ltd, a comprehensive proptech
                aggregator platform, has been officially recognized as a Startup
                by StartupIndia, DIIPT, under the auspices of the Government of
                India.
              </p>
            </div>
            <div className="col-md-2">
              <h5>CONTACT US</h5>
              <ul className="list-unstyled">
                <li>ST-304, Eldeco Studio, Sector 93A, Noida India, PIN-201304</li>
                <li>+91-0120-4124636, 7042844467, 7042888903</li>
                <li>corporate@townmanor.in</li>
                <li><a href="#" className="text-light">CONTACT US</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h5>QUICK LINKS</h5>
              <ul className="list-unstyled">
                <li><a href="https://townmanor.in/en/182/about_us" className="text-light">About Us</a></li>
                <li><a href="https://townmanor.in/en/180/contact_us" className="text-light">Contact Us</a></li>
                <li><a href="https://townmanor.in/en/183/faqs" className="text-light">FAQ's</a></li>
                <li><a href="https://townmanor.in/en/195/terms_and_condition" className="text-light">Terms and Conditions</a></li>
                <li><a href="https://townmanor.in/en/181/privacy_policy" className="text-light">Privacy Policy</a></li>
                <li><a href="https://townmanor.in/en/198/refund_and_cancellation_policy" className="text-light">Refund and Cancellation Policy</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              {/* <h5>Services </h5> */}
              <h5>SERVICES </h5>
              <ul className="list-unstyled">
                <li><a href="https://townmanor.in/en/182/about_us" className="text-light">Home Loan</a></li>
                <li><a href="https://townmanor.in/en/180/contact_us" className="text-light">Insurance</a></li>
                <li><a href="https://townmanor.in/en/183/faqs" className="text-light">Home Interior</a></li>
                <li><a href="https://townmanor.in/en/195/terms_and_condition" className="text-light">Subscription Plan</a></li>
                <li><a href="https://townmanor.in/en/181/privacy_policy" className="text-light">Home Shift</a></li>
                <li><a href="https://townmanor.in/en/198/refund_and_cancellation_policy" className="text-light">Property valuation</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              {/* <h5>More About</h5> */}
              <h5>MORE ABOUT</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-light">News/Article</a></li>
                <li><a href="#" className="text-light">Luxury Apartement</a></li>
                <li><a href="#" className="text-light">Video Tuturioal</a></li>
                <li><a href="#" className="text-light">Support team</a></li>
                <li><a href="#" className="text-light">Site Map</a></li>
                <li><a href="#" className="text-light">Testimonials</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>FOLLOW US</h5>
              <div className="footer-social">
                <ul className="list-unstyled d-flex mt-4">
                  <li className="mr-3"><a href="#"><i className="fab fa-facebook"></i></a></li>
                  <li className="mr-3"><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li className="mr-3"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="india-property-link">
                <h5>
                  Properties in India              
                  &nbsp;<img src="./india-flag.jpg" alt="India Flag" width="24" className="mr-2" />
                </h5>
                <div className="footer_india_content">
                  <a href="https://townmanor.in/en/145/search_property?search={%22view%22:%22grid%22,%22v_search_option_64_1%22:%22India%20-%20Delhi%20-%22}">Delhi |</a>
                  <a href="https://townmanor.in/en/145/search_property?search={%22view%22:%22grid%22,%22v_search_option_64_1%22:%22India%20-%20Ghaziabad%20-%22}">Ghaziabad |</a>
                  <a href="https://townmanor.in/en/145/search_property?search={%22view%22:%22grid%22,%22v_search_option_64_1%22:%22India%20-%20Greater%20Noida%20-%22}">Greater Noida |</a>
                  <a href="https://townmanor.in/en/145/search_property?search={%22view%22:%22grid%22,%22v_search_option_64_1%22:%22India%20-%20Faridabad%20-%22}">Faridabad |</a>
                  <a href="https://townmanor.in/en/145/search_property?search={%22view%22:%22grid%22,%22v_search_option_64_1%22:%22India%20-%20Noida%20-%22}">Noida |</a>
                  <a href="https://townmanor.in/en/145/search_property?search={%22view%22:%22grid%22,%22v_search_option_64_1%22:%22India%20-%20Gurgaon%20-%22}">Gurgaon</a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="international-property-link">
                <h5>
                  International  Properties<br/>
                  &nbsp;<img src="./uae-flag.png" alt="Dubai Flag" width="24" className="mr-2" />  &nbsp;
                  <img src="./qatar-flag.png" alt="Qatar Flag" width="24" className="mr-2" />
                </h5>
                <div className="footer_international_content">
                  <a href="https://townmanor.in/en/145/search_property?search={%22view%22:%22grid%22,%22v_search_option_64_1%22:%22UAE%20-%20Dubai%20-%22}">Dubai |</a>
                  <a href="https://townmanor.in/en/145/search_property?search={%22view%22:%22grid%22,%22v_search_option_64_1%22:%22Qatar%20-%20Doha%20-%22}">Doha</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="last-container">
        <div className="row justify-content-between">
          <div className="col-md-6">
            <div className="copyright text-left footer-content">
              <p className="ms-4">© Townmanor Technologies Pvt Ltd.. All Rights Reserved.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="Digipanda_Consulting footer-content text-right">
              <p className="me-4">
                Crafted with <span className="text-danger">&hearts;</span> by: Digipanda Consulting
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
