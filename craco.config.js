const emotionPresetOptions = { autoLabel: true, labelFormat: '[local]' }

const emotionBabelPreset = require('@emotion/babel-preset-css-prop').default(
  undefined,
  emotionPresetOptions,
)

module.exports = {
  babel: {
    plugins: [
      ...emotionBabelPreset.plugins,
      // your other plugins
    ],
  },
}
