import './Header.scss';
import sun from '../../assets/icons/icon-sun.svg';

function Header(props){
    return (
        <header className='header'>
            <h1>{props.title}</h1>

            <img src={sun} alt="" />
        </header>
    )
}

export default Header;