import React from "react";
import propTypes from "prop-types";

class EditBurgerForm extends React.Component {
  static propTypes = {
    burger: propTypes.shape({
      image: propTypes.string,
      name: propTypes.string,
      price: propTypes.number,
      desc: propTypes.string,
      status: propTypes.string,
    }),
    index: propTypes.string,
    updateBurger: propTypes.func,
    deleteBurger: propTypes.func
  };

  handleChange = (e) => {
    const { index, updateBurger } = this.props;
    const updatedBurger = {
      ...this.props.burger,
      [e.currentTarget.name]:
        e.currentTarget.name === "price"
          ? parseFloat(e.currentTarget.value) || 0
          : e.currentTarget.value
    };
    updateBurger(index, updatedBurger);
  };

  render() {
    const { burger, index, deleteBurger } = this.props;

    return (
      <div className="burger-edit">
        <input
          onChange={this.handleChange}
          name="name"
          type="text"
          value={burger.name}
        />
        <input
          onChange={this.handleChange}
          name="price"
          type="text"
          value={burger.price}
        />
        <select
          onChange={this.handleChange}
          name="status"
          className="status"
          value={burger.status}
        >
          <option value="available">Доступно!</option>
          <option value="unavailable">Не доступно!</option>
        </select>
        <textarea
          onChange={this.handleChange}
          name="desc"
          type="text"
          value={burger.desc}
        />
        <input
          onChange={this.handleChange}
          name="image"
          type="text"
          value={burger.image}
        />
        <button onClick={() => deleteBurger(index)}>Удалить из меню</button>
      </div>
    );
  }
}
export default EditBurgerForm;
