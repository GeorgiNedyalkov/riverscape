import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="cta">
        <h2>Riverscape</h2>
        <p>Interested in Riverscape?</p>
        <button>Register</button>
      </div>
      <div className="logos">
        <img
          className="logo-ballymore"
          src="https://www.ballymoregroup.com/images/site/logo.svg"
          alt="ballymore logo"
        />
      </div>
      <div className="address">
        <h3>ADDRESS</h3>
        <p>Riverscape Sales Gallery 2 Starboard Way London E16 2JX</p>
      </div>
      <div className="contact">
        <p className="phone">02079871300</p>
        <p className="email">sales@riverscape.co.uk</p>
      </div>
      <div className="follow">
        <p>facebook</p>
        <p>instagram</p>
      </div>
    </div>
  )
}

export default Footer
