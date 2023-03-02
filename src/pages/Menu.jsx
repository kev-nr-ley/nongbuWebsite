import React from "react";
import { streetEats, meatSsam, bowls, sharing } from "@assets/data/Menu";
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
    <Flex
      bg={colors.backgroundDark}
      p={["5vw", "5vw", "10vw"]}
      gap='8'
      flexDirection='column'
      {...props}
      mt={["0", "80px"]}
    

      >
      <Flex
        w='100%'
        justifyContent='space-between'
        gap='8'
        flexDirection={["column", "row"]}>
        <Flex alignItems={"center"} 
          justifyContent='center'
        w='30%' gap='4'>
          {/* <Logo src='/nongbu-logo.png' width='52' height='52' /> */}
          <Heading
            as='h2'
            color={colors.light}
            variant='sectionHeading'
            fontSize='32px'>
            MENU
          </Heading>
        </Flex>
        <Text
          color={colors.light}
          variant='bodyText'
          textAlign={["left", "right"]}
          w='100%'
          minW='240px'>
          *Please note, our food and drink menus involve ingredients and
          beverages that are both seasonal and hard to reliably procure. Menus
          are therefore subject to change without notice.
        </Text>
      </Flex>

      <Grid gap='5vw' w='100%' gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}>
        {renderMenuPage(streetEats)}
        {renderMenuPage(bowls)}
        {renderMenuPage(meatSsam)}
        {renderMenuPage(sharing)}
      </Grid>
    </Flex>
  );
}

export default Menu;
