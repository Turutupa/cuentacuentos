import React from 'react';
import { Message } from 'semantic-ui-react';

export default function DeleteErrorMsg(props) {
    return (
        <Message
            warning header='Error!'
            content={props.delErrMsg}
            className='animated slideInLeft crear-cuento-err-msg' />
    )
}
