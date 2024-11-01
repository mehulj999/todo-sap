import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './Main'
import './index.css'
function App() {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  )
}
export default App;