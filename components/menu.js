import { Box, Image, Container, Input, Text } from '@chakra-ui/react';

export default function Menu(props) {

    return (
        <Box 
            w='100%'
            bgColor='green'
        >
            <Container
                p={{sm: '30px 16px 0'}}
                w='100%'
                bgColor='red'
            >
                <Box
                    display={{sm: 'flex'}}
                    justifyContent={{sm: 'space-between'}}
                    borderBottom={{sm: '2px solid black'}}
                    pb={{sm: '36px'}}
                >
                <Box
                    w={{sm: '30px'}}
                    h={{sm: '30px'}}
                >
                    <Image 
                        src={props.info.page.menu.icon1.src} 
                        alt={props.info.page.menu.icon1.alt}
                    />
                </Box>
                <Text
                    fontSize={{sm: '2xl'}}
                    transform={{sm: 'rotate(-8deg)'}}
                >
                    {props.info.page.menu.title}
                </Text>
                <Box
                    w={{sm: '30px'}}
                    h={{sm: '30px'}}
                >
                    <Image 
                        src={props.info.page.menu.icon2.src} 
                        alt={props.info.page.menu.icon2.alt}
                    />
                </Box>
                </Box>
            </Container>
        </Box>
    )
}