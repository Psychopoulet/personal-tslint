module.exports = {

	"configs": {

		"js-front": {

			"plugins": [
				"personnallinter"
			],
			"extends": [
				"eslint:recommended"
			],

			"env": {
				"browser": true
			},

			"parserOptions": {
				"ecmaVersion": "latest"
			},

			"globals": {

				// natives
				"window": true,
				"EventEmitter": true,
				"Promise": true,
				"Map": true,

				// AngularJS & jQuery
				"angular": true,
				"jQuery": true,
				"$": true

			}

		},

		"js-back": {

			"plugins": [
				"personnallinter"
			],
			"extends": [
				"eslint:recommended"
			],

			"env": {
				"node": true
			},

			"parserOptions": {
				"ecmaVersion": "latest",
				"sourceType": "module"
			},

			"globals": {

				// natives
				"__dirname": true,
				"__filename": true,
				"Buffer": true,
				"console": true,
				"clearInterval": true,
				"clearTimeout": true,
				"module": true,
				"os": true,
				"process": true,
				"Promise": true,
				"require": true,
				"setImmediate": true,
				"setInterval": true,
				"setTimeout": true,

				// mocha
				"after": true,
				"afterEach": true,
				"before": true,
				"beforeEach": true,
				"describe": true,
				"it": true

			}

		},

		"ts-front": {

			"plugins": [
				"@typescript-eslint",
				"personnallinter"
			],
			"extends": [
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended"
			],

			"env": {
				"browser": true
			},

			"parser": "@typescript-eslint/parser",
			"parserOptions": {
				"ecmaVersion": "latest"
			},

			"rules": {
				"@typescript-eslint/no-explicit-any": 0
			}

		},

		"ts-back": {

			"plugins": [
				"@typescript-eslint",
				"personnallinter"
			],
			"extends": [
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended"
			],

			"env": {
				"node": true
			},

			"parser": "@typescript-eslint/parser",
			"parserOptions": {
				"ecmaVersion": "latest",
				"sourceType": "module"
			},

			"rules": {
				"@typescript-eslint/no-explicit-any": 0
			}

		},

		"react": {

			"plugins": [
				"@typescript-eslint",
				"react",
				"react-hooks",
				"personnallinter"
			],
			"extends": [
				"eslint:recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:react/recommended",
				"plugin:react-hooks/recommended"
			],

			"env": {
				"browser": true
			},

			"parser": "@typescript-eslint/parser",
			"parserOptions": {
				"ecmaVersion": "latest",
				"ecmaFeatures": {
					"jsx": true
				}
			},

			"rules": {
				"jsx-quotes": [ "error", "prefer-double" ]
			},

			"settings": {
				"react": {
					"version": "detect"
				}
			}

		}

	},

	"rules": {

		// Possible Problems

		"array-callback-return": "error",
		"constructor-super": "error",
		"for-direction": "error",
		"getter-return": "error",
		"no-async-promise-executor": 0, // to check
		"no-await-in-loop": "error",
		"no-class-assign": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": "error",
		"no-const-assign": "error",
		"no-constant-binary-expression": 0, // to check
		"no-constant-condition": "error",
		"no-constructor-return": 0, // to check
		"no-control-regex": "error",
		"no-debugger": "error",
		"no-dupe-args": "error",
		"no-dupe-class-members": "error",
		"no-dupe-else-if": 0, // to check
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-duplicate-imports": "error",
		"no-empty-character-class": "error",
		"no-empty-pattern": "error",
		"no-ex-assign": "error",
		"no-fallthrough": "error",
		"no-func-assign": "error",
		"no-import-assign": 0, // to check
		"no-inner-declarations": "error",
		"no-invalid-regexp": "error",
		"no-irregular-whitespace": "error",
		"no-loss-of-precision": 0, // to check
		"no-misleading-character-class": 0, // to check
		"no-new-native-nonconstructor": 0, // to check
		"no-new-symbol": "error",
		"no-obj-calls": "error",
		"no-promise-executor-return": 0, // to check
		"no-prototype-builtins": "error",
		"no-self-assign": "error",
		"no-self-compare": "error",
		"no-setter-return": 0, // to check
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		"no-this-before-super": "error",
		"no-undef": "error",
		"no-unexpected-multiline": "error",
		"no-unmodified-loop-condition": "error",
		"no-unreachable": "error",
		"no-unreachable-loop": 0, // to check
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"no-unsafe-optional-chaining": 0, // to check
		"no-unused-private-class-members": 0, // to check
		"no-unused-vars": "error",
		"no-use-before-define": 0, // to check
		"no-useless-backreference": 0, // to check
		"require-atomic-updates": 0, // to check
		"use-isnan": "error",
		"no-regex-spaces": "error",
		"valid-typeof": "error",

		// Suggestions

		"accessor-pairs": "error",
		"arrow-body-style": [ "error", "always" ],
		"block-scoped-var": "error",
		"camelcase": "error",
		"capitalized-comments": 0,
		"class-methods-use-this": 0,
		"complexity": "error",
		"consistent-return": "error",
		"consistent-this": "error",
		"curly": "error",
		"default-case": "error",
		"default-case-last": 0, // to check
		"default-param-last": 0, // to check
		"dot-notation": "error",
		"eqeqeq": "error",
		"func-name-matching": "error",
		"func-names": "error",
		"func-style": [ "error", "declaration" ],
		"grouped-accessor-pairs": 0, // to check
		"guard-for-in": 0,
		"id-denylist": 0, // to check
		"id-length": 0,
		"id-match": 0,
		"init-declarations": "error",
		"logical-assignment-operators": 0, // to check
		"max-classes-per-file": 0, // to check
		"max-depth": [ "error", 4 ],
		"max-lines": [ "error", { "max": 500, "skipComments": true } ],
		"max-lines-per-function": 0, // to check
		"max-nested-callbacks": 0,
		"max-params": 0,
		"max-statements": [ "error", 25 ],
		"multiline-comment-style": 0, // to check
		"new-cap": "error",
		"no-alert": "error",
		"no-array-constructor": "error",
		"no-bitwise": [ "error", { "allow": [ "^" ] } ],
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-console": "error",
		"no-continue": "error",
		"no-delete-var": "error",
		"no-div-regex": "error",
		"no-else-return": 0,
		"no-empty": "error",
		"no-empty-function": "error",
		"no-empty-static-block": 0, // to check
		"no-eq-null": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-boolean-cast": "error",
		"no-extra-label": "error",
		"no-global-assign": "error",
		"no-implicit-coercion": "error",
		"no-implicit-globals": "error",
		"no-implied-eval": "error",
		"no-inline-comments": 0,
		"no-invalid-this": "error",
		"no-iterator": "error",
		"no-label-var": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-loop-func": "error",
		"no-magic-numbers": 0,
		"no-multi-assign": "error",
		"no-multi-str": "error",
		"no-negated-condition": 0,
		"no-nested-ternary": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-nonoctal-decimal-escape": 0, // to check
		"no-object-constructor": 0, // to check
		"no-octal": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "error",
		"no-plusplus": 0,
		"no-proto": "error",
		"no-redeclare": "error",
		"no-restricted-exports": 0, // to check
		"no-restricted-globals": "error",
		"no-restricted-imports": 0,
		"no-restricted-properties": "error",
		"no-restricted-syntax": "error",
		"no-return-assign": "error",
		"no-script-url": "error",
		"no-sequences": "error",
		"no-shadow": "error",
		"no-shadow-restricted-names": "error",
		"no-ternary": 0,
		"no-throw-literal": "error",
		"no-undef-init": "error",
		"no-undefined": 0,
		"no-underscore-dangle": 0,
		"no-unneeded-ternary": "error",
		"no-unused-expressions": "error",
		"no-unused-labels": "error",
		"no-useless-call": "error",
		"no-useless-catch": 0, // to check
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-useless-escape": "error",
		"no-useless-rename": "error",
		"no-useless-return": "error",
		"no-var": "error",
		"no-void": "error",
		"no-warning-comments": "error",
		"no-with": "error",
		"object-shorthand": 0,
		"one-var": [ "error", "never" ],
		"operator-assignment": [ "error", "always" ],
		"prefer-arrow-callback": "error",
		"prefer-const": "error",
		"prefer-destructuring": "error",
		"prefer-exponentiation-operator": 0, // to check
		"prefer-named-capture-group": 0, // to check
		"prefer-numeric-literals": "error",
		"prefer-object-has-own": 0, // to check
		"prefer-object-spread": 0, // to check
		"prefer-promise-reject-errors": "error",
		"prefer-regex-literals": 0, // to check
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": 0,
		"radix": "error",
		"require-await": "error",
		"require-unicode-regexp": 0, // to check
		"require-yield": "error",
		"sort-imports": 0,
		"sort-keys": 0,
		"sort-vars": "error",
		"strict": [ "error", "global" ],
		"symbol-description": "error",
		"vars-on-top": "error",
		"yoda": [ "error", "always" ],

		// Layout & Formatting

		"line-comment-position": 0,
		"unicode-bom": 0, // to check

		// Deprecated

		"array-bracket-newline": "error",
		"array-bracket-spacing": [ "error", "always" ],
		"array-element-newline": [ "error", "consistent" ],
		"arrow-parens": [ "error", "always" ],
		"arrow-spacing": ["error", { "before": true, "after": true } ],
		"block-spacing": "error",
		"brace-style": [ "error", "stroustrup" ],
		"callback-return": "error",
		"comma-dangle": [ "error", "never" ],
		"comma-spacing": [ "error", { "before": false, "after": true } ],
		"comma-style": [ "error", "last" ],
		"computed-property-spacing": [ "error", "never" ],
		"dot-location": [ "error", "property" ],
		"eol-last": "error",
		"func-call-spacing": "error",
		"generator-star-spacing": [ "error", { "before": true, "after": false } ],
		"global-require": 0,
		"handle-callback-err": "error",
		"id-blacklist": 0,
		"indent": 0,
		"key-spacing": [ "error", { "beforeColon": false, "afterColon": true } ],
		"keyword-spacing": [ "error", { "after": true, "before": true } ],
		"linebreak-style": 0,
		"lines-around-comment": "error",
		"max-len": 0,
		"max-statements-per-line": [ "error", { "max": 2 } ],
		"multiline-ternary": 0,
		"new-parens": "error",
		"newline-per-chained-call": 0,
		"no-buffer-constructor": "error",
		"no-catch-shadow": "error",
		"no-confusing-arrow": "error",
		"no-extra-parens": "error",
		"no-extra-semi": "error",
		"no-floating-decimal": "error",
		"no-mixed-operators": "error",
		"no-mixed-requires": "error",
		"no-mixed-spaces-and-tabs": "error",
		"no-multi-spaces": "error",
		"no-multiple-empty-lines": "error",
		"no-new-object": "error",
		"no-new-require": "error",
		"no-path-concat": "error",
		"no-process-env": "error",
		"no-process-exit": "error",
		"no-restricted-modules": "error",
		"no-return-await": "error",
		"no-sync": "error",
		"no-tabs": [ "error", { "allowIndentationTabs": true } ],
		"no-trailing-spaces": "error",
		"no-whitespace-before-property": "error",
		"nonblock-statement-body-position": [ "error", "below" ],
		"object-curly-newline": [ "error", { "consistent": true } ],
		"object-curly-spacing": [ "error", "always" ],
		"object-property-newline": "error",
		"one-var-declaration-per-line": "error",
		"operator-linebreak": [ "error", "after" ],
		"padded-blocks": ["error", { "classes": "always", "switches": "always" } ],
		"padding-line-between-statements": "error",
		"quote-props": [ "error", "always" ],
		"quotes": [ "error", "double" ],
		"require-jsdoc": "error",
		"rest-spread-spacing": [ "error", "never" ],
		"semi": [ "error", "always" ],
		"semi-spacing": [ "error", { "before": false, "after": true } ],
		"semi-style": [ "error", "last" ],
		"space-before-blocks": [ "error", "always" ],
		"space-before-function-paren": [ "error", "always" ],
		"space-in-parens": [ "error", "never" ],
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": [ "error", "always" ],
		"switch-colon-spacing": [ "error", { "after": true, "before": false } ],
		"template-curly-spacing": "error",
		"template-tag-spacing": [ "error", "always" ],
		"valid-jsdoc": "error",
		"wrap-iife": "error",
		"wrap-regex": "error",
		"yield-star-spacing": [ "error", { "before": true, "after": false } ]

	}
};
