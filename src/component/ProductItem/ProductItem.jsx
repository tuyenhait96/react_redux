import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    const { products, index } = this.props;
    let statusName = products.status ? "Còn hàng" : "Hết hàng";
    let statusClass = products.status ? "warning" : "default";
    return (
      <tr>
        <td>{index+1}</td>
        <td>{products.id}</td>
        <td>{products.name}</td>
        <td>{products.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td>
          <button type="button" className="btn btn-success mr-5">
            Sửa
          </button>
          <button type="button" className="btn btn-warning">
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
