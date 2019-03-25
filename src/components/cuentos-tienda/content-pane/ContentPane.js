import React, { Component } from 'react';
import { Segment, Divider } from 'semantic-ui-react';
import CuentosPreview from './CuentosPreview';
import SliderExample from './SliderExample';

export default class ContentPane extends Component {
    render() {
        return (
            <Segment>
                <h1>Resultado de búsqueda</h1>
                <Divider />
                <div className='cuentos-content-pane-preview'>
                    <CuentosPreview history={this.props.history} />

                </div>
                {/* <div className='cuentos-content-pane-preview'>
                    <CuentosPreview />
                </div> */}
            </Segment>
        )
    }
}
