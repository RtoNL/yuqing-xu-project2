# Project 2 Writeup: Battleship Game

## Challenges Faced

During the development of this Battleship game application, I encountered several challenges:

1. **State Management Complexity**: Managing the game state across multiple components was challenging. I had to carefully design the state structure and ensure proper updates to prevent bugs in game logic.

2. **Refactoring Issues**: I faced problems with code organization when initially developing the project. There were duplicate constants in different files (like the `GAME_PHASES` constant being declared in both `constants.js` and `refactor.js`), which caused confusion and potential bugs.

3. **React Component Structure**: Designing an efficient component hierarchy that would support all game features while maintaining clean code was difficult. I had to balance between component reusability and specific functionality.

4. **AI Logic Implementation**: Creating an AI opponent that could make intelligent decisions, especially after hitting a ship, required careful planning and testing of different strategies.

5. **Local Storage Integration**: Implementing game state persistence using localStorage required careful consideration of what data to save and how to properly restore the game state without introducing bugs.

## Potential Improvements

Given more time, I would implement the following improvements:

1. **Enhanced AI Strategies**: Develop more sophisticated AI algorithms that could use probability-based targeting to make more challenging opponents.

2. **Multiplayer Support**: Add real-time multiplayer functionality using WebSockets or a similar technology.

3. **Visual Enhancements**: Improve the UI with animations for hits, misses, and sinking ships to make the gameplay more engaging.

4. **Customizable Rules**: Allow players to customize game rules, such as board size, number of ships, and special abilities.

5. **Sound Effects and Music**: Add audio elements to enhance the gaming experience.

6. **Mobile Optimization**: While the game is playable on mobile devices, I would improve the touch interface and responsive design for smaller screens.

7. **Game Statistics**: Implement a statistics tracking system to record win rates, average game duration, and other metrics.

## Assumptions Made

Throughout this project, I made several assumptions:

1. **User Experience**: I assumed that users would be familiar with the traditional Battleship game rules and wouldn't need extensive tutorials.

2. **Browser Compatibility**: I assumed that users would primarily use modern browsers that support ES6 features and localStorage.

3. **Performance Considerations**: I assumed that the game state wouldn't grow too large for localStorage limitations.

4. **Ship Placement**: For simplicity, I limited ship placement to horizontal orientation only, assuming this wouldn't significantly impact the gameplay experience.

5. **Single Session**: I assumed players would generally complete a game in a single session, though I implemented state persistence for interrupted games.

## Time Taken

This assignment took approximately 25-30 hours to complete, distributed across the following tasks:

- Initial planning and research: 2-3 hours
- Setting up the project structure: 1-2 hours
- Implementing game logic and state management: 10-12 hours
- Creating the user interface and styling: 6-8 hours
- Implementing AI opponent behavior: 3-4 hours
- Testing and debugging: 4-5 hours
- Deployment and final adjustments: 1-2 hours

Throughout the development process, I learned valuable lessons about state management in React, game logic implementation, and creating an engaging user experience. The most challenging aspect was ensuring all game components worked together seamlessly while maintaining clean, maintainable code. 