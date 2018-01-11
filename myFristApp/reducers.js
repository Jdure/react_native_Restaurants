/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "December 29th 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: Final PROJECT Madd9135
 * @Filename: Reducers.js
 * @Last modified by:   JDure
 */


import {FETCHING_RESTAURANT, FETCHING_RESTAURANT_SUCCESS, FETCHING_RESTAURANT_FAILURE, SELECTED_RESTAURANT, GO_BACK} from "./actions";

export default function reducers(state, action) {
    let changes = {};

    switch (action.type) {
        case FETCHING_RESTAURANT:
            changes.restoApi = {
                getResto: action.state,
                dataFetched: true
            };
            break;
        case FETCHING_RESTAURANT_SUCCESS:
            changes.restoData = {
                restaurants: action.data.businesses.sort((a,b)=>{
                    if(a.distance < b.distance) return -1;
				else if(a.distance > b.distance) return 1;
				return 0;
                }),
                restaurant: {}
            };
            break;
        case FETCHING_RESTAURANT_FAILURE:
            changes.restoApi = {
                errorData: action.error.message,
                getResto: false,
                dataFetched: true
            };
            break;
        case SELECTED_RESTAURANT:
                changes.selectedRestaurant = action.restaurant;
                break;
        case GO_BACK:
            changes.selectedRestaurant = false;
            break;
        default:
            return state;
    }
    return Object.assign({}, state, changes);
}
