import React, { Component } from 'react';
import { Container, Grid, Header, Icon } from 'semantic-ui-react';
import Navbar from '../Navbar';
import ListadoCuentos from './ListadoCuentos';
import '../../style/cuentos.css'

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
                <Navbar />
                <Grid
                    as={Container}
                    fluid
                    centered
                    columns={1}
                >
                    <Grid.Column style={style.content}>
                        <ListadoCuentos />
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
