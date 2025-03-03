// import { Link } from "react-router-dom";
// import DistributorsStyle from './Distributors.module.css'
// import { useEffect } from "react";
// import SplitType from "split-type";
// import { gsap } from 'gsap';


// export default function Distributors() {
    
//   useEffect(() => {
//     // Split the "LiveStreaming Services" text into characters
//     const myText = new SplitType('#my-text', {
//       types: 'words, chars',
//       tagName: 'span',
//     });

//     // Function to handle the animation when the text comes into view
//     const handleScrollAnimation = (entries, observer) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           // Trigger the GSAP animation for LiveStreaming Services text
//           gsap.fromTo(
//             '.char',
//             {
//               y: 115, // Initial state (off-screen)
//             },
//             {
//               y: 0, // Final state (in place)
//               stagger: 0.05, // Stagger delay
//               duration: 0.5, // Duration of the animation
//               delay: 0.2, // Delay before animation starts
//             }
//           );
//           // Once the animation is triggered, we can stop observing the element
//           observer.unobserve(entry.target);
//         }
//       });
//     };

//     // Create the Intersection Observer for the LiveStreaming Services text
//     const observer = new IntersectionObserver(handleScrollAnimation, {
//       threshold: 0.5, // The element must be at least 50% in view to trigger the animation
//     });

//     // Start observing the LiveStreaming Services element
//     const target = document.querySelector('#my-text');
//     observer.observe(target);

//     // Cleanup the observer when the component is unmounted
//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//     return (
//         <>
//             <div className={DistributorsStyle.distributorsStylePage}>

//                 <div className={DistributorsStyle.distributorsOption}>

//                      <Link to="/Shipping" className={DistributorsStyle.distributorsLink}>
//                                    <button className={DistributorsStyle.distributorsBtn}>الشحن</button>
//                                    </Link>
                   
//                                    <Link to="/distributors" className={DistributorsStyle.ShippingLink}>
//                                    <button className={DistributorsStyle.distributorsBtn}>نظام الوكالة</button>
//                                    </Link>

//                 </div>


//                 <div className={DistributorsStyle.distributorsContent}>
//                     <h1 id="my-text">الشروط</h1>
//                     <ol type="1">
//                         <li>المشاهدات بدون مقابل</li>
//                         <li>ترندات بدون حدود لحد نفاذ نقاط الوكاله</li>
//                         <li>القبض يوصل قبل معاده بقدر الامكان كامل</li>
//                         <li>احتواء مذيعين الوكاله داخل العيلة علشان نساعده يقفل أكبر تارجيت ممكن من خلال نسبة بدالات أو جوايز العيلة</li>
//                         <li> لا يوجد خصم داخل مصر أو خارج مصر</li>
//                         <li>علي مدار الشهر أو في آخر الشهر ممكن نسلفه بضمان الراتب للشهر الجديد علشان يقفل أكبر تارجيت ممكن</li>
//                         <li>مسابقات الوكالة وجوايزها عبارة عن دهب أو آيفون أو مبالغ مالية
//                         (في حاله في مسابقة مسموح للجميع بالاشتراك في المسابقة بشروط المسابقه)</li>
//                         {/* <li>Views without compensation.</li>
//                         <li>Trends without limits until the agency points run out.</li>
//                         <li>Payment reaches the recipient before the scheduled time as much as possible, in full.</li>
//                         <li>Supporting the agency's broadcasters within the family to help them reach the largest target possible through family replacement rates or family rewards. No discounts inside Egypt or outside Egypt.</li>
//                         <li>Throughout the month or at the end of the month, we can offer a salary advance for the new month to help reach the largest target possible. The agency's contests and rewards include gold, iPhones, or cash prizes. (In case of a contest, everyone is allowed to participate under the contest's terms and conditions.)</li> */}
//                     </ol>
//                 </div>


//             </div>
//         </>
//     )
// }



import { Link } from "react-router-dom";
import DistributorsStyle from './Distributors.module.css';
import { useEffect } from "react";
import { gsap } from 'gsap';

export default function Distributors() {
    useEffect(() => {
        const target = document.querySelector('#my-text');
        const handleScrollAnimation = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.fromTo(
                        target,
                        { y: 115 },
                        {
                            y: 0,
                            duration: 0.5,
                            delay: 0.2,
                        }
                    );
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(handleScrollAnimation, {
            threshold: 0.5,
        });

        if (target) {
            observer.observe(target);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className={DistributorsStyle.distributorsStylePage} dir="rtl">
            <div className={DistributorsStyle.distributorsOption}>
                <Link to="/" className={DistributorsStyle.distributorsLink}>
                    <button className={DistributorsStyle.distributorsBtn}>الشحن</button>
                </Link>
                <Link to="/distributors" className={DistributorsStyle.ShippingLink}>
                    <button className={DistributorsStyle.distributorsBtn}>نظام الوكالة</button>
                </Link>
            </div>

            <div className={DistributorsStyle.distributorsContent}>
                <h1 id="my-text">الشروط</h1>
                <ol type="1">
                    <li>المشاهدات بدون مقابل</li>
                    <li>ترندات بدون حدود لحد نفاذ نقاط الوكاله</li>
                    <li>القبض يوصل قبل معاده بقدر الامكان كامل</li>
                    <li>احتواء مذيعين الوكاله داخل العيلة علشان نساعده يقفل أكبر تارجيت ممكن من خلال نسبة بدالات أو جوايز العيلة</li>
                    <li>لا يوجد خصم داخل مصر أو خارج مصر</li>
                    <li>علي مدار الشهر أو في آخر الشهر ممكن نسلفه بضمان الراتب للشهر الجديد علشان يقفل أكبر تارجيت ممكن</li>
                    <li>مسابقات الوكالة وجوايزها عبارة عن دهب أو آيفون أو مبالغ مالية (في حاله في مسابقة مسموح للجميع بالاشتراك في المسابقة بشروط المسابقه)</li>
                </ol>
            </div>
        </div>
    );
}
