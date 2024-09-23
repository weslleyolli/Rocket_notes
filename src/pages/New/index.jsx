import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../services/api"

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'



import { Container, Form } from './styles'

export function New() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    
    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

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

    function handleRemoveTags(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewNote() {
        if(!title) {
            return alert("Enter a title of note")
        }

        if(newLink) {
            return alert("you left a Link in the field to add, but didn't add it")
        }
        if(newTag) {
            return alert("you left a tag in the field to add, but didn't add it")
        }

        await api.post('/notes', {
            title,
            description,
            tags,
            links,
        })

        alert("Note Created")
        navigate(-1)
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
                    <Input 
                        placeholder="Title" 
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Textarea 
                        placeholder="Comments" 
                        onChange={e => setDescription(e.target.value)}
                    />
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
                                        onClick={() => handleRemoveTags(tag)}
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

                    <Button 
                        title='Save' 
                        onClick={handleNewNote}
                    />
                </Form>
            </main>
        </Container>
    )
}