import { FloatButton } from "./styles"

const Button = ({ onClick, name, variant }) => {
    return (
        <FloatButton $variant={variant} onClick={onClick}>{name}</FloatButton>
    )
}

export default Button