'use strict';

class HelloWorld extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			btnClicked: false
		};
	}

	render() {
		if (this.state.btnClicked) {
			return React.createElement('h1', null, 'Hello world!');
		}

		return React.createElement(
			'button', {
				onClick: () => this.setState({
					btnClicked: true
				})
			},
			'Click me!'
		);
	}
}

const domContainer = document.querySelector('#react_root');
ReactDOM.render(React.createElement(HelloWorld), domContainer);