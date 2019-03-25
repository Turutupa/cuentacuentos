import React, { Component } from 'react';
import { Form, Input, Select } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({ input, name, label, placeholder }) => {
    return (
        <div style={{ paddingRight: 0, width: '100%' }}>
            <input
                // fluid
                // control={Input}
                {...input}
                name={name}
                placeholder={placeholder}
                label={label}
            // style={{ paddingRight: 0 }}
            />
        </div>
    )
};

class AgregarParams extends Component {

    render() {

        const tipoCuento = ['', 'Fantástico', 'Piratas', 'Hadas', 'Suspense', 'Romántico', 'Ciencia Ficción', 'Miedo', 'Navidad']
        const valTipoCuento = ['', 'fantastico', 'piratas', 'hadas', 'suspense', 'romantico', 'cienciaFiccion', 'miedo', 'navidad']

        return (
            <div>
                <Form.Field as='h1' label='Comienza la aventura!' />
                <Form.Group widths='equal'>
                    <Form.Field>
                        <label>Nombre del cuento</label>
                        <Field
                            name='nombreCuento'
                            label='Nombre del cuento'
                            placeholder='Maria Sarmiento'
                            component={renderField} />
                    </Form.Field>
                    <Form.Field>
                        <label>Tipo de cuento</label>
                        <Field name="tipoCuento" component="select">
                            {
                                tipoCuento.map((elem, i) => (
                                    <option
                                        key={i}
                                        onClick={this.updateBackground}
                                        value={valTipoCuento[i]}>
                                        {elem}
                                    </option>
                                ))
                            }

                        </Field>
                    </Form.Field>
                </Form.Group>
                <label>Nombre del héroe</label>
                <Form.Group widths='equal'>
                    <Form.Field>
                        <Field
                            name='heroe'
                            label='Nombre del héroe'
                            placeholder='William..'
                            component={renderField} />
                    </Form.Field>
                    <Form.Field>
                        <Field name="sexoHeroe" component="select">
                            <option></option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </Field>
                    </Form.Field>
                </Form.Group>
                <label>Nombre del villano</label>
                <Form.Group widths='equal'>
                    <Form.Field>
                        <Field
                            name='villano'
                            label='Nombre del villano'
                            placeholder='Scar..'
                            component={renderField} />
                    </Form.Field>
                    <Form.Field>
                        <Field name="sexoVillano" component="select">
                            <option></option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </Field>
                    </Form.Field>
                </Form.Group>
                <label style={{ fontWeight: 800 }}>Lugar</label>
                <Form.Group inline widths='equal'>
                    <Field
                        name='lugar'
                        label='Nombre del lugar'
                        placeholder='En un castillo pucelano..'
                        component={renderField} />
                </Form.Group>
            </div >
        )
    }
}

export default reduxForm({
    form: 'cuento',
    destroyOnUnmount: false
})(AgregarParams)
