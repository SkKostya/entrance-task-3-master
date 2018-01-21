import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Meeting from "../Meeting/index";
import { slide } from "../actions/slide";

var page = Meeting;

class Button extends Component {
	render () {
		return (
			<button onClick={() => {this.props.slide (page)}} className="header__create">Создать встречу</button>
		);
	}
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators ({slide: slide}, dispatch)
}

export default connect(null, mapDispatchToProps)(Button);