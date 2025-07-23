import { Table } from "@chakra-ui/react";


function SWAPITable({planets}) {
    return (
        <>
            <Table.Root size="sm" striped>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>Planet</Table.ColumnHeader>
                        <Table.ColumnHeader>Diameter</Table.ColumnHeader>
                        <Table.ColumnHeader>Climate</Table.ColumnHeader>
                        <Table.ColumnHeader>Population</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="end">Terrain</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {planets.map((item) => (
                        <Table.Row key={Date.now() + Math.random()}>
                            <Table.Cell>{item.name}</Table.Cell>
                            <Table.Cell>{item.diameter}</Table.Cell>
                            <Table.Cell>{item.climate}</Table.Cell>
                            <Table.Cell>{item.population}</Table.Cell>
                            <Table.Cell textAlign="end">{item.terrain}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </>
    )
}

export default SWAPITable