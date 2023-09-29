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
    const [tags, setTags] = useState([])

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/tags")
            setTags(response.data)
        }
        fetchTags()
    }, [])
    return (
        <Container>
            <Brand>
                <h1>Rocket Notes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title="Todos" isActive={true} /></li>
                {
                    tags && tags.map(tag => (
                        <li key={tag.id}><ButtonText title={tag.name}/></li>
                    ))

                }

            </Menu>

            <Search>
                <Input placeholder="Search for title" icon={FiSearch} />
            </Search>

            <Content>
                <Section title="minhas notas">
                    <Note data={{
                        title: 'React',
                        tags: [
                            { id: '1', name: 'React' },
                            { id: '2', name: 'Rocketseat' }
                        ]
                    }}
                    />
                </Section>
            </Content>

            <NewNote to='/new'>
                <FiPlus />
                Create Note
            </NewNote>
        </Container>
    )

}