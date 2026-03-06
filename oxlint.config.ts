import { defineConfig } from 'oxlint'

export default defineConfig({
  settings: {
    vitest: {
      typecheck: true,
    },
  },
  options: {
    typeAware: true,
    typeCheck: true,
  },
  rules: {
    'accessor-pairs': ['error', { getWithoutSet: true }],
    'no-array-constructor': 'error',
    'no-duplicate-imports': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-fallthrough': 'error',
    'no-inner-declarations': ['error', 'functions'],
    'no-label-var': 'error',
    'no-undef': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable': 'error',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-new-wrappers': 'error',
    curly: ['error', 'multi-line'],
    eqeqeq: 'error',
    yoda: 'error',
  },
  ignorePatterns: ['node_modules/', '.DS_Store/', 'dist/'],
})
