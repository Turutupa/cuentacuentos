import React from 'react';
import { Button } from 'semantic-ui-react';

export default function ActualizarCuentoButton(props) {
    return (
        <Button
            primary
            onClick={() => props.update}
        >
            Actualizar!
        </Button>
    )
}
