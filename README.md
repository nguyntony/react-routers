# React Router
#react

## What is it?
When you're on a website and if you want to go to a different (the about page) you are requesting for the about html but with react you can do that differently.

With react you won't need to go to out and fetch for that html page, you can just display the about component and this is a more quicker and seamless process.

## How to use?
Inside of your react app, you will need to install a library to help you with this `npm i react-router-dom`

1. In your src file you may want to make another 'App.js' file but change it to match what you need for example, changing the 'App' to 'About' which means exporting 'About'

These other files are considered components and you can put them in a dir named components. You should remove the className that is there by default when you create the react app. 

2. Import them into the App file. But if we do this, it will render all these components by default. 