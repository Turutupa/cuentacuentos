import React from 'react';
import { Grid, Card, Popup, Image, Form, Input, TextArea, Confirm, Button, Select, Icon, Header } from 'semantic-ui-react';
import img from '../../img/fantasy.jpg';
// import Popup from './AñadirPersonaje';

const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

export default class CuentoForm extends React.Component {

    state = {
        open: false,
        heroe: '',
        villano: '',
        personajes: 0
    }

    show = () => this.setState({ open: true })
    handleConfirm = () => this.setState({ open: false })
    handleCancel = () => this.setState({ open: false })
    addChar = (e) => {
        this.setState({ personajes: this.state.personajes + 1 })
    }

    render() {

        const style = {

            background: {
                backgroundColor: 'rgb(255,255,255, 0.7) !important'
            },

            cardHeader: {
                display: 'flex',
                justifyContent: 'center',
                paddingTop: 80,
                paddingBottom: 80,
                marginBottom: 0,
                backgroundImage: `url(${img})`,
                backgroundPosition: 'center',
                // backgroundRepeat: 'no-repeat, repeat',
            }
        }

        return (
            <Card fluid className='animated fadeInLeftBig' style={style.backgroundColor}>
                <Header
                    as='h1'
                    icon
                    inverted
                    style={style.cardHeader}>
                    {/* <Icon name='magic' /> */}
                    Crear cuento
                </Header>
                <Card.Content>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field
                                id='form-input-control-first-name'
                                control={Input}
                                label='Nombre del héroe'
                                placeholder='Héroe...'
                            />
                            <Form.Field
                                id='form-input-control-last-name'
                                control={Input}
                                label='Nombre del villano'
                                placeholder='Villano...'
                            />
                        </Form.Group>
                        < Form.Group widths='equal'>
                            <Form.Input fluid label='First name' placeholder='First name' />
                            <Form.Input fluid label='Last name' placeholder='Last name' />
                        </Form.Group>
                        {/* {
                                this.state.personajes 
                                < Form.Group widths='equal'>
                                <Form.Input fluid label='First name' placeholder='First name' />
                            <Form.Input fluid label='Last name' placeholder='Last name' />
                        </Form.Group>
                        } */}

                        <Form.Field>
                            <Button
                                basic
                                color='purple'
                                content='Añadir personaje'
                                onClick={this.addChar} />
                        </Form.Field>

                        <Form.Field
                            style={{ minHeight: 120 }}
                            id='form-textarea-control-opinion'
                            control={TextArea}
                            label='Cuento'
                            placeholder='Érase una vez...en un lugar muy muy lejano...'
                        />
                        {/* <Form.Field
                id='form-button-control-public'
                control={Button}
                content='Confirm'
                label='Label with htmlFor'
            /> */}
                    </Form>
                </Card.Content>
                <Button
                    attached='bottom'
                    // inverted
                    color='purple'
                    onClick={this.show}>
                    Crear cuento!
            </Button>
                <Confirm
                    open={this.state.open}
                    content='This is a custom message'
                    onCancel={this.handleCancel}
                    onConfirm={this.handleConfirm}
                />
            </Card >
        )
    }
}
