import _ from 'lodash';
import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import $ from 'jquery';
import LodgePic from './LodgePic.jsx';



class LodgePicList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	pics: []
    }
  }

  componentDidMount() {
  	const context = this;
  	console.log('ID!!', context.props.data.id)
  	var id = context.props.data.id;
  	id = id.slice(0);
    $.ajax({
      url: `/lodge/pics/:${id}`,
      method: 'GET',
      success: (body) => {
        console.log('GET request for details was a success ', body);
        var data = JSON.parse(body).photos;
        context.setState({pics: data});
      },
      error: (err) => {
        console.log('error with GET for details', err);
      }
    })
  }

  render() {
  	  return (
  	    <Grid computer={4} >
  	  	  {
  	  	    this.state.pics.map((pic, i) => {
  	  	  	  return <LodgePic data={ pic } key={i}/>;
  	  	    })
  	   	  }
  	    </Grid>
  	  ) 		
  }
}


export default LodgePicList;