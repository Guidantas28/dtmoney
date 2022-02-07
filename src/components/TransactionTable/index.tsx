import { Container } from "./style";

export function TransactionTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                <tr>
                    <td>Desenvolvimento de WebSite</td>
                    <td className="deposit">R$12.000</td>
                    <td>Desenvolvimento</td>
                    <td>07/02/2022</td>
                </tr>
                <tr>
                    <td>Aluguel</td>
                    <td className="withdraw">-R$1.000</td>
                    <td>Moradia</td>
                    <td>07/02/2022</td>
                </tr>
                </tbody>
            </table>
        </Container>
    )
}