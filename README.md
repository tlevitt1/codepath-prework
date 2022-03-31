# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Thomas Levitt

Time spent: About 10 hours spent in total

Link to project: https://glitch.com/edit/#!/levitt-light-sound-2

## Required Functionality

The following **required** functionality is complete:

- [YES] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [YES] "Start" button toggles between "Start" and "Stop" when clicked.
- [YES] Game buttons each light up and play a sound when clicked.
- [YES] Computer plays back sequence of clues including sound and visual cue for each button
- [YES] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [YES] User wins the game after guessing a complete pattern
- [YES] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [YES] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [YES] Buttons use a pitch (frequency) other than the ones in the tutorial
- [NO] More than 4 functional game buttons
- [NO] Playback speeds up on each turn
- [YES] Computer picks a different pattern each time the game is played
- [NO] Player only loses after 3 mistakes (instead of on the first mistake)
- [NO] Game button appearance change goes beyond color (e.g. add an image)
- [YES] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [NO] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

* [YES] Winning and ending sequence of button flashes with unique tone
* [YES] Color and tone flash on all buttons instead of on the relative button
* [YES] Starting sequence that briefly displays the colors to the player

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![Begin Sequence](https://cdn.glitch.global/c2e602ee-9609-4724-9ff4-12383892a39c/BeginSequence.gif?v=1648604400056) Example of the beginning sequence
![Random Pattern After Correct Guess](https://cdn.glitch.global/c2e602ee-9609-4724-9ff4-12383892a39c/RandomPattern.gif?v=1648604478864) Example of playing the game followed by the clue pattern
![Win](https://cdn.glitch.global/c2e602ee-9609-4724-9ff4-12383892a39c/Win.gif?v=1648604519283)  Example of a win (frame rate is too slow, the green lights pulse quickly)
![Loss](https://cdn.glitch.global/c2e602ee-9609-4724-9ff4-12383892a39c/Loss.gif?v=1648643314279) Example of a loss (frame rate is too slow, the red lights pulse quickly) and the stop button changes to start

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   
     [This project was built upon the given prework instructions with modifications to make this work original.
     As this project functions quite differently than the one provided in the prework instructions, I used
     W3Schools as an outside resource to help me with this project. This next outside resource did not necessarily help me with my submission,
     but rather inspiration for how my game operates. I noticed that the original light and sound memorization game provided in the tutorial was similar to a step
     for a storyline plot in the videogame Call of Duty: Black Ops. The step was in the zombies mode on the Moon map, and there were 4 terminals where colors and sounds
     flash in a specific pattern and the player must enter the correct pattern in order to progress. I used that puzzle as a reference by
     looking at how that light and sound game operated. I then programmed my project to emulate it. This is the link to what the puzzle looked like, 
     https://www.youtube.com/watch?v=RTFXK7iFmiY.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   
     [A challenge I had through my submission was making the clue flash on all buttons. The initial project had the clue played on the button which its color
     corresponded to but just made the color a bit darker. I wanted to have all buttons flash the color so the user would have to memorize the positioning
     of where that color was. I understood that all the buttons had a seperate ID, so i knew I needed to add a class to all the buttons in order to group them
     to my liking. I also did not want to affect how the buttons displayed on the starting sequence andI wanted to keep their "individuality".
     To default the buttons, I added the class attribute "none" to be able to use the querySelectorAll method on all the buttons and initialize them in
     the JS code. Now, I knew that I had to add a class to the buttons based on which number was in the pattern and I found out that I had to use a for loop to add
     the class to each button. I then made seperate functions that were similar to the playSingleClue function but with some modifications to accomodate my vision.
     In my code, there are what seems to be 2 sets of (not exact names) "lightButton", "clearButton", and "playButton". The 2 seperate sets can be viewed as,
     (set 1) = buttons are individual, uses are: user clicking and start sequence, and (set 2) = buttons are grouped, uses are: for the clue in the sequence and
     for displaying if the user won or lost.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   
     [During this project, I thought about the style of programming that the tutorial was written in. I noticed that my programming style is 
     slightly different, for example, where I put comments, spacing in the code, and variable naming. My question is if there is a sort of "standard" to writting programs?
     I understand that there are certain "rules" to adhere to such as indentantion, but I wonder if it is crucial in the workplace to have a unified programming style in order
     to work together. Another question I had is about time complexity in a game such as this one and if it is crucial to minimize? I'm currently involved with time complexity
     and I noticed that in my game I iterate frequently through a list, which is not good for time complexity. A major question I have on web development is security and encryption.
     I learned briefly about it, but I would like to have better knowledge on it such as, how does Google save passwords to certain websites but they are considered to be safe? If the
     website saves the password and encrypts it, how does it return the password when prompted without that information being stored somewhere that is accessable?]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   
     [If I could work on this project longer, I would like to first fix some bugs regarding clicking out of turn, for example, if the user clicks a button while
     the clue sequence is still playing, the game could overlap the clue displays. I would fix this by deactivating the eventlistener for the butons while the clue is playing.
     Next, I would like to add more style to the webpage other than the buttons. I would have liked for the the buttons to be in a container
     that resembles a digital lock where the user inputs their lock combination.  Lastly, I would have wanted to add a prize or reward when the user inputs 
     the correct pattern a certain amount of times. For example, if the user won the game 3 times in a row, they would be presented with a little easter egg or something of sorts.]

## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/8ff0229fba7441ad87b104e2547f223d)

## License

    Copyright [Thomas Levitt]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
