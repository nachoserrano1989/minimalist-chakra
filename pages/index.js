import { Box, Image, Container } from '@chakra-ui/react';
import Header from '../components/header';
import Menu from '../components/menu';

export default function Home(props) {

    return (
        <Box>
            <Header info={props} />
            <Menu info={props} />
        </Box>
    )
}

export async function getStaticProps() {
    try {
      const resPage = await fetch('https://nacho-web.s3.amazonaws.com/minimalist-chakra/index.json');
      const page = await resPage.json();
  
      return {
        props: {
          page
        }
      }
    } catch (error) {
      console.log(error);
    }
  }