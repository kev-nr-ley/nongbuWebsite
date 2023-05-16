const streetEats = {
  title: "Street Eats & Small Plates",
  // description: "Traditional Korean street food.",
  footer: "Try some Makgoli with your Korean pancakes.",
  sections: {
    eats: {
      items: [
        {
          textVariant: "menuFood",
          showItem: true,
          english: "Seafood Pajeon",
          korean: "해물파전",
          description:
            "Korean pancake loaded with shrimp, squid, and green onions.",
          price: 17,
          notes: "",
          modifiers: [],
        },
        {
          textVariant: "menuFood",
          showItem: true,
          english: "Kimchi Jeon",
          korean: "김치전",
          description: "Kimchi and chive pancakes.",
          price: 14,
          notes: "",
          modifiers: [],
        },
        {
          textVariant: "menuFood",
          showItem: true,
          english: "Cheese Ramyun Jeon",
          korean: "치즈라면전",
          description: "Ramyun noodles and cheese pancake with spicy mayo.",
          price: 14,
          notes: "",
          modifiers: [],
        },
        {
          textVariant: "menuFood",
          showItem: true,
          english: "NongBu Kimbap",
          korean: "꼬마김밥",
          description:
            "Pickled radish, carrots, asparagus, shiitake mushrooms and rice rolled in laver seaweed.",
          price: "Full $16",
          price2: "Half $8",
          notes: "Vegetarian and gluten free.",
          modifiers: [],
        },

        {
          textVariant: "menuFood",
          showItem: true,
          english: "Spicy Ddeokbokki",
          korean: "매운떡볶이",
          description: "Rice cakes and fishcakes in a spicy sauce.",
          notes: "",
          price: 15,
          notes: "",
          modifiers: [],
        },
        {
          textVariant: "menuFood",
          showItem: true,
          english: "Fried Ddeokbokki",
          korean: "기름떡볶이",
          description:
            "Lightly fried rice cakes in a sweet and spicy garlic sauce.",
          notes: "Vegetarian.",
          price: "Full $14",
          price2: "Half $7",
          notes: "Vegetarian.",
          modifiers: [],
        },
        {
          textVariant: "menuFood",
          showItem: true,
          english: "Honey Butter Ddeokbokki",
          korean: "허니버터떡볶이",
          description: "Lightly fried rice cakes smothered in honey & butter.",
          notes: "Vegetarian and gluten free.",
          price: "Full $14",
          price2: "Half $7",
          notes: "Vegetarian and gluten free.",
          modifiers: [],
        },
        {
            textVariant: "menuFood",
            showItem: true,
            english: "Korean Doshirak (Lunch Box)",
            korean: "도시락",
            description: "Korean ham, fried kimchi, and egg on rice.",
            notes: "",
            price: 10,
            notes: "",
            modifiers: [],
          },
      ],
    },
  },
};

const meatSsam = {
  title: "Meat & Ssam",
  description:
    "Served with an assortment of BanChan (Free Refills).",
  // footer:
  //   "Meat & Ssam are delicious footers to demonstrate the use of the footer property.",
  sections: {
    MeatSsam: {
      // name: "Meat & Ssam",
      // description:"A bowl of rice and ssam (lettuce wraps) are an essential part of a Korean meal. Don’t forget to add them!",
      // footer: "A description of the footer",
      items: [
        {
          textVariant: "menuFood",
          showItem: true,
          english: "Bulgogi",
          korean: "불고기",
          description:
            "Thinly sliced beef with oyster mushrooms and vegetables in sweet garlic soy.",
          price: 23,
          notes: "",
          modifiers: [],
        },
        {
          textVariant: "menuFood",
          showItem: true,
          english: "Fire Chicken (Buldak)",
          korean: "불닭",
          description:
            "Spicy chicken, vegetables, Korean sweet potato, rice cakes, and perilla.",
          price: 22,
          notes: "",
          modifiers: [],
        },
        {
          textVariant: "menuFood",
          showItem: true,
          english: "Kimchi Jjim (Kimchi Pork Belly)",
          korean: "김치찜",
          description: "Pork belly stewed with Kimchi.",
          price: 23,
          notes: "Gluten Free",
          modifiers: [],
        },
        {
          textVariant: "menuFood",
          showItem: true,
          english: "Pork Bulgogi (Pork Belly)",
          korean: "돼지불고기",
          description: "Porkbelly pan fried in a sweet and spicy sauce.",
          price: 22,
          notes: "",
          modifiers: [],
        },
        {
          textVariant: "menuFood",
          showItem: true,
          english: "Ojinguh Bukum (Spicy Squid)",
          korean: "오징어볶음",
          description:
            "Spicy pan fried squid.",
          price: 24,
          notes: "",
          modifiers: [],
        },
        {
          textVariant: "menuFood",
          showItem: true,
          english: "Spicy O-Sam",
          korean: "오삼",
          description:
            "Pork bellly and squid in spicy sauce.",
          price: 24,
          notes: "",
          modifiers: [],
        },
        {
          textVariant: "menuFood",
          showItem: true,
          english: "Add Ssam (Lettuce Wrap) Vegetables",
          korean: "쌈",
          description:
            "Green leaf lettuce, fresh garlic, serrano peppers, and ssamjang.",
          price: 6,
          notes: "",
          modifiers: [],
        },
        {
            textVariant: "menuFood",
            showItem: true,
            english: "Add Bowl of Rice",
            korean: "",
            description:
              "",
            price: 4,
            notes: "",
            modifiers: [],
          },
      ],
    },
  },
};

