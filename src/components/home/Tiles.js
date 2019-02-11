import React, { Component } from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Tiles extends Component {
    render() {

        const style = {
            header: {
                cursor: 'pointer'
            }
        }

        return (
            <Grid stackable columns={2}>

                <Grid.Column>
                    <Header
                        as={Link}
                        to='/crear-cuento'
                        icon
                        inverted
                        size='huge'
                        className='hvr-float-shadow animated fadeIn'
                        style={style.header}>
                        <Icon name='magic' />
                        Crear cuento
                        <Header.Subheader>
                            Crea tu propia aventura <b>TOTALMENTE</b> personalizada!
                        </Header.Subheader>
                    </Header>
                </Grid.Column>

                <Grid.Column>
                    <Header
                        as={Link}
                        to='/cuentos'
                        icon
                        inverted
                        size='huge'
                        className='hvr-float-shadow animated fadeIn'
                        style={style.header} >
                        <Icon name='book' />
                        Buscar cuentos
                        <Header.Subheader>
                            Ojea, agrega, personaliza cuentos creados por otros usarios
                        </Header.Subheader>
                    </Header>
                </Grid.Column >
            </Grid >
        )
    }
}
