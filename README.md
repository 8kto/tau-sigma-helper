Samples JukeBox
----

A simple assistant for playing samples and music. 
It was created for the module [The Horror on Tau Sigma 7](https://www.drivethrurpg.com/product/367968/The-Horror-on-Tau-Sigma-7) for the tabletop role-playing game in the genre of sci-fi horror [Mothership](https://www.mothershiprpg.ru).
**Can be configured for other games** as well, so I'm making it publicly available.

Assistant's purpose: to play samples during the game to provide audio for the machine (near the crater) that players can interact with.

I ran the module in a home setting of retro-Soviet sci-fi, and the webapp brought us a lot of amusement. I generated the phrases using a simple program called [Balabolka](https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%BB%D0%B0%D0%B1%D0%BE%D0%BB%D0%BA%D0%B0). Then, I applied glitch effects using [DAW Reaper](https://www.reaper.fm/).

## How to Run

### Simple method
Download the repository archive (green button on the [project's GitHub page](https://github.com/8kto/tau-sigma-helper)), extract it, and open the `index.html` file in a web browser.

### For Developers
```
git clone git@github.com:8kto/tau-sigma-helper.git
cd tau-sigma-helper
yarn install --frozen-lockfile # or npm ci
```
The project was too simple to set up a web server for it, so just open the `index.html` file in a web browser.


## How to Play Your Own Samples

### Simple method
1. Delete the audio files from the `./samples` and `./music` folders.
2. Copy your own files there. Files in the `./music` folder will be shown in a dedicated section; the player for these files loops the playback.
3. Open the `./js/samples.js` file and replace the old filenames with your own.

### For Developers
1. Repeat steps 1-2.
2. Execute `yarn parse` (or `npm run parse`). This command will parse the files in the folders and update `./js/samples.js`.

Once `./js/samples.js` is updated, the page will display the current list of files.
