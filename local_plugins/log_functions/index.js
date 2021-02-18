module.exports = {
  async onPostBuild({
    constants,
    utils: {
      run: { command },
    },
  }) {
    try {
      await command(`ls -lh ${constants.FUNCTIONS_DIST}`);
    } catch (error) {
      console.log(error.message);
    }
  },
};
