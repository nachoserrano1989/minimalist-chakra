import { Box, Image, Container, Text} from '@chakra-ui/react';
export default function Shop(props) {

    return (

        <Box
            h={{sm: '610px'}}
            bgImage={props.info.page.shop.background}
            bgPosition='center'
            bgRepeat='no-repeat'
            bgColor='red'
            /* bgSize='100%' */
            maxW='1200px'
            p='113px 16px 80px'
        >
            <Container
                bgColor='white'
                maxW='100%'
                h={{sm: '417px'}}
                m={{sm: 'auto 0'}}
                p='0'
            >
                <Text>{props.info.page.shop.title}</Text>
                <Text>{props.info.page.shop.text}</Text>
                <Box>
                    <Text>
                        {props.info.page.shop.button}
                    </Text>
                    <Image 
                        src={props.info.page.shop.icon} 
                        alt='' 
                        w='24px'
                        h='24px'
                    />
                </Box>
            </Container>
        </Box>
    )
}