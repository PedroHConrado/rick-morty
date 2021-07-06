import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Favorites } from '../pages/Favorites';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/favorites" exact component={Favorites} />
    </Switch>
);

export default Routes;
