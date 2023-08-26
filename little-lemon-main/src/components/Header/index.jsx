import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "assets/Logo.svg"
import Navbar from "components/Navbar";

const Header = () => {
    return (
        <Box as="header" pb={{ base: '12' }} py={{ base: '4' }} px="16px">
            <Box as="nav" maxW="4xl" margin="0 auto">
                <HStack spacing="10" justify="space-between" maxW="6xl">
                    <Image src={logo} width="170px" />
                    <Navbar />
                </HStack>
            </Box>
        </Box>
    );
}

export default Header;