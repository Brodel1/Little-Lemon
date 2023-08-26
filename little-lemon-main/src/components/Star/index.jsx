import { StarIcon } from "@chakra-ui/icons";

const Star = ({ num }) => {
    if (num < 1)
        return <></>
    else {
        let tmp = [];
        for (let index = 0; index < num; index++) {
            tmp.push(<StarIcon key={index} color='primary.yellow' mr='1' />);
        }
        return tmp;
    }
};

export default Star;