Toy Car Collection (Lab 3)

A simple web application built with HTML, CSS, and JavaScript, designed to display detailed information about selected diecast toy cars.
This project follows the requirements of COMP1073 – Lab 3 (Object Constructors).

📌 Overview

The application uses a custom ToyCar constructor to generate car objects with multiple properties.
Users can select a model from a dropdown list and see:

Car photo (PNG)

Model name + brand

Scale

Color

Production year

Model code

Category

Series

Description

User rating (editable)

Additional technical details

The interface is clean, minimalistic, and built in white tones as required.

Technologies Used

HTML5 — page structure

CSS3 — simple layout, white theme

JavaScript (ES6) — constructor, data rendering, UI interactions

Git & GitHub — version control

GitHub Pages — live hosting

ToyCar Constructor

The project is based on a constructor function:

function ToyCar(options) {
  this.id = options.id;
  this.name = options.name;
  this.brand = options.brand;
  this.year = options.year;
  this.scale = options.scale;
  this.color = options.color;
  this.category = options.category;
  this.series = options.series;
  this.modelCode = options.modelCode;
  this.material = options.material;
  this.hasOpeningDoors = options.hasOpeningDoors;
  this.hasPullBackAction = options.hasPullBackAction;
  this.lengthCm = options.lengthCm;
  this.weightGrams = options.weightGrams;
  this.price = options.price;
  this.description = options.description;
  this.image = options.image;
  this.caption = options.caption;
  this.userRating = options.userRating || 3;
}


Each car has 15+ properties, matching the assignment requirements.

Project Structure
lab-3-/
  index.html
  styles.css
  app.js
  assets/
    ford-bronco-1978.png
    lotus-emira.png
    buick-gsx-1970.png
    vw-panel-van-thanksgiving.png
    bmw-x5-g05-red.png
    jeep-renegade-2017.png
    mitsubishi-eclipse-brian.png
    datsun-240z-1972.png
    lamborghini-aventador-pink.png
    chevy-camaro-2016.png
    optimus-prime-ecto1.png
    chevy-belair-1957.png


All images are PNG, matching the updated code.

Features

12 real car models from different brands (Jada, Kinsmart, Showcasts, Greenlight, etc.)

Clean modern UI

Dynamic model selection

Automatic rendering of all properties

User rating system (saves rating inside object)

Fully responsive layout


Live Demo (GitHub Pages)

https://zelimar1337.github.io/lab-3-/

(If not working, enable GitHub Pages in Settings → Pages)

Progressive Git Commits

To match the assignment requirements:

Added HTML structure

Added CSS styles (white theme)

Created ToyCar constructor

Added model dataset

Added rendering logic

Added dropdown selection

Added rating system

Added PNG car images

Bug fixes and cleanup

Final adjustments

Your commit history shows a proper development flow.

Author

Arsen M.
Georgian College — COMP1073
