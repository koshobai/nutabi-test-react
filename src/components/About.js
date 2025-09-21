import "./About.css"
import profilePhoto from "../assets/mirai-tower-top.jpg"
export default function About() {
  return (
    <div className="about-us">
      <h2>About Nutabi</h2>
      <div className="about-content">
        <img src={profilePhoto} alt="mirai-tower" className="about-photo" />
        <div className="about-text">
          <p>
            Nutabi (ニュウ旅) is a new business venture helmed by Tariq Lacy,
            designed to bridge cultures and create opportunities within Japan
            for overseas game company owners.
          </p>
          <p>
            This initiative is the result of a direct partnership with
            <strong> NewBorn Honsya</strong>, an established business
            consultancy and licensed realtor based in Nagoya.
          </p>
          <p>
            Together, we provide expert guidance for those looking to navigate
            Japan's unique business and real estate landscape.
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  )
}
