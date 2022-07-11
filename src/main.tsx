import 'virtual:objectiv-developer-tools';
import { ObjectivProvider, ReactTracker } from "@objectiv/tracker-react";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const tracker = new ReactTracker({
  applicationId: 'vite-react-demo-app',
  transport: {
    transportName: 'ConsoleLogTransport',
    isUsable: () => true,
    handle: async (...args) => console.log(...args)
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ObjectivProvider tracker={tracker}>
      <App />
    </ObjectivProvider>
  </React.StrictMode>
)
