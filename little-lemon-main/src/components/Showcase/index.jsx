import { Box, Button, Flex, Grid, GridItem, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import imageShow from "assets/restauranfood.jpg"
import { Link } from "react-router-dom";

const Showcase = () => {
    const isNonMobile = useMediaQuery("(min-width: 992px)");

    return (
        <Box as="section" py={{ base: '10', lg: '10' }} px="16px" bg="primary.green" >
            <Box maxW="4xl" margin="0 auto">
                <Grid templateColumns="repeat(2,1fr)">
                    <GridItem>
                        <Box>
                            <Heading variant="primary" color="primary.yellow" size="2xl">Little Lemon</Heading>
                            <Heading variant="primary" color="highlight.white" size="lg" pb="10px">Chicago</Heading>
                            <Text color="highlight.white" width={{ base: '25ch', md: '35ch' }} pb="10px" fontSize={{ base: '1rem', md: '1.3rem' }}>
                                We are a family owned Mediterranean restaurant,
                                focused on traditional recipes served with a modern twist.
                            </Text>
                            <Link to="/reservation"><Button variant="primary">Reserve a Table</Button></Link>
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Flex justifyContent="flex-end">
                            <Image
                                fit="cover"
                                boxSize={isNonMobile[0] ? "290px" : "250px"}
                                src={imageShow}
                                alt='restauranfood'
                                position={isNonMobile[0] ? "absolute" : ""}
                                height={isNonMobile[0] ? "330px" : "300px"}
                                rounded={isNonMobile[0] ? "16px" : "8px"}
                                boxShadow="dark-lg"
                            />
                        </Flex>
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    );
}

export default Showcase;