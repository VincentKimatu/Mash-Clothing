import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils.js';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
          {currentUser ? (
            <span className="nav__link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav__link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
