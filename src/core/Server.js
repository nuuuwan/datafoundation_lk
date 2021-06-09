import WWW from 'base/WWW.js';

function gerServerHost() {
  console.debug(process.env);
  const { REACT_APP_SERVER_HOST } = process.env;
  return REACT_APP_SERVER_HOST;
}

export default class Server {
  static getURL(serverType, cmd, paramsList) {
    const host = gerServerHost();
    return `${host}/${serverType}_server/${cmd}/${paramsList.join('/')}`
  }

  static async run(serverType, cmd, paramsList) {
    const url = Server.getURL(serverType, cmd, paramsList);
    console.debug(url);
    const data = await WWW.getJSON(url);
    return data;
  }
}
