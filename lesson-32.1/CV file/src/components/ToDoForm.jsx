import {Box, Button, Flex, Input} from "@chakra-ui/react";
import {Field, Form, Formik} from "formik";


function ToDoForm({handler}) {

    const initialValues = {
        toDoText: '',
        completed: false,
        id: ''
    }

    return (
        <>
            <Box mb={4}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handler}
                >
                    {() => (
                        <Form>
                            <Flex gap={4}>
                                <Field as={Input} type="text" name="toDoText" placeholder="To do text" color="gray.500" />
                                <Button type="submit">Add To Do</Button>
                            </Flex>
                        </Form>
                    )}
                </Formik>
            </Box>
        </>
    )
}

export default ToDoForm