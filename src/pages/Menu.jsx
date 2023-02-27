import React from "react";
import { streetEats, meatSsam, bowls, sharing } from "../sections/menu/Menu";
import { Flex, Box, Text, Heading, Grid } from "@chakra-ui/react";
import { theme } from "@styles/theme";
import Logo from "@components/Logo";

import MenuPage from "@components/Menu/MenuPage";

function Menu(props) {
  const { colors } = theme;
  function renderMenuPage(menuPage) {
    return <MenuPage {...menuPage} objectToArray={props.objectToArray} />;
  }

  return (
    <Box bg={colors.backgroundDark} px='5vw' py='5vh' mt='80px'>
      <Flex w='100%' justifyContent='space-between' mb='12'>
        <Flex alignItems={"center"} w='30%' gap='4'>
          <Logo src='/nongbu-logo.png' width='52' height='52' />
          <Heading
            as='h1'
            color={colors.light}
            fontSize='32px'
            fontWeight='700'
            lineHeight='40px'
            letterSpacing='3px'>
            {" "}
            Menu{" "}
          </Heading>
        </Flex>
        <Text color={colors.light} w='50%' variant='bodyText' textAlign='right'>
          *Please note, our food and drink menus involve ingredients and
          beverages that are both seasonal and hard to reliably procure. Menus
          are therefore subject to change without notice.
        </Text>
      </Flex>
      <Grid
        gap='5vw'
        w='100%'
        gridTemplateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr"]}>
        {renderMenuPage(streetEats)}
        {renderMenuPage(meatSsam)}
        {renderMenuPage(bowls)}
        {renderMenuPage(sharing)}
      </Grid>
    </Box>
  );
}

export default Menu;
