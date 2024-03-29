Σamples JukeBox 7
----
* [Russian version](./README.ru.md)


A simple assistant for playing samples and music. 
It was created for the module [The Horror on Tau Sigma 7](https://www.drivethrurpg.com/product/367968/The-Horror-on-Tau-Sigma-7) for the sci-fi horror roleplaying game [Mothership](https://www.mothershiprpg.com/).
**Can be configured for other games** as well, so I'm making it publicly available.

Assistant's purpose: to play samples during the game to provide audio for the machine (near the crater) that players can interact with.

I ran the module in a home setting of retro-Soviet sci-fi, and the webapp brought us a lot of amusement.


## Web-version
[GitHub Pages](https://8kto.github.io/tau-sigma-helper/) version (only in Russian ATM).


## How to rin locally

### Simple method
Download the repository archive (green button on the [project's GitHub page](https://github.com/8kto/tau-sigma-helper)), extract it, and open the `index.html` file in a web browser.

### For developers
```
git clone git@github.com:8kto/tau-sigma-helper.git
cd tau-sigma-helper
yarn install --frozen-lockfile # or npm ci
```
The project was too simple to set up a web server for it, so just open the `index.html` file in a web browser.


## How to play your own samples

### Simple method
1. Delete the audio files from the `./samples` and `./music` folders.
2. Copy your own files there. Files in the `./music` folder will be shown in a dedicated section; the player for these files loops the playback.
3. Open the `./js/samples.js` file and replace the old filenames with your own.

### For developers
1. Repeat steps 1-2.
2. Execute `yarn parse` (or `npm run parse`). This command will parse the files in the folders and update `./js/samples.js`.

Once `./js/samples.js` is updated, the page will display the current list of files.
