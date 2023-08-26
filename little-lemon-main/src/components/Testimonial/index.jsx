import { Avatar, Box, Card, CardBody, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Star from "components/Star";
import data from './data.json'

const Testimonial = () => {
    const isNonMobile = useMediaQuery(["(min-width: 992px)", "(min-width: 768px)"]);

    return (
        <Box as="section" py={{ base: '16' }} px="16px" bg="secondary.bg" >
            <Box maxW="4xl" margin="0 auto">
                <Box>
                    <Heading variant="primary" color="primary.green" alignItems="center">What our customers say</Heading>
                    <Box justifyContent={isNonMobile[1] ? "space-between" : "center"} display={isNonMobile[1] ? 'flex' : 'grid'} my="40px" gap="30px">
                        {
                            data.map((e) => {
                                return (
                                    <Card maxW={{ base: "100%", md: "200px" }} key={e.key}>
                                        <CardBody>
                                            <Flex spacing='4' mb='4'>
                                                <Flex flex='1' gap='4' alignItems='center'>
                                                    <Avatar name={e.name} src={e.picture} />
                                                    <Box>
                                                        <Heading size='sm'>{e.name}</Heading>
                                                        <Star num={e.rated} />
                                                    </Box>
                                                </Flex>
                                            </Flex>
                                            <Text fontSize="md" color="primary.green">{e.said}</Text>
                                        </CardBody>
                                    </Card>
                                )
                            })
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Testimonial;