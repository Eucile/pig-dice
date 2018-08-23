# **Pig Dice**

#### _A game of dice, 08.22.2018_

##### By AJ Mcgladdery and Krystal Foster

## Description

Launched on [GitHub Pages](https://eucile.github.io/pig-dice/). This is a computer generated dice game. Two players race to earn 100 points by rolling dice.

### Behavior Driven Development Specifications


* This program allows user to roll a dice and dice value is added to turn total.
    * Example Input: dice = 4
    * Example Output: turn total = 4
* This program adds any additional rolls to turn total.
    * Example Input: turn total = 4 // dice = 2
    * Example Output: turn total = 6
* This program reverts turn total to 0 when a 1 is rolled.
    * Example Input: turn total = 6 >> dice roll = 1
    * Example Output: turn total = 0
* This program allows users to "hold" their turn total, thereby banking it into their game total.
    * Example Input: click "hold" button
    * Example Output: game total += turn total >> turn total = 0
* This program switches players when player either holds or rolls 1.
    * Example Input: click "hold" button || rolls 1
    * Example Output: game total += turn total || turn total = 0, then switch player



## Setup/Installation Requirements

* _To view repository, open the following in a browser:_
* _https://github.com/amcgladd/pig-dice.git_
* _or_https://github.com/Eucile/pig-dice.git_

## Support and contact details

Please email AJ at amcgladd@gmail.com or Krystal at kmfoster777@gmail.com

## Technologies Used

_HTML_
_CSS_
_Bootstrap_
_jQuery_

### License

This software is licensed under the MIT license.

Copyright (c) 2018 AJ Mcgladdery and Krystal Foster
