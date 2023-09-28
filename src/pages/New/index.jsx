import { useState } from "react"
import { Link } from "react-router-dom"

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'



import { Container, Form } from './styles'

export function New() {
    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    function handleAddLinks() {
        setLinks(prevState => [...prevState, newLink])
        setNewLink("")
    }

    function handleRemoveLinks(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }

    function handleAddTags() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Create Note</h1>
                        <Link to="/">back</Link>
                    </header>

                    <Input placeholder="Title" />
                    <Textarea placeholder="Comments" />

                    <Section title="Links">
                        {
                            links.map((link, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={link}
                                    onClick={() => handleRemoveLinks(link)}
                                />
                            ))
                        }
                        <NoteItem
                            isNew
                            placeholder="New link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLinks}
                        />
                    </Section>

                    <Section title="markers">
                        <div className='tags'>
                            {
                                tags.map((tag, index) => (
                                    <NoteItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => { }}
                                    />
                                ))
                            }
                            <NoteItem
                                isNew
                                placeholder="New tag"
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTags}
                            />
                        </div>
                    </Section>

                    <Button title='Save' />
                </Form>
            </main>
        </Container>
    )
}