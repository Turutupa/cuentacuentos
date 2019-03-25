import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Editor } from 'slate-react';
import { Value } from 'slate';

// Create our initial value...
const initialValue = Value.fromJSON({
    document: {
        nodes: [
            {
                object: 'block',
                type: 'paragraph',
                nodes: [
                    {
                        object: 'text',
                        leaves: [
                            {
                                text: 'Érase una vez.. en un lugar muy muy lejano..',
                            },
                        ],
                    },
                ],
            },
        ],
    },
})

// Define a React component renderer for our code blocks.
function CodeNode(props) {
    return (
        <pre {...props.attributes}>
            <code>{props.children}</code>
        </pre>
    )
}

// Define our app...
export default class EditorCuento extends Component {
    // Set the initial value when the app is first constructed.
    state = {
        value: initialValue,
    }

    // On change, update the app's React state with the new editor value.
    onChange = ({ value }) => {
        this.setState({ value })
    }

    onKeyDown = (event, editor, next) => {
        // Return with no changes if it's not the "`" key with ctrl pressed.
        if (event.key != '*' || !event.ctrlKey) return next()

        // Prevent the "`" from being inserted by default.
        event.preventDefault()

        // Otherwise, set the currently selected blocks type to "code".
        editor.setBlocks('code')
    }

    // Render the editor.
    render() {

        const style = {
            editor: {
                border: '1px solid rgb(0,0,0, 0.1)',
                padding: '10px',
                borderRadius: '0.4em'
            }
        }

        return (
            <div>
                <Header as='h3'>Cuento</Header>
                <Editor
                    style={style.editor}
                    value={this.state.value}
                    onKeyDown={this.onKeyDown}
                    onChange={this.onChange}
                    renderNode={this.renderNode} />
            </div>
        )
    }

    renderNode = (props, editor, next) => {
        switch (props.node.type) {
            case 'code':
                return <CodeNode {...props} />
            default:
                return next()
        }
    }
}
