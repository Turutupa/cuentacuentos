import React, { Component } from 'react'
import { Card } from 'semantic-ui-react';
import './cuentos.css';
import HeaderPane from './header-pane/HeaderPane';
import NavigationPane from './navigation-pane/NavigationPane';
import ContentPane from './content-pane/ContentPane';

export default class Cuentos extends Component {
    render() {
        return (
            <div>
                <HeaderPane />
                <div className='Cuentos responsive-page-margin'>
                    <div className="grid-container-cuentos-tienda">
                        <div className="cuentos-left-pane">
                            <NavigationPane />
                        </div>
                        <div className="cuentos-primary-content">
                            <ContentPane history={this.props.history} />
                            <ContentPane type='secondary' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
