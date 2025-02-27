//////////////////////////////////un unique Visitors ///////////////////////////////////////////////////////////////////

// import GuitaraFooter from "./Footer.module.css";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedin,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
// import Flag from 'react-world-flags';
// import { useEffect, useState } from 'react';
// import './Footer.css';

// export default function Footer() {
//   const [counterEgypt, setCounterEgypt] = useState(0);
//   const [counterSaudi, setCounterSaudi] = useState(0);
//   const [visitorCount, setVisitorCount] = useState(0);

//   useEffect(() => {
//     const storedVisitorCount = localStorage.getItem('visitorCount');

//     // Only increment if the count exists and is not incremented yet
//     if (storedVisitorCount === null) {
//       localStorage.setItem('visitorCount', '1');
//       setVisitorCount(1);
//     } else {
//       const newCount = Number(storedVisitorCount) + 1;
//       localStorage.setItem('visitorCount', newCount.toString());
//       setVisitorCount(newCount);
//     }
//   }, []);

//   useEffect(() => {
//     if (counterEgypt < 3105) {
//       setTimeout(() => setCounterEgypt(prev => prev + 1), 1);
//     }
//     if (counterSaudi < 64) {
//       setTimeout(() => setCounterSaudi(prev => prev + 1), 1);
//     }
//   }, [counterEgypt, counterSaudi]);

//   return (
//     <div className="footerContant" id="contact">
//       <div className="footerBody">
//         <div className={GuitaraFooter.footerStyle}>
//           <div className="footerUp">
//             <div className={GuitaraFooter.footerContactUs}>
//               <h1>Contact Us</h1>
//               <ul>
//                 <li className={GuitaraFooter.contact}>
//                   <a href="https://wa.me/1282020076" target="_blank" rel="noopener noreferrer">
//                     <FaWhatsapp size={20} color="#fff" />
//                   </a>
//                   <span>
//                     <a href="https://wa.me/1282020076" target="_blank" rel="noopener noreferrer">
//                       +20 1282020076
//                     </a>
//                   </span>
//                 </li>
//                 <li className={GuitaraFooter.contact}>
//                   <a href="mailto:contact@guitaraagency.com">
//                     <FaEnvelope size={20} color="#fff" />
//                   </a>
//                   <span>
//                     <a href="mailto:contact@guitaraagency.com">contact@guitaraagency.com</a>
//                   </span>
//                 </li>
//                 <li className={GuitaraFooter.contact}>
//                   <a href="https://www.google.com/maps/search/?q=1+Mahmoud+Taimour+St,+Almaza,+Heliopolis,+Cairo" target="_blank" rel="noopener noreferrer">
//                     <FaMapMarkerAlt size={20} color="#fff" />
//                   </a>
//                   <span>
//                     <a href="https://www.google.com/maps/search/?q=1+Mahmoud+Taimour+St,+Almaza,+Heliopolis,+Cairo" target="_blank" rel="noopener noreferrer">
//                       1 Mahmoud Taimour St, Almaza, Heliopolis, Cairo
//                     </a>
//                   </span>
//                 </li>
//               </ul>
//             </div>

//             <div className={GuitaraFooter.countryStatsSection}>
//               <div className={GuitaraFooter.socialMediaIcons}>
//                 <h1>Follow Us</h1>
//                 <div className={GuitaraFooter.contentSocialMediaIcons}>
//                   <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                     <FaFacebook size={28} color="#fff" className={GuitaraFooter.icons} />
//                   </a>
//                   <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//                     <FaInstagram size={28} color="#fff" className={GuitaraFooter.icons} />
//                   </a>
//                   <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//                     <FaTwitter size={28} color="#fff" className={GuitaraFooter.icons} />
//                   </a>
//                   <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//                     <FaLinkedin size={28} color="#fff" className={GuitaraFooter.icons} />
//                   </a>
//                 </div>
//               </div>

//               <div className={GuitaraFooter.counter}>
//                 <div className={GuitaraFooter.countryStats}>
//                   <span>Number of visitors: {visitorCount}</span>
//                   <br />
//                 </div>
//                 <div className={GuitaraFooter.countryStats}>
//                   <div>
//                     <Flag code="EG" style={{ width: "20px", height: "auto", marginRight: "7px" }} />
//                     <span>Egypt: {counterEgypt}</span>
//                   </div>
//                   <div>
//                     <Flag code="SA" style={{ width: "20px", height: "auto", marginRight: "7px" }} />
//                     <span>Saudi Arabia: {counterSaudi}</span>
//                   </div>
//                   <div>
//                     <Flag code="AE" style={{ width: "20px", height: "auto", marginRight: "7px" }} />
//                     <span>UAE: 0</span>
//                   </div>
//                   <div>
//                     <Flag code="QA" style={{ width: "20px", height: "auto", marginRight: "7px" }} />
//                     <span>Qatar: 0</span>
//                   </div>
//                   <div>
//                     <Flag code="BH" style={{ width: "20px", height: "auto", marginRight: "7px" }} />
//                     <span>Bahrain: 0</span>
//                   </div>
//                   <div>
//                     <Flag code="SY" style={{ width: "20px", height: "auto", marginRight: "7px" }} />
//                     <span>Syria: 0</span>
//                   </div>
//                   <div>
//                     <Flag code="IQ" style={{ width: "20px", height: "auto", marginRight: "7px" }} />
//                     <span>Iraq: 0</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className={GuitaraFooter.copyRight}>
//             <span></span>
//             <h5>©2025 GuitaraGroup | All Rights Reserved</h5>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

