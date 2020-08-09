/**
 * List of Roles available for the Users.
 */
class Roles {
  static get values() {
    return {
      admin: 'admin',
      farmer: 'farmer',
      agent: 'agent',
      researcher: 'researcher',

    };
  }
}

export default Roles;
