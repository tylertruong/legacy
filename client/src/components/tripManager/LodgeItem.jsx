import _ from 'lodash';
import React from 'react';
import { Card, Icon, Grid, Image } from 'semantic-ui-react';
import LodgePicList from './LodgePicList.jsx';
import $ from 'jquery';


class LodgeItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.handleTitleClick = this.handleTitleClick.bind(this);
    // this.showPics = this.showPics.bind(this);
  }

  handleTitleClick() {
  	// console.log('handleTitleClick')
  	this.setState({clicked: !this.state.clicked}, () =>{
	  	this.props.showPics(this.state.clicked, this.props.data)
  	})
  }

  handleLodgeButton() {
    // console.log('PHOTOS', this.props.data)
    console.log('hitting handle lodge button')
    this.props.handleLodgeChoice(this.props.data);
    this.props.lodgePics(this.props.data);
    console.log('lodgepics run')
  }

  // showPics() {
  // 	if (this.state.clicked) {
  // 		return <LodgePicList data={ this.props.data }/>
  // 	} else {
  // 		return null;
  // 	}
  // }

  render() {
    return (
    <div>
      <Grid.Column key={4} computer={4}>
        <Card>
	      <Image src={ this.props.data.image_url } />
	      <Card.Content>
	        <Card.Header onClick={ this.handleTitleClick }>
	          { this.props.data.name }
	        </Card.Header>
	        <Card.Meta>
	          <span className='date'>
	            {`${this.props.data.location.city}, ${this.props.data.location.state}`}
   	          </span>
	        </Card.Meta>
	        <Card.Description>
	          { `Rating: ${this.props.data.rating} stars` }
	        </Card.Description>
	      </Card.Content>
	      <button onClick={ () => {this.handleLodgeButton()} }>Make trip Lodge!</button>
	    </Card>
      </Grid.Column>
    </div>
  	)
  }
}

export default LodgeItem;