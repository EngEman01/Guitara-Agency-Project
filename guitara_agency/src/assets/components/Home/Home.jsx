// import { useEffect, useState } from 'react';
// import SplitType from 'split-type'; // Ensure SplitType is installed
// import { gsap } from 'gsap';
// import GuitaraHome from './Home.module.css';
// import Hexagon from '../Hexagon/Hexagon';

// export default function Home() {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0); // To track which word is currently visible

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

//   useEffect(() => {
//     // Infinite animation for the words "tiktok", "bigo", "mico"
//     const words = ['tiktok', 'bigo', 'mico'];

//     // Loop through the words and create an animation for each
//     const wordElement = document.querySelector(`#word-${currentWordIndex}`);
//     if (wordElement) {
//       new SplitType(wordElement, {
//         types: 'chars',
//         tagName: 'span',
//       });

//       gsap.fromTo(
//         wordElement.querySelectorAll('.char'),
//         {
//           y: 115, // Initial position (off-screen)
//         },
//         {
//           y: 0, // Final position
//           stagger: 0.1, // Delay between characters
//           duration: 0.5, // Duration for each word
//           onComplete: () => {
//             // Once the animation completes, move to the next word
//             setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length); // Loop through the words
//           },
//         }
//       );
//     }
//   }, [currentWordIndex]); // This effect runs every time currentWordIndex changes

//   return (
//     <>
//       <div className={GuitaraHome.homeStyle}>
//         {/******************************  Guitara Home Page *****************************************************/}
//         <div className={GuitaraHome.GuitaraOpen}>
//           {/* <div className={GuitaraHome.openText}>
//             <h2 className={GuitaraHome.animatedText}>
//               Take Your Brand to the Next Level with Guitara Agency
//             </h2>

//             <p>
//               We craft powerful social media strategies that drive growth and
//               engagement.
//             </p>

//             <button className={GuitaraHome.guitaraCTA}>Let’s Get Started</button>
//           </div> */}

//           <div className={GuitaraHome.guitaraImage}>
//             <img
//               className={GuitaraHome.homeImage}
//               src="./images/home-slider-slide-2.jpg"
//               alt="Guitara"
//             />
//           </div>
//         </div>


//         <div className="App">
//           <div className={GuitaraHome.guitaraServices}>
//             <div className={GuitaraHome.ServicesText}>
//               <h1 id="my-text">LiveStreaming Services</h1>
//               <Hexagon />
//             </div>

