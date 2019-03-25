import React, { Component } from 'react';
import { Card, Button, List, Transition, Image } from 'semantic-ui-react';
import { API } from 'aws-amplify';
import _ from 'lodash';

export default class Detalles extends Component {

    state = {
        params: [
            this.props.characters.hero.name ? this.props.characters.hero.name : 'Nombre del protagonista',
            this.props.characters.villain.name ? this.props.characters.villain.name : 'Nombre del villano',
            this.props.characters.location.name ? this.props.characters.location.name : 'Nombre del lugar fantástico',
        ]
    }

    handleAdd = () => this.setState({
        params: [
            ...this.state.params,
            'eooo'
        ]
    })

    handleRemove = () => this.setState({ items: this.state.items.slice(0, -1) })

    render() {
        const { params } = this.state

        return (
            <Card fluid>
                <Card.Content >
                    <Card.Header>
                        Personajes
                    {/* <Button.Group floated='right'> */}
                        {/* <Button disabled={params.length === 0} icon='minus' onClick={this.handleRemove} /> */}
                        {/* <Button icon='plus' onClick={this.handleAdd} /> */}
                        {/* </Button.Group> */}
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Transition.Group as={List} duration={200} divided size='huge' verticalAlign='middle'>
                        {params.map(item => (
                            <List.Item key={item}>
                                {/* <Image avatar src={`/images/avatar/small/${item}.jpg`} /> */}
                                <List.Content header={_.startCase(item)} />
                            </List.Item>
                        ))}
                    </Transition.Group>
                </Card.Content>
            </Card>
        )
    }
}
