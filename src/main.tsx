import React from 'react'
import ReactDOM from 'react-dom/client'
import { PracticaApp } from './PracticaApp'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PracticaApp/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
