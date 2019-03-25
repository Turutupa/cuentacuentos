import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { Message, Form, Container, Divider } from "semantic-ui-react";
import LoaderButton from './signup-comp/LoaderButton';
import './signup.css'

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            email: "",
            password: "",
            confirmPassword: "",
            confirmationCode: "",
            newUser: null
        };
    }

    validateForm() {
        return (
            this.state.email.length > 0 &&
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
        );
    }

    validateConfirmationForm() {
        return this.state.confirmationCode.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();

        this.setState({ isLoading: true });

        try {
            const newUser = await Auth.signUp({
                username: this.state.email,
                password: this.state.password
            });
            this.setState({
                newUser
            });
        } catch (e) {
            // if(e.code === "UsernameExistsException"){

            // }
            // console.log(e);
            alert(e.message)
        }

        this.setState({ isLoading: false });
    }

    handleConfirmationSubmit = async event => {
        event.preventDefault();

        this.setState({ isLoading: true });

        try {
            await Auth.confirmSignUp(this.state.email, this.state.confirmationCode);
            await Auth.signIn(this.state.email, this.state.password);

            this.props.userHasAuthenticated(true);
            this.props.history.push("/login");
        } catch (e) {
            alert(e.message);
            this.setState({ isLoading: false });
        }
    }

    renderConfirmationForm() {
        return (
            <div className='signup-content'>
                <Form onSubmit={this.handleConfirmationSubmit}>
                    <Form.Field >
                        <label>Confirmation Code</label>
                        <Form.Input
                            autoFocus
                            name="confirmationCode"
                            type="tel"
                            value={this.state.confirmationCode}
                            onChange={this.handleChange}
                        />
                        <Message>Please check your email for the code.</Message>
                    </Form.Field>
                    <LoaderButton
                        fluid
                        disabled={!this.validateConfirmationForm()}
                        type="submit"
                        isLoading={this.state.isLoading}
                        text="Verify"
                        loadingText="Verifying…"
                    />
                </Form>
            </div>
        );
    }

    renderForm() {
        return (
            <div className='signup-content'>
                <Container text style={{ minWidth: '300px' }}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field required>
                            <Form.Input
                                fluid
                                autoFocus
                                label='Email'
                                name="email"
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </Form.Field>
                        <Form.Field required>
                            <Form.Input
                                fluid
                                label='Contraseña'
                                name='password'
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"
                            />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input
                                fluid
                                label='Confirmar contraseña'
                                name='confirmPassword'
                                value={this.state.confirmPassword}
                                onChange={this.handleChange}
                                type="password"
                            />
                        </Form.Field>
                        <Divider style={{ padding: '5px 5px 5px 5px' }} />
                        <LoaderButton
                            fluid
                            size="large"
                            disabled={!this.validateForm()}
                            type="submit"
                            isLoading={this.state.isLoading}
                            text="Signup"
                            loadingText="Signing up…"
                        />
                    </Form>
                </Container>
            </div>
        );
    }

    render() {
        return (
            <div className="Signup">
                {this.state.newUser === null
                    ? this.renderForm()
                    : this.renderConfirmationForm()}
            </div>
        );
    }
}