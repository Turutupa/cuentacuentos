import React, { Component } from 'react';
import { Header, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {

        const style = {

            content: {
                height: '100vh ',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            },

        }

        return (
            <div
                className='home'
                style={style.content}>

                <Header as='h2' icon inverted style={{ paddingBottom: '50px' }}>
                    <Icon name='x' />
                    Oops!
                <Header.Subheader>Tiene que haber habido algún error!</Header.Subheader>
                </Header>

                <Button
                    as={Link}
                    to='/'
                    size='big'
                    basic
                    color='yellow'>Go back home
                </Button>
            </div>
        )
    }
}
