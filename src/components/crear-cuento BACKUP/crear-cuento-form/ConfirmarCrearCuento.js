import React, { Component } from 'react';
import { Button, Header } from 'semantic-ui-react';
import { reduxForm } from 'redux-form';

class ConfirmarCrearCuento extends Component {

    render() {
        return (
            <div>
                <Button
                    // fluid

                    type='submit'
                    color='purple'
                >
                    Crear cuento!
                </Button>
            </div>
        )
    }
}

export default reduxForm({
    form: 'cuento',
    destroyOnUnmount: false
})(ConfirmarCrearCuento)