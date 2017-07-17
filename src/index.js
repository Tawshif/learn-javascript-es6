import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*
* Routes
*/

routes(){
    return(
        <Route>
            <Route path="/" component={} />
        </Route>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
