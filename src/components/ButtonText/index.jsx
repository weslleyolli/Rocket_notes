
import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function ButtonText({ title, isActive = false, ...rest}){
    return (
        <Container 
            type="button"
            $isactive={isActive.toString()}
            {...rest}
        >
            {title}
        </Container>
    )
}

