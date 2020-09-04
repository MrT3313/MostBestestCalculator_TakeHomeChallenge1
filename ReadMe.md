# Lambda Take Home Challenge - Week 1
- Task: CSS Grid Calculator  
- [Problem Link - Scotch.io](https://scotch.io/bar-talk/code-challenge-2-build-a-calculator-with-css-grid)   
- Design Spec:   
<img src="client/src/assets/ReadMe/DesignSpec.png" width='300'>

# Assets
| name | source | author | 
| ---  | ---    | ---    |
| [plus](https://www.flaticon.com/free-icon/add_1237946?term=plus&page=1&position=1) | flaticon.com | [srip](https://www.flaticon.com/authors/srip) | 
| [minus](https://www.flaticon.com/free-icon/minus_1828901?term=minus&page=1&position=2) | flaticon.com | [Pixel Perfect](https://www.flaticon.com/authors/pixel-perfect) | 
| [multiply](https://www.flaticon.com/free-icon/multiply-mathematical-sign_43823?term=multiply&page=1&position=2) | flaticon.com | [Freepik](https://www.flaticon.com/authors/freepik) |
| [divide](https://www.flaticon.com/free-icon/divide_43097?term=divide&page=1&position=1) | flaticon.com | [Freepik](https://www.flaticon.com/authors/freepik) |
| [equal](https://www.flaticon.com/free-icon/equal_56751?term=equal%20sign&page=1&position=9) | flaticon.com | [Freepik](https://www.flaticon.com/authors/freepik) |

# Versions
<details open>
<summary>0.1.1 - Post Project Presentation Update</summary>

Today I presented this weeks project to two of Lambda School's engineers as well as some other students. After I walked through the project they had some feedback which I have encorporated into this update! 

1. Prior to the presentation I added a `netlify.toml` file and deployed a version of my `dev` branch for people who were at the presentation to access 

2. Update `<ActionButton />` to accept more appropraite props in order to be more dynamic 
    - Previously: I was passing a `type` string prop from `<ButtonContainer />` to `<ActionButton />`. This prop was filtered through a switch statement to render different `JSX` with the corresponding `HTML Entity` and pass the appropriate symbol into into the `click()` function
    - Update: I am now passing an `operation` array prop that contains a symbol and the corresponding SVG icon to be rendered. This allows the `<ActionButton />` to dynamically render everything in one `JSX` return.

3. Dynamic class names
    - While rendering the appropriate `HTML entity` and passing of the appropriate `symbol` to the `click()` function was the **main** reason that caused the duplicate code in the `<ActionButton />` it was highlighted that if I passed better props I could also dynamically create my class names. This was **very** obvious when I looked back at the `<Button />` component ... which had an entire switch statement to catch the `0` button so the CSS could have it span 3 columns ... UPDATED!

4. In responsing to my comment about not having a 'views' directory it was suggested that, because this is a small project, it might not be needed and that instead I could change my `components` directory into a `calculator` directory and my `Calculator.js` file into an `index.js` file in order to signify the 'entry' into the app. So I did!

Thanks to Garrett & Matt (the Lambda Engineers) for making this happen!

Next Up: Improved Testing! 

</details>

<details>
<summary>0.1.0 - Calculation Logic</summary>

While the `scotch.io` challenge only asks to create the calculator layout using `CSS Grid` I chose to add the actual calculation functionality! To do this I used `React Hooks` to add & track the state of a user's calculations.  

1. Added `<History />` component to `<ResultScreen />`
    - Tracks & displays button clicks through the `history` state prior to calculation
2. `<Calculator />`
    - `result` & `history` state being passed to `<ResultScreen />`
    -  `result`, `setResult` & `history`, `setHistory` state being passed to `<ButtonContainer />` 
3. `<ButtonContainer />` holds all calculation logic
    - `clear` => Resets `history` & `result` state 
    - `click` => Updates `history` state string
    - `calculate` => uses Javascript `eval()` to: 
        1. Calculate result from passed `history` state 
        2. Update `result` state
        3. Reset `history` state
</details>
<details open>
<summary>0.1.0 - Calculation Logic</summary>

While the `scotch.io` challenge only asks to create the calculator layout using `CSS Grid` I chose to add the actual calculation functionality! To do this I used `React Hooks` to add & track the state of a user's calculations.  

1. Added `<History />` component to `<ResultScreen />`
    - Tracks & displays button clicks through the `history` state prior to calculation
2. `<Calculator />`
    - `result` & `history` state being passed to `<ResultScreen />`
    -  `result`, `setResult` & `history`, `setHistory` state being passed to `<ButtonContainer />` 
3. `<ButtonContainer />` holds all calculation logic
    - `clear` => Resets `history` & `result` state 
    - `click` => Updates `history` state string
    - `calculate` => uses Javascript `eval()` to: 
        1. Calculate result from passed `history` state 
        2. Update `result` state
        3. Reset `history` state
</details>
<details open>
<summary>0.0.4 - CSS Grid Layout</summary>

**Challenge Complete**

1. `<ButtonContainer/>`    
    - holds main CSS grid
    - imports `<Button/>` & `<ActionButton>`
        - `<Button/>` is rendering a passsed `num` prop
        - `<ActionButton/>` is passed a text `type`  prop which is filtered through a `switch` statement to render the [HTML Entities](https://www.freeformatter.com/html-entities.html)
2. All components using project themes imported from `index.css`

Screenshot:  
<img src="client/src/assets/ReadMe/0.0.4.png" height='250'>
</details>
<details>
<summary>0.0.3 - CSS Reset & Color Variables</summary>

1. Meyer Reset: V2.0
    ```css
    /* reset.css */
    http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    ```

2. Color Variables
    ```css
    /* index.css */
    :root {
        --background_LightGrey: #F3F3F3;
        --clearButton_Blue: #3573DD;
        --equalButton_Green: #27D15E;
        --defaultButton_Grey: #767676;
        --text_and_line: #52514F;
    }
    ```
</details>
<details>
<summary>0.0.2 - Initial `< App />` Tests</summary>

1. Renders w/o crashing
2. queryByText => Hello World => toBeTruthy
</details>
<details >
<summary>0.0.1 - Create React App</summary>

- Cleaned out template CRA
- `<App/>` rendering 'Hello World' 
</details>

--- 
Author: Reed Turgeon  
Email: Turgeon.dev@gmail.com  
GitHub: https://github.com/MrT3313  
LinkedIn: https://www.linkedin.com/in/reedturgeon/  

