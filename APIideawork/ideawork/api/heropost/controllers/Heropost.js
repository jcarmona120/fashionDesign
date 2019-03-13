'use strict';

/**
 * Heropost.js controller
 *
 * @description: A set of functions called "actions" for managing `Heropost`.
 */

module.exports = {

  /**
   * Retrieve heropost records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.heropost.search(ctx.query);
    } else {
      return strapi.services.heropost.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a heropost record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.heropost.fetch(ctx.params);
  },

  /**
   * Count heropost records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.heropost.count(ctx.query);
  },

  /**
   * Create a/an heropost record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.heropost.add(ctx.request.body);
  },

  /**
   * Update a/an heropost record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.heropost.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an heropost record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.heropost.remove(ctx.params);
  }
};
