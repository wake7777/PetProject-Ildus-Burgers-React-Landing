import React from "react";
import propTypes from "prop-types";

class Burger extends React.Component {
  static propTypes = {
    details: propTypes.shape({
      image: propTypes.string,
      name: propTypes.string,
      price: propTypes.number,
      desc: propTypes.string,
      status: propTypes.string,
    }),
    index: propTypes.string,
    addToOrder: propTypes.func,
  };

  render() {
    const { index, details, addToOrder } = this.props;
    const { image, name, price, desc, status } = details;
    const isAvailable = status === "available";

    return (
      <li className="menu-burger">
        <div className="image-container">
          <img src={image} alt={name} />
        </div>
        <div className="burger-details">
          <h3 className="burger-name">
            {name}
            <span className="price">{price} ₽</span>
          </h3>
          <p>{desc}</p>
          <button
            onClick={() => addToOrder(index)}
            className="buttonOrder"
            disabled={!isAvailable}
          >
            {isAvailable ? "Заказать" : "Временно нет"}
          </button>
        </div>
      </li>
    );
  }
}

export default Burger;
