import {Provider} from 'react-redux';
import {MainRouter} from './Routers'
import { store } from './redux/store/store';
import './styles/styles.scss'

function App() {
  return (
    <Provider store={store} >
      <MainRouter/>
    </Provider>
  );
}

export default App;
