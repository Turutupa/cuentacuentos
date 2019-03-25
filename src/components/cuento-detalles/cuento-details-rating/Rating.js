import React, { Component } from 'react';
import { Card, Rating, Progress } from 'semantic-ui-react';

export default class RatingSection extends Component {
    render() {
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header>Rating</Card.Header>
                </Card.Content>
                <Card.Content>
                    <span>5
                        <Rating icon='star' defaultRating={1} maxRating={1} />
                        <Progress percent={71} warning>

                        </Progress>
                    </span>
                    <span>4
                        <Rating icon='star' defaultRating={1} maxRating={1} />
                        <Progress percent={71} warning>

                        </Progress>
                    </span>
                    <span>3
                        <Rating icon='star' defaultRating={1} maxRating={1} />
                        <Progress percent={21} warning>

                        </Progress>
                    </span>
                    <span>2
                        <Rating icon='star' defaultRating={1} maxRating={1} />
                        <Progress percent={3} warning>

                        </Progress>
                    </span>
                    <span>1
                        <Rating icon='star' defaultRating={1} maxRating={1} />
                        <Progress percent={5} warning>

                        </Progress>
                    </span>
                </Card.Content>
            </Card>
        )
    }
}
