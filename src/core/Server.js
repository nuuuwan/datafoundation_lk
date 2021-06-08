import WWW from 'base/WWW.js';

function gerServerHost() {
  const { REACT_APP_SERVER_HOST } = process.env;
  return REACT_APP_SERVER_HOST;
}

function getServerPort(serverType) {
  const SERVER_TYPE_TO_PORT = {
    gig: 81,
    geo: 82,
  }
  return SERVER_TYPE_TO_PORT[serverType];
}

export default class Server {
  static getURL(serverType, cmd, paramsList) {
    const host = gerServerHost();
    const port = getServerPort(serverType);
    return `http://${host}:${port}`
      + `/${cmd}/${paramsList.join('/')}`
  }

  static async run(serverType, cmd, paramsList) {
    const url = Server.getURL(serverType, cmd, paramsList);
    const data = await WWW.getJSON(url);
    return data;
  }
}
