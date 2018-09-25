module.exports = {
  runtimeCompiler: true,
  parallel: true,
  css: {
    loaderOptions: {
      sass: {
        data:
          '@import "src/styles/utils/all"; @import "src/styles/media.scss";',
      },
    },
  },
};
