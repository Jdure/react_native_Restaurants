/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "December 18th 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: Final PROJECT Madd9135
 * @Filename: App.js
 * @Last modified by:   JDure
 * @Last modified time: "January 11th 2018"
 */


import React from 'react';
import Main from "./components/Main";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";


let initialState = {
    restoApi : {
        loadingData: false,
        getResto: false,
        dataFetched: false,
        errorData: ""
    },
    restoData: {
        restaurants: []
    },
    selectedRestaurant: false

};

let store = createStore(reducers, initialState, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
        <Provider store= {store}>
                <Main/>
        </Provider>
    );
  }
}
