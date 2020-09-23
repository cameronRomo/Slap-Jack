# SlapJack

## Contributors
> [Cameron Romo](https://github.com/cameronRomo)

## Project Manager

> [Will Mitchell](https://github.com/wvmitchell)

## Context
This SlapJack game has been created to demonstrate the required understanding of Classes to move on to the next module in Turing School of Software and Design. As one can imagine, it is heavy in Object Oriented Programming (OOP). To develop this project, a project-board provided by github was used to organize development into atomic and tangible steps. The project board also assisted in tracking the changes the project went through from beginning to end. When this app is played, one will note that it switches between players one and two as it progresses. Additionally, the game keeps track of who is in the lead by displaying each player's affiliated win count. If the game is abandoned for a quick snack break or an accidental refresh, then there is no need to worry, as there is also functionality for local-storage.

#### Technologies Used:
    * HTML
    * CSS
    * JavaScript
    * GitHub
    * MDN
    * CSS Tricks

## Functionality
* Players alternate turns when playing cards from their hand
* Any player can slap at any given time and add the entire center pile to their hand the following conditions:
    * A Jack is on the top of the center pile
    * A Double or Pair (Two cards with the same number)
    * A Sandwich (two cards of the same number separated by a different card in the middle)
![playing-cards](https://user-images.githubusercontent.com/63012953/93958740-65f5c400-fd14-11ea-81df-20e05a2c0213.gif)

* If one player loses all their cards, they have one chance to not lose and continue the game
    * If the player with all the cards slaps first, they win the game.
![slap-jack-dealing-and-slapping](https://user-images.githubusercontent.com/63012953/93959098-2ed3e280-fd15-11ea-9c23-8c253d3ad690.gif)

##### To enjoy, observe, or critique this project please follow the following steps:

> * Clone down this repository to your local machine `git clone <URL>`
> * cd into repository `slap-jack`
> * run `open index.html`
> * to modify this project:
>   * run `git checkout -b <new branch name>`
>   * open in text editor to add or remove  functionality or style
>   * add and commit using `git add <file name>` and `git commit -m "<commit message>"`
>   * run `git push origin head` to create a pull request
