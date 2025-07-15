import {Box, Heading, Text} from "@chakra-ui/react";
import Forms from "../components/Forms.jsx";

function Home() {
    return (
        <>
            <div>
                <Forms />
                <Heading mb="7" size="4xl">
                    Travel With <Box as="span" color="orange.400">Booking</Box>
                </Heading>
                <Text>
                    Discover unforgettable destinations and plan your next adventure with ease. Whether you're dreaming of a relaxing beach escape, a cultural city break, or a family vacation, we’ve got the perfect stay for you.
                    Search, compare, and book top-rated hotels worldwide — all in one place. Start your journey today with Booking!
                </Text>
            </div>
        </>
    );
}
export default Home;