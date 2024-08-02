module.exports = {
    swcMinify: true,
    compiler: {
      removeConsole: process.env.NODE_ENV !== 'development',
    },
  }