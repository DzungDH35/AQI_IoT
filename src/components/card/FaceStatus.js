import React from 'react';
import GreenFace from '@assets/icons/green-face.svg';
import YellowFace from '@assets/icons/yellow-face.svg';
import OrangeFace from '@assets/icons/orange-face.svg';
import RedFace from '@assets/icons/red-face.svg';
import PurpleFace from '@assets/icons/purple-face.svg';
import MaroonFace from '@assets/icons/maroon-face.svg';

export class FaceStatus extends React.Component {
	render() {
		switch (this.props.status) {
			case 0:
				return <GreenFace style={this.props.style}/>;
			case 1:
				return <YellowFace style={this.props.style}/>;
			case 2:
				return <OrangeFace style={this.props.style}/>;
			case 3:
				return <RedFace style={this.props.style}/>;
			case 4:
				return <PurpleFace style={this.props.style}/>;
			case 5:
				return <MaroonFace style={this.props.style}/>;
		}
	}
}