import FilterJobs from "../components/FilterJobs";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TEST2 from "../components/TEST2";
import Calendar from "../components/Calendar";



const Test = () => {

    return (<Router>
        <div className="test">
            <h1>hi</h1>
            <FilterJobs></FilterJobs>
            <div className="2">
                <FilterJobs></FilterJobs>
            </div>
            <div className="content">
                <Switch>
                    <Route path="/blogs/:id">
                        <TEST2></TEST2>
                    </Route>
                </Switch>
            </div>
            {/* <Calendar></Calendar> */}
        </div>
    </Router>
    );
}

export default Test;