import angular from 'angular';
import component from './component';

export default angular
  .module('mdCollectionPagination', ['ng', 'ngMaterial'])
  .component('mdCollectionPagination', component)
  .name;
