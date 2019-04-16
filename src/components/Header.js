import React, { Component } from 'react';
import logo from '../assets/img/logo.png'

class header extends Component {
    render() {
        return (
            <div>
                <section className="header">
                    <div className="nav-bar">
                        <div className="logo">
                            <img src={logo} alt ="logo" />
                            <span>Manga Picture</span>
                        </div>
                        <div className="btn-group">
                            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect menu-btn">
                                Home
                            </button>
                            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect menu-btn">
                                Edit
                            </button>
                        </div>
                    </div>
                    <div className="header-curtain" />
                </section>
            </div>
        );
    }
}

export default header;