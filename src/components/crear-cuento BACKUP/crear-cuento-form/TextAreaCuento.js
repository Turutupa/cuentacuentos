import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { TextArea, Header } from 'semantic-ui-react';

const Cuento = ({ input, name, label, placeholder }) =>
    <TextArea
        {...input}
        name={name}
        placeholder={placeholder}
        lable={label}
        style={{ minHeight: 100 }} />

function TextAreaCuento() {
    return (
        <div>
            <Header as='h3'>Cuento</Header>
            <Field
                name='cuento'
                label='Cuento'
                placeholder='Érase una vez.. en un lugar muy muy lejano..'
                component={Cuento}
            />
        </div>
    )
}

export default reduxForm({
    form: 'cuento',
    destroyOnUnmount: false
})(TextAreaCuento)