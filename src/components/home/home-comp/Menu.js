import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

export default class TopBar extends Component {
    render() {
        return (
            <Segment className='top-header' attached='top'>
                <p><strong>NUEVO!</strong> Crea tus propias historias y vívelas cómo nunca las habías vivido!</p>
            </Segment>
        )
    }
}
