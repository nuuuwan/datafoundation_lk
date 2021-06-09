import Server from 'core/Server.js';

export default class GIGServer extends Server {

  static async multigetEntities(entityIDs) {
    return await Server.run(
      'gig',
      'entities',
      [entityIDs.join(';')],
    );
  }

  static async getEntity(entityID) {
    return (await GIGServer.multigetEntities([entityID]))[entityID];
  }

  static async getEntityIDs(entityName) {
    return await Server.run(
      'gig',
      'entity_ids',
      [entityName],
    );
  }

  static async getNearby([lat, lng]) {
    return (await Server.run(
      'gig',
      'nearby',
      [`${lat},${lng}`],
    ))['nearby_entity_info_list'];
  }

  static async getCensus(tableName, entityID) {
    return (await Server.run(
      'gig',
      'ext_data',
      ['census', tableName, entityID],
    ));
  }
}
