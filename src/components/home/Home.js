import React, { Component } from 'react';
import Menu from './Menu';
import Tiles from './Tiles';

export default class Home extends Component {
    render() {

        const style = {

            topBar: {
                position: 'absolute',
                width: '100vw',
                top: '0',
                left: '0'
            },

            content: {
                height: 'calc(100vh - 47px)',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            },

            tiles: {
            }
        }

        return (
            <div className='home' style={style.topBar}>
                <Menu />
                <div style={style.content}>
                    <div style={style.tiles}>
                        <Tiles />
                    </div>
                </div>
            </div>
        )
    }
}
