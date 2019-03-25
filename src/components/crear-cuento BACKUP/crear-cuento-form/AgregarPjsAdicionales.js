import React, { Component } from 'react';
import { Form, Icon, Divider, Button, Input, Container } from 'semantic-ui-react';
import { Field, FieldArray, reduxForm } from 'redux-form';

const renderField = ({ input, label, type, placeholder }) => (
    <Form.Input label={label} placeholder={placeholder} {...input} />
)

const renderPersonajesAdicionales = ({ fields }) => {
    const style = {
        deleteCharIcon: {
            lineHeight: 4,
            marginRight: '10px',
            cursor: 'pointer'
        },

        agregarPersonajeButton: {
            marginBottom: '10px'
        },

        form: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'left'
        },

        personajeInput: {
            marginRight: '10px',
            marginBottom: '10px'
        },

        nombrePersonajeInput: {
            marginLeft: '35px'
        }

    }

    return (
        <div>
            <Form.Field>
                <Button
                    basic
                    type='button'
                    color='purple'
                    icon='plus'
                    content='Añadir personaje'
                    style={style.agregarPersonajeButton}
                    onClick={() => fields.push({})}
                >
                </Button >
            </Form.Field>
            {fields.map((pj, index) =>
                <div key={index}>
                    <Divider />
                    <Form.Field as={Container} fluid style={style.form}>
                        <Icon
                            name='x'
                            size='large'
                            color='red'
                            style={style.deleteCharIcon}
                            onClick={() => fields.remove(index)} />

                        <div style={style.personajeInput}>
                            <Field
                                name={`${pj}.personaje`}
                                label='Personaje'
                                placeholder='El pirata.. enanito perezoso.. la tacita mágica..'
                                component={renderField} />
                        </div>
                        <div style={style.nombrePersonajeInput}>
                            <Field
                                name={`${pj}.nombrePersonaje`}
                                label='Nombre del Personaje'
                                placeholder='Alex... Tirso...'
                                component={renderField} />
                        </div>
                    </Form.Field>
                </div>
            )}
        </div>
    )
}

const AgregarPersonaje = ({ fields }) => (
    <Form.Field>
        <FieldArray name='personajesAdicionales' component={renderPersonajesAdicionales} />
    </Form.Field>
)


export default reduxForm({
    form: 'cuento',
    destroyOnUnmount: false
})(AgregarPersonaje)