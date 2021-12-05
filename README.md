---
permalink: /index.html
---
# Thrive_talk landing page
Implement landing page according to [Figma design](https://www.figma.com/file/aHd2rHMrnzDXhowLuIQjIyVQ/ThriveTalk-Landing-Page?node-id=0%3A1) - Use BEM and SCSS
- Large screens 2560px
- Full HD 1920px
- The design 1600px
- Notebook 1280px
- Tablet 1024
- Mobile (> 320px)

1. Implement the header with `nav`.
1. Implement `Helping you thrive in all areas of life` block.
1. Implement `Why Thrive?` block.
1. Implement `About us` block.
1. Implement `We can help you with` block with the card reused 3 times.
1. Implement block with 6 cards (`Physical Health`, `Mental Health`, `Nutrition`,
   `Gymnastics`, `Crossfit`, `Aerobics`).
1. Implement block with 6 text-cards (`Nutritional Plans`, `Weight Loss`, `Mental Peace`,
   `Home Training`, `Work/Life Balance`, `Cardio`).
1. Implement `You should also know` block.
1. Implement `Contact us` block.
1. Implement blocks: `Some info`, `Enfold health`, `Office hourse`.
1. Implement footer.


## Checklist for preparing a portfolio project for HR review

1. Don’t forget to add a title for the whole web page (it could be the name of your landing)
2. A landing page is implemented strictly according to the design in Figma
4. Links in the header and footer menus should lead to the corresponding blocks of the landing page
5. The speed of animations is the same throughout the landing page (for example, increasing when hovering or moving blocks when scrolling)
6. Placeholders in the forms suggest what to enter, and if there is a validation of the form, then it is clear in what format to enter the phone number
7. Make sure everything looks neat on mobile and without horizontal scrolling
8. Add favicon
9. Add a smooth scroll for the whole page
10. The logo should increase on hover
11. On big screens, there shouldn’t be white spaces around all blocks
12. All “get help now” buttons should change color on the hover
13. When the first block with the title page is opened, the buttons "who I am", "what do I do" should not be cut off. It is better to place them a little higher so that you can immediately see them
14. Use all the fonts specified in the Figma design and don’t add your fonts (the designers specially selected these fonts so that they fit together)
15. The Blog button in the top menu should be clickable and lead to the page "you should also know"
16. To somehow revive the landing page, you can change the color of the colored blocks on the hover
17. The "contact us" button should lead to the "contact us" section
18. When you try to send the form there is no 405 error and the form is automatically cleared after submit and is scrolled to the top of the page or the page is reloaded
19. The form shouldn’t submit empty


## Github flow
1. **Fork** the repo.
2. **Clone** the forked one. (The project link should have your name but not `mate-academy`)
3. Run `npm install` (or just `npm i`).
4. Run `npm start`.
5. Open one more terminal window for the next steps.
6. `git checkout -b develop` - to create new branch and switch on it.
7. Write you code in `src` folder.
8. Run `npm run lint` and fix code style errors.
9. Run `npm run deploy` to deploy your solution to `gh-pages`.
10. `git add . && git commit -m 'write a short description of the changes you made'` to save your changes.
11. `git push origin develop` - to send you code for PR.
12. Create a Pull Request (PR) from your branch `develop` to branch `master` of original repo.
13. Replace `<your_account>` with your Github username in the
  [DEMO LINK](https://andriy-yurkiv.github.io/Thrive_talk/).
14. Copy `DEMO LINK` to the PR description.

> To update you PR repeat steps 7-11.
