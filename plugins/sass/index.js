module.exports = {
    onPreBuild: async ({ utils: { run } }) => {
      await run.command(
        "node-sass src/styles/sass/jaydn.scss dist/css/jaydn.css"
      );
    },
  };