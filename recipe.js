let moment = require('moment');
require('moment-duration-format');

let recipe = {
  "@context": "http://schema.org/",
  "@type": "Recipe",
  "mainEntityOfPage": "http://example.ampproject.org/recipe-metadata.html",
  "name": "Spicy Tomato Rice",
  "image": {
    "@type": "ImageObject",
    "url": "/img/tomato-rice.jpg",
    "height": 200,
    "width": 200
  },
  "author": {
    "@type":"Person",
    "name":"Sowmya B A"
  },
  "datePublished": "2016-10-07",
  "description": "Tomato Rice is an easy to make yummy spicy rice dish from South India.",
  "totalTime": "PT30M",
  "recipeYield": "2 servings",
  "recipeIngredient": [
    "Basmati Rice (or other regular rice) - 1 cup",
    "Oil - 2 tbsp",
    "Mustard - ½ tsp",
    "Shahi Jeera - 1 tsp",
    "Cinnamon - ½ inch",
    "Green Cardamom - 1",
    "Cloves - 2-3 nos.",
    "Marathi Moggu - 2 nos.",
    "Star Anise - 1 no.",
    "Black Pepper - 2-3 nos.",
    "Green Chillies (finely chopped) - 1",
    "Curry Leaves - 6-7 leaves",
    "Shallots or Onion (finely chopped) - 1 medium sized",
    "Tomatoes - 3 medium to large sized; finely chopped. (about 200gm)",
    "Turmeric powder - ¼ tsp",
    "Salt - As per taste",
    "Ginger-Garlic Paste - 1 ½ tsp; or ½ inch ginger, + 5-6 medium sized garlic crushed to a paste in mortar pestle. I personally prefer fresh paste.",
    "Fresh Mint Leaves / Pudina - 1 ½ tbsp chopped",
    "Red Chilli Powder - ½ tsp",
    "Fennel seeds - 1 tbsp (Optional)",
    "Coconut milk - ¾ cup & Water - 1 cup",
    "Fresh Coriander Leaves - ½ tbsp chopped",
    "Ghee - 1 tbsp and Lemon Juice - 1 tbsp (Optional)"
  ],
  "recipeInstructions": "1. In a pressure cooker, add oil and get it to heat. Keep in low flame.\n2. Add mustard seeds and get it to crackle.\n3. Add Shahi Jeera, Cinnamon, Green Cardamom, Cloves, Marathi Moggu, Star Anise, Black Pepper and cover the lid for 30 seconds till all the spices start to give out fragrance.\n4. Add Green Chillies and saute it.\n5. Add Curry Leaves and let it become crispy\n6. Add Onion and saute it till the onions turns translucent. Keep stirring and don’t let it tar.\n7. Add tomatoes, turmeric, salt and saute it till the tomatoes becomes pulpy and the oil separates out.\n8. Add Ginger-Garlic paste and stir till the raw aroma of the Ginger-Garlic goes away. Approximately 30 seconds. Keep stirring so that it does tar up.\n9. Add mint leaves and stir it\n10. Add Red Chilli Powder, Fennel seeds and saute it for 30 seconds.\n11. Drain water from soaked Basmati Rice and add it to the cooker. Saute it well so that it gets a coating of the mixture.\n12. Add Coconut Milk, Water and get it to boil\n13. Cover the pressure cooker. Cook for 2 whistles on medium flame. About 10-11 minutes. For softer rice, you can also pressure cook for 3 whistles.\n14. When the pressure settles down on its own, remove the lid and gently fluff the rice.\n15. You can add ghee and lemon juice and fluff the rice gently. It's optional.\n16. Garnish with fresh chopped Coriander leaves\n17. Served hot with chips or onion-tomato raita.",
  "publisher": {
    "@type": "Person",
    "name": "Sowmya B A",
    "image": {
      "@type": "ImageObject",
      "url": "http://cdn.ampproject.org/logo.jpg",
      "width": 60,
      "height": 60
    }
  }
};

recipe.config = {
  "lang": "en",
  "canonical": "http://example.org/recipe",
  "ga": {
    "vars": {
      "account": "UA-XXXXX-Y"
    },
    "triggers": {
      "trackPageview": {
        "on": "visible",
        "request": "pageview"
      }
    }
  }
};

recipe.moment = moment;
module.exports = recipe;
