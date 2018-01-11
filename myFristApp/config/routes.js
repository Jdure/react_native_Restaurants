/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "January 7th 2018"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: INSERT PROJECT NAME!
 * @Filename: routes.js
 * @Last modified by:   JDure
 * @Last modified time: "January 7th 2018"
 */

import App from '../App';

import Details from '../components/Details';
import Main from '../components/Main';
import Restolist from '../components/Restolist';

const Routes = {
    Home: {
        screen: Main,
        navigationOptions: ({navigation}) => ({
            header: false
          })
    },
    Details: {
        screen: Details,
        navigationOptions: ({navigation}) => ({
            header: false
          })
    },
    Restolist: {
        screen: Restolist,
        navigationOptions: ({navigation}) => ({
            header: false
          })
    },
}

export default Routes
