# Front-end Take-home Assignment

## Introduction

To put your web development skills to the test, create a web app that displays Pokemon cards (with images) using API endpoints given at [https://pokemontcg.io/](https://pokemontcg.io/). Using **React** is greatly recommended and **Vue** are acceptable.

## Scenario

Once upon a time, a fateful moment had happened. A business person found the news [11 rare Pokemon cards that could make you rich](https://www.redbull.com/in-en/rarest-pokemon-cards-in-the-world). It sparked his idea. He had the bright notion of creating the Pokemon card trade platform. He thought he could use a third-party service to serve data but no design, so he enlisted the help of a designer. Both of them finished their design, but there is no web application. From here, you have been temporarily hired by Opn and assigned to this team. These guys approached you and gave you the whole story.

It's your responsibility as a front-end developer to make their idea into reality. You will need to grab on the requirements and build the project from scratch while ensuring the application to have great engineering and well-design.

## Requirements

There should be a homepage that will display a grid (please use grid or flexbox) of Pokemon cards, including their image. It would help if you implemented the design follow this link. [https://www.figma.com/file/OvbAJ7yvTzB3Yk8oIwSycd/Pokemon-Card-Market](https://www.figma.com/file/OvbAJ7yvTzB3Yk8oIwSycd/Pokemon-Card-Market). We've also provided the `design.fig` as an alternative. It's in the same directory.

- The API for getting these cards can be found at <https://pokemontcg.io>
  - Limit the number of cards on the page to `20`.
  - The card's price must be shown. Use data from `cardmarket.prices.*` or `cardmarket.prices.averageSellPrice`.
  - The card's quantity must be shown from `set.total`.
  - The page should be able to display cards with pagination, **search by name** and filter by
    - Type
    - Rarity
    - Set
- Cart should display on the right side of the screen.
  - The cart should contain list of selected Pokemon cards, total amount and total price.
  - A user can increase or decrease the number of Pokemon cards inside of cart section.
  - Total amount should be the total number of selected Pokemon cards.
  - The cart should be able to clear all.

These requirements might have some gaps. Please feel free to contact us if you have any questions. As you might expect, parts of it are intentionally left ambiguous and open to leaving space for you to use your best judgment.

## Notes

- If you have time, please provide a brief one- or two-paragraph write-up containing details on how to run and build your application, if applicable.
- Feel free to use any open-source packages you like; we're not seeking developers who are constantly reinventing the wheel, but rather developers who are familiar with web technologies and can leverage existing packages.

## Impress us

If you want to impress us, there are some tasks below. **The tasks are not required**, but they would be a plus to our consideration, reduce our technical questions, and potentially skip the technical interview.

- Using React hooks or Vue composition API
- Using TypeScript
- Having a well-structured and organized project
- Commenting your code
- Supporting responsive both desktop and mobile
- Writing unit tests

Let's rock! 🤘
