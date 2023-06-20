import React from "react";
import { Flex, Text, Grid } from "@chakra-ui/react";
import MenuPage from "@components/Menu/MenuPage";
// import { menu } from "@assets/data/Menu";
import menu from "@assets/data/jsonMenu";
export default function MenuMain(props) {
  Object.keys(menu).map((key) => {
    // console.log(menu[key]);
  });

  return (
    <Flex
      w='100%'
      justifyContent='space-between'
      gap='8'
      px={["0", "0", "5vw", "5vw"]}
      flexDirection={["column"]}
      py='100px'
      bg='backgroundDark'
      {...props}>
      <Text
        color='light'
        variant='bodyText'
        textAlign={["left", "right"]}
        w='clamp(240px, 100%, 100%)'
        px='1rem'>
        *Please note, our food and drink menus involve ingredients and beverages
        that are both seasonal and hard to reliably procure. Menus are therefore
        subject to change without notice.
      </Text>

      <Grid
        gap='5vw'
        w='100%'
        gridTemplateColumns={["1fr", "1fr", "1fr", "1fr", "1fr 1fr"]}>
        {Object.keys(menu).map((key) => {
          // console.log(menu[key].showMenu);
          return (
            menu[key].showMenu && (
              <MenuPage
                key={key}
                menu={menu[key]}
              />
            )
          );
        })}
      </Grid>
    </Flex>
  );
}
