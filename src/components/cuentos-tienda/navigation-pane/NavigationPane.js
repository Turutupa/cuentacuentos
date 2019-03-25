import React, { Component } from 'react';
import { Responsive, Card, List, Dropdown, Image } from 'semantic-ui-react';

const categorias = [
    { text: 'Fantasía', value: 'fantasia' },
    { text: 'Aventuras', value: 'aventuras' },
    { text: 'Piratas', value: 'piratas' },
    { text: 'Princesas', value: 'princesas' },
    { text: 'Románticos', value: 'romanticos' }
]

export default class ContentPane extends Component {
    render() {
        return (
            <Responsive minWidth={800}>
                <Card>
                    <Card.Content>
                        <Card.Header>Cuentos Públicos</Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <List>
                            <List.Item>
                                <span>
                                    Mostrarme libros de{' '}
                                    <Dropdown
                                        inline
                                        options={categorias}
                                        defaultValue={categorias[0].value} />
                                </span>
                            </List.Item>
                            <List.Item>BestSellers</List.Item>
                            <List.Item>Popularidad</List.Item>
                            <List.Item>Editable</List.Item>
                            <List.Item>Rating</List.Item>
                            <List.Item>Precio</List.Item>
                            <List.Item>Elegido del mes!</List.Item>
                        </List>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Card.Header>Cuentos Privados</Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <List.Item>Creados</List.Item>
                        <List.Item>Compartidos</List.Item>
                        <List.Item>Favoritos</List.Item>
                        <List.Item>Valorados</List.Item>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Card.Header>¡Cuento destacado!</Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium' rounded />
                    </Card.Content>
                </Card>
            </Responsive>
        )
    }
}
