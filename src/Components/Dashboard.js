import React, { Component } from 'react';
import Encounter from './Encounter';

export class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            component: "",
            loggedInUser:""
        }
    }

    componentDidMount() {
        if (sessionStorage.getItem("loggedIn") !== "true") {
            window.location = "home";
        }
        if (sessionStorage.getItem("uname") != null ) {
            this.setState({ loggedInUser: sessionStorage.getItem("uname") })
        }
    }

    getComponent(component) {
        switch (component) {
            case "encounter":
                return <Encounter />
            default:
                return <Encounter />
        }
    }

    logout() {
        sessionStorage.setItem("loggedIn", false);
        sessionStorage.setItem("uname", "");
        window.location = '/';
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2 side-nav">
                        <div className="center-content"><i className="fa fa-paper-plane nav-icon" aria-hidden="true"></i></div>
                        <span> Welcome {this.state.loggedInUser}</span>
                        <span className="nav-link" onClick={() => this.setState({ component: "encounter" })}>
                            <div className="row">
                                <div className="col-2"><i className="fa fa-hotel"></i></div>
                                <div className="col-10">Encounter</div>
                            </div>
                        </span>
                        <span className="nav-link" onClick={this.logout}>
                            <div className="row">
                                <div className="col-2"><i className="fas fa-sign-out-alt"></i></div>
                                <div className="col-10">Logout</div>
                            </div>
                        </span>
                    </div>
                    <div className="col-sm-10 dashboard-content">
                        {
                            this.getComponent(this.state.component)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
