import React from 'react';
import { Header } from 'semantic-ui-react';

export default function EditarCuentoHeader(props) {
    return (
        <Header as='h1'>
            {props.header}
        </Header>
    )
}
