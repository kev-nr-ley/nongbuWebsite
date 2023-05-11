import { m } from "framer-motion";

const streetEats = {
  title: "Street Eats",
  // description: "Traditional Korean street food. The section with multiple sections.",
  // footer: "Street Eats are delicious footers to demonstrate the use of the footer property.",
  sections: {
    Kimbap: {
      name: "Kimbap (Korean Rice Rolls)",
      // description:
      // "Kimbap is a popular Korean dish made of cooked rice, vegetables, and meat, rolled in gim (dried seaweed).",
      footer: "",
      items: [
        {
          english: "NongBu Kimbap",
          korean: " 꼬마김밥",
          description:
            "Pickled radish, carrots, asparagus, shiitake mushrooms and rice rolled in laver seaweed.",
          price: 16,
          notes: "this is a menu note - italic",
          modifiers: ["gluten-free", "vegan"],
        },
      ],
    },
    Jeon: {
      name: "Jeon (Korean Pancakes)",
      // description:
      // "Jeon is a Korean pancake made with a variety of ingredients, including vegetables, seafood, and meats.",
      // footer:
      // "Don’t forget to order a bottle of Makguli with your pancake. Makguli (a light Korean rice wine) is the traditional pairing for Jeon.",
      items: [
        {
          english: "Cheese Ramyun Jeon",
          korean: "치즈라면전",
          description:
            "Ramyun noodles and cheddar cheese pancake with spicy mayo dip.",
          price: 14,
          notes: "Best served with beer ",
          modifiers: ["vegan", "gluten-free"],
        },
        {
          english: "Kimchi Jeon",
          korean: "김치전",
          description: "Kimchi and chive pancakes.",
          price: 14,
          notes: "",
          modifiers: [],
        },
        {
          english: "Seafood Pajeon",
          korean: "해물파전",
          description:
            "Korean pancake loaded with shrimp, squid, and green onions.",
          price: 17,
          notes: "",
          modifiers: [],
        },
      ],
    },
    Ddeokbokki: {
      name: "Ddeokbokki (Rice Cakes)",
      description:
        "Ddeokbokki is a popular Korean dish made of rice cakes, fish cakes, and vegetables, simmered in a spicy, red chili sauce.",
      footer: "",
      items: [
        {
          english: "Spicy Ddeokbokki",
          korean: "매운떡볶이",
          description: "Rice cakes and fishcakes in a spicy sauce.",
          notes: "notes: Traditional street fare.",
          price: 15,
          notes: "",
          modifiers: [],
        },
        {
          english: "Fried Ddeokbokki",
          korean: "기름떡볶이",
          description:
            "Lightly fried rice akes in a sweet and spicy garlic sauce.",
          notes: "notes: Vegetarian",
          price: 14,
          notes: "",
          modifiers: [],
        },
        {
          english: "Honey Butter Ddeokbokki",
          korean: "허니버터떡볶이",
          description: "Lightly fried rice cakes smothered in honey & butter.",
          notes: "notes: Vegetarian & Gluten Free",
          price: 14,
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
    "A bowl of rice and ssam (lettuce wraps) are an essential part of a Korean meal. Don’t forget to add them!",
  footer:
    "Meat & Ssam are delicious footers to demonstrate the use of the footer property.",
  sections: {
    MeatSsam: {
      // name: "Meat & Ssam",
      // description:"A bowl of rice and ssam (lettuce wraps) are an essential part of a Korean meal. Don’t forget to add them!",
      // footer: "A description of the footer",
      items: [
        {
          english: "Bulgogi",
          korean: "불고기",
          description:
            "Thinly sliced beef with mushrooms, onions, carrots and cabbage.",
          price: 23,
          notes: "",
          modifiers: [],
        },
        {
          english: "Fire Chicken (Buldak)",
          korean: "불닭",
          description:
            "Chicken, vegetables, Korean sweet potato, rice cakes, and perilla leaves in a spicy sauce.",
          price: 22,
          notes: "",
          modifiers: [],
        },
        {
          english: "Kimchi Jjim",
          korean: "김치찜",
          description: "Pork belly, stewed with Kimchi.",
          price: 23,
          notes: "",
          modifiers: [],
        },
        {
          english: "Pork Bulgogi",
          korean: "돼지불고기",
          description: "Porkbelly pan friend in a sweet and spicy sauce.",
          price: 22,
          notes: "",
          modifiers: [],
        },
        {
          english: "Spicy Squid (Ojingeo Bokkeum)",
          korean: "오징어볶음",
          description:
            "Panfried squid and vegetables in a sweet and spicy sauce.",
          price: 24,
          notes: "",
          modifiers: [],
        },
        {
          english: "Spicy O-Sam",
          korean: "오삼",
          description:
            "Prk bellly and squid pan fried in a sweet and spicy sauce with perilla.",
          price: 24,
          notes: "",
          modifiers: [],
        },
        {
          english: "Make it a Ssam (Lettuce Wrap)",
          korean: "쌈",
          description:
            "Green leaf lettuce, fresh garlic, serrano peppers, and our very special Ssamjang.",
          price: 6,
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
    "Most Korean rice dishes like Deopbaps and Bibimbaps are meant to be mixed well in the bowl before eating.",
  footer: "What a footer for a section!",
  sections: {
    RiceBowls: {
      // name: "Rice Bowls & Noodles",
      // description: "A description of the section",
      // footer: "A description of the footer",
      items: [
        {
          english: "Kimchi Fried Rice",
          korean: "김치볶음밥",
          description:
            "Kimchi and pork belly fried with rice and topped with a fried egg.",
          price: 19,
          notes: "",
          modifiers: [],
        },
        {
          english: "Bibimbap",
          korean: "비빔밥",
          description:
            "Seasoned vegetables, beef and egg on rice. Served with gochujang sauce.",
          price: 18,
          notes: "",
          modifiers: [],
        },
        {
          english: "Vegetarian Bibimbap",
          korean: "비빔밥",
          description:
            "Vegetables & mushrooms on rice. Served with gochujang sauce.",
          price: 17,
          notes: "",
          modifiers: [],
        },
        {
          english: "Butter Bulgogi Deopbap",
          korean: "불고기덮밥",
          description:
            "Thinly shaved beef with shiitake and onions in buttery bulgogi sauce. Served on rice and topped with an egg.",
          price: 19,
          notes: "",
          modifiers: [],
        },
        {
          english: "3 Mushroom Japchae",
          korean: "버섯잡채",
          description:
            "Seasoned vegetables, beef and egg on rice. Served with gochujang sauce.",
          price: 19,
          notes: "",
          modifiers: [],
        },

        {
          english: "Beef Japchae",
          korean: "버섯잡채",
          description: "Beef & vegetables with sweet potato noodles.",
          price: 23,
          notes: "",
          modifiers: [],
        },

        {
          english: "Jjimdak",
          korean: "찜닭",
          description:
            "Chicken and vegetables with sweet potato noodles in a sweet and savoury soy sauce.",
          price: 22,
          notes: "",
          modifiers: [],
        },
        {
          english: "O-Sam Noodles",
          korean: "오삼볶음면",
          description:
            "Squid and porkbelly with ramyum noodles in a sweet soy sauce. ",
          price: 23,
          notes: "",
          modifiers: [],
        },
        {
          english: "Korean Doshirak",
          korean: "도시락",
          description: "Korean egg, fried kimchi and eggs on rice.",
          price: 999,
          notes: "",
          modifiers: [],
        },
        {
          english: "Oden Tang",
          korean: "오뎅탕",
          description: "Fishcakes in a light broth.",
          price: 999,
          notes: "",
          modifiers: [],
        },
      ],
    },
  },
};

const sharing = {
  title: "Sharing Plates & Jeongol",
  description:
    "(Serves 2-3), plus a good deal of descrption to fill this space up to two lines.",
  footer: "Make sure to share this footer with friends and family!",
  sections: {
    Sharing: {
      // name: "Sharing Plates & Jeongol",
      // description: "A description of the section",
      // footer: "A description of the footer",
      items: [
        {
          english: "Spicy O-Sam",
          korean: "오삼",
          description:
            "Pork belly and squid pan fried in spicy sauce with perilla.",
          price: 999,
          notes: "",
          modifiers: [],
        },
        {
          english: "Budae Jjigae",
          korean: "부대찌개",
          description:
            "Military stew. Bacon, spam and sausage combined with Korean spices and ramyun noodles.",
          price: 27,
          notes: "",
          modifiers: [],
        },
        {
          english: "Bulgogi Jeongol",
          korean: "불고기전골",
          description:
            "Beef bulgogi hotpot with sweet potato noodles and rice cakes.",
          price: 35,
          notes: "",
          modifiers: [],
        },

        {
          english: "Gamjatang",
          korean: "감자탕",
          description: "Spicy pork neck and potato soup.",
          price: 999,
          notes: "",
          modifiers: [],
        },
      ],
    },
  },
};

const drinks = {
  title: "Drinks",
  description: "Have a nice drink with your nice food!",
  footer: "tip your waiter!",
  sections: {
    beer: {
      // name: "Beer",
      // english: "Beer",
      // korean: "MekJu",
      // description: "beer is good",
      items: [
        {
          english: "Cass",
          korean: " 카스",
          description: "",
          price: 6.5,
          notes: "5% 355ml",
          modifiers: [],
        },
        {
          english: "Kloud",
          korean: "클라우드",
          description: "",
          price: 6.5,
          notes: "5% 355ml",
          modifiers: [],
        },
        {
          english: "Sapporo",
          korean: "사포로",
          description: "",
          price: 6.5,
          notes: "5% 355ml",
          modifiers: [],
        },

        {
          english: "Asahi",
          korean: "아사히",
          description: "",
          price: 6.5,
          notes: "5.2% 355ml",
          modifiers: [],
        },

        {
          english: "Beer Bucket",
          korean: "맥주 버킷",
          description: "Any 4 Beers",
          price: 24,
          notes: "",
          modifiers: [],
        },
      ],
    },
    soju: {
      name: "Soju 소주",
      description: "Soju is not sake, get outta here.",
      items: [
        {
          english: "Jinro Chamisul",
          korean: "진로 참이슬",
          description: "Worlds # selling spirit!",
          price: "17",
          price2: "3.5 60ml",
          notes: "17% 360ml",
          modifiers: [],
        },

        {
          english: "GoodDay",
          korean: "굿데이",
          description: "rice soju",
          price: "18",
          price2: "4 60ml",
          notes: "Worlds #1 selling spirit!",
          modifiers: [],
        },

        {
          english: "Flavours",
          korean: "플레이버",
          description: "Apple, Peach, Citrus, Grape, Yogurt, Plum, Mango",
          price: "18",
          price2: "4 60ml",
          notes: "13 - 14%",
          modifiers: [],
        },
      ],
    },
    somek: {
      name: "So-Mek",
      description: "Mixing Soju & Beer is called So-Mek (SOju + MEKju)",
      items: [
        {
          english: "SoMek",
          korean: "소맥",
          description: "2oz Soju & 1 bottle beer",
          price: 8.5,
          notes: "",
          modifiers: [],
        },
        {
          english: "SoMek 'Love Shot'",
          korean: "러브샷",
          description: "2oz Soju & 1 bottle beer x2",
          price: 16,
          notes: "",
          modifiers: [],
        },
        {
          english: "SoMek Combo",
          korean: "콤보",
          description: "1 Bottle Soju & 2 bottles beer",
          price: 28,
          notes: "",
          modifiers: [],
        },
      ],
    },

    spirits: {
      name: "Spirits",
      description: "By the bottle",
      items: [
        {
          english: "Bekseju",
          korean: "백세주",
          description:
            "Herbal wine, mildly sweet with ginseng notes. Pair with something spicy!",
          price: 19,
          notes: "13% 375ml",
          modifiers: [],
        },
        {
          english: "Bokbunja um",
          korean: "복분자음",
          description: "Sweet black raspberry wine. Pair with dessert!",
          price: 19,
          notes: "13% 375ml",
        },
        {
          english: "Kook Son Dang Makgeolli",
          korean: "국손당 막걸리",
          description: "Traditional Korean rice wine. Pair with korean snacks!",
          price: 17,
          notes: "6% 750ml",
        },
      ],
    },
    pop: {
      name: "Soft Drinks",
      items: [
        {
          english: "Pop",
          korean: "음료",
          description: "Coke, Coke Zero, Sprite, Ginger Ale, Iced Tea",
          price: 3,
          notes: "",
          modifiers: [],
        },
        {
          english: "Milkis",
          korean: "밀키스",
          description: "Korean milk soda",
          price: 4,
          notes: "",
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
