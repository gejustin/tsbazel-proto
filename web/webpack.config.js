module.exports = (env, argv) => {
  console.log(process.cwd(), __dirname)
  return {
    mode: argv.mode,
  };
};