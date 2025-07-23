import {Box, Container, Heading,} from "@chakra-ui/react";
import ToDoForm from "../components/ToDoForm.jsx";
import ToDoElement from "../components/ToDoElement.jsx";
import {useToDosStore} from "../store/useToDosStore.jsx";


function ToDosPage() {
    const {toDos, addToDos} = useToDosStore();

    function handleSubmit(values, action) {
        if (!values.toDoText.trim()) return;

        values.id = Date.now();
        addToDos(values);
        action.resetForm();
    }

    return (
        <Box as="section" paddingY={{base: "30px", md: "50px"}}>
            <Container maxW="containerWidth">
                <Heading as="h2" mb={4}>ToDosPage</Heading>
                <ToDoForm handler={handleSubmit} />
                {toDos.map((item) => (
                    <ToDoElement completed={item.completed} key={item.id} id={item.id}>{item.toDoText}</ToDoElement>
                ))}
            </Container>
        </Box>
    )
}

export default ToDosPage;