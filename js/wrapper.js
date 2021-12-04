(() => {
  const SAMPLES_BASE_PATH = './speech'
  const MUSIC_BASE_PATH = './music'
  const SAMPLES = [
    'Слава Союзу! X.mp3',
    'Вас приветствует Универсальный гео-разведывательный X.mp3',
    'Введите запрос или выберите из пунктов меню X.mp3',
    '1 Вложить образец породы X.mp3',
    '2 Связаться со станцией X.mp3',
    '3 Получить карту местности X.mp3',
    '4 Прослушать анекдот X.mp3',
    'Введите запрос X.mp3',
    'Выполняю запрос X.mp3',
    'Анек glitch X.mp3',
    'Анек полный X.mp3',
    'Товарищи! X.mp3',
    'Заполняю X.mp3',
    'Связь прервана X.mp3',
    'Смех X.mp3',
  ]
  const MUSIC = [
    'Chopin waltz op69.mp3',
    'Hymn X.mp3',
    'Noise.mp3',
  ]
  const TEMPLATE = `
    <div class="p-3 mb-4 mr-2" id={id}>
      <p class="sample-title text-truncate font-weight-bold">{title}</p>
      <audio controls preload="auto">
        <source src="{src}" type="audio/mpeg">
      </audio>
    </div>
    `

  /**
   * Get readable sample title
   */
  const getTitle = src => src
    .replace('X.mp3', '')
    .replace(/_/g, ' ')

  const getId = src => src
    .toLowerCase()
    .replace('.mp3', '')
    .replace('.wav', '')
    .replace(/\s/g, '-')

  /**
   * Force play only one audio per time
   */
  const handleSamplesPlaying = () => {
    const audios = $('#speech-container audio');
    audios.on('play', function () {
      const self = this;

      audios.not(this).each(function () {
        this.pause();
      });

      self.play();
    });
  }

  const adjustMusic = () => {
    document.querySelector('#hymn-x audio').volume = 0.1
    document.querySelector('#hymn-x audio').setAttribute('loop', 'true')

    document.querySelector('#noise audio').setAttribute('loop', 'true')
    document.querySelector('#noise audio').volume = 0.2
  }

  const render = ($container, audioFiles, basePath) => {
    $container.html(
      audioFiles.map(path => {
        return TEMPLATE
          .replace('{src}', `${basePath}/${path}`)
          .replace('{title}', getTitle(path))
          .replace('{id}', getId(path))
      })
    )
  }

  jQuery(() => {
    render($('#speech-container'), SAMPLES, SAMPLES_BASE_PATH)
    render($('#music-container'), MUSIC, MUSIC_BASE_PATH)

    handleSamplesPlaying()
    adjustMusic()
  })
})()