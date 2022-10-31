import { Box, Text } from '@chakra-ui/react';

export default function RecipeKeyGF() {

    return (
        <Box
            bgColor='#FFDED6'
            borderRadius='20px'
            w='32px'
            h='32px'
            cursor='pointer'
        >
            <Text
                textAlign='center'
                pt='3.5px'
                color='black'
                fontWeight='700'
            >
                GF
            </Text>
        </Box>
    )
}