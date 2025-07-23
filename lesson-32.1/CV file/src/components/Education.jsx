import {Badge, Box, Container, Flex, Heading, List} from "@chakra-ui/react";
import {IoLogoJavascript, IoLogoReact} from "react-icons/io5";
import {FaBootstrap, FaFigma, FaGitAlt, FaHtml5, FaNodeJs, FaSass} from "react-icons/fa";
import {MdElectricBolt, MdOutlineMail} from "react-icons/md";
import {SiExpress, SiMongodb, SiRedux, SiVite} from "react-icons/si";
import {RiBearSmileLine, RiTailwindCssFill} from "react-icons/ri";



function Education() {
    return (
        <>
            <Box as="section" bg="gray.100" paddingY={{base: "30px", md: "50px"}} color="black">
                <Container maxW="containerWidth">
                    <Flex justify="center">
                        <Badge size="lg" as="h2" bg="gray.400" color="white" mb="5">Education</Badge>
                    </Flex>
                    <List.Root>
                        <List.Item mb="3">
                            <Heading>Bachelor, Karazin Kharkiv National University, Kharkiv</Heading>
                            <List.Root ps="5">
                                <List.Item>Faculty of Economics | 2022 - present</List.Item>
                            </List.Root>
                        </List.Item>
                        <List.Item mb="3">
                            <Heading>Hillel It School</Heading>
                            <List.Root ps="5">
                                <List.Item>Front-end Pro | February 2025 - July 2025</List.Item>
                            </List.Root>
                        </List.Item>
                    </List.Root>
                </Container>
            </Box>
        </>
    )
}

export default Education