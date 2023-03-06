import React from "react";
import { streetEats, meatSsam, bowls, sharing } from "@assets/data/Menu";
import { Flex, Text, Grid } from "@chakra-ui/react";
import { theme } from "@styles/theme";

import MenuPage from "@components/Menu/MenuPage";

function Menu(props) {
  const { colors } = theme;
  function renderMenuPage(menuPage) {
    return (
      <MenuPage
        {...menuPage}
        objectToArray={props.objectToArray}
        name={props.name}
      />
    );
  }

  return (
    <Flex
      w='100%'
      justifyContent='space-between'
      gap='8'
      px='10vw'
      flexDirection={["column"]}
      py='100px'
      {...props}>
      <Text
        color={colors.light}
        variant='bodyText'
        textAlign={["left", "right"]}
        w='100%'
        minW='240px'>
        *Please note, our food and drink menus involve ingredients and beverages
        that are both seasonal and hard to reliably procure. Menus are therefore
        subject to change without notice.
      </Text>

      <Grid gap='5vw' w='100%' gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}>
        <MenuPage
          {...streetEats}
          objectToArray={props.objectToArray}
          name={"streetEats"}
        />
        {renderMenuPage(bowls)}
        {renderMenuPage(meatSsam)}
        {renderMenuPage(sharing)}
      </Grid>
    </Flex>
  );
}

export default Menu;
