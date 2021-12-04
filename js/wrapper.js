(() => {
  const speechBase = './speech'
  const speech = [
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
  ]
  const template = `
    <div class="p-3 mb-4 mr-2">
      <p class="sample-title text-truncate font-weight-bold">{title}</p>
      <audio controls preload="auto">
        <source src="{src}" type="audio/mpeg">
      </audio>
    </div>
    `

  const getTitle = src => src.replace('X.mp3', '')

  jQuery(() => {
    $('#speech-container').html(
      speech.map(path => {
        return template
          .replace('{src}', `${speechBase}/${path}`)
          .replace('{title}', getTitle(path))
      })
    )
  })

})()