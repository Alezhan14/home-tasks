import { Badge, GridItem, Box, HStack, Icon, Image, Text } from "@chakra-ui/react"
import { HiStar } from "react-icons/hi"

const HotelCard = ({hotel}) => {
    return (
        <GridItem borderWidth="1px">
            <Image src='https://bit.ly/2Z4KKcF' />

            <Box p="4" spaceY="2">
                <HStack>
                    <Badge fontSize='16px' colorPalette="teal" variant="solid">
                        {hotel.city}
                    </Badge>
                    <HStack gap="1" fontWeight="medium">
                        <Icon color="orange.400">
                            <HiStar />
                        </Icon>
                        <Text as="span" color="orange.400">
                            {hotel.hotel_rating ? hotel.hotel_rating : "No rating"}
                        </Text>
                    </HStack>
                </HStack>
                <Text fontWeight="medium" color="fg">
                    {hotel.name}
                </Text>
                <HStack color="fg.muted">
                    Address: {hotel.country_code}
                    {hotel.state && ('• ' + hotel.state)}
                    {hotel.address && ('• ' + hotel.address)}
                </HStack>
                <HStack color="fg.muted">
                    {hotel.phone_number && ('Phone: ' + hotel.phone_number)}
                </HStack>
                <HStack color="fg.muted">
                    {hotel.website && ('Website: ' + hotel.website)}
                </HStack>
            </Box>
        </GridItem >
    )
}

export default HotelCard

