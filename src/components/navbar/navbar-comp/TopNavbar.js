import React, { Component, Fragment } from 'react';
import { Container, Menu, Icon, Responsive } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class TopNavbar extends Component {
    render() {

        const style = {
            user: {
                cursor: 'pointer',
            }
        }

        return (
            <div className='top-navbar-menu'>
                <div className='responsive-page-margin'>
                    <Menu inverted>
                        <Menu.Menu position='left' className='top-navbar-menu-menu' >
                            <Responsive minWidth={768}>
                                <Menu.Item
                                    header
                                    as={Link}
                                    to='/'
                                    name='Cuenta cuentos'
                                    className='navItem top-navbar-menu-item'
                                />
                            </Responsive>
                            <Responsive maxWidth={768}>
                                <Menu.Item
                                    as={Link} to='/'
                                    className='navItem top-navbar-menu-item'
                                    style={{ paddingRight: '0px', marginRight: 0 }}>
                                    <Icon name='home' style={{ paddingRight: '0px', marginRight: 0 }} />
                                </Menu.Item>
                            </Responsive>
                            <Menu.Item
                                as={Link}
                                to='/crear-cuento'
                                name='Crear cuento'
                                className='navItem'
                            />
                            <Menu.Item
                                as={Link}
                                to='/cuentos'
                                name='Cuentos'
                                className='navItem'
                            />
                        </Menu.Menu>
                        <Menu.Menu position='right'>
                            {this.props.isAuthenticated
                                ? <Menu.Item
                                    onClick={this.props.handleLogout}
                                    as='a'
                                    name='Logout'
                                    className='navItem'
                                />
                                : <Fragment>
                                    <Menu.Item
                                        as={Link}
                                        to='login'
                                        name='Login'
                                        className='navItem'
                                    />
                                    <Menu.Item
                                        as={Link}
                                        to='signup'
                                        name='Signup'
                                        className='navItem'
                                    />
                                </Fragment>
                            }
                        </Menu.Menu>
                    </Menu>
                </div>
            </div>
        )
    }
}
