import {Badge, Box, Container, Flex, List} from "@chakra-ui/react";
import {IoLogoJavascript, IoLogoReact} from "react-icons/io5";
import {FaBootstrap, FaFigma, FaGitAlt, FaHtml5, FaNodeJs, FaSass} from "react-icons/fa";
import {MdElectricBolt, MdOutlineMail} from "react-icons/md";
import {SiExpress, SiMongodb, SiRedux, SiVite} from "react-icons/si";
import {RiBearSmileLine, RiTailwindCssFill} from "react-icons/ri";



function Skills() {
    return (
        <>
            <Box as="section" bg="gray.100" paddingY={{base: "30px", md: "50px"}}>
                <Container maxW="containerWidth">
                    <Flex justify="center">
                        <Badge size="lg" as="h2" bg="gray.400" color="white" mb="5">Skills/Tools</Badge>
                    </Flex>
                    <List.Root gap="4" mb={4} variant="plain" flexDirection="row" flexWrap="wrap" justifyContent="center" align="center" color="black">
                        <List.Item flexDirection="column" textAlign="center" width={{base: "20%", md: "12%"}}>
                            <List.Indicator asChild fontSize="5xl" margin="0" color="yellow.500">
                                <IoLogoJavascript />
                            </List.Indicator>
                            JavaScript
                        </List.Item>
                        <List.Item flexDirection="column" textAlign="center" width={{base: "20%", md: "12%"}}>
                            <List.Indicator asChild fontSize="5xl" margin="0" color="blue.500">
                                <IoLogoReact />
                            </List.Indicator>
                            React
                        </List.Item>
                        <List.Item flexDirection="column" textAlign="center" width={{base: "20%", md: "12%"}}>
                            <List.Indicator asChild fontSize="5xl" margin="0" color="purple.500">
                                <SiRedux />
                            </List.Indicator>
                            Redux
                        </List.Item>
                        <List.Item flexDirection="column" textAlign="center" width={{base: "20%", md: "12%"}}>
                            <List.Indicator asChild fontSize="5xl" margin="0">
                                <RiBearSmileLine />
                            </List.Indicator>
                            Zustand
                        </List.Item>
                        <List.Item flexDirection="column" textAlign="center" width={{base: "20%", md: "12%"}}>
                            <List.Indicator asChild fontSize="5xl" margin="0" color="green.500">
                                <FaNodeJs />
                            </List.Indicator>
                            Node.js
                        </List.Item>
                        <List.Item flexDirection="column" textAlign="center" width={{base: "20%", md: "12%"}}>
                            <List.Indicator asChild fontSize="5xl" margin="0">
                                <SiExpress />
                            </List.Indicator>
                            Express
                        </List.Item>
                        <List.Item flexDirection="column" textAlign="center" width={{base: "20%", md: "12%"}}>
                            <List.Indicator asChild fontSize="5xl" margin="0" color="green.500">
                                <SiMongodb />
                            </List.Indicator>
                            MongoDB
                        </List.Item>
                        <List.Item flexDirection="column" textAlign="center" width={{base: "20%", md: "12%"}}>
                            <List.Indicator asChild fontSize="5xl" margin="0" color="orange.500">
                                <FaHtml5 />
                            </List.Indicator>
                            HTML5
                        </List.Item>
                        <List.Item flexDirection="column" textAlign="center" width={{base: "20%", md: "12%"}}>
                            <List.Indicator asChild fontSize="5xl" margin="0" color="pink.500">
                                <FaSass />
                            </List.Indicator>
                            Sass/Scss
                        </List.Item>
                        <List.Item flexDirection="column" textAlign="center" width={{base: "20%", md: "12%"}}>
                            <List.Indicator asChild fontSize="5xl" margin="0" color="purple.500">
                                <FaBootstrap />
                            </List.Indicator>
                            Bootstrap
                        </List.Item>
                        <List.Item flexDirection="column" textAlign="center" width={{base: "20%", md: "12%"}}>
                            <List.Indicator asChild fontSize="5xl" margin="0" color="blue.500">
                                <RiTailwindCssFill />
                            </List.Indicator>
                            Tailwind
                        </List.Item>
                        <List.Item flexDirection="column" textAlign="center" width={{base: "20%", md: "12%"}}>
                            <List.Indicator asChild fontSize="5xl" margin="0" color="teal.500">
                                <MdElectricBolt />
                            </List.Indicator>
                            ChackraUI
                        </List.Item>
                        <List.Item flexDirection="column" textAlign="center" width={{base: "20%", md: "12%"}}>
                            <List.Indicator asChild fontSize="5xl" margin="0">
                                <FaFigma />
                            </List.Indicator>
                            Photoshop / Figma
                        </List.Item>
                        <List.Item flexDirection="column" textAlign="center" width={{base: "20%", md: "12%"}}>
                            <List.Indicator asChild fontSize="5xl" margin="0" color="purple.500">
                                <SiVite />
                            </List.Indicator>
                            Gulp / Vite
                        </List.Item>
                        <List.Item flexDirection="column" textAlign="center" width={{base: "20%", md: "12%"}}>
                            <List.Indicator asChild fontSize="5xl" margin="0" color="orange.500">
                                <FaGitAlt />
                            </List.Indicator>
                            Git
                        </List.Item>
                        <List.Item flexDirection="column" textAlign="center" width={{base: "20%", md: "12%"}}>
                            <List.Indicator asChild fontSize="5xl" margin="0">
                                <MdOutlineMail />
                            </List.Indicator>
                            Email Templates
                        </List.Item>
                    </List.Root>
                </Container>
            </Box>
        </>
    )
}

export default Skills