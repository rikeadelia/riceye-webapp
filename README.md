# riceye-webapp
Riceye is a Rice Detection Disease Application that use Machine Learning. This is the Web Application of Riceye, developed using React.js and deployed using [Heroku](https://www.heroku.com). The model is converted using Tensorflow.js library and stored on [this server](https://calm-sands-10024.herokuapp.com/model/). The details on model is on [this repo](https://github.com/hansels/bangkit-final-project/)

You can access it by visiting: [](https://riceye.herokuapp.com). Then upload your rice leaf photo and click "Predict!".

This Application Dependencies are:
- @tensorflow/tfjs: ^1.3.1
- @testing-library/jest-dom: ^4.2.4
- @testing-library/react: ^9.5.0,
- @testing-library/user-event: ^7.2.1,
- bootstrap: ^4.5.0,
- react: ^16.13.1,
- react-bootstrap: ^1.0.1,
- react-dom: ^16.13.1,
- react-router-dom: ^5.2.0,
- react-scripts: 3.4.1,
- styled-components: ^5.1.1

## Development
1. Make sure you have `npm` installed on your computer
2. Clone this repo
3. Go to the folder: `cd riceye-webapp`
4. Install all dependencies: `npm install`
5. Run: `npm start`

## Deploy on Heroku
1. Make sure you have `heroku` installed on your computer
2. Clone this repo
3. Go to the folder: `cd riceye-webapp`
4. Build the web app: `npm run build`
5. Move the "build" folder to another folder then go to that folder
6. `git init`
7. Login to your Heroku account: `heroku login`
8. Create new heroku app: `heroku create -b https://github.com/heroku/heroku-buildpack-static.git --app <app_name>` 
9. Create static.json file: `echo '{"root": "build/"}' > static.json
10. `git add .` and `git commit -m <commit_message>`
11. Push the files to heroku: `git push heroku master`

## Acknowledgements
I'm storing model to Heroku using (this repo)[https://github.com/mgonto/heroku-static-file-server]. I saw the React.js deployment to Heroku (here)[https://medium.com/@ikrisnaw/cara-deploy-aplikasi-react-js-ke-heroku-e1d1b13165c1]
