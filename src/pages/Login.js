import {Form, Button, Container} from "react-bootstrap";

import {useSelector, useDispatch} from "react-redux";
import {login, logout} from "../reducers/AuthReducer";
import {useEffect, useState} from "react";

const Login = ()=>{


    const dispatch = useDispatch();
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const submitHandler = ()=>{

    }


    return(
        <Container>
            <div>
                <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter Your username"
                    value={username}
                    className="mb-5"
                    onChange={(event)=>{setUsername(event.target.value)}}
                />
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    value={password}
                    className="mb-5"
                    onChange={(event) => {setPassword(event.target.value)}}
                />
                <Button variant="primary">Log IN</Button>
            </div>

        </Container>
    )
}


export default Login;