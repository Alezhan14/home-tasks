import {Box, Button, Container, DownloadTrigger, Flex, Link as ChackraLink} from "@chakra-ui/react";
import HeaderNavLink from "./HeaderNavLink.jsx";
import {ColorModeButton} from "./ui/color-mode.jsx";
import {Link} from "react-router";


function Header() {

    return (
        <Box as="header" paddingY="20px 0">
            <Container maxW="containerWidth">
                <Flex direction={{base: "column", md: "row"}} gap="4" justify="space-between">
                    <Box>
                        <ChackraLink to="/" as={Link} fontSize="24px" fontWeight="bold" outline="none">
                            {"<Oleg Poruchikov />"}
                        </ChackraLink>
                    </Box>
                    <Box as="nav">
                        <Flex align="center" gap={{base: 2, md: 4}} justify="space-between">
                            <HeaderNavLink destination="/">
                                Home
                            </HeaderNavLink>
                            <HeaderNavLink destination="/To Do List">
                                To Do List
                            </HeaderNavLink>
                            <HeaderNavLink destination="/SWAPI">
                                SWAPI
                            </HeaderNavLink>
                            <ColorModeButton />
                            <Button>
                                <a target="_blank" href="src/assets/Poruchikov_Front_End_Developer.pdf">Download CV</a>
                            </Button>
                        </Flex>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Header