import "./Modal.css"

const Modal = () => {
  return (
    <div className="modal">
      <img
        src="https://www.riverscape.co.uk/_nuxt/img/Riverscape-The-Leslie-Building-DSK.1491610.jpg"
        alt=""
      />
      <p>Just Launched</p>
      <h1>THE LESLIE</h1>
      <hr className="white-line" />
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In cupiditate
        ipsa commodi neque maxime perferendis distinctio culpa cum deserunt
        sapiente.
      </p>
      <h3 className="prices">Prices from $451,000.</h3>
      <button className="offer-btn">FIND OUT MORE</button>
      <a href="#">Back to website</a>
    </div>
  )
}

export default Modal
