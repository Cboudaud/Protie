import { legacy_createStore as createStore} from 'redux';
import reducer from '../reducer/calculator';

// import { composeWithDevTools } from '@redux-devtools/extension';


const store = createStore(
  reducer,
);

export default store;