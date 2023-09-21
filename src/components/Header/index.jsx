import { Container, Profile } from "./styles";

export function Header() {
    return (
        <Container >
            <Profile>
                <img src="https://github.com/weslleyolli.png" alt="user Photo" />

                <div>
                    <span>Welcome</span>
                    <strong> Weslley Oliveira</strong>
                </div>
            </Profile>
        </Container>
    )
}