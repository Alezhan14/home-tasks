import {Flex} from "@chakra-ui/react";
import HotelCard from "../components/Card.jsx";
import {useHotelStore} from "../store/useHotelStore.js";

function Hotels() {
    const {hotels} = useHotelStore();

    return (
        <div>
            <h1>Hotels</h1>
            <Flex wrap="wrap" gap="5" justify="center">
                {hotels.map((hotel, index) => (
                    <HotelCard key={index} hotel={hotel} />
                ))}
            </Flex>
        </div>
    );
}
export default Hotels;