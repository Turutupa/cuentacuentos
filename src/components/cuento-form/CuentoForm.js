import React, { Component } from 'react';
import './cuento-form.css'
import Header from './cuento-form-comp/Header';
import Detalles from './cuento-form-comp/Detalles';
import Cuento from './cuento-form-comp/Cuento';
import ActualizarCuentoButton from './cuento-form-comp/ActualizarCuentoButton';
import BorrarCuentoButton from './cuento-form-comp/BorrarCuentoButton';

export default function CuentoForm(props) {
    // author={author}
    // characters={characters}
    // content={content}
    // creationDate={creationDate}
    // creator={creator}
    // duplicated={duplicated}
    // language={language}
    // lastChangeDate={lastChangeDate}
    // owners={owners}
    // price={price}
    // public={public}
    // rating={rating}
    // ratingValue={ratingValue}
    // readCount={readCount}
    // tags={tags}
    // title={title}
    // type={type}
    return (
        < div className='Cuento-Form' >
            <div className='cuento-form-header'>
                <h2 className='cuento-form-header-top'>{props.header}</h2>
                <h1 className='cuento-form-header-bottom'>{props.title}</h1>
            </div>
            <div className='cuento-form-content'>
                <div className='cuento-form-detalles'>
                    <Detalles characters={props.characters} />
                </div>
                <div className='cuento-form-cuento'>
                    <Cuento content={props.content} />
                </div>
                <div>
                    <ActualizarCuentoButton update={props.update} />
                </div>
                <div>
                    <BorrarCuentoButton delete={props.delete} />
                </div>
            </div>
        </div >
    )
}
