import React from "react";
import propTypes from "prop-types";
import Shipment from "./Shipment";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends React.Component {
  static propTypes = {
    burgers: propTypes.object,
    order: propTypes.object,
    deleteFromOrder: propTypes.func,
  };

  renderOrder = (key) => {
    const { burgers, order, deleteFromOrder } = this.props;
    const burger = burgers[key];
    const count = order[key];
    const isAvailible = burger && burger.status === "available";
    const transitionOptions = {
      classNames: "order",
      key: key,
      timeout: { enter: 500, exit: 500 },
    };

    if (!burger) return null;

    if (!isAvailible) {
      return (
        <CSSTransition {...transitionOptions}>
          <li className="unavailable" key={key}>
            Извините, {burger ? burger.name : "бургер"} временно не доступен
          </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition {...transitionOptions}>
        <li key={key}>
          <span>
            <TransitionGroup component="span" className="count">
              <CSSTransition
                classNames="count"
                key={count}
                timeout={{ enter: 500, exit: 500 }}
              >
                <span>{count}</span>
              </CSSTransition>
            </TransitionGroup>
            шт. {burger.name}
            <span> {count * burger.price} ₽</span>
            <button
              onClick={() => deleteFromOrder(key)}
              className="cancellItem"
            >
              ✖
            </button>
          </span>
        </li>
      </CSSTransition>
    );
  };

  render() {
    const { burgers, order } = this.props;
    const orderIds = Object.keys(order);
    const total = orderIds.reduce((pervTotal, key) => {
      const burger = burgers[key];
      const count = order[key];

      const isAvailible = burger && burger.status === "available";
      if (isAvailible) {
        return pervTotal + burger.price * count;
      }
      return pervTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Ваш заказ</h2>

        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>

        {total > 0 ? (
          <Shipment total={total} />
        ) : (
          <div className="nothingSelected">
            Выберете блюдо и добавьте к заказу
          </div>
        )}
      </div>
    );
  }
}
export default Order;
