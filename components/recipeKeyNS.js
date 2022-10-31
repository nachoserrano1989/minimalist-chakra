import { Box, Text } from '@chakra-ui/react';

export default function RecipeKeyNS() {

    return (
        <Box
            bgColor='#2A2B2A'
            borderRadius='20px'
            w='32px'
            h='32px'
            cursor='pointer'
            ml='14px'
        >
            <Text
                textAlign='center'
                pt='3.5px'
                color='white'
                fontWeight='700'
            >
                NS
            </Text>
        </Box>
    )
}