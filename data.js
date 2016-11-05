'use strict';

let moment = require('moment');
require('moment-duration-format');

exports.moment = moment;
exports.dashify = require('dashify');

exports.config = {
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

let recipes = [
  {
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
  }, {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "mainEntityOfPage": "http://example.ampproject.org/recipe-metadata.html",
    "name": "Egg Fried Rice",
    "image": {
      "@type": "ImageObject",
      "url": "/img/egg-fried-rice.jpg",
      "height": 200,
      "width": 200
    },
    "author": {
      "@type":"Person",
      "name":"Sowmya B A"
    },
    "datePublished": "2016-10-07",
    "description": "Egg Fried Rice is an easy to make yummy spicy rice dish. ",
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
  }, {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "mainEntityOfPage": "http://example.ampproject.org/recipe-metadata.html",
    "name": "Vegetable Poha",
    "image": {
      "@type": "ImageObject",
      "url": "/img/vegetable-poha.jpg",
      "height": 200,
      "width": 200
    },
    "author": {
      "@type":"Person",
      "name":"Sowmya B A"
    },
    "datePublished": "2016-10-07",
    "description": "Vegetable poha is easy to make, made with flattened rice and loaded with lots Vegetables",
    "totalTime": "PT30M",
    "recipeYield": "2 servings",
    "recipeIngredient": [
      "Flattened/Beaten Rice - 1½ cup (Semi thick variety)",
      "Oil - 1 tbsp",
      "Groundnuts - 2 tbsp (Optional)",
      "Cashewnuts - 5-6 nos (Optional)",
      "Channa Dhal / Bengal Gram - 1 tbsp",
      "Urad Dhal / Black Gram - 1 tbsp",
      "Mustard Seeds - 2 tsp",
      "Green Chilly - 3 nos. finely chopped",
      "Curry Leaves - few to temper",
      "Shallots or big onion - ½ cup chopped",
      "Ginger - 1 tbsp grated",
      "Turmeric - 1 tsp",
      "Salt - as required",
      "Mixed vegetables - ¾ cup Semi-Cooked by steaming / microwaved for 5 minutes @ 900watts / pressure cook for 1 whistle (carrots, potato, green peas, cabbage, peppers, capsicum)",
      "Lemon extracted juice - 2 tbsp",
      "Coriander Leaves - 2 tbsp",
      "Grated Coconut - 2 tbsp (Optional)"
    ],
    "recipeInstructions": "1.Wash beaten rice 2-3 times and soak it with 1 cup of water, keep it aside for 15 minutes to soak. It should feel like cooked rice once all the water is absorbed.\n2. Meanwhile, Take a pan/wok, add oil and heat it.\n3. If you choose to use groundnuts when it turns golden brown add cashew. Fry till it turns golden brown.\n3. Add channa dhal, following that urad dhal and wait it turns golden brown.\n4. Add mustard seeds and let them crackle.\n5. Add chopped green chillies and saute.\n6. Add curry leaves into it.\n7. Add chopped onions and saute till it turns pale color.\n8. Add salt as per taste required.\n9. Add turmeric powder and mix well.\n10. Add the semi-cooked vegetables without water in it and roast it for 30 seconds till all the moisture is drained out.\n11. Add grated ginger.\n12. Add soaked beaten rice and mix well.\n13. Finally add in the lemon juice and freshly chopped coriander leaves and mix well for even distribution.\n13. If you choose to add grated Coconut you can add it now and mix well for even distribution.\n14. Switch off the flame, after a few seconds (approximately 30 seconds).\n15. Serve hot for breakfast or tea time snacks.",
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
  }, {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "mainEntityOfPage": "http://example.ampproject.org/recipe-metadata.html",
    "name": "Vathal Kuzhambu",
    "image": {
      "@type": "ImageObject",
      "url": "/img/vathal-kuzhambu.jpg",
      "height": 200,
      "width": 200
    },
    "author": {
      "@type":"Person",
      "name":"Sowmya B A"
    },
    "datePublished": "2016-10-07",
    "description": "Vathal Kuzhambu is a spicy and tangy traditional Indian gravy native of Tamil Nadu",
    "totalTime": "PT25M",
    "recipeYield": "4 servings",
    "recipeIngredient": [
      "Sundakkai Vathal (Dried Turkey Berry)- 1/4 cup",
      "Tamarind - 1/2 lemon sized",
      "Small Onion - 15",
      "Garlic pods - 5",
      "Sambar powder - 3 tsp",
      "Water - 1 cup",
      "Powdered Jaggery - 1 tsp (optional)",
      "Salt - to taste",
      "Tempering:",
      "Gingelly Oil - 3 tbsp",
      "Mustard Seeds - 1/2 tsp",
      "Jeera - 1/2 tsp",
      "Chana Dal - 3/4 tsp",
      "Fenugreek seeds - 1/4 tsp",
      "Red Chillies - 2",
      "Curry Leaves - a small sprig"
    ],
    "recipeInstructions": "1. Soak tamarind in hot water and extract the thin tamarind water.\n2. Peel the skin of garlic and small onions and make it ready.\n3. In a pan - fry the sundakkai vathal till dark browned and keep aside.\n4. In the same pan heat oil - add the items listed under 'Tempering', then add onion and garlic, fry for 2 minutes.\n5. Then add sambar powder.\n6. Fry for a minute.\n7. Then add tamarind water and let it boil for few minutes, till oil separates and it becomes slightly thick.\n8. Then add sundakkai vathal and let it boil for a good 5 minutes in low flame.\n9. Then finally add jaggery stir well and switch off.",
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
  }, {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "mainEntityOfPage": "http://example.ampproject.org/recipe-metadata.html",
    "name": "Dal Makhani",
    "image": {
      "@type": "ImageObject",
      "url": "/img/dal-makhani.jpg",
      "height": 200,
      "width": 200
    },
    "author": {
      "@type":"Person",
      "name":"Sowmya B A"
    },
    "datePublished": "2016-10-07",
    "description": "Dal makhani is a very popular dish from Punjab made of lentils, cream and butter",
    "totalTime": "PT45M",
    "recipeYield": "4 servings",
    "recipeIngredient": [
      "Whole masoor dal / brown lentils / Kidney beans - 1 cup",
      "Water - 2.5 to 3 cups",
      "Cumin seeds - 1 tsp",
      "Ginger-Garlic paste - 1 tsp",
      "Onion - 1 medium, chopped",
      "Tomatoes - 2 medium, chopped",
      "Green chili - 2, chopped",
      "Turmeric powder - 1 tsp",
      "Red chili powder - ½ tsp",
      "Garam masala powder - ½ tsp",
      "Crushed kasuri methi or oil roasted fresh methi leaves - 1 tsp",
      "Cream / butter - 2-3 tbsp",
      "Oil - 2 tbsp",
      "Few chopped coriander leaves",
      "Grated ginger and cream / butter for garnishing",
      "Salt as required"
    ],
    "recipeInstructions": "1. Soak brown lentils over-night.\n2. Pressure cook the lentils with 2.5 to 3 cups water till they are cooked soft.\n3. Heat oil for tempering the dal in the pan.\n4. Fry the cumin.\n5. Add the onions and fry till the onions are golden brown.\n6. Add the ginger-garlic paste and fry for a minute, till the raw aroma of ginger-garlic disappears.\n7. Add the tomatoes and green chilli, and fry again for a few minutes till the tomatoes become soft.\n8. Add turmeric, red chilli powder and mix well.\n9. Add the dal to the tempering and then add salt as per requirement.\n10. Simmer to low or medium flame and let the dal cook for a 2-3 minutes.\n11. If the dal is too thick, then add some hot water to get the right consistency.\n12. Mash some dal with your spoon at the sides of the pan, this is done to get a creamier consistency.\n13. Finally add the cream, garam masala powder and crushed kasuri methi. Stir and switch off the burner.\n14. Garnish the dal with kasuri methi, cream or butter and chopped coriander.\n15. Masoor dal is ready to be served with some basmati rice or rotis.",
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
  }, {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "mainEntityOfPage": "http://example.ampproject.org/recipe-metadata.html",
    "name": "Yenagai or Stuffed Eggplant",
    "image": {
      "@type": "ImageObject",
      "url": "/img/yenagai.jpg",
      "height": 200,
      "width": 200
    },
    "author": {
      "@type":"Person",
      "name":"Sowmya B A"
    },
    "datePublished": "2016-10-07",
    "description": "Yennegai is a mouth watering North Karnataka side dish for rotis and rice.",
    "totalTime": "PT45M",
    "recipeYield": "2 servings",
    "recipeIngredient": [
      "Round purple Brijal / Eggplant - 4-6 Small",
      "Oil - 1 tbsp",
      "Mustard seeds - 1 tsp",
      "Aesofitida - generous pinch",
      "Onion - 1/2 cup, chopped finely",
      "Curry leaves - 10-12",
      "Salt as per taste",
      "For the Masala:",
      "Grated fresh coconut - 1/2 to 3/4 cup",
      "Coriander seeds - 2-2.5 tsp",
      "Cumin seeds - 1 tsp",
      "Dry Red Chilies - 4-5, based on preferred hotness",
      "Sesame seeds (black / white) - 2 tsp",
      "Peanut - 1 tbsp",
      "Tamarind paste- 1 tsp",
      "Cloves - 3-4 (optional)",
      "Cinnamon stick - 1 inch (optional)",
      "Powdered Jaggery - 1/2 tsp (Optional)",
      "Onion - 1/4 cup, chopped coarsely"
    ],
    "recipeInstructions": "1. Dry roast the coriander seeds, cumin, red chilies, cloves, cinnamon, sesame and peanuts until the peanuts start popping a little; Make sure not to burn any of the spices.\n2. Grind the roasted spices with coconut, onion, tamarind, jaggery and salt; Add just enough water to make it a coarse paste; Keep aside.\n3. Make 2/4 slits on the brinjal/eggplants, lengthwise - Such that the slits form a "+" sign on each brinjal / eggplant; Be careful while making the slits, and make sure the eggplant is in 1 piece and not quartered while slitting them; Retain the stalk of the eggplant.\n4. Stuff the brinjal / eggplants with the ground masala and keep aside; Save the remaining masala for making the gravy.\n5. Heat oil in a pan; Temper with mustard seeds, aesofotida and curry leaves.\n6. Add finely chopped onions and saute for a minute.\n6. Slowly drop the stuffed eggplants one by one into the pan; Cook covered on medium heat for 4-5 minutes; Flip the eggplants once in a while, so that they are cooked on all sides;\n7. Add some water to the saved masala paste and pour into the pan over the eggplants; Adjust ingredients according to taste'\n8. Saute regularly and continue to cook covered, until the eggplants are well cooked and soft and the gravy reaches the desired consistency.\n9. Remove from the stove and serve hot with rice, rotis, dosas etc.",
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
  }, {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "mainEntityOfPage": "http://example.ampproject.org/recipe-metadata.html",
    "name": "Cabbage Pakoda",
    "image": {
      "@type": "ImageObject",
      "url": "/img/cabbage-pakoda.jpg",
      "height": 200,
      "width": 200
    },
    "author": {
      "@type":"Person",
      "name":"Sowmya B A"
    },
    "datePublished": "2016-10-07",
    "description": "Spicy fried crisp fritters made with cabbage, onion, gram flour and spices.",
    "totalTime": "PT30M",
    "recipeYield": "3-4 servings",
    "recipeIngredient": [
      "Gram flour - 3/4 cup heaped",
      "Rice flour - 2 tbsp",
      "Green cabbage - 3/4 cup finely chopped ",
      "Onions - 1/4 cup finely chopped",
      "Green chilies - 1 to 2 finely chopped",
      "Ginger - 1/2 inch finely grated",
      "Turmeric powder - 1/4 tsp",
      "Red Chili powder - 1/2 tsp or add as required",
      "Jeera powder - 1/4 tsp",
      "Fresh Coriander leaves - 2 tsp finely chopped",
      "Water as required to make a medium thick batter",
      "Asafoetida - 1 pinch (optional)",
      "Lemon Juice - 1 tbsp (Optional)",
      "Salt - as required",
      "Vegitable oil - 1/2 ltr"
    ],
    "recipeInstructions": "1. In a bowl, add cabbage, onions, green chillies, ginger, turmeric powder, red chilli powder, jeera powder, fresh coriander leaves, asafoetida and lemon juice if you wish to add. Salt as required.\n2. Add water to make batter and mix it well without any lumps. The pakoda batter should not be thin but of medium thick consistency.\n3. Check the spices, if salt or the spiciness is less, accordingly add the salt or chili powder.\n4. Heat oil in a pan. keep the flame medium. When the oil becomes hot, take spoonful of the pakoda batter and pour it in the oil. Add 6-8 spoonfuls of the pakoda batter in the oil individually, so you have 6-8 pakodas frying at a time.\n5. Fry the cabbage pakodas in batches till they become crisp and golden brown.\n6. Drain the fried pakodas on kitchen paper towels, so that any excess oil is drained out to the paper towels.\n7. Serve the cabbage pakodas hot with tomato ketchup or mint coriander chutney and sweet tamarind chutney.",
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
  }, {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "mainEntityOfPage": "http://example.ampproject.org/recipe-metadata.html",
    "name": "Sesame Peanut Laddoos",
    "image": {
      "@type": "ImageObject",
      "url": "/img/sesame-peanut-laddoos.jpg",
      "height": 200,
      "width": 200
    },
    "author": {
      "@type":"Person",
      "name":"Sowmya B A"
    },
    "datePublished": "2016-10-26",
    "description": "Sesame Peanut Laddoos is an easy to make healthy, sugar free sweet.",
    "totalTime": "PT45M",
    "recipeYield": "6-8 servings",
    "recipeIngredient": [
      "Peanuts -	1 cup",
      "White sesame -	1 cup",
      "Black sesame -	1 cup",
      "Dry jaggery powder	- 1 1/2 cup",
      "Cardamom powder	- to taste"
    ],
    "recipeInstructions": "1. Mix both white and black sesame.\n2. Roast the sesame seeds in a deep skillet until they are aromatic and start popping. This will take around 3-4 minutes on a medium flame. Transfer it to a plate and let it cool\n3. Now roast the peanut in the same deep skillet till you achive the crisp texture with roated peanut aroma. This will take around 7-8 minutes on medium flame. The peal of the peanut will turn golden brown, do not let it tar and become black. Transfer it to a separate plate and let it cool.\n4. Once the peanuts is cooled, you can remove the peal of the peanut for better taste.\n5. In a food processor, pulse the roasted peanuts first till you get an almost fine powder. Do the same with the sesame seeds.\n6. Mix the sesame, peanut powder, cardamom powder and pulse for 2 minutes or so, until the natural oils are released and they come together.\n7. Now add the powdered jaggery and pulse for 10-20 seconds so that all the ingredients mix well.\n8. Remove onto a plate and shape them to balls of desired size.\n9. Can be stored in a box and consumed over a weeks time.",
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
  }, {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "mainEntityOfPage": "http://example.ampproject.org/recipe-metadata.html",
    "name": "Kashi Halwa",
    "image": {
      "@type": "ImageObject",
      "url": "/img/kashi-halwa.jpg",
      "height": 200,
      "width": 200
    },
    "author": {
      "@type":"Person",
      "name":"Sowmya B A"
    },
    "datePublished": "2016-10-07",
    "description": "Kashi Halwa is a delicious Indian recipe made from ash guard, served hot as a dessert",
    "totalTime": "PT60M",
    "recipeYield": "4 servings",
    "recipeIngredient": [
      "Winter melon/ash gourd - 2 to 2.5 cups finely grated",
      "Sugar - 1.5 cups",
      "Saffron - 4 to 5 strands",
      "Cardamom powder - 1/2 tsp",
      "Raisins and Cashew mixture - 1 tbsp",
      "Ghee - 2 + 2 tsp"
    ],
    "recipeInstructions": "1. Drain out excess water from the winter melon/ash gourd and grate.\n2. Heat 2 tsp ghee in a pan and roast the grated winter melon/ ash gourd until it is coated well with ghee.\n3. Then pressure cook it for 1-2 whistles, or until cooked completely.\n4. Transfer the contents to the pan and saute it on medium heat until all the water evaporates.\n5. Once the quantity is reduced to three fourth, add sugar and mix well.\n6. Cook further, until all the moisture evaporates and the winter melon/ ash guard  becomes a single lump. It usually takes about 40-50 mins. Stir frequently towards the end.\n7. Add elaichi and saffron, mix well.\n8. Roast raisins and cashews in ghee and add to the halwa.",
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
  }, {
    "@context": "http://schema.org/",
    "@type": "Recipe",
    "mainEntityOfPage": "http://example.ampproject.org/recipe-metadata.html",
    "name": "Badam Halwa",
    "image": {
      "@type": "ImageObject",
      "url": "/img/badam-halwa.jpg",
      "height": 200,
      "width": 200
    },
    "author": {
      "@type":"Person",
      "name":"Sowmya B A"
    },
    "datePublished": "2016-10-07",
    "description": "Badam Halwa is a delicious Indian recipe made from almond, served hot as a dessert",
    "totalTime": "PT90M",
    "recipeYield": "4 servings",
    "recipeIngredient": [
      "Almonds/Badam - 1/2 cup",
      "Sugar - 1/2 cup or 3/4 cup based on desired sweetness",
      "Milk - 1/2 cup",
      "Ghee - 1/4 cup",
      "Saffron - a pinch / few strands (soak it in a tbsp of milk)",
      "Kesari color - a pinch for color (optional)"
    ],
    "recipeInstructions": "1. Soak almonds overnight and peel the skin. Alternatively you can boil them in hot water for a few minutes and peel the skin.\n2. Grind almonds with 1/4 cup of milk to a smooth paste.\n3. Melt ghee in a kadai and keep it aside.\n4. In the same kadai (as it is coated with ghee, it will prevent the halwa from sticking to the bottom of the pan) bring 1/4 cup of water to boil, switch off the flame, add sugar and let the sugar dissolve completely.\n5. Now add the badam paste, remaining milk, kesari color, saffron and cook on medium flame stirring continuously.\n6. Once it starts thickening and the sides start getting a little dry and flaky, add all the ghee except 2 tsp and cook stirring continuously on low flame.\n7. The ghee will be completely absorbed and the halwa will start leaving the sides of the pan.\n8. Now switch off the flame, add the remaining 2 tsp of ghee and stir for about 3-4 minutes.(this makes the halwa softer when it sets)\n9. Once it cools the halwa will thicken.",
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
  }
];

exports.recipes = recipes;
