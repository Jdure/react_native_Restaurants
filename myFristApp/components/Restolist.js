/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "January 2nd 2018"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: INSERT PROJECT NAME!
 * @Filename: Restolist.js
 * @Last modified by:   JDure
 * @Last modified time: "January 9th 2018"
 */

import React, {Component} from 'react';
import {connect} from "react-redux";
import RestoItem from './RestoItem';
import Details from "./Details";
import {
    Container,
    Body,
    Text,
    List,
    Icon,
    ListItem,
    Spinner
} from 'native-base';

class Restolist extends Component {
    render() {
        if (this.props.getResto) {
            return (<Spinner color='blue'/>);
        } else if (this.props.errorData) {
            return (<Text>
                <Text>Error:</Text>
                <Text>{this.props.errorData}</Text>
            </Text>);
        } else if (this.props.restaurant) {
            return (<Details/>);
        } else {
            return (<List>
                {

                    this.props.restaurants && this.props.restaurants.map((restaurant) => {
                        return (<RestoItem key={restaurant.id} {...restaurant}/>)
                    })
                }
            </List>);
        }
    }
}

const mapStateToProps = (state) => {
    return {
        dataFetched: state.restoApi.restoData, getResto: state.restoApi.getResto, restaurants: state.restoData.restaurants, restaurant: state.selectedRestaurant
    };
};

export default connect(mapStateToProps)(Restolist);
