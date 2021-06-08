import * as d3 from 'd3';
import {asyncCacheGet} from './Cache.js';

export default class WWW {
  static getURLAbsolute(urlRelative) {
    if (urlRelative.includes('http')) {
      return urlRelative;
    }
    return `${process.env.PUBLIC_URL}/mylocal/${urlRelative}`;
  }

  static async getJSON(urlRelative) {
    return asyncCacheGet(
      urlRelative,
      async function () {
        const urlAbsolute = WWW.getURLAbsolute(urlRelative);
        return await d3.json(urlAbsolute);
      }
    )

  }
}
