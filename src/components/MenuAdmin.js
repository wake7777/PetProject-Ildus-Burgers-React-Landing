import React from "react";
import propTypes from "prop-types";
import AddBurgerForm from "./AddBurgerForm";
import EditBurgerForm from "./EditBurgerForm";

class MenuAdmin extends React.Component {
  static propTypes = {
    burgers: propTypes.object,
    deleteBurger: propTypes.func,
    updateBurger: propTypes.func,
    addBurger: propTypes.func,
    loadSampleBurgers: propTypes.func
  };

  render() {
    const {
      burgers,
      addBurger,
      updateBurger,
      deleteBurger,
      loadSampleBurgers,
    } = this.props;
    return (
      <div className="menu-admin">
        <h2>Управление меню</h2>
        {Object.keys(burgers).map((key) => {
          return (
            <EditBurgerForm
              index={key}
              key={key}
              burger={burgers[key]}
              updateBurger={updateBurger}
              deleteBurger={deleteBurger}
            />
          );
        })}
        <AddBurgerForm addBurger={addBurger} />
        <button onClick={loadSampleBurgers}>Загрузить бургеры</button>
      </div>
    );
  }
}

export default MenuAdmin;
