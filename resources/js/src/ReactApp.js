import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from "./landing"

function ReactApp() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                </Switch>
            </Router>
        </div>
    )
}

export default ReactApp
