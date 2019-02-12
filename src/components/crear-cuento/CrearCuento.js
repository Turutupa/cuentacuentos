import React, { Component } from 'react';
import { Container, Grid, Header, Icon } from 'semantic-ui-react';
import CrearCuentoForm from './CrearCuentoForm';
import Navbar from '../Navbar';
import '../../style/crear-cuento.css'

export default class CrearCuento extends Component {
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
                className='crearCuentoBg'
            >
                <Navbar />
                <div >
                    <Grid
                        as={Container}
                        text
                        centered
                        columns={1}
                    >
                        <Grid.Column style={style.content}>
                            <CrearCuentoForm />
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        )
    }
}
