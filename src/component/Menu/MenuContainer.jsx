import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

const dataMenu = [
  {
    label: "Trang chủ",
    to: "/",
    exact: true,
  },
  {
    label: "Quản lý sản phẩm",
    to: "/products-list",
    exact: false,
  },
];

const MenuLink = ({label, to, onlyWhenExact}) => {
  return (
    <Route
      exact={onlyWhenExact}
      path={to}
      children={({ match }) => {
        let active = match ? "active" : "unset";
        return (
          <li className={active}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};

class MenuContainer extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <ul className="nav navbar-nav">
          {this.showMenu(dataMenu)}
        </ul>
      </div>
    );
  }
  showMenu = (data) => {
    let result = null;
    if (data.length > 0) {
      result = data.map((item, i) => {
        return (
          <MenuLink
            label={item.label}
            to={item.to}
            onlyWhenExact={item.exact}
            key={i}
          />
        );
      });
    }
    return result;
  };
}

export default MenuContainer;
