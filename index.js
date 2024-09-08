import { store } from './app/store'
import { Provider} from 'react-redux'

import counterReducer from './counter/counterSlice'

const store =configureStore({
  reducer:{
    cart:counterReducer
  }
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)