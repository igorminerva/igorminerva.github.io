import React from 'react'
import { Carousel } from 'react-bootstrap'

import photo1 from '../assets/photo2.jpg'
import photo2 from '../assets/photo3.jpg'
import photo3 from '../assets/photo4.jpg'

const CarouselPhoto = () => {
    const photos = [
        photo1,
        photo2,
        photo3,

    ];


    return (
            <Carousel>
                {photos.map((photo, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100 carousel-item img"
                            src={photo}
                            alt={`Slide ${index + 1}`}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>

    )
}

export default CarouselPhoto