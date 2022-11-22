# Project Build
npx create-react-app spacex_table --template typescript

# Package installed
npm i antd;
npm i node-sass --save-dev
npm i --save @ant-design/icons
npm install @apollo/client graphql
npm install eslint --save-dev
npx eslint --init
npm i -D eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
npm i D eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
npm i -D eslint-plugin-import @typescript-eslint/parser eslint-import-resolver-typescript
npm i -D prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks
touch .prettierrc(use in bash)
npm install husky --save-dev
npm set-script prepare "husky install"
npm run prepare
npx husky add .husky/pre-commit "npm test"
{
    git add .husky/pre-commit
    git commit -m "Keep calm and commit"
}

# Package installing for codegen
npm install -D @graphql-codegen/cli
npm install -D @graphql-codegen/client-preset