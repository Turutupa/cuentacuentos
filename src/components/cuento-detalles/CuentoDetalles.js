import React, { Component } from 'react';
import './cuento-detalles.css';
import Actions from './cuento-details-actions/Actions';
import CommentSection from './cuento-details-comment-section/CommentSection';
import Details from './cuento-details-details/Details';
import Main from './cuento-details-main/Main';
import Rating from './cuento-details-rating/Rating';

export default class CuentoDetalles extends Component {
    render() {
        return (
            <div className='Cuento-detalles responsive-page-margin'>
                <div className="grid-container-cuento-detalles">
                    <div className="cuento-details-main pd-10">
                        <Main />
                    </div>
                    <div className="cuento-details-actions pd-10">
                        <Actions />
                    </div>
                    <div className="cuento-details-details pd-10">
                        <Details />
                    </div>
                    <div className="cuento-details-rating pd-10">
                        <Rating />
                    </div>
                    <div className="cuento-details-comment-section pd-10">
                        <CommentSection />
                    </div>

                </div>
            </div>
        )
    }
}
