import './Slidermain.css'
import logoApple from '../../images/logoapple.png'
import nextArrow from '../../images/next.png'
import iphone14 from '../../images/iphone14.jpg'

const Slidermain = () => {
  return (
    <div className="slider">
        <div className='slider-main'>
        <div className="slider-discr">
            <div className="slider-title">
                <div className="title-logo"><img src={logoApple} alt="" /></div>
                <div className="title-name">iPhone 14 Series</div>
            </div>
            <div className="discr">
                <h2>Up to 10% <br /> off Voucher</h2>
            </div>
            <div className="arrow">
                <div className="arrow-text">Shop Now</div>
                <div className="arrow-img"><img src={nextArrow} alt="" /></div>
            </div>
        </div>
        <div className="slider-img"><img src={iphone14} alt="" /></div>     
    </div>
    <div className="next-circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle active-circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
    </div>
    </div>
  )
}

export default Slidermain