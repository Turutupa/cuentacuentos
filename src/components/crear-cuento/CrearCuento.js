import React, { Component } from 'react';
import { Container, Grid, Header, Icon } from 'semantic-ui-react';
import CrearCuentoForm from './CrearCuentoForm';
import Navbar from './Navbar';

export default class CrearCuento extends Component {
    render() {

        const style = {
            background: {
                height: '100vh'
            },

            content: {
                paddingTop: '150px'
            }
        }

        return (
            <div
                style={style.background}
                className='crearCuentoBg'
            >
                <Navbar />
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
        )
    }
}
