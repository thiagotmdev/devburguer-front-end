import PropTypes from "prop-types";
import { ContainerButton } from "./styles";

export function Button({ children, ...props }) { //props pegam o que é passado como propriedade no component.
    return <ContainerButton {...props}>{children}</ContainerButton>
}

Button.propTypes = {
    children: PropTypes.string
}