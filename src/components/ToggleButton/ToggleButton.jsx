import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './toggleButton.less'
import {generate} from 'shortid';

class ToggleButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { headerName, collapsed} = this.props;
		let toggleClass = collapsed ? 'collapsed' : 'expanded' ;
		let controlsId = generate();

		return (
			<button styleName={`toggle toggle--${toggleClass}`} onClick={this.props.clickHandler}  aria-expanded={!collapsed} aria-controls={controlsId}>
				{headerName}
			</button>
		);
	}
}

ToggleButton.propTypes = {
	/** Text to appear on the button */
	headerName: PropTypes.string.isRequired,

	/** Is toggled list collapsed by default */
	collapsed : PropTypes.bool,

	/** Function to call on click */
	clickHandler : PropTypes.func.isRequired
};

ToggleButton.defaultProps = {

	headerName: null,
	collapsed: false,
	clickHandler: null
};

export default CSSModules(ToggleButton, styles, {allowMultiple: true});


