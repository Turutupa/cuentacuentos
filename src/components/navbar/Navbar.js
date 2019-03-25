import React, { Component } from 'react';
import './navbar.css'
import TopNavbar from './navbar-comp/TopNavbar';
import SearchBar from './navbar-comp/SearchBar';
import CategoriesBar from './navbar-comp/CategoriesBar';

export default class Navbar extends Component {

    render() {

        const style = {
            navbar: {
                position: 'relative',
                maxWidth: '100vw'
            }
        }

        return (
            <div style={style.navbar} >
                <TopNavbar
                    isAuthenticated={this.props.isAuthenticated}
                    handleLogout={this.props.handleLogout}
                />
                {/* <SearchBar />
                <CategoriesBar /> */}
            </div >
        )
    }
}
