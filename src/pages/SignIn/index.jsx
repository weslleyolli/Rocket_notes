import {FiMail, FiLock } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form } from './styles'

export function SignIn() {
    return (
        <Container >
            <Form>
                <h1>Rocket Notes</h1>
                <p>Application for save and manage your links</p>

                <h2>Make your login</h2>

                <Input
                    placeholder="email"
                    type="text"
                    icon={FiMail}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    icon={FiLock}
                />

                <Button title="enter"/>

                <a href="#">
                    Create account
                </a>
            </Form>
        </Container>
    )
} 