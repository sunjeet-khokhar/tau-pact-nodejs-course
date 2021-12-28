

[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/rafaelaazevedo/tau-pact-nodejs-course/blob/master/LICENSE)

[![Known Vulnerabilities](https://snyk.io/test/github/rafaelaazevedo/tau-pact-nodejs-course/badge.svg?targetFile=package.json)](https://snyk.io/test/github/rafaelaazevedo/tau-pact-nodejs-course?targetFile=package.json)

# PactJS project for the Test Automation University course

A simple Nodejs + Jest project configuring contract tests with PactJS
<br>
<br>
If you are running your pact broker locally following these [instructions](https://github.com/pact-foundation/pact_broker#to-have-a-play-around-on-your-local-machine) then you can run the provider and the publish the way it is, otherwise you will need to modify the pactUrls to the local path and if you are using docker as your pact broker than you need to update the publish script accordingly.

## Running via CI


Just run the associated GitHub workflow with this repo , it runs the following sequentially 

    - npm install
    - npm run test:consumer
    - npm run test:provider
    - npm run publish:contract

