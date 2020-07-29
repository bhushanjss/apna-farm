import OrganicFertilizerRepository from '../database/repositories/organicFertilizerRepository';
import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';

/**
 * Handles OrganicFertilizer operations
 */
export default class OrganicFertilizerService {
  options;

  constructor(options) {
    this.options = options;
  }

  /**
   * Creates a OrganicFertilizer.
   *
   * @param {*} data
   */
  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      const record = await OrganicFertilizerRepository.create(data, {
        ...this.options,
        transaction,
      });

      await SequelizeRepository.commitTransaction(
        transaction,
      );

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );
      throw error;
    }
  }

  /**
   * Updates a OrganicFertilizer.
   *
   * @param {*} id
   * @param {*} data
   */
  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      const record = await OrganicFertilizerRepository.update(
        id,
        data,
        {
          ...this.options,
          transaction,
        },
      );

      await SequelizeRepository.commitTransaction(
        transaction,
      );

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );
      throw error;
    }
  }

  /**
   * Destroy all OrganicFertilizers with those ids.
   *
   * @param {*} ids
   */
  async destroyAll(ids) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      for (const id of ids) {
        await OrganicFertilizerRepository.destroy(id, {
          ...this.options,
          transaction,
        });
      }

      await SequelizeRepository.commitTransaction(
        transaction,
      );
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );
      throw error;
    }
  }

  /**
   * Finds the OrganicFertilizer by Id.
   *
   * @param {*} id
   */
  async findById(id) {
    return OrganicFertilizerRepository.findById(id, this.options);
  }

  /**
   * Finds OrganicFertilizers for Autocomplete.
   *
   * @param {*} search
   * @param {*} limit
   */
  async findAllAutocomplete(search, limit) {
    return OrganicFertilizerRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  /**
   * Finds OrganicFertilizers based on the query.
   *
   * @param {*} args
   */
  async findAndCountAll(args) {
    return OrganicFertilizerRepository.findAndCountAll(
      args,
      this.options,
    );
  }

  /**
   * Imports a list of OrganicFertilizers.
   *
   * @param {*} data
   * @param {*} importHash
   */
  async import(data, importHash) {
    if (!importHash) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashRequired',
      );
    }

    if (await this._isImportHashExistent(importHash)) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashExistent',
      );
    }

    const dataToCreate = {
      ...data,
      importHash,
    };

    return this.create(dataToCreate);
  }

  /**
   * Checks if the import hash already exists.
   * Every item imported has a unique hash.
   *
   * @param {*} importHash
   */
  async _isImportHashExistent(importHash) {
    const count = await OrganicFertilizerRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
