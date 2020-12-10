module.exports = {
  async onPostBuild({
    constants,
    utils: {
      run: { command },
    },
  }) {
    await command(`ls -lh ${constants.FUNCTIONS_DIST}`);
  },
};
