import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form } from "./styles"

export function Profile() {
    return (
        <Container>
            <header>
                <a href="#">
                    <FiArrowLeft />
                </a>
            </header>

            <Form>
                <Input
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                />
                <Input
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                />
                <Input
                    placeholder="Current password"
                    type="password"
                    icon={FiLock}
                />
                <Input
                    placeholder="New password"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Save" />
            </Form>
        </Container>
    )
}