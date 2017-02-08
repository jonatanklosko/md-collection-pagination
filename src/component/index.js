import template from './template.html';
import controller from './controller';

export default {
  template,
  controller,
  controllerAs: 'vm',
  bindings: {
    collection: '<',
    paginatedCollection: '=',
    perPage: '<',
    navigationLength: '<'
  }
};
