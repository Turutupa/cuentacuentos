import React, { Component } from 'react';
import { Container, Grid, Header, Icon } from 'semantic-ui-react';
import TarjetasCuentos from './cuentos-comp/TarjetasCuentos';
import './cuentos.css'

export default class Cuentos extends Component {
    render() {

        const style = {
            background: {
                minHeight: '100vh',
                minWidth: '100vw',
                backgroundSize: 'auto',
            },

            content: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 'calc(100vh - 47px)',
            },
        }

        return (
            <div
                style={style.background}
                className='cuentosBg'
            >
                <Container fluid style={style.content}>
                    < TarjetasCuentos childProps={this.props} />
                </Container>
            </div>
        )
    }
}
