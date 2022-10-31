import { Box, Text } from '@chakra-ui/react';

export default function RecipeKeyV() {

    return (
        <Box
            bgColor='#D56638'
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
                V
            </Text>
        </Box>
    )
}