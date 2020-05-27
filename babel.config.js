const presets = [
  [
    "@babel/preset-env",
    {
    }
  ],
  "@babel/preset-typescript"
]
const commonPlugins = 
[
  ["@babel/plugin-proposal-class-properties", { "loose": true }],
  ["@babel/plugin-proposal-object-rest-spread", { "loose": true, "useBuiltIns": true }],
  [
    "@babel/plugin-transform-runtime", { }
  ]
]


const plugins = commonPlugins.slice(0);
plugins.push(
 [
    "module-resolver",
    {
      "cwd": "babelrc",
      "alias": {
      },
      extensions: [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.android.js',
        '.android.jsx',
        '.android.ts',
        '.android.tsx',
        '.web.js',
        '.web.jsx',
        '.web.ts',
        '.web.tsx',
        '.sketch.jsx',
        '.sketch.js',
        '.sketch.ts',
        '.sketch.tsx',
        '.ios.jsx',
        '.ios.js',
        '.ios.ts',
        '.ios.tsx'
      ],
    }
  ]
)


module.exports = { presets, plugins };
