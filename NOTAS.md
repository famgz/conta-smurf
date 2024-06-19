# Conta Smurf

https://www.figma.com/proto/c4TPNYPP5H8WdFFjtg4bmP/Conta-smurf?page-id=0%3A1&node-id=2-4&viewport=665%2C555%2C0.43&t=9Unn4gn2yt0ZeI0H-1&scaling=scale-down&starting-point-node-id=2%3A4


`npx create-next-app@latest conta-smurf`

`npm install -D prettier eslint-config-prettier eslint-plugin-prettier`

`npm install -D prettier-plugin-tailwindcss`

// create ./.prettierrc with content `{"plugins": ["prettier-plugin-tailwindcss"]}` and other prettier configs


## Shadcn

`npx shadcn-ui@latest init`

// components.json -> change "aliases" add _ prefix in 
```
  "aliases": {
    "components": "@/app/_components",
    "utils": "@/app/_lib/utils"
  }
```

`npx shadcn-ui@latest add card`