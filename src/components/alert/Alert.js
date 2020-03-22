// Imports
import React from 'react'
import './style.css';

class Alert extends React.Component {
	constructor(props){
		super(props);

		// Reference
		this.ref = React.createRef();
	}

	/**
	 * @function componentDidMount
	 * @purpose run when the component is mounted and ready for use
	 */
	componentDidMount() {

	};

	/**
	 * @function renderWeb
	 * @purpose render a tile for a web implementation
	 *
	 * @return {*}
	 */
	renderWeb = () => {
		const { label, key, status, type, message, style, ...rest } = this.props;

		return (
			<div id={label} key={key} ref={this.ref} className={'alert state-' + status + ' type-' + type} style={style} {...rest} >
				<div className="inner">
					<span>{ message }</span>
				</div>
			</div>
		);
	};

	/**
	 * @function Render
	 * @purpose render the component
	 * 
	 * TODO: Switch out the render method per platform
	 */
	render() {
		return this.renderWeb();
	}
}

export default Alert;