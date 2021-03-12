import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase, reduxFirebase } from 'react-redux-firebase'
import firebaseConfig from '../Config/fire';
import rootReducer from './Reducer';

const fbConfig = {} // your firebase config
const middlewares = [
  thunk.withExtraArgument({getFirebase})
]

const initialState = {} 

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    // reduxFirebase(firebaseConfig)
  )
);

// export default store 