import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;

/**
 * Handles database operations for the Soil.
 * See https://sequelize.org/v5/index.html to learn how to customize it.
 */
class SoilRepository {
  /**
   * Creates the Soil.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  static async create(data, options) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const record = await options.database.soil.create(
      {
        ...lodash.pick(data, [
          'type',
          'pH',
          'temperature',
          'organicCarbon',
          'cec',
          'nitrogen',
          'phosphorus',
          'potassium',
          'other',
          'label',          
          'importHash',
        ]),
        tenantId: tenant.id,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    await record.setLand(data.land || null, {
      transaction,
    });
  

  
    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  /**
   * Updates the Soil.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  static async update(id, data, options) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await options.database.soil.findByPk(
      id,
      {
        transaction,
      },
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    if (
      !record ||
      String(record.tenantId) !== String(tenant.id)
    ) {
      throw new Error404();
    }

    record = await record.update(
      {
        ...lodash.pick(data, [
          'type',
          'pH',
          'temperature',
          'organicCarbon',
          'cec',
          'nitrogen',
          'phosphorus',
          'potassium',
          'other',
          'label',          
          'importHash',
        ]),
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    await record.setLand(data.land || null, {
      transaction,
    });



    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  /**
   * Deletes the Soil.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  static async destroy(id, options) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await options.database.soil.findByPk(
      id,
      {
        transaction,
      },
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    if (
      !record ||
      String(record.tenantId) !== String(tenant.id)
    ) {
      throw new Error404();
    }

    await record.destroy({
      transaction,
    });

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      record,
      record,
      options,
    );
  }

  /**
   * Finds the Soil and its relations.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  static async findById(id, options) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const include = [
      {
        model: options.database.land,
        as: 'land',
      },
    ];

    const record = await options.database.soil.findByPk(
      id,
      {
        include,
        transaction,
      },
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    if (
      !record ||
      String(record.tenantId) !== String(tenant.id)
    ) {
      throw new Error404();
    }

    return this._fillWithRelationsAndFiles(record, options);
  }

  /**
   * Counts the number of Soils based on the filter.
   *
   * @param {Object} filter
   * @param {Object} [options]
   */
  static async count(filter, options) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    return options.database.soil.count(
      {
        where: {
          ...filter,
          tenantId: tenant.id,
        },
      },
      {
        transaction,
      },
    );
  }

  /**
   * Finds the Soils based on the query.
   * See https://sequelize.org/v5/manual/querying.html to learn how to
   * customize the query.
   *
   * @param {Object} query
   * @param {Object} query.filter
   * @param {number} query.limit
   * @param  {number} query.offset
   * @param  {string} query.orderBy
   * @param {Object} [options]
   *
   * @returns {Promise<Object>} response - Object containing the rows and the count.
   */
  static async findAndCountAll(
    { filter, limit = 0, offset = 0, orderBy = '' },
    options,
  ) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let where: any = {
      tenantId: tenant.id,
    };

    let include = [
      {
        model: options.database.land,
        as: 'land',
      },      
    ];

    if (filter) {
      if (filter.id) {
        where = {
          ...where,
          ['id']: SequelizeFilterUtils.uuid(filter.id),
        };
      }

      if (filter.land) {
        where = {
          ...where,
          ['landId']: SequelizeFilterUtils.uuid(
            filter.land,
          ),
        };
      }

      if (filter.type) {
        where = {
          ...where,
          type: filter.type,
        };
      }

      if (filter.organicCarbon) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'soil',
            'organicCarbon',
            filter.organicCarbon,
          ),
        };
      }

      if (filter.cec) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'soil',
            'cec',
            filter.cec,
          ),
        };
      }

      if (filter.nitrogen) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'soil',
            'nitrogen',
            filter.nitrogen,
          ),
        };
      }

      if (filter.phosphorus) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'soil',
            'phosphorus',
            filter.phosphorus,
          ),
        };
      }

      if (filter.potassium) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'soil',
            'potassium',
            filter.potassium,
          ),
        };
      }

      if (filter.label) {
        where = {
          ...where,
          [Op.and]: SequelizeFilterUtils.ilike(
            'soil',
            'label',
            filter.label,
          ),
        };
      }

      if (filter.createdById) {
        where = {
          ...where,
          ['createdById']: SequelizeFilterUtils.uuid(
            filter.createdById,
          ),
        };
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.gte]: start,
            },
          };
        }

        if (
          end !== undefined &&
          end !== null &&
          end !== ''
        ) {
          where = {
            ...where,
            ['createdAt']: {
              ...where.createdAt,
              [Op.lte]: end,
            },
          };
        }
      }
    }

    let {
      rows,
      count,
    } = await options.database.soil.findAndCountAll({
      where,
      include,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : undefined,
      order: orderBy
        ? [orderBy.split('_')]
        : [['createdAt', 'DESC']],
      transaction: SequelizeRepository.getTransaction(
        options,
      ),
    });

    rows = await this._fillWithRelationsAndFilesForRows(
      rows,
      options,
    );

    return { rows, count };
  }

  /**
   * Lists the Soils to populate the autocomplete.
   * See https://sequelize.org/v5/manual/querying.html to learn how to
   * customize the query.
   *
   * @param {Object} query
   * @param {number} limit
   */
  static async findAllAutocomplete(query, limit, options) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let where: any = {
      tenantId: tenant.id,
    };

    if (query) {
      where = {
        ...where,
        [Op.or]: [
          { ['id']: SequelizeFilterUtils.uuid(query) },
          {
            [Op.and]: SequelizeFilterUtils.ilike(
              'soil',
              'label',
              query,
            ),
          },
        ],
      };
    }

    const records = await options.database.soil.findAll(
      {
        attributes: ['id', 'label'],
        where,
        limit: limit ? Number(limit) : undefined,
        orderBy: [['label', 'ASC']],
      },
    );

    return records.map((record) => ({
      id: record.id,
      label: record.label,
    }));
  }

  /**
   * Creates an audit log of the operation.
   *
   * @param {string} action - The action [create, update or delete].
   * @param {object} record - The sequelize record
   * @param {object} data - The new data passed on the request
   * @param {object} options
   */
  static async _createAuditLog(
    action,
    record,
    data,
    options,
  ) {
    let values = {};

    if (data) {
      values = {
        ...record.get({ plain: true }),

      };
    }

    await AuditLogRepository.log(
      {
        entityName: 'soil',
        entityId: record.id,
        action,
        values,
      },
      options,
    );
  }

  /**
   * Fills an array of Soil with relations and files.
   *
   * @param {Array} rows
   * @param {Object} [options]
   */
  static async _fillWithRelationsAndFilesForRows(
    rows,
    options,
  ) {
    if (!rows) {
      return rows;
    }

    return Promise.all(
      rows.map((record) =>
        this._fillWithRelationsAndFiles(record, options),
      ),
    );
  }

  /**
   * Fill the Soil with the relations and files.
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



    return output;
  }
}

export default SoilRepository;
