import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <Menu secondary>
                <Menu.Menu position='left'>
                    <Menu.Item
                        header
                        as={Link}
                        to='/'
                        name='Cuenta cuentos'
                        className='navItem'
                    />
                    <Menu.Item
                        as={Link}
                        to='/crear-cuento'
                        name='Crear cuento'
                        className='navItem'
                    />
                    <Menu.Item
                        as={Link}
                        to='cuentos'
                        name='Cuentos'
                        className='navItem'
                    />
                </Menu.Menu>
                {/* <Menu.Menu position='right'>
                    <Menu.Item
                        name='user'
                    >
                        <Icon name='user' />
                        Login
                    </Menu.Item>
                </Menu.Menu> */}
            </Menu>
        </div>
    )
}
