module.exports = {
  plugins: ['sort-class-members'],

  rules: {
    'sort-class-members/sort-class-members': [
      'error',
      {
        accessorPairPositioning: 'getThenSet',

        groups: {
          'async-conventional-private-methods': [
            {
              async: true,
              name: '/_.+/',
              sort: 'alphabetical',
              type: 'method',
            },
          ],

          emits: [
            {
              name: '/emit[A-Z].*/',
              sort: 'alphabetical',
              type: 'method',
            },
          ],

          injects: [
            {
              groupByDecorator: 'Inject',
              sort: 'alphabetical',
              type: 'property',
            },
            {
              groupByDecorator: 'InjectReactive',
              sort: 'alphabetical',
              type: 'property',
            },
          ],

          models: [
            {
              groupByDecorator: 'Model',
              sort: 'alphabetical',
              type: 'property',
            },
            {
              groupByDecorator: 'ModelSync',
              sort: 'alphabetical',
              type: 'property',
            },
            {
              groupByDecorator: 'VModel',
              sort: 'alphabetical',
              type: 'property',
            },
          ],

          props: [
            {
              groupByDecorator: 'Prop',
              sort: 'alphabetical',
              type: 'property',
            },
            {
              groupByDecorator: 'PropSync',
              sort: 'alphabetical',
              type: 'property',
            },
          ],

          provides: [
            {
              groupByDecorator: 'Provide',
              sort: 'alphabetical',
              type: 'property',
            },
            {
              groupByDecorator: 'ProvideReactive',
              sort: 'alphabetical',
              type: 'property',
            },
          ],

          refs: [
            {
              groupByDecorator: 'Ref',
              sort: 'alphabetical',
              type: 'property',
            },
          ],

          'sorted-methods': [
            {
              sort: 'alphabetical',
              type: 'method',
            },
          ],

          'sorted-properties': [
            {
              sort: 'alphabetical',
              type: 'property',
            },
          ],

          'static-accessor-pairs': [
            {
              accessorPair: true,
              sort: 'alphabetical',
              static: true,
            },
          ],

          'static-arrow-function-properties': [
            {
              propertyType: 'ArrowFunctionExpression',
              sort: 'alphabetical',
              static: true,
            },
          ],

          'static-async-conventional-private-methods': [
            {
              async: true,
              name: '/_.+/',
              sort: 'alphabetical',
              static: true,
              type: 'method',
            },
          ],

          'static-async-methods': [
            {
              async: true,
              sort: 'alphabetical',
              static: true,
              type: 'method',
            },
          ],

          'static-conventional-private-methods': [
            {
              name: '/_.+/',
              sort: 'alphabetical',
              static: true,
              type: 'method',
            },
          ],

          'static-conventional-private-properties': [
            {
              name: '/_.+/',
              sort: 'alphabetical',
              static: true,
              type: 'property',
            },
          ],

          'static-getters': [
            {
              kind: 'get',
              sort: 'alphabetical',
              static: true,
            },
          ],

          'static-setters': [
            {
              kind: 'set',
              sort: 'alphabetical',
              static: true,
            },
          ],

          'vue-activated': [{ name: 'activated', type: 'method' }],

          'vue-before-create': [{ name: 'beforeCreate', type: 'method' }],

          'vue-before-mount': [{ name: 'beforeMount', type: 'method' }],

          'vue-before-unmount': [{ name: 'beforeUnmount', type: 'method' }],

          'vue-before-update': [{ name: 'beforeUpdate', type: 'method' }],

          'vue-created': [{ name: 'created', type: 'method' }],

          'vue-deactivated': [{ name: 'deactivated', type: 'method' }],

          'vue-error-captured': [{ name: 'errorCaptured', type: 'method' }],

          'vue-mounted': [{ name: 'mounted', type: 'method' }],

          'vue-render-tracked': [{ name: 'renderTracked', type: 'method' }],

          'vue-render-triggered': [{ name: 'renderTriggered', type: 'method' }],

          'vue-unmounted': [{ name: 'unmounted', type: 'method' }],

          'vue-updated': [{ name: 'updated', type: 'method' }],

          vuex: [
            {
              groupByDecorator: 'namespace',
              sort: 'alphabetical',
              type: 'property',
            },
            {
              groupByDecorator: 'State',
              sort: 'alphabetical',
              type: 'property',
            },
            {
              groupByDecorator: 'Getter',
              sort: 'alphabetical',
              type: 'property',
            },
            {
              groupByDecorator: 'Mutation',
              sort: 'alphabetical',
              type: 'property',
            },
            {
              groupByDecorator: 'Action',
              sort: 'alphabetical',
              type: 'property',
            },
            {
              groupByDecorator: '(namespace',
              sort: 'alphabetical',
              type: 'property',
            },
          ],
        },

        order: [
          // static
          '[static-properties]',
          '[static-arrow-function-properties]',
          '[static-accessor-pairs]',
          '[static-getters]',
          '[static-setters]',
          '[static-methods]',
          '[static-async-methods]',

          // decorated properties
          '[vuex]',
          '[injects]',
          '[props]',
          '[models]',
          '[provides]',
          '[emits]',
          '[refs]',

          // properties
          '[sorted-properties]',
          '[arrow-function-properties]',

          // constructor
          'constructor',

          // accessor
          '[accessor-pairs]',
          '[getters]',
          '[setters]',

          // vue lifecycle hooks
          '[vue-before-create]',
          '[vue-created]',
          '[vue-before-mount]',
          '[vue-mounted]',
          '[vue-before-update]',
          '[vue-updated]',
          '[vue-before-unmount]',
          '[vue-unmounted]',
          '[vue-error-captured]',
          '[vue-render-tracked]',
          '[vue-render-triggered]',
          '[vue-activated]',

          // methods
          '[sorted-methods]',
          '[async-methods]',

          // private static
          '[static-conventional-private-properties]',
          '[static-conventional-private-methods]',
          '[static-async-conventional-private-methods]',

          // private
          '[conventional-private-properties]',
          '[conventional-private-methods]',
          '[async-conventional-private-methods]',
        ],
      },
    ],
  },
};
