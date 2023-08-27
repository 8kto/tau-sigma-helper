const path = require('path')
const fs = require('fs')

/**
 * @typedef SamplesState
 * @property {Array<AudioSampleInfo>} samples
 * @property {Array<AudioSampleInfo>} music
 */

/**
 * @typedef AudioSampleInfo
 * @property {string} name
 */

/**
 * @returns {SamplesState}
 */
const getDefaultState = () => {
  return {
    /** @type {Array<AudioSampleInfo>} */
    samples: [],
    /** @type {Array<AudioSampleInfo>} */
    music: [],
  }
}

/**
 * @param {string} dirPath
 * @returns {string[]}
 */
const getFiles = (dirPath) => {
  return fs.readdirSync(dirPath, (err, files) => {
    if (err) {
      throw err
    }

    return files
  })
}

/**
 *
 * @param {Record<keyof SamplesState, string>} paths
 * @returns {SamplesState}
 */
const getState = (paths) => {
  const state = getDefaultState()

  Object.entries(paths).forEach(
    /**
     * @param {keyof SamplesState} key
     * @param {string} path
     */
    ([key, path]) => {
      getFiles(path).forEach((sampleFileName) => {
        /** @type {AudioSampleInfo} */
        const info = { name: sampleFileName }
        state[key].push(info)
      })
    })

  return state
}

const main = () => {
  const speechDirName = 'speech'
  const musicDirName = 'music'
  const webAppRootPath = path.join(__dirname, '..')

  /** @type {Record<keyof SamplesState, string>} */
  const paths = {
    samples: path.join(webAppRootPath, speechDirName),
    music: path.join(webAppRootPath, musicDirName),
  }

  const state = getState(paths)
  // That was the moment I started regretting I hadn't used frameworks
  const scriptLayout = `/** @type {SamplesState} */\nconst SAMPLES_STATE = ${JSON.stringify(state, null, ' ')};`
  fs.writeFileSync(
    path.join(webAppRootPath, 'js', 'samples.js'),
    scriptLayout,
  )
}

main()