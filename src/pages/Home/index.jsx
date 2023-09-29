import { useState, useEffect } from "react";
import { FiPlus, FiSearch } from "react-icons/fi"

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"
import { ButtonText } from "../../components/ButtonText"
import { api } from "../../services/api";

export function Home() {
    const [search, setSearch] = useState("")
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])
    const [notes, setNotes] = useState([])

    function handleTagSelected(tagName) {
        if (tagName === "all"){
            return setTagsSelected([])
        }
 
        const alreadySelected = tagsSelected.includes(tagName)

        if (alreadySelected) {
            const filterTags = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(filterTags)
        } else {
            setTagsSelected(prevState => [...prevState, tagName])
        }


    }

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/tags")
            setTags(response.data)
        }
        fetchTags()
    }, [])

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
            setNotes(response.data)
        }

        fetchNotes()
    }, [tagsSelected, search])
    return (
        <Container>
            <Brand>
                <h1>Rocket Notes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText
                        title="All"
                        onClick={() => handleTagSelected("all")}
                        $isactive={tagsSelected.length === 0}
                    />
                </li>
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText
                                title={tag.name}
                                onClick={() => handleTagSelected(tag.name)}
                                $isactive={tagsSelected.includes(tag.name)}
                            />
                        </li>
                    ))

                }

            </Menu>

            <Search>
                <Input
                    placeholder="Search for title"
                    icon={FiSearch}
                    onChange={() => setSearch(e.target.value)}
                />
            </Search>

            <Content>
                <Section title="minhas notas">
                    {
                        notes.map(note => (
                            <Note 
                                key={String(note.id)}
                                data={note}
                            />
                        ))
                    }
                </Section>
            </Content>

            <NewNote to='/new'>
                <FiPlus />
                Create Note
            </NewNote>
        </Container>
    )

}