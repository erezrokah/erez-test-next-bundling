const fs = require("fs/promises");

module.exports = {
  async onBuild({
    constants,
    utils: {
      run: { command },
    },
  }) {
    await fs.writeFile(
      `${constants.FUNCTIONS_SRC}/test.js`,
      `module.exports = require('jimp');`
    );
  },
  async onPostBuild({
    constants,
    utils: {
      run: { command },
    },
  }) {
    await command(`ls -lh ${constants.FUNCTIONS_DIST}`);
  },
};
