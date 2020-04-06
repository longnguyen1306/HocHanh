import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
        <div className="jumbotron">
            <h3>Điện thoại iphone</h3>
            <img alt="điện thoại" src="https://mayanhxachtaynhat.com/wp-content/uploads/2018/12/lay-net-01.png" />
            <div className="caption">
            <p className="lead">
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
            </p>
            <p>
                14,000,000 đ
            </p>
            </div>
            <hr className="my-4" />
            <a className="btn btn-primary btn-lg" href="/mua" role="button">Mua hàng</a>
        </div>
      
    )
  }
}

export default Product;
