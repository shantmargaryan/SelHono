import "./sass/index.scss"
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom"
import App from './App.jsx'
import ScrollToTop from "./Hooks/ScrollToTop.js"

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <ScrollToTop />
        <App />
    </Router>
)
