import { Badge, Box, HStack, Icon, Image, Text } from "@chakra-ui/react"
import { HiStar } from "react-icons/hi"

const HotelCard = ({hotel}) => {
    return (
        <Box maxW="23%" borderWidth="1px">
            <Image src={data.imageUrl} alt={data.imageAlt} />

            <Box p="4" spaceY="2">
                <HStack>
                    <Badge colorPalette="teal" variant="solid">
                        {hotel.city}
                    </Badge>
                    <HStack gap="1" fontWeight="medium">
                        <Icon color="orange.400">
                            <HiStar />
                        </Icon>
                        <Text>
                            {hotel.hotel_rating}
                        </Text>
                    </HStack>
                </HStack>
                <Text fontWeight="medium" color="fg">
                    {hotel.name}
                </Text>
                <HStack color="fg.muted">
                    {hotel.country_code} • {hotel.address} beds
                </HStack>
            </Box>
        </Box>
    )
}

const data = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$435",
    reviewCount: 34,
    rating: 4.5,
}

export default HotelCard

