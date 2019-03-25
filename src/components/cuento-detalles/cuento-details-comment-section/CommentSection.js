import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { CommentExample } from './CommentExample';

export default class CommentSection extends Component {
    render() {
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header>Comment Section</Card.Header>
                </Card.Content>
                <Card.Content>
                    <CommentExample />
                </Card.Content>
            </Card>
        )
    }
}
