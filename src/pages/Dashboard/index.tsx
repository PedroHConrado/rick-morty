import { Container } from "./styles";
import { Card } from "../../components/Card";
import { Search } from "../../components/Search";

export function Dashboard() {

    return (
        <Container>
            <Search />
            <Card />
        </Container>

    )
}