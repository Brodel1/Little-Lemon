import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import imgMarioA from "assets/Mario and Adrian A.jpg"
import imgMarioB from "assets/Mario and Adrian b.jpg"

const About = () => {
    return (
        <Box as="section" py={{ base: '16' }} px="16px">
            <Box maxW="4xl" margin="0 auto">
                <Flex justifyContent="space-between" mt="40px" mb="90px" gap="40px">
                    <Box>
                        <Heading variant="primary" color="primary.green" alignItems="center">Little Lemon</Heading>
                        <Heading variant="primary" color="primary.green" size="lg" pb="10px">Chicago</Heading>
                        <Text fontSize="md" color="primary.green" width="39ch">
                            Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean
                            restaurant, focused on traditional recipes served with a modern twist.
                            The chefs draw inspiration from Italian, Greek, and Turkish culture and
                            have a menu of 12–15 items that they rotate seasonally.
                            The restaurant has a rustic and relaxed atmosphere with moderate prices,
                            making it a popular place for a meal any time of the day.
                        </Text>
                    </Box>
                    <Box>
                        <Image src={imgMarioA} rounded="16px" boxShadow='dark-lg' maxW="370px" zIndex="1" mt="120px" ml="-120" position="absolute" />
                        <Image src={imgMarioB} rounded="16px" boxShadow='lg' maxW="370px" />
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}
export default About;