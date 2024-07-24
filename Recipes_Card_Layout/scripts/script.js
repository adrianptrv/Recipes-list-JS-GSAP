var star = document.querySelector('#star-icon');

// Changes the favorite icon to solid when a user clicks the button
document.querySelector(".favIcon").addEventListener("click", () => {
    if (star.classList.contains("fa-regular")) {
        star.classList.remove("fa-regular")
        star.classList.add("fa-solid")
        starBtn.style.backgroundColor = "#7ac900"
    }
    else {
        star.classList.remove("fa-solid")
        star.classList.add("fa-regular")
        starBtn.style.backgroundColor = "#2f2921"
    }

})

var saladImg = document.querySelector("#backImg")
var saladTitle = document.querySelector("#title")
var saladDescr = document.querySelector("#descr")
var saladCookRecipe = document.querySelector("#cookRecipe")

var recipes = document.querySelectorAll(".recipe")
recipes.forEach((elem) => {
    elem.addEventListener("click", () => {
        let salad = elem.children[1].children[0].textContent
        if (salad.includes("Mung")) {

            saladImg.setAttribute("src", "images/mung_bean_salad_lg.webp")
            saladTitle.textContent = salad
            saladDescr.textContent = `Mung beans, mint, green onions, red wine and olive oil are tossed together to create this healthy, refreshing and darn tasty salad!`
            saladCookRecipe.innerHTML = `<b>You would need:</b> 

            ● 1 cup (200 gr) mung bean
            ● 1 piece (60 gr) large red pepper, roasted
            ● 1 piece (300 gr) large tomato
            ● 1 red onion (70 gr)
            ● 5 tbsp fresh lemon juice
            ● extra virgin olive oil
            ● salt to taste
            ● 1 tsp mustard with honey
            ● parsley, optionally

            <b>Steps:</b>

             1. Soak the mung bean for a few hours so it will cook faster. Then wash it, place in a saucepan and cover with water. Cook over medium heat until the grains soften (be careful not to overcook it). It took me about 15-20 minutes.

             2. After the mung bean is cooked, wash it with cold water and set aside to drain and cool.

             3. During this time, prepare the vegetables. Cut the tomato into cubes, onion and pepper into thin slices. Squeeze out the juice of half a lemon.`

        }
        else if (salad.includes("Pasta")) {

            saladImg.setAttribute("src", "images/pasta_salad_lg.webp")
            saladTitle.textContent = salad
            saladDescr.textContent = `Super easy Pasta Salad – with pasta, tomatoes, fresh mozzarella, spicy salami, pepperoncini, olives, and easy Italian dressing. DANGEROUSLY GOOD.`
            saladCookRecipe.innerHTML = `<b>You would need:</b> 

            ●  Your favorite pasta noodle shape
            ●  Cherry tomatoes (or some other non-threatening veg)
            ●  Mozz cheese balls
            ●  Salami (pick a good spicy one)
            ●  Black olives or kalamata lives
            ●  Pepperoncini (optional…sort of)
            ●  Red onion and parsley
            ●  olive oil
            ●  white vinegar
            ●  salt and pepp
            ●  dried oregano and basil
            ●  little bit of sugar
            ●  fresh herbs (like parsley, more basil, or chives)

            <b>Steps:</b>

             1. Cook your pasta according to package instructions. Drain and rinse. Allow it to cool slightly and toss a bit of olive oil in there.

             2. Chop all your veggies, cheese, meat, and other fixings.

             3. Blitz up your dressing in a blender or shake it up in a jar.
             
             4. Toss together, taste and adjust, and exercise every self-control muscle in your body so as not to eat the whole thing before everyone comes over.`

        }
        else if (salad.includes("Tuna")) {

            saladImg.setAttribute("src", "images/tuna_salad_lg.webp")
            saladTitle.textContent = salad
            saladDescr.textContent = `A classic tuna salad recipe is an easy lunch and can be made ahead of time for meals throughout the week.`
            saladCookRecipe.innerHTML = `<b>You would need:</b> 

            ● 1 (5-ounce) can tuna packed in water
            ● 1 rib celery, diced
            ● 3 tablespoons mayonnaise
            ● 1 teaspoon red onion, finely chopped
            ● 1 teaspoon lemon juice
            ● Pinch salt
            ● Pinch black pepper


            <b>Steps:</b>

             1. Drain the tuna, open the can and hold it over the sink. Tilt the can and press on the lid to allow the water in the can to drain.

             2. Mix the tuna salad ingredients - in a bowl, break the tuna up with a fork. Add the celery, mayonnaise, onion, lemon juice, salt, and pepper. Stir to combine. Taste and adjust the seasonings to your liking. Cover and chill or use immediately.

             3. Serve how you like it - Spoon tuna salad onto slices of bread to make a sandwich, scoop onto crackers for a snack, or serve it atop a bed of salad greens for a healthy meal.
             `

        }
        else if (salad.includes("Shopska")) {

            saladImg.setAttribute("src", "images/shopska_salad_lg.webp")
            saladTitle.textContent = salad
            saladDescr.textContent = `Shopska salad, or shopska salata, is a simple yet elegant Bulgarian side dish you can make with a handful of pantry staples.`
            saladCookRecipe.innerHTML = `<b>You would need:</b> 

            ● 1 tomato large, diced
            ● 1 cucumber continental, diced
            ● 100g sirene cheese or substitute with feta
            ● Optional Garnishes
            ● 1 diced pepper
            ● 1 diced onion
            ● vinegar balsamic or red wine
            ● olive oil
            ● Salt and pepper


            <b>Steps:</b>

             1. Pop your diced tomatoes and cucumber in a serving bowl and give everything a stir until evenly distributed.

             2. Add in your optional ingredients such as pepper, onion, olive oil, vinegar, fresh parsley and salt & pepper if you're using them and stir through again.

             3. Let it snow! Grate that cheese right over the bowl until well and truly covered.

             4. Serve immediately (or store for around 30 mins in the fridge).
             `

        }
        else if (salad.includes("Ceaser")) {

            saladImg.setAttribute("src", "images/ceasar_salad_lg.webp")
            saladTitle.textContent = salad
            saladDescr.textContent = `A classic chicken salad recipe, featuring crunchy croutons and a creamy, garlic dressing. Ideal for lunch with friends`
            saladCookRecipe.innerHTML = `<b>You would need:</b> 

            ● 1/2 cup high-quality extra virgin olive oil, plus more for brushing
            ● 4 cloves garlic, minced
            ● 1 baguette, preferably a day old, thinly sliced
            ● 1/4 cup fresh lemon juice (plus more to taste)
            ● 4 ounces Parmesan cheese, grated
            ● 1 teaspoon anchovy paste, or 1 to 2 anchovies, minced
            ● 2 large eggs
            ● 1/4 teaspoon freshly ground black pepper (or to taste)
            ● 1/2 teaspoon kosher salt (or to taste)
            ● 4 to 6 small heads romaine lettuce, rinsed, patted dry, wilted outer leaves discarded


            <b>Steps:</b>

             1. Combine the olive oil and garlic - in a very large bowl, whisk together 1/2 cup olive oil and garlic. Let sit for at least half an hour.

             2. Make the toasted croutons - while the garlic is sitting, make the croutons. Spread the baguette slices out on a baking sheet. (You may need to do in batches.) Brush or spray with olive oil (or melted butter). If you want garlicky croutons, dip pastry brush in the garlic infused oil you have sitting in Step 1. Broil for a couple of minutes until the tops are lightly browned. (Note: do not walk away, these can easily go from browned to burnt.) Remove and let cool.
             
             The steps up until this point can be made ahead.

             3. Make the dressing - add minced anchovies (or anchovy paste, if using) and eggs to the oil-garlic mixture. Whisk until creamy. Add salt and pepper and 1/4 cup of lemon juice. Whisk in half of the Parmesan cheese. Taste, add more lemon juice, salt and pepper to taste. The lemon should give an edge to the dressing, but not overwhelm it.

             4. Tear off the chunks of romaine lettuce - using your hands, tear off chunks of lettuce from the heads of romaine lettuce (do not use a knife to cut). Add to the dressing and toss until coated. Add the rest of the Parmesan cheese, and toss.

             5. Combine and serve - Coarsely chop the toasted bread into croutons and add to the salad. Brush in any crumbs from chopping the bread, too. Toss and serve immediately.
             `

        }
    });
});

