/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "December 29th 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: INSERT PROJECT NAME!
 * @Filename: Details.js
 * @Last modified by:   JDure
 * @Last modified time: "January 11th 2018"
 */

import React, {Component} from 'react';
import Restolist from "./Restolist";
import {back} from '../actions';
import {fetchRestoApi} from "../actions";
import {
    Container,
    Body,
    Text,
    List,
    ListItem,
    Icon,
    Content,
    Button
} from 'native-base';
import {connect} from "react-redux";

class Details extends Component {
    render(){
        return (
        <Container>
            <Content>
        <List>
        <ListItem>
          <Text>
            {this.props.restaurant.name}
          </Text>
      </ListItem>
      <ListItem>
        <Text>
          {this.props.restaurant.phone}
        </Text>
    </ListItem>
    <ListItem>
      <Text>
        {this.props.restaurant.price}
      </Text>
  </ListItem>
  <ListItem>
    <Text>
      {this.props.restaurant.rating}
    </Text>
</ListItem>
</List>
<Button full onPress={this.props.goBack}>
<Text>Back</Text>
</Button>
</Content>
</Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        restaurant: state.selectedRestaurant
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        goBack: () => dispatch(actions.back())
    };
};

export default connect(mapStateToProps)(Details);
