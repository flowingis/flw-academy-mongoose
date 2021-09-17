import React from 'react';
import {Route, Switch} from "react-router-dom";
import Navigation from "./Navigation";
import MaintenanceList from "./MaintenanceList";
import MaintenanceCreate from "./MaintenanceCreate";

const App = () => {
    return (
        <div>
            <Navigation/>
            <Switch>
                <Route exact path="/" component={MaintenanceList}/>
                <Route exact path="/create-maintenance" component={MaintenanceCreate}/>
            </Switch>
        </div>
    );
}

export default App;
