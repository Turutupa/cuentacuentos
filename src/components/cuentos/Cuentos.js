import React, { Component } from 'react';
import { Container, Grid, Header, Icon } from 'semantic-ui-react';
import Navbar from '../crear-cuento/Navbar';
import ListadoCuentos from './ListadoCuentos';

export default class Cuentos extends Component {
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
