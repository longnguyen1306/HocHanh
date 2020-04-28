import React, { Component } from 'react';

class Header extends Component {
    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                <a className="nav-link" href="/">Trang chủ <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Danh mục sản phẩm</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Sản phẩm</a>
                </li>
            </ul>
            </div>
        </nav>
        )
    }
}

export default Header;