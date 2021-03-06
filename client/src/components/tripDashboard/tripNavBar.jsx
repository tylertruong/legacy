import React from 'react';
import reducer from '../../Reducers';
import { Menu } from 'semantic-ui-react';

class TripNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null
    };

    this.handleItemClick = this.handleItemClick.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({activeItem: name});
  }

  renderMenu() {
    if (this.props.other) {
      return (
        this.props.features.map((feature, index) => {
          return <Menu.Item key={index} className="btn" onClick={() => {
            this.props.dispatch(reducer.changeView(feature.link));
          }}>{feature.name}</Menu.Item>;
        })
      );
    } else {
      return (
        this.props.features.map((feature, index) => {
          if (index === 0 || index === 1) {
            return <Menu.Item key={index} className="btn" onClick={() => {
              this.props.dispatch(reducer.changeView(feature.link));
            }}>{feature.name}</Menu.Item>;
          }
        })
      );
    }
  }

  render() {
    return (
      <Menu className='ui top fixed'>
        {this.renderMenu()}
        <Menu.Item position='right' className="btn" onClick={this.props.logout}>Logout
        </Menu.Item>
      </Menu>
    );
  }
}

export default TripNavBar;
