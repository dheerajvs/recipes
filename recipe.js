let moment = require('moment');
require('moment-duration-format');

let recipe = {
  "@context": "http://schema.org/",
  "@type": "Recipe",
  "mainEntityOfPage": "http://example.ampproject.org/recipe-metadata.html",
  "name": "Grandma's Holiday Apple Pie",
  "image": {
    "@type": "ImageObject",
    "url": "http://images.media-allrecipes.com/userphotos/600x600/1116471.jpg",
    "height": 200,
    "width": 200
  },
  "author": {
    "@type":"Person",
    "name":"Carol Smith"
  },
  "datePublished": "2009-11-05",
  "description": "This is my grandmother's apple pie recipe. I like to add a dash of nutmeg.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.0",
    "reviewCount": "35"
  },
  "prepTime": "PT30M",
  "cookTime": "PT1H",
  "totalTime": "PT1H30M",
  "recipeYield": "1 9\" pie (8 servings)",
  "nutrition": {
    "@type": "NutritionInformation",
    "servingSize": "1 medium slice",
    "calories": "250 cal",
    "fatContent": "12 g"
  },
  "recipeIngredient": [
    "apples",
    "White sugar"
  ],
  "recipeInstructions": "1. Cut and peel apples\n 2. Mix sugar and cinnamon. Use additional sugar for tart apples.\n...",
  "publisher": {
    "@type": "Organization",
    "name": "Google",
    "logo": {
      "@type": "ImageObject",
      "url": "http://cdn.ampproject.org/logo.jpg",
      "width": 600,
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
