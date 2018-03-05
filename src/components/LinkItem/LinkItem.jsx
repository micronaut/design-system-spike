import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './linkItem.less'

export class LinkItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { url, image, text=' ' } = this.props.item;
		return (
			<a href={url}>{image ? <img styleName='item-image' src={image} alt={text}/> : text}</a>
		);
	}
}

LinkItem.propTypes = {
	/** Item for link */
	item: PropTypes.object.isRequired
};


LinkItem.defaultProps = {
	item: null
};

export default CSSModules(LinkItem, styles);

