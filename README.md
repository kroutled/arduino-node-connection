# arduino-node-connection
This is a small project to test the connection between an Arduino Uno and a Node js webserver and allows communication between the two.

There is a potentiometer that is hooked up to the arduino which when adjusted will dynamically set an opacity value for a red square that can be found on a simple html page. 

![image](https://user-images.githubusercontent.com/28007434/121072279-48e52080-c7d1-11eb-9c81-969544424203.png)

The server presents the following page locally. When the dial of the potentiometer is turned the opacity of the red block changes as well.

![image](https://user-images.githubusercontent.com/28007434/121072351-64502b80-c7d1-11eb-9ef4-6f149487ff00.png)
![image](https://user-images.githubusercontent.com/28007434/121073157-78e0f380-c7d2-11eb-878b-9c3327c3f669.png)

Steps to run:
1. Clone the repository.
2. Navigate to folder.
3. Run npm install (NOTE: you will need to have node and npm installed).
4. Run node app.js *path to the arduino eg. COM4 - Windows / /dev/cu.something - macOS*.
5. Open a browser and navigate to localhost:3000.
6. Adjust the potentiometer to view the changes in opacity of the block on the webpage.
