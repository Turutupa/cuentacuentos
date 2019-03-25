import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

export default class ConfirmDeleteModal extends Component {

    state = {
        open: false,
    }

    close = () => this.setState({ open: false })
    open = () => this.setState({ open: true })

    render() {
        return (
            <div>
                <Button onClick={() => this.open()}>Borrar Cuento</Button>
                <Modal open={this.state.open} basic size='tiny'>
                    <Header icon='archive' content='Borrar permanentemente el cuento' />
                    <Modal.Content>
                        <p>
                            ¿Estás seguro de que quieres borrar el cuento?
                        </p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic color='red' inverted onClick={() => this.close()}>
                            <Icon name='remove' /> No
                        </Button>
                        <Button color='green' inverted onClick={() => this.props.delete()}>
                            <Icon name='checkmark' /> Sí, bórralo!
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}
