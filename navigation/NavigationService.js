import { DrawerActions, useNavigation } from '@react-navigation/native';
import * as React from 'react';


export const navigationRef = React.createRef();


function setTopLevelNavigator(navigatorRef) {
    console.log('toplevelset');
}

function navigate(routeName, params) {
    console.log('navigating...');
    console.log(routeName);

    navigationRef.current?.navigate(routeName, params);

}

function resetandNavigate(routeName){

    navigationRef.current?.reset({
        index: 0,
        routes: [{ name: routeName }]
    })
}

// function openDrawer(){
//     console.log("in open drawer");
//     navigationRef.current?.dispatch(
//         DrawerActions.openDrawer())
// }

function pop() {
    console.log("Popping out");
    navigationRef.current?.goBack()
}


export default {
    navigate,
    resetandNavigate,
    setTopLevelNavigator,
    pop,
};
 