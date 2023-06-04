import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css'
import meal from '../../images/meals.jpg'

const Header = (props) =>
{
    return (
        <>
            <header className={classes.header}>
                <h1>Bon Appetit Restaurant</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={meal} alt='We have tasty food available' />
            </div>
        </>
    )
}
export default Header;