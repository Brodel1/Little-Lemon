import { CalendarOutlined, MessageOutlined, PhoneOutlined, TagOutlined, TeamOutlined } from "@ant-design/icons";
import { CheckCircleIcon, TimeIcon } from "@chakra-ui/icons";
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Divider, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useReserveContext } from "context/reserveContext";
import dayjs from "dayjs";
import { useRef } from "react";

const AlertMessage = () => {
    const { isOpenDialog, onCloseDialog, message } = useReserveContext();
    const { resDate = dayjs(), resTime, resGuestName, resGuestNum, resComment, resPhone } = message;
    const closeRef = useRef();
    return (
        <AlertDialog
            motionPreset='slideInBottom'
            leastDestructiveRef={closeRef}
            isOpen={isOpenDialog}
            onClose={onCloseDialog}
            isCentered
        >
            <AlertDialogOverlay />
            <AlertDialogContent backgroundColor="primary.green" color="highlight.white">
                <AlertDialogHeader><Heading variant="primary">Reservation Confirmed <CheckCircleIcon fontSize="xl" mb="5px" /></Heading></AlertDialogHeader>
                <AlertDialogBody>
                    <Text fontSize="xl">Detail <span style={{ fontWeight: 500 }}>{`#${(Math.random() + 1).toString(20).substring(7).toUpperCase()}`}</span></Text>
                    <Divider />
                    <Grid templateColumns="1fr 1fr" gap="26px" pt="16px">
                        <GridItem><Text fontSize="xl"><TeamOutlined style={{ paddingRight: '10px' }} />{resGuestNum}</Text></GridItem>
                        <GridItem><Text fontSize="xl"><TagOutlined style={{ paddingRight: '10px' }} /> {resGuestName}</Text></GridItem>
                        <GridItem><Text fontSize="xl"><CalendarOutlined style={{ paddingRight: '10px' }} />{`${resDate.month() + 1}/${resDate.date()}`}</Text></GridItem>
                        <GridItem><Text fontSize="xl"><span style={{ paddingRight: '10px' }}><TimeIcon /></span>{resTime}</Text></GridItem>
                        <GridItem><Text fontSize="xl"><PhoneOutlined style={{ paddingRight: '10px' }} />(+1){resPhone}</Text></GridItem>
                        <GridItem><Text fontSize="xl"><MessageOutlined style={{ paddingRight: '10px' }} /> {resComment}</Text></GridItem>
                    </Grid>
                </AlertDialogBody>
                <AlertDialogFooter justifyContent="space-between">
                    <Text fontSize="sm">If you can't make it to your reservation, please cancel your reservation in advance.</Text>
                    <Button variant="primary" ref={closeRef} onClick={onCloseDialog}>OK</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
};

export default AlertMessage;