import { Box, Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import ReservForm from "components/ReservForm";
import OperatingHour from "components/OperatingHour";

const Reservation = () => {
    const isNonMobile = useMediaQuery(["(min-width: 992px)", "(min-width: 768px)", "(min-width: 500px)"]);

    return (
        <Box pb="30px">
            <Box as="section" py={{ base: '10', lg: '10' }} px="16px" bg="primary.green" >
                <Flex maxW="4xl" margin="0 auto" justifyContent="space-between">
                    <Box>
                        <Heading variant="primary" color="primary.yellow" size="2xl">Reservation</Heading>
                        <Heading variant="primary" color="highlight.white" size="lg" pb="10px"></Heading>
                        <Text color="highlight.white" width={{ base: '20ch', sm: '25ch', md: '30ch' }} pb="10px" fontSize={{ base: '0.9rem', md: '1.3rem' }}>
                            Please be on time for your reservation to guarantee your seating.
                        </Text>
                    </Box>
                    <Image
                        fit="cover"
                        boxSize={isNonMobile[2] ? "500px" : "200px"}
                        src="./assets/restaurant.jpg"
                        alt='restauranfood'
                        height={isNonMobile[1] ? "200px" : isNonMobile[2] ? "140px" : "150px"}
                        rounded="16px"
                        boxShadow="lg"
                    />
                </Flex>
            </Box>
            <Box as="section" py={{ base: '10', lg: '10' }} px="16px" >
                <Box maxW="4xl" margin="0 auto" justifyContent={isNonMobile[0] ? "space-between" : "center"} display={isNonMobile[0] ? "flex" : "grid"} gap="50px">
                    <Box w={isNonMobile[0] ? "35%" : "100%"}>
                        <Flex justifyContent="center" pb="30px">
                            <Heading size="md" variant="secondary" color="primary.green">Operating hours</Heading>
                        </Flex>
                        <OperatingHour isNonMobile={isNonMobile[0]} />
                    </Box>
                    <Box>
                        <Flex justifyContent="center" pb="30px">
                            <Heading size="md" variant="secondary" color="primary.green">Reservation details</Heading>
                        </Flex>
                        <ReservForm isNonMobile={isNonMobile[0]} />
                    </Box>
                </Box>
            </Box>
        </Box>

    );
};

export default Reservation;