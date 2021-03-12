import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux'
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { getFirebase, reduxFirebase } from 'react-redux-firebase'
import reportWebVitals from './reportWebVitals';
// import createStore from './Redux/store'
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebaseConfig from './Config/fire';
import DisplayContext from './Pages/DisplayContext';
import rootReducer from './Redux/Reducer';

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const initialState = {}
const middlewares = [
  thunk.withExtraArgument({ getFirebase })
]

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    // reduxFirebase(firebaseConfig)
  )
)

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <ReactReduxFirebaseProvider {...rrfProps}>
        <DisplayContext>
          <App />
        </DisplayContext>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
