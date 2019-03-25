import React, { Component } from 'react'
import { Responsive, Menu, Dropdown, Icon } from 'semantic-ui-react'

export default class MenuExampleBasic extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div className='categories-bar-container'>
                <Responsive minWidth={768}>
                    <div className='responsive-page-margin categories-bar'>
                        <Menu borderless className='' style={{ border: 'none', boxShadow: 'none' }}>

                            <Dropdown text='Filter Posts' multiple icon='filter'>
                                <Dropdown.Menu>
                                    <Dropdown.Header icon='tags' content='Tag Label' />
                                    <Dropdown.Menu scrolling>
                                        <Dropdown.Item text='Categoría 1' />
                                        <Dropdown.Item text='Categoría 2' />
                                        <Dropdown.Item text='Categoría 3' />
                                        <Dropdown.Item text='Categoría 4' />
                                    </Dropdown.Menu>
                                </Dropdown.Menu>
                            </Dropdown>


                            <Menu.Item name='bestsellers' active={activeItem === 'bestsellers'} onClick={this.handleItemClick}>
                                Bestsellers
                        </Menu.Item>

                            <Menu.Item
                                name='recientes'
                                active={activeItem === 'recientes'}
                                onClick={this.handleItemClick}
                            >
                                Más recientes
                        </Menu.Item>
                            <Menu.Menu position='right' className='categories-bar-shop-item'>
                                <Menu.Item
                                    style={{ backgroundColor: '#FFFFFF' }}
                                    name='upcomingEvents'
                                    active={activeItem === 'upcomingEvents'}
                                    onClick={this.handleItemClick}
                                >
                                    0,00€
                            </Menu.Item>
                                <Menu.Item
                                    name='upcomingEvents'
                                    active={activeItem === 'upcomingEvents'}
                                    onClick={this.handleItemClick}
                                >
                                    <Icon name='shop' />
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>
                    </div>
                </Responsive>
            </div>
        )
    }
}