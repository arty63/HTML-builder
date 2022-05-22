const { readdir, stat } = require('fs/promises');
const path = require('path');
const { stdout } = process;

const folderPlace = path.join(__dirname, 'secret-folder');

async function readDirectory(place) {
  try {
    const files = await readdir(place, { withFileTypes: true });
    for (const dirent of files) {
      if (dirent.isFile()) {
        const stats = await stat(path.join(place, dirent.name));
        stdout.write(`\n${path.parse(dirent.name).name} - ${path.extname(dirent.name).slice(1)} - ${stats.size}bytes`);
      }
    }
  } catch (error) {
    stdout.write(`Error: ${error.message}\n`);
  }
}

readDirectory(folderPlace);