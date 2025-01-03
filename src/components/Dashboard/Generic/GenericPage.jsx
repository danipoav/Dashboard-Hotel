import { MdAddCircleOutline } from "react-icons/md";
import { Container, Content, ButtonCreate, Ul, Li, } from '../Contact/Contact.styles';

export default function GenericPage({ title, onCreate, filters, children }) {
    return (
        <Container>
            <ButtonCreate onClick={onCreate}>
                New {title} <MdAddCircleOutline size={20} />
            </ButtonCreate>
            <Ul>
                {filters.map((filter, index) =>
                    <Li key={index} active={filter.active}>
                        {filter.name}
                    </Li>
                )}
            </Ul>
            <Content>
                {children}
            </Content>
        </Container>
    )
}
