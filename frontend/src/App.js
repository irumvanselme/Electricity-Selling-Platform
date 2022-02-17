import "./App.css";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import BuyElectricity from "./pages/BuyElectricty";
import LoadElectricty from "./pages/LoadElectricty";
import Check from "./pages/Check";

const Home = () => {
    return <div>
        jjj
    </div>
}

const Routing = () => {
    return (
        <Router>
            <Route path="/" exact component={Home}/>
            <Route path="/electricity/buy" component={BuyElectricity}/>
            <Route path="/electricity/load" component={LoadElectricty}/>
            <Route path="/electricity/check" component={Check}/>
        </Router>
    )
}

function App() {
    
    return <div className="h-screen">
        <Router>
            <Routes>
                <Route path="/electricity/buy" component={<BuyElectricity />}/>
                <Route path="/electricity/load" component={LoadElectricty}/>
                <Route path="/electricity/check" component={Check}/>
            </Routes>
        </Router>
    </div>;
}

export default App;
