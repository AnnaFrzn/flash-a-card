import React from "react";
import Search from "./search";
import Login from "./login";
import SignUp from "./signup";

function Header() {
    return (
        <header>
            <h1>Flash-a-card</h1>
            <Search />
            <Login />
            <SignUp />
        </header>
    )
}

export default Header;