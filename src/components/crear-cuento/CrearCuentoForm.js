import React from 'react';
import { Card, Form, Input, TextArea, Confirm, Button, Divider, Icon, Header } from 'semantic-ui-react';
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
        personajes: []
    }

    show = () => this.setState({ open: true });
    handleConfirm = () => this.setState({ open: false });
    handleCancel = () => this.setState({ open: false });

    addChar = (e) => {

        let pjsArr = this.state.personajes;
        pjsArr.push([{}])

        this.setState({ personajes: pjsArr })
    };

    deleteChar = (e, { pj }) => {
        console.log(pj)
        let pjsArr = this.state.personajes;
        let newPjsArr = pjsArr.filter((elem, i) => {
            return i !== pj
        })
        this.setState({ personajes: newPjsArr })
    }

    pjInfo = (e, { name, id }) => {

        let pjArr = this.state.personajes;
        pjArr[name][id] = e.target.value;

        this.setState({
            pjArr
        })
        console.log(this.state.personajes)
    }

    render() {

        const { personajes } = this.state;

        const style = {

            background: {
                backgroundColor: 'rgb(255,255,255, 0.7) !important'
            },

            cardHeader: {
                display: 'flex',
                justifyContent: 'center',
                paddingTop: 50,
                paddingBottom: 50,
                marginBottom: 0,
                backgroundImage: `url(${img})`,
                backgroundPosition: 'center',
                // backgroundRepeat: 'no-repeat, repeat',
            },

            deleteCharIcon: {
                lineHeight: 2,
                marginRight: '10px',
                cursor: 'pointer'
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
                        <Form.Field as='h3' label='Comienza la aventura!' />
                        <Form.Group widths='equal'>
                            <Form.Field
                                id='form-input-control-first-name'
                                control={Input}
                                label='Nombre del héroe'
                                placeholder='Héroe..'
                                required
                            />
                            <Form.Field
                                id='form-input-control-last-name'
                                control={Input}
                                label='Nombre del villano'
                                placeholder='Villano..'
                                required
                            />
                            <Form.Field
                                id='form-input-control-location'
                                control={Input}
                                label='Lugar'
                                placeholder='En un castillo de pucela..'
                            />
                        </Form.Group>
                        {
                            personajes.length > 0
                                ? <Form.Field as='h3' label='Personajes adicionales' />
                                : ''
                        }
                        {
                            personajes.length > 0
                                ?
                                personajes.map((personaje, i) => {
                                    return (
                                        <div key={i}>
                                            <Divider />
                                            < Form.Group inline widths='equal' >
                                                <Icon
                                                    pj={i}

                                                    name='minus circle'
                                                    size='large'
                                                    style={style.deleteCharIcon}
                                                    onClick={this.deleteChar} />
                                                <Form.Input
                                                    fluid
                                                    id='personaje'
                                                    name={i}
                                                    onChange={this.pjInfo}
                                                    label='Personaje'
                                                    placeholder='El pirata.. enanito perezoso.. la tacita mágica..' />
                                                <Form.Input
                                                    fluid
                                                    id='nombrePersonaje'
                                                    name={i}
                                                    onChange={this.pjInfo}
                                                    label='Nombre del Personaje'
                                                    placeholder='Alex... Tirso...' />
                                            </Form.Group>
                                        </div>
                                    )
                                })
                                : ''
                        }

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
