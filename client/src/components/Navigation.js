import React from "react";
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

const Navigation = (props) => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        props.history.push("/");
    };
    const token = localStorage.getItem("token");
    const divStyle = {
        display: "flex",
        justifyContent: "center",
    }
    return (
        <div style={divStyle}>
            {token === null ? (
                <>
                    <Button>
                        <Link to="/">
                            Home
                    </Link>
                    </Button>
                    <Button>
                        <Link to="/login">
                            Login
                    </Link>
                    </Button>
                </>
            ) : (
                    <Button onClick={handleLogout}>
                        Logout
                </Button>
                )}
        </div>
    )
}
export default Navigation