//             {/* Display words one by one */}
//             {/* <div className={GuitaraHome.wordsContainer}>
//               <h2 id="word-0" style={{ display: currentWordIndex === 0 ? 'block' : 'none' }}>
//                 tiktok
//               </h2>
//               <h2 id="word-1" style={{ display: currentWordIndex === 1 ? 'block' : 'none' }}>
//                 bigo
//               </h2>
//               <h2 id="word-2" style={{ display: currentWordIndex === 2 ? 'block' : 'none' }}>
//                 mico
//               </h2>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import { useEffect, useState } from 'react';
import SplitType from 'split-type'; // Ensure SplitType is installed
import { gsap } from 'gsap';
import GuitaraHome from './Home.module.css';
import Hexagon from '../Hexagon/Hexagon';

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0); // To track which word is currently visible
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // To track which image is currently displayed

  // Array of images for the slider
  const sliderImages = [
    './images/home-slider-slide-2.jpg',
    './images/home-slider-slide-2.jpg',
    './images/home-slider-slide-2.jpg',
    // './images/How-to-Get-a-Social-Media-Manager-Job.jpg',
    // './images/socail.webp',
  ];

  useEffect(() => {
    // Change the image every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [sliderImages.length]);

  useEffect(() => {
    // Split the "LiveStreaming Services" text into characters
    const myText = new SplitType('#my-text', {
      types: 'words, chars',
      tagName: 'span',
    });

    // Function to handle the animation when the text comes into view
    const handleScrollAnimation = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Trigger the GSAP animation for LiveStreaming Services text
          gsap.fromTo(
            '.char',
            {
              y: 115, // Initial state (off-screen)
            },
            {
              y: 0, // Final state (in place)
              stagger: 0.05, // Stagger delay
              duration: 0.5, // Duration of the animation
              delay: 0.2, // Delay before animation starts
            }
          );
          // Once the animation is triggered, we can stop observing the element
          observer.unobserve(entry.target);
        }
      });
    };

    // Create the Intersection Observer for the LiveStreaming Services text
    const observer = new IntersectionObserver(handleScrollAnimation, {
      threshold: 0.5, // The element must be at least 50% in view to trigger the animation
    });

    // Start observing the LiveStreaming Services element
    const target = document.querySelector('#my-text');
    observer.observe(target);

    // Cleanup the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    // Infinite animation for the words "tiktok", "bigo", "mico"
    const words = ['tiktok', 'bigo', 'mico'];

    // Loop through the words and create an animation for each
    const wordElement = document.querySelector(`#word-${currentWordIndex}`);
    if (wordElement) {
      new SplitType(wordElement, {
        types: 'chars',
        tagName: 'span',
      });

      gsap.fromTo(
        wordElement.querySelectorAll('.char'),
        {
          y: 115, // Initial position (off-screen)
        },
        {
          y: 0, // Final position
          stagger: 0.1, // Delay between characters
          duration: 0.5, // Duration for each word
          onComplete: () => {
            // Once the animation completes, move to the next word
            setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length); // Loop through the words
          },
        }
      );
    }
  }, [currentWordIndex]); // This effect runs every time currentWordIndex changes

  return (
    <>
      <div className={GuitaraHome.homeStyle}>
        {/******************************  Guitara Home Page *****************************************************/}
        <div className={GuitaraHome.GuitaraOpen}>
          {/* Image Slider */}
          <div className={GuitaraHome.guitaraImage}>
            <img
              className={GuitaraHome.homeImage}
              src={sliderImages[currentImageIndex]} // Dynamically set the current image
              alt="Guitara"
            />
          </div>
        </div>

        <div className="App">
          <div className={GuitaraHome.guitaraServices}>
            <div className={GuitaraHome.ServicesText}>
              <h1 id="my-text">LiveStreaming Services</h1>
              <Hexagon />
            </div>

            {/* Display words one by one */}
            {/* <div className={GuitaraHome.wordsContainer}>
              <h2 id="word-0" style={{ display: currentWordIndex === 0 ? 'block' : 'none' }} >
                tiktok
              </h2>
              <h2 id="word-1" style={{ display: currentWordIndex === 1 ? 'block' : 'none' }} >
                bigo
              </h2>
              <h2 id="word-2" style={{ display: currentWordIndex === 2 ? 'block' : 'none' }} >
                mico
              </h2>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}



{/* <HierarchyTile/> */ }

{/* <div className="App">
          <h1>Hexagon Shape in React</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Hexagon size={100} fill="yellow" stroke="black" />
          </div>
        </div> */}

{/******************************  Guitara About Us *****************************************************/ }
{/* <div className={GuitaraHome.guitaraAbout}>
          <div className={GuitaraHome.aboutInfo}>
            <div>
              <h1 className={GuitaraHome.aboutText}>Know Us</h1>
              <span className={GuitaraHome.aboutTitle}>Mission Statement:</span>

              <p>
                Our mission at Guitara Agency is to empower brands to amplify
                their voice on social media. We’re committed to delivering
                creative, data-driven solutions that drive measurable results.
              </p>
              <span className={GuitaraHome.aboutTitle}>Your Team:</span>

              <p>
                Meet the passionate team behind Guitara Agency! We are a diverse
                group of social media experts, content creators, and strategists
                with a shared goal of helping your business grow online.
              </p>
              <span className={GuitaraHome.aboutTitle}>Agency Story:</span>

              <p>
                Founded Guitara Agency began with a simple vision: to
                revolutionize how businesses approach social media. With years
                of experience in digital marketing, our agency has since become
                a trusted partner for brands looking to elevate their online
                presence.
              </p>
            </div>
          </div>

          <div className={GuitaraHome.aboutImage}>
            <img
              src="./images/How-to-Get-a-Social-Media-Manager-Job.jpg"
              alt=""
            />
          </div>
        </div> */}

{/****************************** End Guitara About Us *****************************************************/ }


{/******************************  Guitara Services *****************************************************/ }
{/* 
        <div className={GuitaraHome.guitaraServices}>
          <div className={GuitaraHome.ServicesText}>
            <h1>Our Services</h1>
            <h4>
              We offer tailored solutions to help you create engaging,

              high-quality content that resonates with your audience. Whether
              <br />
              you are looking to grow your online presence, boost engagement, or

              communicate your brand story, our services are designed to meet
              your needs.
            </h4>
          </div>

          <div className={GuitaraHome.ourServices}>
            <div className={GuitaraHome.servicesBox}>
              <h3>social Networking</h3>
              <p>
                Build strong, lasting relationships with your audience through targeted social networking strategies. We help you optimize your social media profiles, engage with your followers, and grow your community, making it easier than ever to foster genuine connections and expand your reach.
              </p>
            </div>
            <div className={GuitaraHome.servicesBox}>
              <h3>Content Sharing</h3>
              <p>
                We enable you to easily share and distribute your content across multiple platforms, helping you reach your audience and increase visibility. Our tools allow for seamless sharing of videos, articles, images, and more, ensuring your content gets the attention it deserves.
              </p>
            </div>
            <div className={GuitaraHome.servicesBox}>
              <h3>Messaging</h3>
              <p>
                Enhance communication with your audience through personalized and timely messaging. Whether it’s through automated or manual messaging systems, we ensure your messages reach the right people at the right time, driving engagement and improving customer relations.
              </p>
            </div>
          </div>
        </div> */}

{/****************************** End Guitara Services *****************************************************/ }


{/******************************  Guitara Testimonials *****************************************************/ }

{/* <div className={GuitaraHome.Testimonials}>
          <div className={GuitaraHome.TestimonialsTitle}>
            <h1>Testimonials</h1>
            <h4>
              Guitara Agency helped us grow our Instagram following by over 50%
              in just six months! Their team is knowledgeable, responsive, and
              truly cares about our success.
            </h4>
          </div>
          <div className={GuitaraHome.TestimonialsBody}>
            <div className={GuitaraHome.TestimonialBox}>
              <h4>
                ’’ Working with Guitara Agency has been a game-changer for my
                affiliate marketing journey. The platform is user-friendly,
                offers great commissions, and the support team is always there
                to help.’’
              </h4>
              <br />
              <br />
              <p>mohamed ali</p>
            </div>
          </div>

          <div className={GuitaraHome.TestimonialsBody}>
            <div className={GuitaraHome.TestimonialBox}>
              <h4>
                ’’Guitara Agency provides a wide range of marketing tools that
                have significantly boosted my affiliate sales. The training
                programs are top-notch, and I have seen a substantial increase
                in my earnings since joining.’’
              </h4>
              <br />
              <br />
              <p>mona salem</p>
            </div>
          </div>

          <div className={GuitaraHome.TestimonialsBody}>
            <div className={GuitaraHome.TestimonialBox}>
              <h4>
                ’’I am impressed by the professionalism and commitment of the
                Guitara Agency team. They go above and beyond to ensure their
                clients success, and I have experienced remarkable growth in my
                business.
              </h4>
              <br />
              <br />
              <p>ahmed emad</p>
            </div>
          </div>
        </div> */}

{/****************************** End Guitara Testimonials *****************************************************/ }


{/******************************  Guitara Contact Us *****************************************************/ }

{/* <div className={GuitaraHome.contactUs}>
          <h1>contact us</h1>

          <form action="" className={GuitaraHome.formContactUs}>
            <label htmlFor="">Name</label>
            <input type="text" required />
            <label htmlFor="">email</label>
            <input type="text" required />
            <label htmlFor="">message</label>
            <br />
            <textarea type="text" required />

            <button className={GuitaraHome.send}>send</button>
          </form>
        </div> */}

{/****************************** End Guitara Contact Us *****************************************************/ }



