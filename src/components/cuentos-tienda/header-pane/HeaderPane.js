import React from 'react';
import { Image } from 'semantic-ui-react';
import Slider from 'react-slick';

const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export default function HeaderPane() {
    return (
        <div className='cuentos-header-pane'>
            {/* <Image.Group className='cuentos-categories-group'> */}
            <Slider {...settings}>
                <Image className='cuentos-categories-tile' src='https://react.semantic-ui.com/images/wireframe/square-image.png' />
                <Image className='cuentos-categories-tile' src='https://react.semantic-ui.com/images/wireframe/square-image.png' />
                <Image className='cuentos-categories-tile' src='https://react.semantic-ui.com/images/wireframe/square-image.png' />
                <Image className='cuentos-categories-tile' src='https://react.semantic-ui.com/images/wireframe/square-image.png' />
                <Image className='cuentos-categories-tile' src='https://react.semantic-ui.com/images/wireframe/square-image.png' />
                <Image className='cuentos-categories-tile' src='https://react.semantic-ui.com/images/wireframe/square-image.png' />
                <Image className='cuentos-categories-tile' src='https://react.semantic-ui.com/images/wireframe/square-image.png' />
                <Image className='cuentos-categories-tile' src='https://react.semantic-ui.com/images/wireframe/square-image.png' />
                <Image className='cuentos-categories-tile' src='https://react.semantic-ui.com/images/wireframe/square-image.png' />
            </Slider>
            {/* </Image.Group> */}
        </div>
    )
}
