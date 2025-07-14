import {NavLink} from "react-router";
import {Box, Button, Flex, Link} from "@chakra-ui/react";


function Header() {
    return (
        <Box as="header" shadow="0px 1px 6px 0px rgba(0, 0, 0, .7)" zIndex="1" position="relative">
            <Flex justify="space-between" p="6">
                <Box>
                    <Link as={NavLink} to="/" fontSize={30} color={"black"} fontWeight={700} textDecoration={"none"} outline={"none"}>Logo</Link>
                </Box>
                <nav>
                    <ul>
                        <Flex gap="4">
                            <li>
                                <Button as={NavLink} to="/" color="white" border="md" _hover={{bg: "white", color: "black"}}>
                                    Home
                                </Button>
                            </li>
                            <li>
                                <Button as={NavLink} to="/about" color="white" border="md" _hover={{bg: "white", color: "black"}}>
                                    About
                                </Button>
                            </li>
                        </Flex>
                    </ul>
                </nav>
            </Flex>

        </Box>
    );
}

export default Header;