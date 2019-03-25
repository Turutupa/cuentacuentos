import React, { Component } from 'react';
import CuentoForm from '../cuento-form/CuentoForm';
import DeleteErrorMsg from './editar-cuento-comp/DeleteErrorMsg';
import { API } from 'aws-amplify';

export default class EditarCuento extends Component {

    state = {
        isLoading: true,
        author: '',
        characters: '',
        content: '',
        creationDate: '',
        creator: '',
        duplicated: '',
        language: '',
        lastChangeDate: '',
        owners: '',
        price: '',
        public: '',
        rating: '',
        ratingValue: '',
        readCount: '',
        tags: '',
        title: '',
        type: '',
        delErrMsg: false
    }

    update = () => {

    }

    delete = async () => {
        console.log(this.props.match.params.id)
        // return
        const deleteStory = API.del('stories', `/stories/${this.props.match.params.id}`, {
            body: {
                storyId: this.props.match.params.id
            },
        })
            .then(res => this.props.history.push('/cuentos'))
            .catch(err => {
                console.log(err)
                this.setState({ delErrMsg: true })
            })
        // console.log(deleteStory)
    }

    componentDidMount = async () => {
        console.log(this.props.match.params)
        const cuento = await API.get('stories', `/stories/${this.props.match.params.author}/${this.props.match.params.id}`)
        this.setState({
            isLoading: false,
            author: cuento.author ? cuento.author : 'Autor',
            characters: cuento.characters ? cuento.characters : {
                location: { name: 'Nombre del lugar fantástico' },
                main: { name: 'Nombre protagonista' },
                villain: { name: 'Nombre villano' }
            },
            content: cuento.content ? cuento.content : 'Érase una vez.. en un lugar muy muy lejano..',
            creationDate: cuento.creationDate,
            creator: cuento.creator,
            duplicated: cuento.duplicated,
            language: cuento.language ? cuento.language : 'Idioma',
            lastChangeDate: cuento.lastChangeDate,
            owners: cuento.owners ? cuento.owners : 'Cuento no compartido',
            price: cuento.price ? cuento.price : '€€',
            isPublic: cuento.public,
            rating: cuento.rating ? cuento.rating : 'Sé el primero en putuar este cuento!',
            ratingValue: cuento.ratingValue ? cuento.ratingValue : undefined,
            readCount: cuento.readCount ? cuento.readCount : 0,
            tags: cuento.tags ? cuento.tags : '#',
            title: cuento.title ? cuento.title : 'Nombre del Cuento',
            type: cuento.type ? cuento.type : 'Tipo de cuento'
        })
    }

    render() {

        const {
            author,
            characters,
            content,
            creationDate,
            creator,
            duplicated,
            language,
            lastChangeDate,
            owners,
            price,
            isPublic,
            rating,
            ratingValue,
            readCount,
            tags,
            title,
            type
        } = this.state;

        if (this.state.isLoading === true) {
            return (
                <div style={{ color: 'white' }} className='place-in-middle'>
                    <h3>Loading...</h3>
                </div>
            )
        } else if (this.state.deleteErr) {
            return (
                <DeleteErrorMsg delErrMsg={this.state.delErrMsg} />
            )
        } else {
            return (
                <CuentoForm
                    update={this.update}
                    delete={this.delete}
                    author={author}
                    characters={characters}
                    content={content}
                    creationDate={creationDate}
                    creator={creator}
                    duplicated={duplicated}
                    language={language}
                    lastChangeDate={lastChangeDate}
                    owners={owners}
                    price={price}
                    isPublic={isPublic}
                    rating={rating}
                    ratingValue={ratingValue}
                    readCount={readCount}
                    tags={tags}
                    title={title}
                    type={type}
                />
            )
        }
    }
}
