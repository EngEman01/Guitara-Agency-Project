import GuitaraFooter from "./Footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className={GuitaraFooter.guitaraFooter}>
        <div className={GuitaraFooter.footerStyle}>
          <div className={GuitaraFooter.guitaraName}>
            <h1>Guitara Agency</h1>
          </div>

          <div className={GuitaraFooter.guitaraInfo}>
            <h1>quick access</h1>
            <ul>
              <li>about</li>
              <li>service</li>
              <li>blog</li>
            </ul>
          </div>

          <div className={GuitaraFooter.guitaraInfo}>
            <h1>Contact Us</h1>
            <ul>
              <li className={GuitaraFooter.contact}>
                {/* WhatsApp link */}
                <a
                  href="https://wa.me/1282020076" // Change the phone number as needed
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={20} color="#fff" />
                </a>
                <span>
                  <a
                    href="https://wa.me/1282020076" // Change the phone number as needed
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +20 1282020076
                  </a>
                </span>
              </li>

              <li className={GuitaraFooter.contact}>
                {/* Email link */}
                <a href="mailto:contact@guitaraagency.com">
                  <FaEnvelope size={20} color="#fff" />
                </a>
                <span>
                  <a href="mailto:contact@guitaraagency.com">
                    contact@guitaraagency.com
                  </a>
                </span>
              </li>

              <li className={GuitaraFooter.contact}>
                {/* Address link - open map location */}
                <a
                  href="https://www.google.com/maps/search/?q=1+Mahmoud+Taimour+St,+Almaza,+Heliopolis,+Cairo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaMapMarkerAlt size={20} color="#fff" />
                </a>
                <span>
                  <a
                    href="https://www.google.com/maps/search/?q=1+Mahmoud+Taimour+St,+Almaza,+Heliopolis,+Cairo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    1 Mahmoud Taimour St, Almaza, Heliopolis, Cairo
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className={GuitaraFooter.copyRight}>
          <div>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={25} color="#fff" />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={25} color="#fff" />
            </a>

            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={25} color="#fff" />
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={25} color="#fff" />
            </a>
          </div>
          <h5>this website made by with Eman</h5>
        </div>
      </div>
    </>
  );
}
