import React from 'react';
import { API, Auth } from 'aws-amplify';
import { connect } from 'react-redux';
import { Card, Form, Header, Container } from 'semantic-ui-react';
import img from '../../../img/fantasy.jpg';
import AgregarParams from './AgregarParams';
import PersonajesAdicionales from './AgregarPjsAdicionales';
import EditorCuento from './EditorCuento';
import ConfirmarCrearCuento from './ConfirmarCrearCuento';
import { reduxForm } from 'redux-form';
import Cuento from './TextAreaCuento';

class CuentoForm extends React.Component {

    state = {
        isLoading: null,
        userId: null
    }

    handleSubmit = async formValues => {
        // console.log('submit!', formValues)
        if (!this.props.cuento.values) {
            alert('Error: rellenar los campos primero');
            return;
        }

        this.setState({ isLoading: true })

        const userId = await Auth.currentUserInfo()

        if (userId === null) {
            alert('Inicia sesión para poder publicar un cuento');
            return;
        }

        const params = this.props.cuento.values;

        const creator = {
            id: userId.id,
            username: userId.username,
            email: userId.attributes.email
        };

        const content = params.cuento;
        const storyDetails = params;

        try {
            await this.crearCuento({ content, storyDetails, creator });
            // this.props.history.push("/");
            alert('CUENTO CREADO!')
        } catch (e) {
            alert(e);
            this.setState({ isLoading: false });
        }
    }

    crearCuento(cuento) {
        return API.post("stories", "/stories", {
            body: cuento
        });
    }

    render() {

        const { handleSubmit } = this.props;

        const style = {

            background: {
                backgroundColor: 'rgb(255,255,255, 0.7) !important'
            },

            cardHeader: {
                display: 'flex',
                justifyContent: 'center',
                // paddingTop: 10,
                paddingBottom: 100,
                marginBottom: 0,
                // backgroundImage: `url(${img})`,
                backgroundPosition: 'center',
                fontSize: '3em',
                fontWeight: 500,
            },

            form: {
                padding: '20px 20px 20px 20px',
            }
        }

        return (
            <Container fluid className='animated fadeInLeft' style={style.background}>
                <Form onSubmit={handleSubmit(this.handleSubmit)}>
                    <Header
                        as='h1'
                        icon
                        inverted
                        style={style.cardHeader}>
                        Crear cuento
                    </Header>
                    <Card.Content style={style.form}>
                        <AgregarParams />
                        <PersonajesAdicionales />
                        <Cuento />
                        {/* <EditorCuento /> */}
                    </Card.Content>
                    <ConfirmarCrearCuento />
                </Form>
            </Container >
        )
    }
}

const mapStateToProps = state => {
    return {
        cuento: state.form.cuento
    }
}

CuentoForm = connect(mapStateToProps)(CuentoForm)

// export default CuentoForm
export default reduxForm({
    form: 'cuento',
    destroyOnUnmount: false
})(CuentoForm)