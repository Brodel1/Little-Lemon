import { useReserveContext } from "context/reserveContext";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/*
    This is a custom hook that can be used to simulate an API call
*/

/*
// Fail
{
    "errors": [
        {
            "status": "500",
            "title": "The backend responded with an error",
            "detail": "Reputation service not responding after three requests."
        }
    ]
}

// Success 
{
    "data": [
        {
            "type": "articles",
            "id": "1",
            "attributes": {
                "title": "JSON:API paints my bikeshed!",
                "body": "The shortest article. Ever."
            }
        }
    ]
}
*/

const useSubmit = () => {
    const { onFetching, onSuccess, bookingTimes } = useReserveContext();

    const postReserve = async (url, { date, time, message }) => {
        onFetching();

        await wait(2000);
        onSuccess({ bookingTimes: [...bookingTimes, { date, time }], message });
    }

    return { postReserve };
};

export default useSubmit;