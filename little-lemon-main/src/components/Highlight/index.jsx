import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import data from "./data.json"

const Highlight = () => {
    const isNonMobile = useMediaQuery("(min-width: 992px)");

    return (
        <Box as="section" py={{ base: '16' }} px="16px">
            <Box maxW="4xl" margin="0 auto">
                <Box my={{ base: '0', lg: '30px' }}>
                    <Flex justifyContent="space-between">
                        <Heading variant="primary" color="primary.green">This week special!</Heading>
                        <Button variant="primary">Online Menu</Button>
                    </Flex>
                </Box>
                <Box my="40px">
                    <Box justifyContent="space-between" justifyItems={'center'} display={isNonMobile[0] ? 'flex' : 'grid'} gap="30px">
                        {
                            data.map((e) => {
                                return (
                                    <Card maxW={{ base: "100%", md: "60%", lg: "270px" }} key={e.key}>
                                        <Image src={e.picture} height="270px" fit="cover" borderRadius="5px 5px 0 0" boxShadow='xl' />
                                        <CardBody bg="primary.bg">
                                            <Box>
                                                <Flex justifyContent="space-between" alignItems="center" my="16px">
                                                    <Heading size="lg" variant="primary">{e.name}</Heading>
                                                    <Heading size="sm" color="primary.yellow">${e.price}</Heading>
                                                </Flex>
                                                <Text fontSize="md" color="primary.green">{e.description}</Text>
                                            </Box>
                                        </CardBody>
                                        <CardFooter bg="primary.bg">
                                            <Button variant="primaryOutline" width="100%" color="primary.green">Order a delivery</Button>
                                        </CardFooter>
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
export default Highlight;