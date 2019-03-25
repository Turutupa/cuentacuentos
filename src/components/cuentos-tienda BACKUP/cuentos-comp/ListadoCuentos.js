import React, { Component } from 'react';
import { Header, Table, Rating } from 'semantic-ui-react';

export default class ListadoCuentos extends Component {
    render() {

        const style = {
            background: {
                backgroundColor: 'rgb(255,255,255,0.7)'
            },

            tableHeader: {
                fontWeight: 'bold',
            }
        }

        return (
            <div className='animated fadeInRightBig'>
                <Table
                    celled
                    padded
                    style={style.background}>
                    <Table.Header>
                        <Table.Row className='weight800'>
                            <Table.HeaderCell as={Table.Cell} singleLine>Evidence Rating</Table.HeaderCell>
                            <Table.HeaderCell as={Table.Cell}>Nombre</Table.HeaderCell>
                            <Table.HeaderCell as={Table.Cell}>Puntuación</Table.HeaderCell>
                            <Table.HeaderCell as={Table.Cell}>Customización</Table.HeaderCell>
                            <Table.HeaderCell as={Table.Cell}>Comentarios</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h2' textAlign='center'>
                                    A
                                </Header>
                            </Table.Cell>
                            <Table.Cell singleLine>Blancanieves</Table.Cell>
                            <Table.Cell>
                                <Rating icon='star' defaultRating={3} maxRating={3} />
                            </Table.Cell>
                            <Table.Cell textAlign='right'>
                                80% <br />
                                <a href='#'>4/5 params</a>
                            </Table.Cell>
                            <Table.Cell>
                                Creatine supplementation is the reference compound for increasing muscular creatine
                                levels; there is variability in this increase, however, with some nonresponders.
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h2' textAlign='center'>
                                    A
                                </Header>
                            </Table.Cell>
                            <Table.Cell singleLine>El Rey León</Table.Cell>
                            <Table.Cell>
                                <Rating icon='star' defaultRating={3} maxRating={3} />
                            </Table.Cell>
                            <Table.Cell textAlign='right'>
                                100% <br />
                                <a href='#'>5/5 params</a>
                            </Table.Cell>
                            <Table.Cell>
                                Creatine is the reference compound for power improvement, with numbers from one
                                meta-analysis to assess potency
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}
