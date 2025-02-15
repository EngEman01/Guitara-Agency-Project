import GuitaraHome from "./Home.module.css";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}



export default function Home() {
  return (
    <>
      <div className={GuitaraHome.homeStyle}>
        {/******************************  Guitara Home Page *****************************************************/}
        <div className={GuitaraHome.GuitaraOpen}>
          <div className={GuitaraHome.openText}>
            <h2 className={GuitaraHome.animatedText}>
              Take Your Brand to the Next Level with Guitara Agency
            </h2>

            <p>
              We craft powerful social media strategies that drive growth and
              engagement.
            </p>

            <button className={GuitaraHome.guitaraCTA}>
              Let’s Get Started
            </button>
          </div>
          {/* <div className={GuitaraHome.guitaraImage} >
            <img className={GuitaraHome.homeImage} src="./images/home-slider-slide-2.jpg" alt="" />
          </div> */}
          <div className={`${GuitaraHome.guitaraImage} wow animate__fadeInUp`}>
            <img
              className={GuitaraHome.homeImage}
              src="./images/home-slider-slide-2.jpg"
              alt="Guitara"
            />
          </div>
        </div>

        {/******************************  Guitara Services *****************************************************/}

        <div className={GuitaraHome.guitaraServices}></div>

        {/******************************  Guitara About Us *****************************************************/}
        <div className={GuitaraHome.guitaraAbout}>
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
        </div>

        {/******************************  Guitara Testimonials *****************************************************/}

        <div className={GuitaraHome.Testimonials}>
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
        </div>

        {/******************************  Guitara Contact Us *****************************************************/}

        <div className={GuitaraHome.contactUs}>
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
        </div>
      </div>
    </>
  );
}
