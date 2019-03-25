import React, { Component } from 'react';
import { Container, Grid, Header, Icon } from 'semantic-ui-react';
import CrearCuentoForm from './crear-cuento-form/CrearCuentoForm';
import Navbar from '../Navbar';
import './crear-cuento.css';
import { connect } from 'react-redux';

class CrearCuento extends Component {

    state = {
        background: 'crearCuentoBg'
    }

    render() {

        const style = {
            background: {
                minHeight: '100vh',
                minWidth: '100vw',
                backgroundSize: 'auto',
            },

            content: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                // alignItems: 'center',
                minHeight: 'calc(100vh - 47px)',
                paddingBottom: '50px',
                paddingTop: '30px',
            },
        }
        // if (
        //     this.props.tipoCuento !== undefined
        //     && this.props.tipoCuento.values !== undefined
        //     && this.props.tipoCuento.values.tipoCuento !== undefined
        // ) {
        //     const background = this.props.tipoCuento.values.tipoCuento
        //     return (
        //         <div
        //             style={style.background}
        //             className={`${background} animated fadeIn`}
        //         >
        //             <Navbar />
        //             <Container text style={style.content}>
        //                 < CrearCuentoForm />
        //             </Container>
        //         </div>
        //     )
        // } else {
        const background = 'crearCuentoBg'
        return (
            <div
                style={style.background}
                className='container'
            >
                <div className='bg'>
                    <Container text style={style.content}>
                        < CrearCuentoForm />
                    </Container>
                </div>
            </div>
        )
        // }
    }
}

const mapStateToProps = state => {
    return {
        tipoCuento: state.form.cuento
    }
}

export default connect(mapStateToProps)(CrearCuento)
