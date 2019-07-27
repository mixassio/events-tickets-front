import React, {Component} from 'react';
import { connect } from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {siteRoutes} from "../../routes";
import NotFound from "../../pages/notFound";

const mapStateToProps = (state: any) => ({
  authUser: state.authUser,
  isAuth: state.isAuth,
  token: state.token,
});
class Dashboard extends Component {

    mapRoutes = () => {
        return (
            <Switch>
                {[...siteRoutes].map((route, key) => {
                    return (
                        <Route
                            exact={route.exact === true}
                            path={route.path}
                            key={key}
                            component={route.component}
                        />
                    );
                })}
                <Route path={'/404'} component={NotFound}/>
                <Route component={NotFound}/>
            </Switch>
        );
    };

    render() {
        return (
            <BrowserRouter>
              {this.mapRoutes()}
            </BrowserRouter>
        );
    }
}

export default connect(mapStateToProps)(Dashboard);