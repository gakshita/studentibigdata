import { createStore, applyMiddleware } from 'redux';
import login_reducer from "./reducer/loginreducer"
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(login_reducer, applyMiddleware(thunk, logger));
const unsubscribe = store.subscribe(handleChange)
unsubscribe()


function handleChange() {
    console.log("hii")
  currentValue = select(store.getState())
    console.log(currentValue)
//   if (previousValue !== currentValue) {
//     console.log(
//       'Some deep nested property changed from',
//       previousValue,
//       'to',
//       currentValue
//     )
//   }
}

export default store;