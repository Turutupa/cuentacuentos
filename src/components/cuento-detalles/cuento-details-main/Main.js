import React, { Component } from 'react';
import { Card, Rating, Item, Image, Header, Button } from 'semantic-ui-react';

export default class Main extends Component {
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
                    <Item.Group>
                        <Item>
                            <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            <Item.Content>
                                <Item.Header as='a'>{details.title}</Item.Header>
                                <Item.Meta>{details.author}</Item.Meta>
                                <Rating icon='star' defaultRating={4.4} maxRating={5} />
                                <Item.Description>
                                    <p>{details.content}</p>
                                </Item.Description>
                                <Item.Extra><a>Additional Details</a></Item.Extra>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Card.Content>
            </Card>
        )
    }
}
