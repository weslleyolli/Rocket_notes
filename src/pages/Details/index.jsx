import { Container, Links } from "./styles.js";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <ButtonText title="Delete notes"/>

      <Section title="Utils links">
        <Links >
          <li>
            <a href="#">https://www.rocketseat.com.br/</a>
          </li>
          <li>
            <a href="#">https://www.rocketseat.com.br/</a>
          </li>
        </Links>
      </Section>

      <Section title="Markers">
        <Tag title="express" />
        <Tag title="notejs" />
      </Section>

      <Button title="voltar" />
    </Container>

  )
}
