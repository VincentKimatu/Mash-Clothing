import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <nav className="navigation">
        <Link className="logo__container" to="/">
          <CrownLogo className="logo" />
        </Link>

        <div className="nav__links-container">
          <Link className="nav__link" to="/shop">
            SHOP
          </Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;