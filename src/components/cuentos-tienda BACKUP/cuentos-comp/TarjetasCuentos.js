import React, { Component } from 'react';
import { Card, Item, Label } from 'semantic-ui-react';
import { API } from 'aws-amplify';

export default class TarjetasCuentos extends Component {

    state = {
        isLoading: true,
        stories: null,
    }

    componentDidMount = async () => {
        const stories = await API.get('stories', '/all-stories')
        this.setState({
            isLoading: false,
            stories
        })
    }

    handleTargeted = (e, { id }) => {
        this.props.childProps.history.push(`/editar-cuento/${id}`)
    }

    render() {

        const style = {
            content: {
                display: 'flex',
                flexDirection: 'column',
                paddingBottom: '50px',
                paddingTop: '25px',
                // width: '90%'
            },

            card: {
                cursor: 'pointer',
            }
        }


        if (this.state.isLoading) {
            return 'Loading..'
        } else {
            return (
                <div className='animated fadeInRight'>
                    {
                        this.state.stories.map((story, i) =>
                            <Card fluid style={style.card} key={story.storyId} id={story.storyId} onClick={this.handleTargeted}>
                                <Card.Content>
                                    <Item.Group divided>
                                        <Item>
                                            {/* <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='tiny' /> */}

                                            <Item.Content>
                                                <Item.Header>{story.params && story.params.nombreCuento ? story.params.nombreCuento : 'Not defined'}</Item.Header>
                                                <Item.Meta>
                                                    <span className='cinema'></span>
                                                </Item.Meta>
                                                <Item.Description>{story.content ? story.content : 'Not defined'}</Item.Description>
                                                <Item.Extra>
                                                    <Label>IMAX</Label>
                                                    <Label icon='globe' content='Additional Languages' />
                                                </Item.Extra>
                                            </Item.Content>
                                        </Item>
                                    </Item.Group>
                                </Card.Content>
                                {/* <Label
                                    attached='top right'
                                    size='big'
                                    // floated='right'
                                    style={{
                                        height: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'rgb(245,245,245, 0)'
                                    }}
                                >Ver cuento</Label> */}
                            </Card>
                        )
                    }
                </div>
            )
        }
    }
}
