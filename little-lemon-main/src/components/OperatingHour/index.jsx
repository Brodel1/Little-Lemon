import { Fragment } from "react";
import data from "./data.json"
import { Box, Divider, Grid, GridItem, Text } from "@chakra-ui/react";
import "./style.css"

const Operation = ({ isNonMobile }) => {
    return (
        <Box maxW={isNonMobile ? "xl" : "100%"}>
            <Divider />
            <Grid templateColumns="0.8fr 1.1fr 1.1fr" gap="4" pt="15px" px={isNonMobile ? "" : "50px"}>
                <GridItem><Text className="timeHeader">Day</Text></GridItem>
                <GridItem><Text className="timeHeader" textAlign="end">Lunch</Text></GridItem>
                <GridItem><Text className="timeHeader" textAlign="end">Dinner</Text></GridItem>
                {
                    data.map((e) => {
                        return (
                            <Fragment key={e.day}>
                                <GridItem colSpan={3}><Divider /></GridItem>
                                <GridItem><Text className="timehhmm">{e.day}</Text></GridItem>
                                <GridItem textAlign="end"><Text className={e.lunch === "Closed" ? "timeClosed" : "timehhmm"} >{e.lunch}</Text></GridItem>
                                <GridItem textAlign="end"><Text className={e.lunch === "Closed" ? "timeClosed" : "timehhmm"} >{e.dinner}</Text></GridItem>
                            </Fragment>
                        )
                    })
                }
            </Grid>
        </Box>
    );
}

export default Operation;