const bowls = {
  title: "Rice Bowls & Noodles",
  description:
    "Served with an assortment of BanChan (Free Refills).",
  footer: "Korean rice dishes like Bibimbap and Deopbap should be mixed well in the bowl before eating.",
  sections: {
    RiceBowls: {
      // name: "Rice Bowls & Noodles",
      // description: "A description of the section",
      // footer: "A description of the footer",
      items: [
        {
          textVariant: "menuFood",
          showItem: true,
          english: "Kimchi BoKumBap",
          korean: "김치볶음밥",
          description:
            "Kimchi and pork belly fried with rice and topped with a fried egg.",
          price: 19,
          notes: "",
          modifiers: [],
        },
        {
          textVariant: "menuFood",
          showItem: true,
          english: "Bibimbap",
          korean: "비빔밥",
          description:
            "Vegetables, beef, and egg on rice. Served with gochujang sauce.",
          price: 18,
          notes: "Add extra beef ($5) / Add extra egg ($2.50)",
          modifiers: [],
        },
        {
          textVariant: "menuFood",
          showItem: true,
          english: "Vegetarian Bibimbap",
          korean: "비빔밥",
          description:
            "Vegetables & mushrooms on rice. Served with gochujang sauce.",
          price: 17,
          notes: "Vegetarian and gluten free.",
          modifiers: [],
        },
        {
          textVariant: "menuFood",
          showItem: true,
          english: "Butter Bulgogi Deopbap",
          korean: "불고기덮밥",
          description:
            "Thinly shaved beef with shiitake and onions in buttery bulgogi sauce. Served on rice and topped with an egg.",
          price: 19,
          notes: "Add extra egg ($2.00)",
          modifiers: [],
        },
        {
          textVariant: "menuFood",
          showItem: true,
          english: "3 Mushroom Japchae",
          korean: "버섯잡채",
          description:
            "3 varieties of mushrooms with vegetables and sweet potato noodles.",
          price: 19,
          notes: "Vegetarian and gluten free.",
          modifiers: [],
        },

        {
          textVariant: "menuFood",
          showItem: true,
          english: "Beef Japchae",
          korean: "불고기잡채",
          description: "Beef and shiitake mushrooms with vegetables and sweet potato noodles.",
          price: 23,
          notes: "",
          modifiers: [],
        },

        {
          textVariant: "menuFood",
          showItem: true,
          english: "Jjimdak",
          korean: "찜닭",
          description:
            "Chicken, potatoes, carrots, zucchini, and onions with sweet potato noodles in sweet savoury soy.",
          price: 22,
          notes: "",
          modifiers: [],
        },
        {
          textVariant: "menuFood",
          showItem: true,
          english: "O-Sam Noodles",
          korean: "오삼볶음면",
          description:
            "Squid and porkbelly with ramyum noodles in a sweet soy sauce. ",
          price: 23,
          notes: "",
          modifiers: [],
        },

      ],
    },
  },
};

const sharing = {
  title: "Soups & Jeongol (Hotpots)",
  description: "Served with kimchi and pickled radish. All soups include a bowl of rice.",
  footer: "Soups pair best with regular soju.",
  sections: {
    Sharing: {
      // name: "Sharing Plates & Jeongol",
      // description: "A description of the section",
      // footer: "A description of the footer",
      items: [
        {
          textVariant: "menuFood",
          showItem: true,
          english: "Soon Tofu Jjigae",
          korean: "해물순두부찌개",
          description:
            "Squid, shrimp, and clams with silken tofu and egg in a spicy broth.",
          price: 17,
          notes: "Individual size.",
          modifiers: [],
        },
        {
          textVariant: "menuFood",
          showItem: true,
          english: "Budae Jjigae (Military Stew)",
          korean: "부대찌개",
          description:
            "Spam, weiners, bacon, kimchi, baked beans, and ramyun noodles. A combination of American military rations and Korean ingredients.",
          price: 27,
          notes: "Serves 1-2.",
          modifiers: [],
        },
        {
          textVariant: "menuFood",
          showItem: true,
          english: "Bulgogi Jeongol (Beef Hotpot)",
          korean: "불고기전골",
          description:
            "Beef with sweet potato noodles and mushrooms in light broth.",
          price: 35,
          notes: "Serves 2.",
          modifiers: [],
        },

        {
          textVariant: "menuFood",
          showItem: false,
          english: "Add Bowl of Rice",
          korean: "",
          description: "",
          price: 4,
          notes: "",
          modifiers: [],
        },
        {
          textVariant: "menuFood",
          showItem: true,
          english: "Add Bowl of Rice",
          korean: "",
          description:
            "",
          price: 4,
          notes: "",
          modifiers: [],
        },
      ],
    },
  },
};

