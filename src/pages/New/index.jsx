import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Container, Form } from './styles'

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Create Note</h1>
                        <a href="#">back</a>
                    </header>

                    <Input placeholder="Title"/>
                </Form>
            </main>
        </Container>
    )
}