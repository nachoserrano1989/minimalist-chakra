import { Box, Image, Container, Alert } from '@chakra-ui/react';
import Header from '../components/header';
import Menu from '../components/menu';
import NewRecipes from '../components/newRecipes';
import PickWeek from '../components/pickWeek';
import Subscribe from '../components/subscribe';
import MenuSearch from '../components/menuSearch';
import FavoritesRecipes from '../components/favoritesRecipes';
import RecipeRound from '../components/recipeRound';
import ExploreRecipes from '../components/exploreRecipes';
import Shop from '../components/shop';
import SocialNetwork from '../components/socialNetworks';
import Footer from '../components/footer';
import SubFooter from '../components/subFooter';
import Alerts from '../components/alerts';



export default function Home(props) {

    return (
        <Box
          h='auto'
          p={{sm: '0 0 100px'}}
          position='relative'
        >
            <Header info={props} />
            <Menu info={props} />
            <NewRecipes info={props} />
            <PickWeek info={props} />
            <Subscribe info={props} />
            <MenuSearch info={props} />
            <FavoritesRecipes info={props} />
            <RecipeRound info={props} />
            <ExploreRecipes info={props} />
            <Shop info={props} />
            <SocialNetwork info={props} />
            <Footer info={props} />
            <SubFooter />
            <Alerts />
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