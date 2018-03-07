import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class App extends Component {
	state = {
		data: [],
		lat: '',
		lng: '',
		zoom: 2,
	};

	onClick = () => {
		axios.get('http://api.open-notify.org/iss-now.json').then(reponse => {
			let dataPosition = reponse.data.iss_position;
			console.log(reponse.data.iss_position);
			this.setState({
				lat: dataPosition.latitude,
				lng: dataPosition.longitude,
			});
			console.log(this.state.data);
		});
	};

	render() {
		const position = [this.state.lat, this.state.lng];
		let state = this.state.data;
		return (
			<div className="App">
				<button onClick={this.onClick}>clic here</button>
				<p>This longitude : {this.state.lng}</p>
				<p>This lalitude : {this.state.lat}</p>
				<Map center={position} zoom={this.state.zoom}>
					<TileLayer
						attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={position}>
						<Popup>
							<span>
								C'est le satellite de l'ISS<br /> Pas facile ouaishe.
							</span>
						</Popup>
					</Marker>
				</Map>
			</div>
		);
	}
}

export default App;

/*import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class App extends Component {
	state = {
		data: [],
		lat: 79.0543,
		lng: -37.7493,
		zoom: 2,
	};

	onClick = () => {
		axios.get('http://api.open-notify.org/iss-now.json').then(reponse => {
			let dataPosition = reponse.data.iss_position;
			console.log('Voyons voir', reponse.data.iss_position);
			this.setState({
				data: [...this.state.data, dataPosition.longitude, dataPosition.latitude],
			});
			console.log("Et la c'est la setState", this.state.data);
		});
	};

	render() {
		const position = [this.state.lat, this.state.lng];
		let state = this.state.data;
		return (
			<div className="App">
				<button onClick={this.onClick}>clic here</button>
				<p>This longitude : {state[0]}</p>
				<p>This lalitude : {state[1]}</p>
				<Map center={position} zoom={this.state.zoom}>
					<TileLayer
						attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={position}>
						<Popup>
							<span>
								C'est le satellite que l'on recherche<br /> Pas facile ouaishe.
							</span>
						</Popup>
					</Marker>
				</Map>
			</div>
		);
	}
}

export default App;*/