////////////////////////////////// unique Visitors ///////////////////////////////////////////////////////////////////

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
import Flag from 'react-world-flags';
import { useEffect, useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [counterEgypt, setCounterEgypt] = useState(0);
  const [counterSaudi, setCounterSaudi] = useState(0);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Check if the user has already visited
    const hasVisited = localStorage.getItem('hasVisited');
    const storedVisitorCount = localStorage.getItem('visitorCount');

    if (!hasVisited) {
      // If not visited, set the flag and increment the count
      localStorage.setItem('hasVisited', 'true');
      const newCount = (storedVisitorCount ? Number(storedVisitorCount) : 0) + 1;
      localStorage.setItem('visitorCount', newCount.toString());
      setVisitorCount(newCount);
    } else {
      // If already visited, just set the existing count
      setVisitorCount(Number(storedVisitorCount));
    }
  }, []);

  // Counter effect for Egypt and Saudi Arabia
  useEffect(() => {
    if (counterEgypt < 3105) {
      setTimeout(() => setCounterEgypt(prev => prev + 1), 1);
    }
    if (counterSaudi < 64) {
      setTimeout(() => setCounterSaudi(prev => prev + 1), 1);
    }
  }, [counterEgypt, counterSaudi]);

  return (
    <div className="footerContant" id="contact">
      <div className="footerBody">
        <div className={GuitaraFooter.footerStyle}>
          <div className="footerUp">
            <div className={GuitaraFooter.footerContactUs}>
              <h1>Contact Us</h1>
              <ul>
                <li className={GuitaraFooter.contact}>
                  <a href="https://wa.me/1282020076" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={20} color="#fff" />
                  </a>
                  <span>
                    <a href="https://wa.me/1282020076" target="_blank" rel="noopener noreferrer">
                      +20 1282020076
                    </a>
                  </span>
                </li>
                <li className={GuitaraFooter.contact}>
                  <a href="mailto:contact@guitaraagency.com">
                    <FaEnvelope size={20} color="#fff" />
                  </a>
                  <span>
                    <a href="mailto:contact@guitaraagency.com">contact@guitaraagency.com</a>
                  </span>
                </li>
                <li className={GuitaraFooter.contact}>
                  <a href="https://www.google.com/maps/search/?q=1+Mahmoud+Taimour+St,+Almaza,+Heliopolis,+Cairo" target="_blank" rel="noopener noreferrer">
                    <FaMapMarkerAlt size={20} color="#fff" />
                  </a>
                  <span>
                    <a href="https://www.google.com/maps/search/?q=1+Mahmoud+Taimour+St,+Almaza,+Heliopolis,+Cairo" target="_blank" rel="noopener noreferrer">
                      1 Mahmoud Taimour St, Almaza, Heliopolis, Cairo
                    </a>
                  </span>
                </li>
              </ul>
            </div>

            <div className={GuitaraFooter.countryStatsSection}>
              <div className={GuitaraFooter.socialMediaIcons}>
                <h1>Follow Us</h1>
                <div className={GuitaraFooter.contentSocialMediaIcons}>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={28} color="#fff" className={GuitaraFooter.icons} />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={28} color="#fff" className={GuitaraFooter.icons} />
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={28} color="#fff" className={GuitaraFooter.icons} />
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={28} color="#fff" className={GuitaraFooter.icons} />
                  </a>
                </div>
              </div>

              <div className={GuitaraFooter.counter}>
                <div className={GuitaraFooter.countryStats}>
                  <span>Number of unique visitors: {visitorCount}</span>
                  <br />
                </div>
                <div className={GuitaraFooter.countryStats}>
                  <div>
                    <Flag code="EG" style={{ width: "20px", height: "auto", marginRight: "7px" }} />
                    <span>Egypt: {counterEgypt}</span>
                  </div>
                  <div>
                    <Flag code="SA" style={{ width: "20px", height: "auto", marginRight: "7px" }} />
                    <span>Saudi Arabia: {counterSaudi}</span>
                  </div>
                  <div>
                    <Flag code="AE" style={{ width: "20px", height: "auto", marginRight: "7px" }} />
                    <span>UAE: 0</span>
                  </div>
                  <div>
                    <Flag code="QA" style={{ width: "20px", height: "auto", marginRight: "7px" }} />
                    <span>Qatar: 0</span>
                  </div>
                  <div>
                    <Flag code="BH" style={{ width: "20px", height: "auto", marginRight: "7px" }} />
                    <span>Bahrain: 0</span>
                  </div>
                  <div>
                    <Flag code="SY" style={{ width: "20px", height: "auto", marginRight: "7px" }} />
                    <span>Syria: 0</span>
                  </div>
                  <div>
                    <Flag code="IQ" style={{ width: "20px", height: "auto", marginRight: "7px" }} />
                    <span>Iraq: 0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={GuitaraFooter.copyRight}>
            <span></span>
            <h5>©2025 GuitaraGroup | All Rights Reserved</h5>
          </div>
        </div>
      </div>
    </div>
  );
}