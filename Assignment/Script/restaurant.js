const data = [
    {
        image:"https://e0.pxfuel.com/wallpapers/712/351/desktop-wallpaper-biryani-recipes-browse-chicken-biryani-hyderabadi-mutton-biryani-veg-biryani-dum-biryani-recipes-more-at-times-food-thumbnail.jpg",
        foodname:"Biryani",
        recipe: "Step 1: Gather the ingredients.\nStep 2: Rinse and soak the basmati rice.\nStep 3: Sauté onions and ginger-garlic paste.\nStep 4: Cook meat/vegetables with tomatoes, yogurt, and spices.\nStep 5: Add water and rice, cook until rice is fluffy.\nStep 6: Optional: Add saffron and garnish with fried onions and cilantro.\nStep 7: Fluff the rice and serve hot with raita or accompaniments.",

    },
    {
        image:"https://e0.pxfuel.com/wallpapers/502/559/desktop-wallpaper-tasty-samosa-snack-bollywood-cricket-travel-recipes-more.jpg",
        foodname:"Samosa",
        recipe: "Step 1:Prepare dough with flour, oil, salt, and water.\n Step-2:Make filling with potatoes, peas, onions, and spices.\n Step-3:Shape dough into cones.\n Step-4:Fill cones with the prepared filling.\n Step-5:Fry samosas in hot oil until golden brown.\nStep-5Drain on a paper towel.",
    },
    {
        image:"https://e0.pxfuel.com/wallpapers/255/457/desktop-wallpaper-cheese-vegetables-olive-pizza-piece-resolution-wallpx-food-pizza-thumbnail.jpg",
        foodname:"Pizza",
        recipe: "Step 1: Gather the ingredients - pizza dough,sauce,cheese, and toppings.Step 2: Preheat the oven to the recommended temperature.\nStep 3: Roll out the dough and transfer it to a baking sheet.\nStep 4: Spread sauce on the dough.\nStep 5: Sprinkle cheese over the sauce.\nStep 6: Add your favorite toppings.\nStep 7: Remove from the oven, let it cool slightly, and enjoy your homemade pizza.",
    },
    {
        image:"https://e1.pxfuel.com/desktop-wallpaper/721/33/desktop-wallpaper-evergreen-temptation-for-chole-bhature-ceia-chole-bhature-thumbnail.jpg",
        foodname:"Chole Bhature",
        recipe: "Step 1: Gather the ingredients.\nStep 2: Prepare the toppings.\nStep 3: Shape the patties.\nStep 4: Cook the patties.\nStep 5: Toast the buns.\nStep 6: Assemble the burger.\nStep 7: Serve and enjoy.",

    },
    {
        image:"https://productimages.withfloats.com/actual/602b98ab2d8e6300011fd1e0.jpg",
        foodname:"Chicken Roll",
        recipe: "Step 1: Gather the ingredients.\nStep 2: Prepare the toppings.\nStep 3: Shape the patties.\nStep 4: Cook the patties.\nStep 5: Toast the buns.\nStep 6: Assemble the burger.\nStep 7: Serve and enjoy.",
    },
    {
        image:"https://e0.pxfuel.com/wallpapers/498/672/desktop-wallpaper-tandoori-paneer-tikka-in-the-oven-my-food-story-chicken-tikka-thumbnail.jpg",
        foodname:"Paneer Tikka",
        recipe: "Step 1: Gather the ingredients.\nStep 2: Prepare the toppings.\nStep 3: Shape the patties.\nStep 4: Cook the patties.\nStep 5: Toast the buns.\nStep 6: Assemble the burger.\nStep 7: Serve and enjoy.",

    },
    {
        image:"https://www.cookerru.com/wp-content/uploads/2022/09/pan-fried-noodles-main-preview.jpg",
        foodname:"Noodles",
        recipe: "Step 1: Gather the ingredients.\nStep 2: Prepare the toppings.\nStep 3: Shape the patties.\nStep 4: Cook the patties.\nStep 5: Toast the buns.\nStep 6: Assemble the burger.\nStep 7: Serve and enjoy.",
    },
    {
        image:"https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x375.jpg",
        foodname:"Vada Pav",
        recipe: "Step 1: Make the potato filling.\nStep 2: Make the vadas batter.\nStep 3: Shape and fry the vadas.\nStep 4: Prepare the pav.\nStep 5: Assemble the vada pav.",
    },
];

const Food = document.getElementById("food");

data.map((el)=>{
    const div= document.createElement("div");
    const img = document.createElement("img");
    img.src=el.image;
    const food_name = document.createElement("h3");
    food_name.innerHTML=el.foodname;
    const Recipe = document.createElement("p");
    Recipe.innerText="";
    const button1 = document.createElement("button");
    button1.classList.add("view_button");
    const button2 = document.createElement("button");
    button2.classList.add("remove_button");

    button1.innerText="View Recipe";
    button2.innerText = "Hide Recipe";

    button1.addEventListener("click", () =>{
        Recipe.innerText = el.recipe;
    }),
    button2.addEventListener("click", () =>{
        Recipe.innerText="";
    });
    div.append(img, food_name,Recipe, button1, button2);
    Food.append(div);
})