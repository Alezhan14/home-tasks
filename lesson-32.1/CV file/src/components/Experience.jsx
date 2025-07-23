import {Badge, Box, Button, Card, Container, Flex, Heading, HStack, Image, List, Text} from "@chakra-ui/react";




function Experience() {
    return (
        <>
            <Box as="section" paddingY={{base: "30px", md: "50px"}}>
                <Container maxW="800px">
                    <Flex justify="center">
                        <Badge size="lg" as="h2" bg="gray.400" color="white" mb="5">Skills/Tools</Badge>
                    </Flex>

                    <List.Root gap="4" mb={4} variant="plain" flexDirection="row" flexWrap="wrap" justifyContent="center" align="center">
                        <List.Item flexDirection="column" textAlign="center" width="100%">
                            <Flex flexDirection={{base: "column", md: "row"}} padding="20px" gap="5" width="100%" alignItems="center" border="1px solid lightGray">
                                <Box minW={{base: "100%", md: "20%"}}>
                                    <Heading as="h3" fontSize="xl">Freelance</Heading>
                                    <Text>2024 - Present</Text>
                                </Box>
                                <Box minW={{base: "100%", md: "80%"}} textAlign="left">
                                    <Heading as="h3" mb="2" fontSize="xl">Front-End Developer</Heading>
                                    <List.Root ml="18px" color="gray.500" fontSize="small">
                                        <List.Item>
                                            Creating responsive and interactive web pages
                                        </List.Item>
                                        <List.Item>
                                            Developing interfaces that work across various devices and browsers.
                                        </List.Item>
                                        <List.Item>
                                            Optimizing page load times.
                                        </List.Item>
                                        <List.Item>
                                            Making changes and updates to existing websites.
                                        </List.Item>
                                        <List.Item>
                                            Providing technical support and resolving any issues.
                                        </List.Item>
                                    </List.Root>
                                </Box>
                            </Flex>
                        </List.Item>
                        <List.Item flexDirection="column" textAlign="center" width="100%">
                            <Flex flexDirection={{base: "column", md: "row"}} padding="20px" gap="5" width="100%" alignItems="center" border="1px solid lightGray">
                                <Box minW={{base: "100%", md: "20%"}}>
                                    <Heading as="h3" fontSize="xl">P2H, Kharkiv</Heading>
                                    <Text>2017 - 2024</Text>
                                </Box>
                                <Box minW={{base: "100%", md: "80%"}} textAlign="left">
                                    <Heading as="h3" mb="2" fontSize="xl">Email engineer</Heading>
                                    <List.Root ml="18px" color="gray.500" fontSize="small">
                                        <List.Item>
                                            Developing responsive email templates from PSD, Figma, Sketch, PDF, Image, HTML.
                                        </List.Item>
                                        <List.Item>
                                            Automating email campaigns.
                                        </List.Item>
                                        <List.Item>
                                            Integration of email templates with different CRMs.
                                        </List.Item>
                                        <List.Item>
                                            Troubleshooting email templates.
                                        </List.Item>
                                    </List.Root>
                                </Box>
                            </Flex>
                        </List.Item>
                        <List.Item flexDirection="column" textAlign="center" width="100%">
                            <Flex flexDirection={{base: "column", md: "row"}} padding="20px" gap="5" width="100%" alignItems="center" border="1px solid lightGray">
                                <Box minW={{base: "100%", md: "20%"}}>
                                    <Heading as="h3" fontSize="xl">W3, Kharkiv</Heading>
                                    <Text>2014 - 2017</Text>
                                </Box>
                                <Box minW={{base: "100%", md: "80%"}} textAlign="left">
                                    <Heading as="h3" mb="2" fontSize="xl">QA engineer</Heading>
                                    <Text color="gray.500" fontSize="small">Manual testing of functionality, user interface, and website performance to ensure high quality and compliance with customer requirements.</Text>
                                </Box>
                            </Flex>
                        </List.Item>
                    </List.Root>
                </Container>
            </Box>
        </>
    )
}

export default Experience