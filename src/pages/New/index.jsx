import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'



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
                    <Textarea placeholder="Comments" />

                    <Section title="Links">
                        <NoteItem value="https://google.com.br"/>
                        <NoteItem isNew placeholder="New link"/>
                    </Section>
                </Form>
            </main>
        </Container>
    )
}