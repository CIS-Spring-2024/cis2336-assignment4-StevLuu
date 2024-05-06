CIS 2336-19174 Assignment 4 & 5 by Steven Luu
To use:
1. Clone to local repo
2. once inside assignment4-StevLuu, "npm install" in the terminal to download dependencies: "body-parser": "^1.20.2","cors": "^2.8.5", "express": "^4.19.2"
3. navigate to backend folder and start it up through terminal command: node app.js", It should be running on localhost:8080
4. Launch the index.html from the frontend (I used the Live Server VS Code extension)
5. To order from the menu, navigate to the menu tab and scroll down to the "Order" button
6. Select the items you want to order (non-negative values are validated on the backend in the /subtotal POST route)
7. Once choices have been selected click the "Order" button and that makes a POST request the the /subtotal POST route
8. To view the subtotal via the /subtotal GET route navigate to the Subtotal tab and click "Fetch".
9. Done.
