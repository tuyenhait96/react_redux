import React, { Component } from "react";
import callApi from "../../utils/callApi";

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
    console.log(name);
    
    let value = type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let { txtName, txtPrice, txtStatus } = this.state;
    console.log(this.state);
    callApi("products", "POST", {
      name: txtName,
      price: txtPrice,
      status: txtStatus,
    }).then(res=>{
      console.log(res);
    });
  };

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
              name= "txtName"
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
                onChange={this.onChange}
              />
              Còn hàng
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Lưu lại
          </button>
        </form>
      </div>
    );
  }
}

export default ProductActionPage;
