import {FiMail, FiLock } from 'react-icons/fi'

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from './styles'

export function SignIn() {
    return (
        <Container >
            <Form>
                <h1>Rocket Notes</h1>
                <p>Application for save and manage your links</p>

                <h2>Make your login</h2>

                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Enter"/>

                <Link to="/register">
                    Create account
                </Link>
            </Form>
            <Background />
        </Container>
    )
} 