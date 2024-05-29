import { Link } from "react-router-dom";

import './appbar.sass'
import DivSearch from "../DivSearch";



const AppBar = () => {
    return (
        <div id="appbar">
            <Link to=''>TOP RATED</Link>
            <Link to=''>POPULAR</Link>
            <Link to=''>UPCOMING</Link>
            <DivSearch />
        </div>
    );
}
export default AppBar;
