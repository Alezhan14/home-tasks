import {Box, Button, Flex, Span} from "@chakra-ui/react";
import {useToDosStore} from "../store/useToDosStore.jsx";



function ToDoElement({children, completed, id}) {
    const {deleteTodos, completeTodos} = useToDosStore()

    function handleDelete() {
        deleteTodos(id)
    }

    function handleComplete() {
        completeTodos(id)
    }

    return (
        <>
            <Flex
                bg="white.300"
                p="4"
                mb={4}
                borderWidth="1px"
                borderColor="border.disabled"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box as={Span} textDecoration={completed ? "line-through" : "none"} color={completed ? "red" : "gray.500"}>{children}</Box>
                <Flex gap={4}>
                    <Button onClick={handleComplete} bg="green.500">Complete</Button>
                    <Button onClick={handleDelete} bg="red">Delete</Button>
                </Flex>
            </Flex>
        </>
    )
}

export default ToDoElement