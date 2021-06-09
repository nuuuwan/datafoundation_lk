import Server from 'core/Server.js';

export default class GeoServer extends Server {
  static async getGeo(regionID) {
    return await Server.run(
      'geo',
      'region_geo',
      [`${regionID}`],
    );
  }

  static async getRegionInfo([lat, lng]) {
    return await Server.run(
      'geo',
      'latlng_to_region',
      [`${lat},${lng}`],
    );
  }
}
