import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import authReducer from './UserAuth/AuthReducers/AuthReducer'
import activityReducer from './UserActivity/ActivityReducers/ActivityReducer'

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer ,
  firestore: firestoreReducer,
//   firestore: firestoreReducer ,
  auth: authReducer,
  activity: activityReducer
})

export default rootReducer

