import {Grid, Heading} from "@chakra-ui/react";
import HotelCard from "../components/Card.jsx";
import {useHotelStore} from "../store/useHotelStore.js";

function Hotels() {
    const {hotels, formData} = useHotelStore();

    return (
        <div>
            <Heading as="h1" size="4xl" mb="7">Hotels</Heading>
            <Heading as="h2" mb="5" fontSize="xl">
                Hotels in {formData.destination} for {formData.adults} adults
                and {formData.children} children {formData.checkIn && formData.checkOut ? `from ${formData.checkIn} to ${formData.checkOut}` : formData.checkIn && !formData.checkOut ? `from ${formData.checkIn}` : !formData.checkIn && formData.checkOut ? `to ${formData.checkOut}` : ''}
            </Heading>
            <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                {hotels.map((hotel, index) => (
                    <HotelCard key={index} hotel={hotel} />
                ))}
            </Grid>
        </div>
    );
}
export default Hotels;