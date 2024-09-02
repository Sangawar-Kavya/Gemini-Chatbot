import ReactDOM from 'react-dom/client'
import App from './app'
import './index.css'
import ContextProvider from './Context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <ContextProvider>
        <div id='container'>
            <App />
        </div>
    </ContextProvider>
)