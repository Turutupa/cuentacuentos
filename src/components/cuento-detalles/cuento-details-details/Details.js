import React, { Component } from 'react';
import { Card, List, Icon } from 'semantic-ui-react';
import Main from '../cuento-details-main/Main';


export default class Details extends Component {

    renderList = (header, content) => {

        const style = {
            item: {
                display: 'flex',
                flexWrap: 'nowrap',
                flexDirection: 'row'
            }
        }

        return (
            <List.Item as='a'>
                <Icon name='right triangle' />
                <List.Content>
                    <div style={style.item}>
                        <List.Header>{header}: <span>&nbsp;</span></List.Header>
                        <List.Description>
                            {content}
                        </List.Description>
                    </div>
                </List.Content>
            </List.Item>
        )

    }

    render() {

        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header>Details</Card.Header>
                </Card.Content>
                <Card.Content>
                    <List>
                        {this.renderList('Título', 'Fernando el de los huevos colgando')}
                        {this.renderList('Autor', 'Fernando de Gorgonzola')}
                        {this.renderList('Protagonista', 'Fernandinho')}
                        {this.renderList('Villano', 'María Sarmiento')}
                        {this.renderList('Localización', 'Puchela')}
                        {this.renderList('Tipo', 'Piratas')}
                        {this.renderList('Creado', '20/03/1991')}
                        {this.renderList('Último cambio', '20/03/2018')}
                        {this.renderList('Idioma', 'Es')}
                        {this.renderList('Precio', '23,45')}
                        {this.renderList('Veces contado', '2974')}
                    </List>
                </Card.Content>
            </Card>
        )
    }
}

const details = {
    title: '',
    author: 'Fernano de Gorgonzola',
    characters: {
        main: 'Fernandinho',
        villain: 'Viento',
    },
    location: 'Puchela',
    type: 'Aventuras',
    creationDate: '20/03/2018',
    lastChange: '20/03/2018',
    language: 'Es-Spanish',
    price: 23.4,
    readCount: 258,
}