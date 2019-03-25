import React, { Component } from 'react'
import { Card, Button, Header, Rating } from 'semantic-ui-react';

export default class Actions extends Component {

    render() {

        const details = {
            price: 23.45,
            author: 'Fernando de Gorgonzola',
            title: 'Fernando el de los huevos colgando',
            rating: 4.7,
            languages: ['es', 'en', 'port'],
            editable: true,
            content: 'Once upon a time..., there was a super boy called Tirso that was always willing to travel to the space. He grew up and he became an astronaut, having his own space ship. He travelled to all the eigth planets in the solar sistem. He started with Mercury, that is the closest one to the sun, and stoping in Venus, the Earth, Mars, Jupiter, Saturn, Neptune and finallly also landing in Uranus. He took pictures of all of them and he showed to his mum when coming back home. All his friend of the school were really happy when they saw him arriving in his astronaut suit and telling all the adventures he lived in space.'
        }

        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header>Actions</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Header style={{ fontWeight: 400 }}>¡Consigue este cuento ahora mismo a un precio reducido!</Header>
                    <Header style={{ color: 'teal' }}>{details.price}€</Header>
                </Card.Content>
                <Card.Content>
                    <Card.Meta>
                        <Button.Group>
                            <Button primary>Añadir a la cesta</Button>
                            <Button secondary>Añadir a favoritos</Button>
                        </Button.Group>
                    </Card.Meta>
                </Card.Content>
            </Card>
        )
    }
}
