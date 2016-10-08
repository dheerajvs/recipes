#!/usr/bin/env node

'use strict';

const pug = require('pug');
const fs = require('fs');
const dashify = require('dashify');
let data = require('./data');

const fn = pug.compileFile('templates/recipe.pug', {pretty: true});

data.recipes.map(
  (recipe) => {
    const html = fn(Object.assign({}, data, recipe));
    const path = `./public/${dashify(recipe.name)}.html`;
    fs.writeFileSync(path, html);
    console.info(`pug.js: written to ${path}`);
  }
);
