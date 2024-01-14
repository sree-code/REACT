#Typescript MERN AMAZON

#Commands used to create this application
npm create vite@latest frontend -- --teamplate react-ts
git config --global init.defaultBranch main
git config --get user.name
git config --get user.email
npm install react-bootstrap bootstrap
npm i --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm i express
npm i --save-sev @types/express
"dev": "ts-node-dev --respawn --transpile-only --files src/index.ts",