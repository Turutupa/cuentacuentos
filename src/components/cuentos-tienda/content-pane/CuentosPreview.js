import React, { Component } from 'react'
import { Card, Button, Icon, Rating, Label } from 'semantic-ui-react';
import Slider from 'react-slick';

const cuentos = [
    {
        title: 'Fernando el de los huevos colgando',
        author: 'Fernando de Gorgonzola',
        description: "Small description, probabily this won't exist",
        price: 9.5,
        tags: ['#adventure', '#kids', '#fun', '#awesome']
    },
    {
        title: 'Fernando el de los huevos colgando',
        author: 'Fernando de Gorgonzola',
        description: "Small description, probabily this won't exist",
        price: 9.5,
        tags: ['#adventure', '#kids', '#fun', '#awesome']
    },
    {
        title: 'Fernando el de los huevos colgando',
        author: 'Fernando de Gorgonzola',
        description: "Small description, probabily this won't exist",
        price: 9.5,
        tags: ['#adventure', '#kids', '#fun', '#awesome']
    },
    {
        title: 'Fernando el de los huevos colgando',
        author: 'Fernando de Gorgonzola',
        description: "Small description, probabily this won't exist",
        price: 9.5,
        tags: ['#adventure', '#kids', '#fun', '#awesome']
    },
    {
        title: 'Fernando el de los huevos colgando',
        author: 'Fernando de Gorgonzola',
        description: "Small description, probabily this won't exist",
        price: 9.5,
        tags: ['#adventure', '#kids', '#fun', '#awesome']
    },
    {
        title: 'Fernando el de los huevos colgando',
        author: 'Fernando de Gorgonzola',
        description: "Small description, probabily this won't exist",
        price: 9.5,
        tags: ['#adventure', '#kids', '#fun', '#awesome']
    },
    {
        title: 'Fernando el de los huevos colgando',
        author: 'Fernando de Gorgonzola',
        description: "Small description, probabily this won't exist",
        price: 9.5,
        tags: ['#adventure', '#kids', '#fun', '#awesome']
    },
    {
        title: 'Fernando el de los huevos colgando',
        author: 'Fernando de Gorgonzola',
        description: "Small description, probabily this won't exist",
        price: 9.5,
        tags: ['#adventure', '#kids', '#fun', '#awesome']
    },
    {
        title: 'Fernando el de los huevos colgando',
        author: 'Fernando de Gorgonzola',
        description: "Small description, probabily this won't exist",
        price: 9.5,
        tags: ['#adventure', '#kids', '#fun', '#awesome']
    },
    {
        title: 'Fernando el de los huevos colgando',
        author: 'Fernando de Gorgonzola',
        description: "Small description, probabily this won't exist",
        price: 9.5,
        tags: ['#adventure', '#kids', '#fun', '#awesome']
    },
    {
        title: 'Fernando el de los huevos colgando',
        author: 'Fernando de Gorgonzola',
        description: "Small description, probabily this won't exist",
        price: 9.5,
        tags: ['#adventure', '#kids', '#fun', '#awesome']
    },
    {
        title: 'Fernando el de los huevos colgando',
        author: 'Fernando de Gorgonzola',
        description: "Small description, probabily this won't exist",
        price: 9.5,
        tags: ['#adventure', '#kids', '#fun', '#awesome']
    },
    {
        title: 'Fernando el de los huevos colgando',
        author: 'Fernando de Gorgonzola',
        description: "Small description, probabily this won't exist",
        price: 9.5,
        tags: ['#adventure', '#kids', '#fun', '#awesome']
    },
    {
        title: 'Fernando el de los huevos colgando',
        author: 'Fernando de Gorgonzola',
        description: "Small description, probabily this won't exist",
        price: 9.5,
        tags: ['#adventure', '#kids', '#fun', '#awesome']
    },
]

export default class CuentosPreview extends Component {

    handleBookSelect = () => {
        this.props.history.push('/cuentos/temp')
    }

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1,
            initialSlide: 0,
            rows: 2,
            responsive: [
                {
                    breakpoint: 1700,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div className='cuentos-slick-container'>
                <Slider {...settings} className='cuentos-slick'>
                    {
                        cuentos.map((cuento, index) =>
                            <Card className='cuentos-cuento-preview' key={index} onClick={() => this.handleBookSelect()}>
                                <Card.Content>
                                    <Card.Header>{cuento.title}</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>{cuento.author}</span>
                                    </Card.Meta>

                                    <p>{cuento.description}</p>
                                    <p style={{ color: 'teal', fontSize: '1.3em' }}>{cuento.price}€</p>
                                    <span>Rating</span>{' '}
                                    <Rating disabled icon='star' defaultRating={3} maxRating={4} />

                                    {
                                        cuento.tags.map(tag =>
                                            <Label key={tag} className='cuentos-tag'>{tag}</Label>
                                        )
                                    }
                                </Card.Content>
                                <Card.Meta>
                                    <Button fluid animated='vertical' color='violet'>
                                        <Button.Content hidden>Añadir a cesta</Button.Content>
                                        <Button.Content visible>
                                            <Icon name='shop' />
                                        </Button.Content>
                                    </Button>
                                </Card.Meta>
                            </Card>
                        )
                    }
                </Slider>
            </div>
        )
    }
}
