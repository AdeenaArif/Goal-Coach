import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
// import { Router, Route, useRouterHistory, browserHistory } from 'react-router';
// import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { firebaseApp } from './firebase';
import { Router, Route, browserHistory } from 'react-router';
import reducer from './reducers';
import { logUser } from './actions';
// import { withRouter } from 'react-router';

// const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if(user){
    console.log('there is a user', user);
    const { email } = user;
    store.dispatch(logUser(email));
    browserHistory.push('/app');
  }
  else{
    console.log('user not passed yet');
    browserHistory.replace('/signup');
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
      <Route path="/app" component={App} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Router>
  </Provider>,
  document.getElementById('root')
  );
