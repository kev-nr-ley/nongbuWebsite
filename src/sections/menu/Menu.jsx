const streetEats = {
  title: "Street Eats",
  // description: "Traditional Korean street food. The only section with multiple sections.",
  // footer: "Street Eats are delicious footers to demonstrate the use of the footer property.",
  sections: {
    Kimbap: {
      name: "Kimbap (Korean Rice Rolls)",
      description:
        "Kimbap is a popular Korean dish made of cooked rice, vegetables, and meat, rolled in gim (dried seaweed).",
      footer:
        "Don’t forget to order a bottle of Makguli with your Kimbap. Makguli (a light Korean rice wine) is the traditional pairing for Kimbap.",
      items: [
        {
          english: "NongBu Kimbap",
          korean: " 꼬마김밥",
          description:
            "Pickled radish, carrots, asparagus, shiitake mushrooms and rice rolled in laver seaweed.",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: [],
        },
      ],
    },
    Jeon: {
      name: "Jeon (Korean Pancakes)",
      description:
        "Jeon is a Korean pancake made with a variety of ingredients, including vegetables, seafood, and meats.",
      footer:
        "Don’t forget to order a bottle of Makguli with your pancake. Makguli (a light Korean rice wine) is the traditional pairing for Jeon.",
      items: [
        {
          english: "Cheese Ramyun Jeon",
          korean: "치즈라면전",
          description:
            "Ramyun noodles and cheddar cheese pancake with spicy mayo dip.",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: [],
        },
        {
          english: "Kimchi Jeon",
          korean: "김치전",
          description: "Kimchi and chive pancakes.",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: [],
        },
        {
          english: "Seafood Pajeon",
          korean: "해물파전",
          description:
            "Korean pancake loaded with shrimp, squid, and green onions.",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: [],
        },
      ],
    },
    Ddeokbokki: {
      name: "Ddeokbokki (Rice Cakes)",
      description:
        "Ddeokbokki is a popular Korean dish made of rice cakes, fish cakes, and vegetables, simmered in a spicy, red chili sauce.",
      footer:
        "Don’t forget to order a bottle of Makguli with your Ddeokbokki. Makguli (a light Korean rice wine) is the traditional pairing for Ddeokbokki.",
      items: [
        {
          english: "Spicy Ddeokbokki",
          korean: "매운떡볶이",
          description: "Rice cakes and fishcakes in a spicy sauce.",
          note: "Traditional street fare.",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: [],
        },
        {
          english: "Fried Ddeokbokki",
          korean: "기름떡볶이",
          description:
            "Lightly fried rice akes in a sweet and spicy garlic sauce.",
          note: "Vegetarian",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: [],
        },
        {
          english: "Honey Butter Ddeokbokki",
          korean: "허니버터떡볶이",
          description: "Lightly fried rice cakes smothered in honey & butter.",
          note: "Vegetarian & Gluten Free",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: ["Veg", "GF"],
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
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: [],
        },
        {
          english: "Fire Chicken (Buldak)",
          korean: "불닭",
          description:
            "Chicken, vegetables, Korean sweet potato, rice cakes, and perilla leaves in a spicy sauce.",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: [],
        },
        {
          english: "Kimchi Jjim",
          korean: "김치찜",
          description: "Pork belly, stewed with Kimchi.",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: ["Can be made gluten free"],
        },
        {
          english: "Pork Bulgogi",
          korean: "돼지불고기",
          description: "Porkbelly pan friend in a sweet and spicy sauce.",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: ["Can be made gluten free"],
        },
        {
          english: "Spicy Squid (Ojingeo Bokkeum)",
          korean: "오징어볶음",
          description:
            "Panfried squid and vegetables in a sweet and spicy sauce.",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: [],
        },
        {
          english: "Spicy O-Sam",
          korean: "오삼",
          description:
            "Prk bellly and squid pan fried in a sweet and spicy sauce with perilla.",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: [],
        },
        {
          english: "Make it a Ssam (Lettuce Wrap)",
          korean: "쌈",
          description:
            "Green leaf lettuce, fresh garlic, serrano peppers, and our very special Ssamjang.",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
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
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: [],
        },
        {
          english: "Bibimbap",
          korean: "비빔밥",
          description:
            "Seasoned vegetables, beef and egg on rice. Served with gochujang sauce.",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: [],
        },
        {
          english: "Vegetarian Bibimbap",
          korean: "비빔밥",
          description:
            "Vegetables & mushrooms on rice. Served with gochujang sauce.",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: ["Vegetarian", "Gluten Free"],
        },
        {
          english: "Butter Bulgogi Deopbap",
          korean: "불고기덮밥",
          description:
            "Thinly shaved beef with shiitake and onions in buttery bulgogi sauce. Served on rice and topped with an egg.",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: [],
        },
        {
          english: "3 Mushroom Japchae",
          korean: "버섯잡채",
          description:
            "Seasoned vegetables, beef and egg on rice. Served with gochujang sauce.",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: [],
        },

        {
          english: "Beef Japchae",
          korean: "버섯잡채",
          description: "Beef & vegetables with sweet potato noodles.",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: [],
        },

        {
          english: "Jjimdak",
          korean: "찜닭",
          description:
            "Chicken and vegetables with sweet potato noodles in a sweet and savoury soy sauce.",
          prices: {
            Regular: 5.99,
            "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: [],
        },
        {
          english: "O-Sam Noodles",
          korean: "오삼볶음면",
          description:
            "Squid and porkbelly with ramyum noodles in a sweet soy sauce. ",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: [],
        },
        {
          english: "Korean Doshirak",
          korean: "도시락",
          description: "Korean egg, fried kimchi and eggs on rice.",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: [],
        },
        {
          english: "Oden Tang",
          korean: "오뎅탕",
          description: "Fishcakes in a light broth.",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
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
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: [],
        },
        {
          english: "Budae Jjigae",
          korean: "부대찌개",
          description:
            "Military stew. Bacon, spam and sausage combined with Korean spices and ramyun noodles.",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: [],
        },
        {
          english: "Bulgogi Jeongol",
          korean: "불고기전골",
          description:
            "Beef bulgogi hotpot with sweet potato noodles and rice cakes.",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: [],
        },

        {
          english: "Gamjatang",
          korean: "감자탕",
          description: "Spicy pork neck and potato soup.",
          prices: {
            Regular: 5.99,
            // "Happy Hour": 4.99,
            // "Late Night": 4.99,
          },
          modifiers: [],
        },
      ],
    },
  },
};

export { streetEats, meatSsam, bowls, sharing };
