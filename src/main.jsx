import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { firebaseConfig } from "./fbconfig.js";
import { initializeApp} from 'firebase/app'

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