const drinks = {
  title: "Drinks",
  description: "Soju is Korea's national drink and it pairs well with Korean food.",
  // footer: "tip your waiter!",
  sections: {
    beer: {
      name: "Beer  맥주",
      // english: "Beer",
      // korean: "MekJu",
      // description: "Maekju 맥주",
      items: [
        {
          textVariant: "menuDrink",
          showItem: true,
          english: "Sapporo",
          korean: "(Japan)",
          description: "",
          price: 6.5,
          notes: "5% 355ml",
          modifiers: [],
        },

        {
          textVariant: "menuDrink",
          showItem: true,
          english: "Asahi",
          korean: "(Japan)",
          description: "",
          price: 6.5,
          notes: "5.2% 355ml",
          modifiers: [],
        },

        {
          textVariant: "menuDrink",
          showItem: true,
          english: "Beer Bucket",
          // korean: "맥주 버킷",
          description: "Any 4 beers.",
          price: 24,
          notes: "",
          modifiers: [],
        },
      ],
    },
    soju: {
      name: "Soju 소주",
      // description: "Soju is not sake, get outta here.",
      items: [
        {
          textVariant: "menuDrink",
          showItem: true,
          english: "Jinro Chamisul",
          // korean: "진로 참이슬",
          description: "Worlds # selling spirit.",
          price: "Bottle $18",
          price2: "2oz $3.50",
          notes: "17% ",
          modifiers: [],
        },

        {
          textVariant: "menuDrink",
          showItem: true,
          english: "Good Day",
          // korean: "굿데이",
          description: "Rice soju.",
          price: "Bottle $18",
          price2: "2oz $3.50",
          notes: "16.9%",
          modifiers: [],
        },

        {
          textVariant: "menuDrink",
          showItem: true,
          english: "Flavoured Soju",
          // korean: "플레이버",
          description: "Apple, Peach, Citrus, Grape, Yogurt, Plum, Mango",
          price: "Bottle $18",
          price2: "2oz $3.50",
          notes: "13 - 14%",
          modifiers: [],
        },
      ],
    },
    somek: {
      name: "So-Mek 소맥",
      description: "Mixing Soju & Beer is called So-Mek (SOju + MEKju).",
      items: [
        {
          textVariant: "menuDrink",
          showItem: true,
          english: "So-Mek",
          korean: "소맥",
          description: "2oz Soju + any beer.",
          price: 8.5,
          notes: "",
          modifiers: [],
        },
        {
          textVariant: "menuDrink",
          showItem: true,
          english: "So-Mek 'Love Shot'",
          korean: "",
          description: "Two 2oz Soju + 2 beers",
          price: 16,
          notes: "",
          modifiers: [],
        },
        {
          textVariant: "menuDrink",
          showItem: true,
          english: "So-Mek Combo",
          korean: "",
          description: "1 bottle of Soju + 2 beers. $24 on Thursdays.",
          price: 28,
          notes: "",
          modifiers: [],
        },
      ],
    },

    spirits: {
      name: "Spirits",
      description: "By the bottle.",
      items: [
        {
          textVariant: "menuDrink",
          showItem: true,
          english: "Bekseju",
          korean: "백세주",
          description:
            "Herbal wine. Mildly sweet with ginseng notes. Pairs well with spicy food.",
          price: 19,
          notes: "13% 375ml",
          modifiers: [],
        },
        {
          textVariant: "menuDrink",
          showItem: true,
          english: "Bokbunja Um",
          korean: "복분자음",
          description: "Sweet black raspberry wine.",
          price: 20,
          notes: "20% 375ml",
        },
        {
          textVariant: "menuDrink",
          showItem: true,
          english: "Kook Son Dang Makgoli",
          korean: "막걸리",
          description: "Traditional Korean rice liquor. Pairs well with korean snacks.",
          price: 17,
          notes: "6% 750ml",
        },
      ],
    },
    pop: {
      name: "Soft Drinks",
      items: [
        {
          textVariant: "menuDrink",
          showItem: true,
          english: "Pop",
          korean: "",
          description: "Coke, Coke Zero, Sprite, Ginger Ale, Iced Tea",
          price: 3,
          notes: "",
          modifiers: [],
        },
        {
          textVariant: "menuDrink",
          showItem: true,
          english: "K-Pop",
          korean: "",
          description: "Korean sodas.",
          price: 4,
          notes: "Milkis Original",
          modifiers: [],
        },
      ],
    },
  },
};

const defaultMenu = {
  title: "default",
  description: "default description",
  footer: "default footer",
  sections: {
    innersection: {
      name: "inner section",
      description: "inner section is good",
      items: [
        {
          textVariant: "menuFood",
          showItem: true,
          english: "item1english",
          korean: "item1korean",
          description: "item1 description",
          price: 999,
          notes: "item1 note",
          modifiers: ["mod1", "mod2"],
        },
      ],
    },
  },
};

export { streetEats, meatSsam, bowls, sharing, drinks, defaultMenu };