import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from './auditLogRepository';
import FileRepository from './fileRepository';
import _get from 'lodash/get';

/**
 * Handles database operations for Settings.
 * See https://sequelize.org/v5/index.html to learn how to customize it.
 */
export default class SettingsRepository {
  /**
   * Finds the settings or creates and returns the default.
   *
   * @param {*} defaults
   * @param {*} [options]
   */
  static async findOrCreateDefault(defaults, options) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const [
      settings,
    ] = await options.database.settings.findOrCreate({
      where: { id: tenant.id, tenantId: tenant.id },
      defaults: {
        ...defaults,
        id: tenant.id,
        tenantId: tenant.id,
        createdById: currentUser ? currentUser.id : null,
      },
      transaction: SequelizeRepository.getTransaction(
        options,
      ),
    });

    return this._fillWithRelationsAndFiles(
      settings,
      options,
    );
  }

  /**
   * Saves the settings.
   *
   * @param {*} data
   * @param {*} [options]
   */
  static async save(data, options) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    data.backgroundImageUrl = _get(
      data,
      'backgroundImages[0].downloadUrl',
      null,
    );
    data.logoUrl = _get(data, 'logos[0].downloadUrl', null);

    const [
      settings,
    ] = await options.database.settings.findOrCreate({
      where: { id: tenant.id, tenantId: tenant.id },
      defaults: {
        ...data,
        id: tenant.id,
        tenantId: tenant.id,
        createdById: currentUser ? currentUser.id : null,
      },
      transaction,
    });

    await settings.update(data, {
      transaction,
    });

    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.settings.getTableName(),
        belongsToColumn: 'logos',
        belongsToId: settings.id,
      },
      data.logos,
      options,
    );

    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.settings.getTableName(),
        belongsToColumn: 'backgroundImages',
        belongsToId: settings.id,
      },
      data.backgroundImages,
      options,
    );

    await AuditLogRepository.log(
      {
        entityName: 'settings',
        entityId: settings.id,
        action: AuditLogRepository.UPDATE,
        values: data,
      },
      options,
    );

    return await this._fillWithRelationsAndFiles(
      settings,
      options,
    );
  }

  /**
   * Fill the Settings with the relations and files.
   *
   * @param {Object} record
   * @param {Object} [options]
   */
  static async _fillWithRelationsAndFiles(record, options) {
    if (!record) {
      return record;
    }

    const output = record.get({ plain: true });

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    output.logos = await FileRepository.fillDownloadUrl(
      await record.getLogos({
        transaction,
      }),
    );

    output.backgroundImages = await FileRepository.fillDownloadUrl(
      await record.getBackgroundImages({
        transaction,
      }),
    );

    return output;
  }
}
