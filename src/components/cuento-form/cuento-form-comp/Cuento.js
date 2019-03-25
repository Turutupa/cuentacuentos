import React, { Component } from 'react';
import { TextArea } from 'semantic-ui-react';

export default class Cuento extends Component {

    state = {
        cuento: this.props.content
    }

    handleInput = (e) => {
        this.setState({ cuento: e.target.value })
    }

    render() {
        return (
            <TextArea
                autoHeight
                onChange={this.handleInput}
                value={this.state.cuento}
                className='cuento-form-textArea'
                style={{ resize: 'vertical' }}
                placeholder='Érase una vez.. en un lugar muy muy lejano..'
            />
        )
    }
}
