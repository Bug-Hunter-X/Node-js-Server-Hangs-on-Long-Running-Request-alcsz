# Node.js Server Hang Issue

This repository demonstrates a common issue in Node.js servers: hanging on long-running requests.  The problem stems from not properly handling responses during lengthy operations.

## Bug

The `server.js` file contains a simple HTTP server that simulates a long-running task.  Because the response is only sent *after* the loop completes, the server becomes unresponsive during that time.  This is because Node.js is single-threaded and the main event loop is blocked. 

## Solution

`serverSolution.js` provides a solution using asynchronous operations to prevent blocking the event loop.  It uses `setTimeout` to simulate the task and responds immediately, then completing the long-running task later on in the background.