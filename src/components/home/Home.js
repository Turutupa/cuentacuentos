import React, { Component } from 'react';
import Menu from './home-comp/Menu';
import Tiles from './home-comp/Tiles';
import './home.css'

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
                height: 'calc(100vh - 100px)',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            },

            tiles: {
            }
        }

        return (
            <div className='home-background' style={style.topBar}>
                <Menu />
                <div style={style.content}>
                    <Tiles />
                </div>
            </div>
        )
    }
}
