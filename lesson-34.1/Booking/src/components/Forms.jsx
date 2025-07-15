import {Field, Form, Formik} from "formik";
import {Box, Button, Flex, Input} from "@chakra-ui/react";
import SelectOption from "./SelectOption.jsx";
import {useHotelStore} from "../store/useHotelStore.js";
import {useEffect} from "react";
import {useNavigate} from "react-router";

function Forms() {
    const {fetchDataHotels, fetchFilteredHotels, destination, issues} = useHotelStore();
    const navigate = useNavigate();

    useEffect(() => {
        fetchDataHotels();
    }, [fetchDataHotels])

    const initialValues = {
        destination: '',
        adults: '',
        children: '',
        checkIn: '',
        checkOut: ''
    }

    const validateNumber = value => {
        let errorMessage;
        if (!Number(value)) {
            errorMessage = 'Only numbers are allowed';
        }
        return errorMessage;
    };

    async function handleSubmit(values) {
        if(!values.destination) return;

        try {
            const fetchedHotels = await fetchFilteredHotels(values);

            if(fetchedHotels.length > 0) navigate("/hotels")
        } catch (error) {
            console.error("Error fetching hotels:", error);
        }
    }

    return (
        <>
            <Formik initialValues={initialValues} onChange={(option) => formik.setFieldValue("creationId", option.value)} onSubmit={handleSubmit}>
                {({ errors, touched }) => (
                <Form>
                    <Flex gap={3} mb={20}>
                        <Box border="1px solid" borderColor="gray.200" borderRadius="sm" py={2} flexGrow={1}>
                            <Field name="destination" id="destination" as="select" style={{outline: "none"}}>
                                {
                                    destination.map((item) => (
                                        <SelectOption option={item.label} key={item.id} />
                                    ))
                                }
                            </Field>
                        </Box>

                        <Field as={Input} type="date" name="checkIn" id="checkIn" />
                        <Field as={Input} type="date" name="checkOut" id="checkOut" />
                        <Box position="relative">
                            <Field as={Input} validate={validateNumber} name="adults" id="adults" placeholder="Adults" />
                            <Box position="absolute" top="100%" color="red" fontSize="xs" textAlign="center">{errors.adults && touched.adults ? <div>{errors.adults}</div> : null}</Box>
                        </Box>
                        <Box position="relative">
                            <Field as={Input} validate={validateNumber} name="children" id="children" placeholder="Children" />
                            <Box position="absolute" top="100%" color="red" fontSize="xs" textAlign="center">{errors.children && touched.children ? <div>{errors.children}</div> : null}</Box>
                        </Box>
                        <Button type="submit">Submit</Button>
                    </Flex>
                </Form>
                )}
            </Formik>
            {issues && (
                <Box color="red" fontSize="md" textAlign="center">
                    {issues}
                </Box>
            )}
        </>
    );
}

export default Forms;