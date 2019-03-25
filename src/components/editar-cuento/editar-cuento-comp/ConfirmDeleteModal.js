import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

export default class ConfirmDeleteModal extends Component {
    render() {
        return (
            <div>
                <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
                    <Header icon='archive' content='Archive Old Messages' />
                    <Modal.Content>
                        <p>
                            ¿Estás seguro de que quieres borrar el cuento?
                        </p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic color='red' inverted>
                            <Icon name='remove' /> No
                    </Button>
                        <Button color='green' inverted>
                            <Icon name='checkmark' /> Sí, bórralo!
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}
