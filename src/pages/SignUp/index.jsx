import { useState } from 'react'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

import { api } from "../../services/api"

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from './styles'

export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp(){
        if( !name || !email || !password) {
            return alert("Please enter all fields")
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Success")
            navigate("/")
        })
        .catch(err => {
            if(err.response){
                alert(err.response.data.message)
            }else {
                alert("dont was possible register")
            }
        })
    }

    return (
        <Container >
            <Background />
            <Form>
                <h1>Rocket Notes</h1>
                <p>Application for save and manage your links</p>

                <h2>Create your account</h2>

                <Input
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />

                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                    
                />

                <Button title="Register" onClick={handleSignUp} />

                <Link to="/">
                    Return to login
                </Link>
            </Form>
        </Container>
    )
} 