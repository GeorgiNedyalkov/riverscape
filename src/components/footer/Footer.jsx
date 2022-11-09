import "./Footer.css"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="cta">
          <h2 className="footer-title riverscape">RIVERSCAPE</h2>
          <p className="footer-text">Interested in Riverscape?</p>
          <button className="footer-btn">Register</button>
        </div>
        <div className="logos">
          <img
            className="logo-ballymore"
            src="https://www.riverscape.co.uk/_nuxt/img/grid-1-3.40c4355.jpg"
            alt="ballymore logo"
          />
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-right-top">
          <div className="address">
            <h3 className="footer-title">ADDRESS</h3>
            <p className="footer-text">
              Riverscape Sales Gallery 2 Starboard Way London E16 2JX
            </p>
          </div>
          <div className="contact">
            <h3 className="footer-title">CONTACT</h3>
            <p className="footer-text">02079871300 sales@riverscape.co.uk</p>
          </div>
          <div className="follow">
            <h3 className="footer-title">FOLLOW</h3>
            <div className="footer-icons">
              <FacebookOutlinedIcon className="footer-icon" />
              <FacebookOutlinedIcon className="footer-icon" />
            </div>
          </div>
        </div>
        <div className="footer-right-bottom">
          <ul className="footer-links">
            <li className="footer-link">Terms</li>|
            <li className="footer-link">Privacy</li>|
            <li className="footer-link">Cookies</li>
          </ul>
          <p className="copyright">© COPYRIGHT 2022</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
