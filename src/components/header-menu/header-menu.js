import './header-menu.css';
import HeaderMenuItem from '../header-menu-item/header-menu-item';

const HeaderMenu = () => {
    return (
        <div className="menu__wrapper">
            <HeaderMenuItem/>
            <HeaderMenuItem/>
            <HeaderMenuItem/>
        </div>
    )
}

export default HeaderMenu;