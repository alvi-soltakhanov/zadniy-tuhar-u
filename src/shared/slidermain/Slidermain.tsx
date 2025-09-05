import './Slidermain.css'
import logoApple from '../../images/logoapple.png'
import nextArrow from '../../images/next.png'
import defaultImage from '../../images/iphone14.jpg'
import { useState } from 'react';


type Size = string | number;

interface SlidermainProps {
    images?: string[];            // массив картинок
    width?: Size;                 // ширина всего блока (например "60%" или 900)
    imageWidth?: Size;            // ширина картинки
    imgClassName?: string;        // класс для <img>
    className?: string;           // доп. класс для .slider
}

const toSize = (v?: Size): string | undefined => {
    if (v === undefined) return undefined;
    return typeof v === 'number' ? `${v}px` : v;
};


const Slidermain = ({
    images = [defaultImage],
    width,
    imageWidth,
    imgClassName = '',
}: SlidermainProps) => {

    const slides = images.length ? images : [defaultImage];
    const [index, setIndex] = useState(0)

    const goNext = () => setIndex((i) => (i + 1) % slides.length);
    const goTo = (i: number) => setIndex(i);



    return (
        <div className="slider" style={{ width: toSize(width) }}>
            <div className='slider-main'>
                <div className="slider-discr">
                    <div className="slider-title">
                        <div className="title-logo"><img src={logoApple} alt="" /></div>
                        <div className="title-name">iPhone 14 Series</div>
                    </div>
                    <div className="discr">
                        <h2>Up to 10% <br /> off Voucher</h2>
                    </div>
                    <div className="arrow"
                        onClick={goNext}
                        role="button"
                        aria-label="Next slide">
                        <div className="arrow-text">Shop Now</div>
                        <div className="arrow-img"><img src={nextArrow} alt="" /></div>
                    </div>
                </div>
                <div className="slider-img"><img src={slides[index]} className={imgClassName} style={{ width: toSize(imageWidth) }} alt="" /></div>
            </div>
            <div className="next-circles">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        className={`circle ${i === index ? 'active-circle' : ''}`}
                        onClick={() => goTo(i)}
                        role="button"
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Slidermain