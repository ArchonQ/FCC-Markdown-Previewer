import React from 'react';
// import { container, row, col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
	state = {
		markdown: '',
	};

	handleChange = (e) => {
		this.setState({
			markdown: e.target.value,
		});
	};
	render() {
		const { markdown } = this.state;

		return (
			<div className='App'>
				<div className='container'>
					<h2 className='text-center mt-4'>Convert your Markdown</h2>
					<div className='row'>
						<div className='col-6'>
							<textarea
								id='editor'
								value={markdown}
								onChange={this.handleChange}
							/>
						</div>
						<div className='col-6 preview' id='preview'>
							<p>hello</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
