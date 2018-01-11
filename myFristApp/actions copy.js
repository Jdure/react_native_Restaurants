/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "December 29th 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: Final PROJECT Madd9135
 * @Filename: Actions.js
 * @Last modified by:   JDure
 */

import axios from "axios";


export const FETCHING_RESTAURANT = 'FETCHING_RESTAURANT'
function getResto(state) {
  return {
    type: FETCHING_RESTAURANT,
    state: state
    };
}

export const FETCHING_RESTAURANT_SUCCESS = 'FETCHING_RESTAURANT_SUCCESS'
function getRestoSuccess(data) {
  return {
    type: FETCHING_RESTAURANT_SUCCESS,
    data: data
  }
}

export const FETCHING_RESTAURANT_FAILURE = 'FETCHING_RESTAURANT_FAILURE'
function getRestoFailure(error) {
  return {
    type: FETCHING_RESTAURANT_FAILURE,
    error: error
  }
}

export function getCurrentLocation() {
    return (dispatch)=> {
    dispatch(getResto(true));
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch(getResto(false));
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        dispatch(fetchRestoApi(position.coords.latitude, position.coords.longitude));
      },
      (error) => {
        console.log("Error", error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }
};

export function fetchRestoApi(lat, long) {
    return (dispatch) => {
        console.log('here');
        //dispatch(getResto(true));
        dispatch(getCurrentLocation(true));
        console.log('here');
        let key = "vAlyzKjq_po6d_dxW-mj_gVz8bRK3UKW-H_et6b5ITxLotVd8ARZ-OPZnSwGHnz0NuuG71NYCfGVgKYq2HMxTc17_t2b15gPp8lTD2ZDfHFrQdD-uGQDqxkq2JJKWnYx";
        let url = "https://api.yelp.com/v3/businesses/search?term=delis&latitude=45.4215&longitude=-75.6972";
        axios.get(url, {
            headers: {
                'Authorization': 'Bearer ' + key
        }
      })
      .then((response) => {

                dispatch(getResto(false));
                return response.data;
            })
            .then((data) => {
                return dispatch(getRestoSuccess(data));
                console.log(data);
            })
            .catch((e) => dispatch(getRestoFailure(e)));
    };
}

// export const GET_CURRENT_LOCATION = 'GET_CURRENT_LOCATION'
// export function getCurrentLocation() {
//     const geolocation = navigator.geolocation;
//
//     const location = new Promise((resolve, reject) => {
//         if (!geolocation){
//             reject(new Error("Not Supported"));
//         }
//
//         geolocation.getCurrentPosition((position) => {
//             resolve(position);
//         }, ()=> {
//             reject (new Error('Permission denied'));
//         });
//     });
//
//   return {
//     type: GET_CURRENT_LOCATION,
//     payload: location
//   }
// };
