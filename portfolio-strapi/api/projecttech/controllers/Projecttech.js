'use strict';

/**
 * Projecttech.js controller
 *
 * @description: A set of functions called "actions" for managing `Projecttech`.
 */

module.exports = {

  /**
   * Retrieve projecttech records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.projecttech.search(ctx.query);
    } else {
      return strapi.services.projecttech.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a projecttech record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.projecttech.fetch(ctx.params);
  },

  /**
   * Count projecttech records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.projecttech.count(ctx.query);
  },

  /**
   * Create a/an projecttech record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.projecttech.add(ctx.request.body);
  },

  /**
   * Update a/an projecttech record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.projecttech.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an projecttech record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.projecttech.remove(ctx.params);
  }
};
