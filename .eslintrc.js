module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": ["eslint:all", "plugin:react/all", "plugin:import/errors", "prettier"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "react/function-component-definition": [0],
        "sort-keys": [0],
        "no-ternary": [0],
        "one-var": ["error", { separateRequires: true }],
        "react/jsx-indent": [2, 2],
        "prettier/prettier": ["error"],
        "quotes": ["error", "single"],
        "import/named": [0],
        "sort-imports": [0],
        "import/order": [
            "error",
            {
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index",
                ],
            },
        ],
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "detect"
        },
    }
};
