import { Link } from "react-router-dom";

import './appbar.sass'

const AppBar = () => {
    return (
        <div id="appbar">
            <Link to=''>TOP RATED</Link>
            <Link to=''>POPULAR</Link>
            <Link to=''>UPCOMING</Link>
            <input className="search" placeholder="SEARCH WHERE"></input>
        </div>
    );
}
export default AppBar;
