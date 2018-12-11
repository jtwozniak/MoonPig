Code test for moonpig. Statically deployed: https://friendly-wiles-36c8f0.netlify.com/

Production: React + material-ui + React-Router + styled-components

Development: Parcel + Typescript + jest + enzyme + husky + tslint + prettier

Linting rules: airbnb + sonarTs + react + prettier

I spent almost 8 hours on the code test, so I decided not to spent more time on it.
I created the project from scratch and wanted to learn something new in the process, this is why I used react 16.7 alpha + material-ui

The application can be built and hosted statically. After putting it on Github it's quite fast to setup Neflify to host it.
I wanted to write two tests but enzyme doesn't support react hooks yet, you can try to run the only one test
Responsiveness could be enhanced. Mobile browser could be detected etc
If this was a real project I could consider to add:
Webpack, A11y, i18, E2E - cypress, use monorepo Lerna, build rpm - speculate, convict, add graphql, and more...

