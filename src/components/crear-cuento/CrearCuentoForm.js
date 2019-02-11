import React from 'react';
import { Grid, Card, Image, Form, Input, TextArea, Confirm, Button, Select, Icon, Header } from 'semantic-ui-react';
import img from '../../img/fantasy.jpg'

const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
]

export default class CuentoForm extends React.Component {

    state = { open: false }

    show = () => this.setState({ open: true })
    handleConfirm = () => this.setState({ open: false })
    handleCancel = () => this.setState({ open: false })

    render() {

        const style = {
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
            <Card fluid color='purple' className='animated fadeInLeftBig'>
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
                        <Form.Field
                            style={{ minHeight: 120 }}
                            id='form-textarea-control-opinion'
                            control={TextArea}
                            label='Cuento'
                            placeholder='Érase una vez...en un lugar muy muy lejano...'
                        />
                        <Button
                            inverted
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
                        {/* <Form.Field
                id='form-button-control-public'
                control={Button}
                content='Confirm'
                label='Label with htmlFor'
            /> */}
                    </Form>
                </Card.Content>
            </Card>
        )
    }
}
