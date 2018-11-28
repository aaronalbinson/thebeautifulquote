import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

require("./Footer.scss");

const Footer = () => (
  <footer className="kilimanjaro_area">
    <div className="foo_top_header_one section_padding_100_70">
      <div className="columns is-multiline section">
        <div className="column is-12-mobile is-6-tablet is-3-desktop">
          <div className="kilimanjaro_part">
            <h5>About</h5>
            <p>
              Our goal is to make beautiful quotes for you to use in your
              instagram, twitter and other social media feeds. We are collecting
              lots of different quotes from all sorts of categories. The quotes
              on this website will be growing over time but there should be a
              quote on here for everyone, so keep looking, follow us on
              Instagram, Twitter and Facebook to keep up with the latest.
            </p>
          </div>
          <div className="kilimanjaro_part socialLinks m-top-15">
            <h5>Social Links</h5>
            <span>
              <a href="https://www.instagram.com/the_beautifulquote/">
                <svg
                  width="30"
                  height="30"
                  aria-hidden="true"
                  data-prefix="fab"
                  data-icon="instagram"
                  class="svg-inline--fa fa-instagram fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>
              <a href="https://www.facebook.com/thebeautquote/">
                <svg
                  width="30"
                  height="30"
                  aria-hidden="true"
                  data-prefix="fab"
                  data-icon="facebook-square"
                  class="svg-inline--fa fa-facebook-square fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"
                  />
                </svg>
              </a>
              <a href="https://twitter.com/TheBeautQuote">
                <svg
                  width="30"
                  height="30"
                  aria-hidden="true"
                  data-prefix="fab"
                  data-icon="twitter-square"
                  class="svg-inline--fa fa-twitter-square fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
                  />
                </svg>
              </a>
              <a href="https://www.pinterest.co.uk/thebeautifulquote/">
                <svg
                  width="30"
                  height="30"
                  aria-hidden="true"
                  data-prefix="fab"
                  data-icon="pinterest-square"
                  class="svg-inline--fa fa-pinterest-square fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M448 80v352c0 26.5-21.5 48-48 48H154.4c9.8-16.4 22.4-40 27.4-59.3 3-11.5 15.3-58.4 15.3-58.4 8 15.3 31.4 28.2 56.3 28.2 74.1 0 127.4-68.1 127.4-152.7 0-81.1-66.2-141.8-151.4-141.8-106 0-162.2 71.1-162.2 148.6 0 36 19.2 80.8 49.8 95.1 4.7 2.2 7.1 1.2 8.2-3.3.8-3.4 5-20.1 6.8-27.8.6-2.5.3-4.6-1.7-7-10.1-12.3-18.3-34.9-18.3-56 0-54.2 41-106.6 110.9-106.6 60.3 0 102.6 41.1 102.6 99.9 0 66.4-33.5 112.4-77.2 112.4-24.1 0-42.1-19.9-36.4-44.4 6.9-29.2 20.3-60.7 20.3-81.8 0-53-75.5-45.7-75.5 25 0 21.7 7.3 36.5 7.3 36.5-31.4 132.8-36.1 134.5-29.6 192.6l2.2.8H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"
                  />
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div className="column is-12-mobile is-6-tablet is-3-desktop">
          <div className="kilimanjaro_part">
            <h5>Tags</h5>
            <ul className=" kilimanjaro_widget">
              <li>
                <a href="#">Quotes</a>
              </li>
              <li>
                <a href="#">Funny Quotes</a>
              </li>
              <li>
                <a href="#">My favourite Quotes</a>
              </li>
              <li>
                <a href="#">Sport Quotes</a>
              </li>
              <li>
                <a href="#">Famous Quotes</a>
              </li>
              <li>
                <a href="#">Quotes about animals</a>
              </li>
              <li>
                <a href="#">Quotes about cats</a>
              </li>
              <li>
                <a href="#">Quotes about dogs</a>
              </li>
            </ul>
          </div>

          <div className="kilimanjaro_part m-top-15">
            <h5>Important Links</h5>
            <ul className="kilimanjaro_links">
              <li>
                <a href="#">
                  <svg
                    width="24px"
                    height="24px"
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="angle-right"
                    class="svg-inline--fa fa-angle-right fa-w-8"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                    />
                  </svg>
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="24px"
                    height="24px"
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="angle-right"
                    class="svg-inline--fa fa-angle-right fa-w-8"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                    />
                  </svg>
                  About Licences
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="24px"
                    height="24px"
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="angle-right"
                    class="svg-inline--fa fa-angle-right fa-w-8"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                    />
                  </svg>
                  Help & Support
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="24px"
                    height="24px"
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="angle-right"
                    class="svg-inline--fa fa-angle-right fa-w-8"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                    />
                  </svg>
                  Careers
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="24px"
                    height="24px"
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="angle-right"
                    class="svg-inline--fa fa-angle-right fa-w-8"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                    />
                  </svg>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    width="24px"
                    height="24px"
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="angle-right"
                    class="svg-inline--fa fa-angle-right fa-w-8"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 512"
                  >
                    <path
                      fill="currentColor"
                      d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"
                    />
                  </svg>
                  Community & Forum
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="column is-12-mobile is-6-tablet is-3-desktop">
          <div className="kilimanjaro_part">
            <h5>Latest Quotes</h5>
            <div className="kilimanjaro_blog_area">
              <div className="kilimanjaro_thumb">
                <img
                  className="img-fluid"
                  src="https://3.bp.blogspot.com/--C1wpaf_S4M/W7V__10nRoI/AAAAAAAAK24/1NSfapuYSIY0f0wzXY9NgoH0FjQLT07YACKgBGAs/s1600/maxresdefault.jpg"
                  alt=""
                />
              </div>
              <a href="#">Your Blog Title Goes Here</a>
              <p className="kilimanjaro_date">21 Jan 2018</p>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className="kilimanjaro_blog_area">
              <div className="kilimanjaro_thumb">
                <img
                  className="img-fluid"
                  src="https://3.bp.blogspot.com/--C1wpaf_S4M/W7V__10nRoI/AAAAAAAAK24/1NSfapuYSIY0f0wzXY9NgoH0FjQLT07YACKgBGAs/s1600/maxresdefault.jpg"
                  alt=""
                />
              </div>
              <a href="#">Your Blog Title Goes Here</a>
              <p className="kilimanjaro_date">21 Jan 2018</p>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className="kilimanjaro_blog_area">
              <div className="kilimanjaro_thumb">
                <img
                  className="img-fluid"
                  src="https://3.bp.blogspot.com/--C1wpaf_S4M/W7V__10nRoI/AAAAAAAAK24/1NSfapuYSIY0f0wzXY9NgoH0FjQLT07YACKgBGAs/s1600/maxresdefault.jpg"
                  alt=""
                />
              </div>
              <a href="#">Your Blog Title Goes Here</a>
              <p className="kilimanjaro_date">21 Jan 2018</p>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
        </div>
        <div className="column is-12-mobile is-6-tablet is-3-desktop">
          <div className="kilimanjaro_part">
            <h5>Join the mailing list</h5>
            <div className="kilimanjaro_single_contact_info">
              <form name="maillist">
                <div>
                  <label>Name </label>
                  <input name="Name" type="text" placeholder="Name" />
                </div>
                <div>
                  <label>Email </label>
                  <input name="Email" type="text" placeholder="Email" />
                </div>
                <input type="submit" text="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="kilimanjaro_bottom_header_one section_padding_50 text-center section">
      <div className="columns is-multiline">
        <div className="column is-12">
          <p>
            © All Rights Reserved{" "}
            <a href="/">
              The Beautiful Quote{" "}
              <svg
                width="15px"
                height="15px"
                aria-hidden="true"
                data-prefix="fas"
                data-icon="leaf-heart"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                class="svg-inline--fa fa-leaf-heart fa-w-18 fa-5x"
              >
                <path
                  fill="currentColor"
                  d="M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 19.2 2.9 37.7 8.1 55.1C31.6 399.5 4.3 463.2 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6zM430.6 294.4L345.9 380c-5.5 5.5-14.3 5.5-19.8 0l-84.7-85.6c-24.6-24.9-23.2-66.1 4.3-89.1 24-20 59.6-16.4 81.6 5.8l8.6 8.7 8.6-8.7c22-22.2 57.7-25.8 81.6-5.8 27.6 22.9 29.1 64.2 4.5 89.1z"
                  class=""
                />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
