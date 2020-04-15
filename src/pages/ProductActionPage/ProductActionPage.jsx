import React, { Component } from "react";
import callApi from "../../utils/callApi";
import { Link } from "react-router-dom";

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtName: "",
      txtPrice: "",
      txtStatus: "",
      id: "",
    };
  }

  onChange = (e) => {
    let { name, type } = e.target;
    let value = type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let { txtName, txtPrice, txtStatus, id } = this.state;
    let { history, match } = this.props;
    if (id) {
      //update
      callApi(`products/${id}`, "PUT", {
        name: txtName,
        price: txtPrice,
        status: txtStatus,
      }).then((res) => {
        history.goBack();
      });
    } else {
      callApi("products", "POST", {
        name: txtName,
        price: txtPrice,
        status: txtStatus,
      }).then((res) => {
        console.log(res);
        history.goBack();
        // history.push("/");
      });
    }
  };

  componentDidMount() {
    const { match } = this.props;
    if (match) {
      const { id } = match.params;
      // console.log(id, match);
      callApi(`products/${id}`, "GET", null).then((res) => {
        console.log(res);
        let { data } = res;
        this.setState({
          id: data.id,
          txtName: data.name,
          txtPrice: data.price,
          txtStatus: data.status,
        });
      });
    }
  }
  render() {
    let { txtName, txtPrice, txtStatus } = this.state;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <form onSubmit={this.onSubmit}>
          <legend>Form title</legend>
          <div className="form-group">
            <label>Tên sản phẩm</label>
            <input
              type="text"
              className="form-control"
              name="txtName"
              value={txtName}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Giá</label>
            <input
              type="number"
              className="form-control"
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}
            />
          </div>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="txtStatus"
                value={txtStatus}
                checked={txtStatus}
                onChange={this.onChange}
              />
              Còn hàng
            </label>
          </div>
          <Link className="btn btn-danger mr-5" to="/products-list">
            Trở lại
          </Link>
          <button type="submit" className="btn btn-primary">
            Lưu lại
          </button>
        </form>
      </div>
    );
  }
}

export default ProductActionPage;
