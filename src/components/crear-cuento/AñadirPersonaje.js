import React, { Component } from 'react';
import { Button, Grid, Popup } from 'semantic-ui-react';

export default class AddChar extends Component {
    render() {
        return (
            <Popup wide trigger={<Button basic color='purple' content='Añadir personaje' />} on='click'>
                <Grid divided columns='equal'>
                    <Grid.Column>
                        <Popup
                            trigger={<Button color='blue' content='Héroe' fluid />}
                            content='Hurrah! Más aliados!'
                            position='top center'
                            size='tiny'
                            inverted
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Popup
                            trigger={<Button color='orange' content='Villano' fluid />}
                            content='Parece que tenemos un nuevo villano!'
                            position='top center'
                            size='tiny'
                            inverted
                        />
                    </Grid.Column>
                </Grid>
            </Popup>
        )
    }
}
