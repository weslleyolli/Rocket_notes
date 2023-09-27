import { RiShutDownLine } from "react-icons/ri"
import { useAuth} from "../../hooks/auth"
import { Container, Profile, Logout } from "./styles";


export function Header() {
    const { signOut } = useAuth();
    return (
        <Container >
            <Profile to='/profile'>
                <img src="https://github.com/weslleyolli.png" alt="user Photo" />

                <div>
                    <span>Welcome</span>
                    <strong> Weslley Oliveira</strong>
                </div>
            </Profile>
            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}