import {Box, Button, Container, Flex, Heading, Table, Text} from "@chakra-ui/react";
import SWAPITable from "../components/SWAPITable.jsx";
import {useSWAPIStore} from "../store/useSWAPIStore.jsx";
import {useEffect} from "react";

function SWAPI() {
    const {fetchDataPlanets, clearDataPlanets, issue, planets} = useSWAPIStore();

    useEffect(() => {
        fetchDataPlanets()
    }, [fetchDataPlanets])

    function handleClearData() {
        clearDataPlanets()
    }


    return (
        <>
            <Box as="section" paddingY={{base: "30px", md: "50px"}}>
                <Container maxW="containerWidth">
                    <Flex justify="space-between">
                        <Heading as="h2" mb={4}>SWAPI</Heading>
                        <Button onClick={handleClearData} bg="red">Clear</Button>
                    </Flex>
                    <SWAPITable planets={planets} />
                    <Text>{issue}</Text>
                </Container>
            </Box>
        </>
    )
}

export default SWAPI