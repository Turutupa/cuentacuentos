import React, { Component } from 'react';

import 'slick-carousel';

// IMPORT STORE - REDUX && Provider - React-Redux
import store from './store';
import { Provider } from 'react-redux';

//AMPLIFY - auth.. analytics..
import { withAuthenticator } from 'aws-amplify-react';
import { Auth } from 'aws-amplify';
// import { API } from 'aws-amplify';

// REACT ROUTER DOM && ROUTES
import { BrowserRouter, withRouter } from 'react-router-dom';
import Routes from './Routes';

// Semantic UI && CSS
import './style/App.css';
import 'semantic-ui-css/semantic.min.css';

import Navbar from './components/navbar/Navbar';

// IMPORT STYLED COMPONENTS THEMEPROVIDER - not used at the min
// import { ThemeProvider } from 'styled-components';
// const theme = {
//   fg: "palevioletred",
//   bg: "white"
// };

class App extends Component {

  state = {
    isAuthenticated: false,
    isAuthenticating: true
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated })
  }

  handleLogout = async event => {
    await Auth.signOut();

    this.userHasAuthenticated(false);

    // this.props.history.push("/login");
  }

  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    }
    catch (e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  render() {

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    if (!this.state.isAuthenticating) {
      return (
        <Provider store={store}>
          {/* <ThemeProvider theme={theme}> */}
          <BrowserRouter>
            <div>
              <Navbar
                handleLogout={this.handleLogout}
                isAuthenticated={this.state.isAuthenticated}
              />
              <Routes childProps={childProps} isAuthenticated={this.state.isAuthenticated} />
            </div>
          </BrowserRouter>
          {/* </ThemeProvider> */}
        </Provider>
      );
    } else {
      return <div></div>
    }
  }
}

// export default withAuthenticator(App);
export default withRouter(App);
