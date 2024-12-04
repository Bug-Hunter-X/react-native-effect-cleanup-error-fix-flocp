# React Native useEffect Cleanup Function Error

This repository demonstrates a common, yet often difficult to debug, error in React Native applications involving the `useEffect` hook and its cleanup function. The error occurs when the cleanup function attempts to access or modify the component's state or props after the component has unmounted, leading to cryptic error messages and intermittent crashes.

## Bug Description

The `bug.js` file shows a component that fetches data using `useEffect`.  The cleanup function in this example is designed to log a cleanup message, however, under certain conditions, this can lead to errors if the component unmounts before the cleanup function completes.  While this example only includes a simple log statement, more complex cleanup functions are more likely to cause issues.

## Solution

The solution, provided in `bugSolution.js`, addresses this issue by checking if the component is still mounted before accessing or modifying its state or props. This is done using a `mounted` ref variable. 

## How to reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run the application on an emulator or device.
4. Navigate to the screen containing the component. This should work fine.
5. Attempt to quickly switch between screens to try and trigger the error before the cleanup function completes.