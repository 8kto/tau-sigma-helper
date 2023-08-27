(() => {
  const TEMPLATE = `
    <div class="p-3 mb-4 mr-2" id="{id}">
      <p class="sample-title text-truncate font-weight-bold">{title}</p>
      <audio controls preload="auto">
        <source src="{src}" type="audio/mpeg">
      </audio>
    </div>
    `

  /**
   * Get readable sample title
   * @param {AudioSampleInfo} info
   * @returns {string}
   */
  const getTitle = info =>
    info.name.replace(/\.mp3$/i, '')
      .replace(/\.wav$/i, '')
      .replace(/\.flac$/i, '')
      .replace(/\.midi$/i, '')
      .replace(/_/g, ' ')

  /**
   * @param {AudioSampleInfo} info
   * @returns {string}
   */
  const getId = info => info.id.toString()

  /**
   * Force playing only one sample at time.
   * Music still can be layered (or include `#music audio` as well)
   */
  const bindPlayers = () => {
    const audios = $('#samples audio')
    audios.on('play', function () {
      const self = this

      audios.not(this).each(function () {
        this.pause()
      })

      self.play()
    })
  }

  const adjustMusic = () => {
    // Make music play in loop
    document.querySelectorAll('#music audio').forEach((elem) => {
      elem.setAttribute('loop', 'true')
    })
  }

  /**
   *
   * @param {jQuery} $container
   * @param {Array<AudioSampleInfo>} audioFiles
   * @param {string} basePath
   */
  const render = ($container, audioFiles, basePath) => {
    $container.html(audioFiles.map(info => {
      return TEMPLATE
        .replace('{src}', `${basePath}/${info.name}`)
        .replace('{title}', getTitle(info))
        .replace('{id}', getId(info))
    }))
  }

  jQuery(() => {
    if (typeof SAMPLES_STATE === 'undefined') {
      alert('SAMPLES_STATE is not loaded, check the js/samples.js file')

      return
    }

    Object.entries(SAMPLES_STATE).forEach(([key, files]) => {
      render($('#' + key), files, key)
    })

    bindPlayers()
    adjustMusic()
  })
})()