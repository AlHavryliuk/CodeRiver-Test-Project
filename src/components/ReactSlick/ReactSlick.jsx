import { CustomPhotoWrapper, CustomImage, SliderWraper } from "./ReactSlick.styles"
import Slider from "react-slick";
import step from '../../images/step.png';
import shirt from '../../images/t-shirt.png';
import mountains from '../../images/mountains.png';
import woman from '../../images/woman.png';
import buts from '../../images/buts.png';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { useDispatch } from "react-redux";
import { changeCurrentImage } from "store/currentImage/currentImage";

const ReactSlick = () => {

    const dispatch = useDispatch()

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1028,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const carouselImage = [
        {
            name: 'step',
            path: step
        }, {
            name: 't-shirt',
            path: shirt
        }, {
            name: 'mountains',
            path: mountains
        }, {
            name: 'woman',
            path: woman
        }, {
            name: 'buts',
            path: buts
        },

    ]

    const handleMainImage = (image) => {
        dispatch(changeCurrentImage(image))
    }

    return (
        <SliderWraper>
            <Slider {...settings}>
                {carouselImage.map(({ name, path }) =>
                    <CustomPhotoWrapper key={path}>
                        <CustomImage src={path} alt={name} onClick={(() => handleMainImage({ name, path }))} />
                    </CustomPhotoWrapper>
                )}


            </Slider>
        </SliderWraper>
    )
}

export default ReactSlick