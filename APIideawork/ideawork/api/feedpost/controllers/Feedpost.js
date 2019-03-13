'use strict';

/**
 * Feedpost.js controller
 *
 * @description: A set of functions called "actions" for managing `Feedpost`.
 */

module.exports = {

  /**
   * Retrieve feedpost records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.feedpost.search(ctx.query);
    } else {
      return strapi.services.feedpost.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a feedpost record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.feedpost.fetch(ctx.params);
  },

  /**
   * Count feedpost records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.feedpost.count(ctx.query);
  },

  /**
   * Create a/an feedpost record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.feedpost.add(ctx.request.body);
  },

  /**
   * Update a/an feedpost record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.feedpost.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an feedpost record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.feedpost.remove(ctx.params);
  }
};
