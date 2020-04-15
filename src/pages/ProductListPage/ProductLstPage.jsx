import React, { Component } from "react";
import { connect } from "react-redux";
import ProductItem from "../../component/ProductItem/ProductItem";
import ProductList from "../../component/ProductList/ProductList";
import callApi from "../../utils/callApi";
import { Link } from "react-router-dom";

class ProductLstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  findIndex = (arr, id) => {
    let result = -1;
    arr.forEach((element, index) => {
      if (element.id === id) {
        result = index;
      }
    });
    return result;
  };
  onDelete = (id) => {
    console.log(id);
    let { products } = this.state;
    callApi(`products/${id}`, "DELETE", null).then((res) => {
      if (res.status === 200) {
        // C1
        // this.setState({ products: products.filter((item) => item.id !== id) });
        let newProducts = [...products];
        let index = this.findIndex(newProducts, id);
        if (index !== -1) {
          //C2
          //chỗ setTodoList bạn làm chưa đúng nè. Hàm Splice nó sẽ trả về cái mảng chứa các phần tử bị remove,
          //  chứ hk phải là mảng hiện tại sau khi remove nhé.
          newProducts.splice(index, 1);
          this.setState({
            products: newProducts,
          });
        }
      }
    });
  };

  showProductItem = (data) => {
    let result = null;
    if (data.length > 0) {
      result = data.map((item, i) => {
        return (
          <ProductItem
            key={i}
            products={item}
            index={i}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  };

  componentDidMount() {
    callApi("products", "GET", null).then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }

  render() {
    let { products } = this.state;

    return (
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Link to="/products/add" type="button" className="btn btn-info">
            Thêm sản phẩm
          </Link>
          {/*ProductList */}
          <ProductList>
            {/* Minh da truyen cho no props.children */}
            {this.showProductItem(products)}
          </ProductList>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    productReducer: state.productReducer,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductLstPage);
