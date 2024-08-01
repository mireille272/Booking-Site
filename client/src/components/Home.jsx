// I don't want to display everything all at once I want to navigate to the different pages that will be available on the page(the client info page, and the confirmation page)
// I want to have a section with pictures of my work and when they hover over it, the should be a button that says to book for this hairstyle.
// Inside the client info page, I want to be able to take in their name, and their email, and possibly a phone number to quickly reach them through it.
// for the home page, I want everything to to inside of one div instead of having multiple sections just have everything inside of one div.
import braids from "../media/jumbobraids.png"
import ponytail from "../media/ponybraids.png"
import time from "../media/time.png"
import location from "../media/location.png"
import calendar from "../media/calendar.png"

const Home = () => {
  return (
    <>
      <div className="home_page">
        <h1 className="heading">welcome to my site</h1>
        <div className="home_page_container">
          <div className="photo_gallery">
            <img className="photo" src={braids} alt="" />
            <img className="photo" src={ponytail} alt="" />
          </div>

          <div className="greeting">
            <h2>
              Hello <em>Black mango</em>
            </h2>
            <p>
              welcome to my booking site. Thank you for
              <br />
              considering me as your stylist <br />
              (You better book now that you're here)
              <br /> Make sure you read and understand all the information{" "}
              <br />
              on the page before you continue. I look forward to working with
              you <br />
              (you better come back)
            </p>
          </div>
          <div className="instructions">
            <h1 className="instructions_heading">House Keeping Rules</h1>
            <img src={calendar} alt="" />
            <p>
              Your appointment will determine my availability. <br />
              Book first then I will work my schedule around it.
            </p>
            <img src={time} alt="" />
            <p>
              Please get here at 8Am and if I'm coming to you <br />I will be
              there at 8AM unless or otherwise.
            </p>
            <img src={location} alt="" />
            <p>
              I am able to come to your place if you live in my city <br />
              specifically within 5-10 minutes away from me.
            </p>
            {/* <ul>
              <li>You cannot bring your children to my house.</li>
              <li>
                I am able to travel to you if only you live in the same city as
                me. <br />
                give or take a distance of about 1-10 minutes from my house
              </li>
              <li>
                Please make sure to choose a hairstyle that's suitable for you
                hair texture <br />
                and or hairline
              </li>
              <li>
                Bring hair that is already pre-stretched. I can also provide
                braiding hair and the price will be added to the total bill
              </li>
              <li>I only accept cash for payment and you better tip me will</li>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
