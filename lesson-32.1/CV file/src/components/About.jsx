import {Box, Flex, Heading, Text, Image, Container, Grid, GridItem, Icon, List, Link as ChackraLink } from "@chakra-ui/react";
import { IoLocation } from "react-icons/io5";
import {FaGithub, FaLinkedin, FaPhoneAlt} from "react-icons/fa";
import {MdOutlineMail} from "react-icons/md";
import {FaSquareInstagram} from "react-icons/fa6";


function About() {
    return (
        <>
            <Box as="section" paddingY={{base: "30px", md: "50px"}}>
                <Container maxW="containerWidth">
                        <Grid gap="40px" alignItems="center" gridTemplateColumns={{md: "1fr 300px"}}>
                            <GridItem justifyItems="center">
                                <Image aspectRatio={2 / 2} maxW="300px" borderRadius="full" src="src/assets/ava2.png" />
                            </GridItem>
                            <GridItem order={{md: "-1"}}>
                                <Heading as="h1" fontSize={{base: "2xl", md: "4xl" }} textAlign={{base: "center", md: "left"}} mb="30px">
                                    Hi, my name is Oleg
                                </Heading>
                                <Text mb={6} textAlign={{base: "center", md: "left"}}>
                                    I'm experienced front-end and email developer with focus on responsive design and cross-client compatibility. I specialize in creating pixel-perfect, mobile-optimized email templates and interactive web interfaces that perform seamlessly across all major devices and platforms.
                                </Text>
                                <List.Root gap="2" mb={4} variant="plain" align="center">
                                    <List.Item>
                                        <List.Indicator asChild color="green.400">
                                            <IoLocation />
                                        </List.Indicator>
                                        Ukraine, Kharkiv
                                    </List.Item>
                                    <List.Item>
                                        <List.Indicator asChild color="green.400">
                                            <FaPhoneAlt />
                                        </List.Indicator>
                                        <ChackraLink target="_blank" outline="none" href="tel:+3809087549771">(098)-75-49-771</ChackraLink>
                                    </List.Item>
                                    <List.Item>
                                        <List.Indicator asChild color="green.400">
                                            <MdOutlineMail />
                                        </List.Indicator>
                                        <ChackraLink target="_blank" outline="none" href="mailto:oleg.poruchikov@gmail.com">oleg.poruchikov@gmail.com</ChackraLink>
                                    </List.Item>
                                </List.Root>
                                <List.Root gap="2" flexDirection="row" variant="plain" align="center">
                                    <List.Item>
                                        <List.Indicator asChild fontSize="2xl">
                                            <ChackraLink target="_blank" outline="none" href="https://github.com/Alezhan14"><FaGithub /></ChackraLink>
                                        </List.Indicator>
                                    </List.Item>
                                    <List.Item>
                                        <List.Indicator asChild fontSize="2xl" color="blue.500">
                                            <ChackraLink target="_blank" outline="none" href="https://www.linkedin.com/in/oleh-poruchikov-581b01319/"><FaLinkedin /></ChackraLink>
                                        </List.Indicator>
                                    </List.Item>
                                    <List.Item>
                                        <List.Indicator asChild fontSize="2xl" color="purple.500">
                                            <ChackraLink target="_blank" outline="none" href="https://www.instagram.com/oleg.poruchikov/"><FaSquareInstagram /></ChackraLink>
                                        </List.Indicator>
                                    </List.Item>
                                </List.Root>
                            </GridItem>
                        </Grid>
                </Container>
            </Box>
        </>
    )
}

export default About