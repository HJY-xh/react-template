export default {
  consoleLogger(log, type = 'log') {
    if (process.env.NODE_ENV === 'development') {
      type === 'log' && console.log(log.message, { ...log.content });
      type === 'error' && console.error(log.message, { ...log.content });
      type === 'warn' && console.warn(log.message, { ...log.content });
      type === 'info' && console.info(log.message, { ...log.content });
    }
  },
};
