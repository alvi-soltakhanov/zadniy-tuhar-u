import './CategoryCard.css'
import phone from '../../images/categoryCellPhone.svg'

interface CategoryCardProps {
  type?: 'filled' | 'outlined' | string, 
  title?: string, 
  icon?: string, 
  reverse?: boolean, 
  iconColor?: string
} 

const CategoryCard = ({type = 'filled', title='Phone', icon=phone, reverse=false, iconColor=''} : CategoryCardProps ) => {

  const cardClasses = `categoryCard ${type === 'outlined' ? 'categoryCard-outlined' : 'categoryCard-filled'}`
  const contentClasses = `categoryCard-content ${reverse ? 'categoryCard-reverse' : ''}`;

  const iconStyle = {
    filter: iconColor === "white" 
      ? "brightness(0) invert(1)" 
      : iconColor === "black" 
      ? "brightness(0)" 
      : "none",
  };

  return (
    <div className={cardClasses}>
      <div className={contentClasses}>
        <div className="icon"> <img  src={icon}  style={iconStyle}  alt="" /></div>
        <div className="title">{title}</div>
      </div>
    </div>
  )
}

export default CategoryCard