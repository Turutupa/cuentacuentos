import React, { Component } from 'react';
import { Container, Form, Divider, Header } from 'semantic-ui-react';
import LoaderButton from './login-comp/LoaderButton';
import './login.css';
import { Auth } from "aws-amplify";

export default class Login extends Component {

    state = {
        email: '',
        password: '',
        loggedInEmail: '',
        isLoading: false
    }

    validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length > 0
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({ isLoading: true })
        try {
            await Auth.signIn(this.state.email, this.state.password);
            this.props.userHasAuthenticated(true);
            this.setState({ loggedInEmail: this.state.email, isLoading: false })
            // this.props.history.push("/");
        } catch (e) {
            alert(e.message);
            this.setState({ isLoading: false })
        }
    }

    componentDidMount = async () => {
        await Auth.currentSession()
            .then(res => this.setState({ loggedInEmail: res.idToken.payload.email }));
    }

    render() {
        if (!this.props.isAuthenticated) {
            return (
                <div className='Login'>
                    <div className='login-content'>
                        <Container text style={{ minWidth: '300px' }}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Field required>
                                    <Form.Input
                                        autoFocus
                                        name='email'
                                        label='Email'
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                </Form.Field>
                                <Form.Field required>
                                    <Form.Input
                                        name='password'
                                        label='Contraseña'
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        type='password'
                                    />
                                </Form.Field>
                                <Divider style={{ padding: '5px 5px 5px 5px' }} />
                                <LoaderButton
                                    fluid
                                    size="large"
                                    disabled={!this.validateForm()}
                                    type="submit"
                                    isLoading={this.state.isLoading}
                                    text="Loguear"
                                    loadingText="Logueando…"
                                />
                            </Form>
                        </Container>
                    </div>
                </div >
            )
        } else {
            return (
                <div className='login-content'>
                    <div style={{ padding: '20px' }}>
                        <Header as='h1'>Logueado con la cuenta</Header>
                        <Header as='h3' floated='right'>{this.state.loggedInEmail}</Header>
                    </div>
                </div>
            )
        }
    }
}
