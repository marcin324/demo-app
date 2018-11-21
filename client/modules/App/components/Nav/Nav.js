import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import styles from './Nav.css';

const Nav = () => {
	return (
  		<div>
  			<Link  className={styles.nav} to="/"><FormattedMessage id="Posts" /></Link>
    		<Link  className={styles.nav} to="/home"><FormattedMessage id="Home" /></Link>
    		<Link  className={styles.nav} to="/about"><FormattedMessage id="About" /></Link>
    	</div>
    )
}


export default Nav;