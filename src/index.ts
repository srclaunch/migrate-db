
// try {
//   const umzug = new Umzug({
//     context: sequelize.getQueryInterface(),
//     logger: console,
//     migrations: { glob: 'migrations/*.js' },
//     storage: new SequelizeStorage({ sequelize }),
//   });

//   (async () => {
//     // Checks migrations and run them if they are not already applied. To keep
//     // track of the executed migrations, a table (and sequelize model) called SequelizeMeta
//     // will be automatically created (if it doesn't exist already) and parsed.
//     await umzug.up();
//   })();
// } catch (err) {
//   logException(err, {
//     context: {},
//     data: {},
//     level: LogLevel.Critical,
//     message: 'Failure initializing umzugs',
//     tags: {
//       component: 'Database',
//       file: 'models/index.js',
//       func: 'export default ()',
//       type: 'CaughtException',
//     },
//   });
// }
