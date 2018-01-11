/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "January 8th 2018"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: INSERT PROJECT NAME!
 * @Filename: RestoItem.js
 * @Last modified by:   JDure
 * @Last modified time: "January 11th 2018"
 */

import React, {Component} from 'react';
import {getSelectedResto} from '../actions';
import {connect} from "react-redux";
import {
    Container,
    Body,
    Text,
    Left,
    Right,
    List,
    Icon,
    ListItem,
    Spinner
} from 'native-base';

class RestoItem extends Component {
    render() {
        return (<ListItem onPress={this.props.selResto}>
            <Icon name='pizza'></Icon>
            <Text style={{right: 2 }}>{this.props.name}</Text>
            <Text>{Number(this.props.distance/1000).toFixed(1)}KM</Text>
        </ListItem>)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        selResto: () => dispatch(getSelectedResto(ownProps))
    }
}

export default connect(undefined, mapDispatchToProps)(RestoItem);
