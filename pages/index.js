import { Box, Image, Container } from '@chakra-ui/react';
import Header from '../components/header';
import Menu from '../components/menu';
import NewRecipes from '../components/newRecipes';
import PickWeek from '../components/pickWeek';
import Subscribe from '../components/subscribe';
import MenuSearch from '../components/menuSearch';

export default function Home(props) {

    return (
        <Box
          h='3000px'
        >
            <Header info={props} />
            <Menu info={props} />
            <NewRecipes info={props} />
            <PickWeek info={props} />
            <Subscribe info={props} />
            <MenuSearch info={props} />
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