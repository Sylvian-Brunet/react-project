import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import { Link, BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Context from './components/context';

import MapComp from './components/Map';
import Banniere from "./components/Banniere";

const App = () => {
    const [nbMarkers, setNbMarkers] = useState(0);

    const [isDark, setIsDark] = useState(false);

    return (
        <Context.Provider value={{ isDark, update: setIsDark }}>
            <div id={isDark ? 'dark' : 'light'}>
                <Router>
                    <div className={"Menu"}>
                        <Button variant="contained" color={isDark ? 'black' : 'primary'}>
                            <Link to={"/map"}>Map Leaflet</Link>
                        </Button>
                        <Button variant="contained" color={isDark ? 'black' : 'primary'} onClick={() => {setIsDark(prev => !prev)}}>
                            {!isDark ? 'Thème Sombre' : 'Thème Clair'}
                        </Button>
                    </div>
                    <Switch>
                        <Route path={"/map"}>
                            <Banniere nbMrkrs={nbMarkers}/>
                            <MapComp onMarkerSet={(data) => {setNbMarkers(data);}}/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </Context.Provider>
    );
};

export default App;
