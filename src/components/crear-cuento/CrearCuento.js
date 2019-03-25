import React, { Component } from 'react';
import { Form, Button, Message, Radio } from 'semantic-ui-react';
import './crear-cuento.css';
import { API, Auth } from 'aws-amplify';

const form = [
    { pregunta: '¿Cuál es el nombre del cuento?', name: 'title' },
    { pregunta: '¿Cuál es el nombre del protagonista?', name: 'hero', gender: true },
    { pregunta: '¿Cuál es el nombre del villano?', name: 'villain', gender: true },
    // { pregunta: '¿Cuál es el nombre del lugar de la aventura?', name: 'location' },
    // { pregunta: '¿Quieres que el cuento sea público o privado?', name: 'public' }
]

export default class CrearCuento extends Component {

    state = {
        form: form,
        formStarted: false,
        formFinished: false,
        currentQuestion: 0,
        title: '',
        hero: '',
        heroGender: 'F',
        villain: '',
        villainGender: 'M',
        location: '',
        isPublic: '1',
        errMsg: null,
        userErr: null
    }

    comenzarCuento = () => this.setState({ formStarted: true });

    handleNext = () => {
        if (this.state.currentQuestion === this.state.form.length - 1) {
            this.setState({ formFinished: true, formStarted: false })
            return
        }
        // ACTIVAR PARA OBLIGAR A RELLENAR LOS CAMPOS
        // this.state[name].length > 0
        //     ? this.setState({
        //         currentQuestion: this.state.currentQuestion + 1,
        //         errMsg: null
        //     })
        //     : this.setState({ errMsg: 'Por favor, rellena el campo' })
        this.setState({ currentQuestion: this.state.currentQuestion + 1 })
    }

    handlePrev = (e) => {
        this.setState({ currentQuestion: this.state.currentQuestion - 1 })
    }

    handleInput = (e, { name, value }) => {
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    createStory = async () => {

        const userId = await Auth.currentUserInfo()

        if (userId === null) {
            this.setState({ userErr: 'Por favor, loguea para crear un cuento' })
        } else {
            this.setState({ userErr: null })
        }

        try {
            this.crearCuento(userId).then(res => this.props.history.push(`/editar-cuento/${res.SK}/${res.PK}`));
        } catch (e) {
            // alert(e);
            this.setState({ isLoading: false });
        }
    }

    crearCuento(userId) {
        return API.post('stories', '/stories', {
            body: {
                creator: userId.username,
                title: this.state.title ? this.state.title : 'Nombre del Cuento',
                characters: {
                    location: {
                        name: this.state.location ? this.state.location : 'Lugar muy muy lejano..'
                    },
                    hero: {
                        gender: this.state.heroGender,
                        name: this.state.hero ? this.state.hero : 'Nombre Protagonista',
                    },
                    villain: {
                        gender: this.state.villainGender,
                        name: this.state.villain ? this.state.villain : 'Nombre Villano',
                    },
                },
            }
        })
    }



    renderForm = i => (
        <div className='place-in-middle-crear-cuento animated fadeIn'>
            <h1 className='crear-cuento-form'>CreaTusCuentos</h1>
            <h3 className='crear-cuento-form'>{this.state.form[i].pregunta}</h3>
            <Form onSubmit={this.handleSubmit}>
                {
                    this.state.form[i].gender
                        ? <Form.Group style={{ marginBottom: 10 }}>
                            <Form.Field
                                autoFocus
                                control={Radio}
                                label='Chico'
                                value='M'
                                name={`${this.state.form[i].name}Gender`}
                                checked={this.state[`${form[i].name}Gender`] === 'M'}
                                onChange={this.handleInput}
                            />
                            <Form.Field
                                control={Radio}
                                label='Chica'
                                value='F'
                                name={`${this.state.form[i].name}Gender`}
                                checked={this.state[`${form[i].name}Gender`] === 'F'}
                                onChange={this.handleInput}
                            />
                        </Form.Group>
                        : ''
                }
                <Form.Input
                    autoFocus
                    name={this.state.form[i].name}
                    onChange={this.handleInput}
                    value={this.state[this.state.form[i].name]} />

                <Button
                    type='button'
                    disabled={this.state.currentQuestion === 0}
                    name={this.state.form[i].name}
                    onClick={this.handlePrev}
                    className='crear-cuento-comenzar'>
                    Anterior
                </Button>
                <Button
                    primary
                    type='submit'
                    name={this.state.form[i].name}
                    onClick={this.handleNext}
                    className='crear-cuento-comenzar'>
                    Confirmar
                </Button>
            </Form>
            {
                this.state.errMsg !== null
                    ? <Message
                        warning header='Error!'
                        content={this.state.errMsg}
                        className='animated slideInLeft crear-cuento-err-msg' />
                    : ''
            }
        </div>
    )

    render() {

        if (this.state.formFinished) {
            return (
                <div className='place-in-middle-crear-cuento animated fadeIn'>
                    <h1>Muchas gracias!</h1>
                    <h2>Ya puedes escribir tu cuento</h2>
                    <h3 className='crear-cuento-final'>¿Son todos los datos correctos?</h3>
                    <h4 className='crear-cuento-tags'>Cuento</h4>
                    <h2 className='crear-cuento-final'>{this.state.title}</h2>
                    <h4 className='crear-cuento-tags'>Protagonista</h4>
                    <h2 className='crear-cuento-final'>{this.state.hero}</h2>
                    <h4 className='crear-cuento-tags'>Villano</h4>
                    <h2 className='crear-cuento-final'>{this.state.villain}</h2>
                    {/* <h4 className='crear-cuento-tags'>Lugar</h4>
                    <h2 className='crear-cuento-final'>{this.state.location}</h2> */}
                    <Form.Field className='crear-cuento-confirmar-cuento'>
                        <Button
                            onClick={
                                () => this.setState({
                                    currentQuestion: this.state.form.length - 1,
                                    formFinished: false,
                                    formStarted: true
                                })
                            }
                            name='anterior'
                        >
                            Anterior
                        </Button>
                        <Button
                            autoFocus
                            primary
                            name='crearCuento'
                            onClick={this.createStory}
                        >
                            Escribir cuento!
                        </Button>
                    </Form.Field>
                    {
                        this.state.userErr !== null
                            ? <Message
                                warning header='Error!'
                                content={this.state.userErr}
                                className='animated slideInLeft crear-cuento-err-msg' />
                            : ''
                    }
                </div>
            )
        }

        if (!this.state.formStarted) {
            return (
                <div className='place-in-middle-crear-cuento animated bounceInDown'>
                    {/* <h1 className='crear-cuento-form'>CreaTusCuentos</h1> */}
                    <h1 className='crear-cuento-form'>Bienvenido!</h1>
                    <h2 className='crear-cuento-form'>Estás listo para emprender una aventura?</h2>
                    {/* <h2 className='crear-cuento-form'>Dale a comenzar para crear tu cuento!</h2> */}
                    <Button
                        primary
                        name='comenzarCuento'
                        onClick={this.comenzarCuento}
                        className='crear-cuento-comenzar'>
                        Comenzar
                    </Button>
                </div>
            )
        }

        if (this.state.formStarted) {
            return (
                <div>
                    {
                        this.renderForm(this.state.currentQuestion)
                    }
                </div>
            )
        }
    }
}
