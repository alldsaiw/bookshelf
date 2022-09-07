import './header-menu.css';
import HeaderMenuItem from '../header-memu-item/header-menu-item';

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