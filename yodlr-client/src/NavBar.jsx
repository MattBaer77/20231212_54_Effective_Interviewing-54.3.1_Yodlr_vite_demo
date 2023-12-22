import {NavLink} from "react-router-dom"

const NavBar = () => {

    return (

        <div className="NavBar" data-testid='NavBar'>

            <h2 className="wordmark">

                <NavLink exact="true" to={"/"}>YODLR</NavLink>
                <NavLink exact="true" to={"/sign-up"}>Signup</NavLink>
                <NavLink exact="true" to={"/admin"}>Admin Page</NavLink>

            </h2>

        </div>

    )



}

export default NavBar;