import $ from 'jquery';
import angular from 'angular';
import 'angular-mocks';
import '../src';

describe('mdCollectionPagination component', () => {
  beforeEach(angular.mock.module('mdCollectionPagination'));

  let $compile, $rootScope;
  beforeEach(angular.mock.inject((_$compile_, _$rootScope_) => {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  let mdCollectionPagination;

  beforeEach(() => {
    $rootScope.collection = Array.from({ length: 100 }, (_, index) => index + 1);
    mdCollectionPagination = $compile(`
      <md-collection-pagination collection="collection" paginated-collection="paginatedCollection">
      </md-collection-pagination>
    `)($rootScope);
    $rootScope.$digest();
  });

  let expectNavigationToEqual = (...captions) => {
    let visible = mdCollectionPagination.find('button:not(.ng-hide)').toArray();
    expect(visible.every(element => captions.some(caption => $(element).is(`:contains('${caption}')`)))).toBeTruthy();
  };

  it('shows the first page by default', () => {
    expect($rootScope.paginatedCollection).toEqual([1, 2, 3, 4, 5]);
    expectNavigationToEqual('<<', '1', '2', '3', '4', '5', '...', '>>');
  })

  describe('selecting another page', () => {
    beforeEach(() => mdCollectionPagination.find("button:contains('3')").click());
    it('updates the paginated collection', () => {
      expect($rootScope.paginatedCollection).toEqual([11, 12, 13, 14, 15]);
    });
  });

  describe('going to the end', () => {
    beforeEach(() => mdCollectionPagination.find("button:contains('>>')").click());

    it('updates the paginated collection', () => {
      expect($rootScope.paginatedCollection).toEqual([96, 97, 98, 99, 100]);
    });

    it('updates the navigation', () => {
      expectNavigationToEqual('<<', '...', '16', '17', '18', '19', '20', '>>');
    });
  });

  describe('going to the beginning', () => {
    beforeEach(() => {
      mdCollectionPagination.find("button:contains('>>')").click();
      mdCollectionPagination.find("button:contains('<<')").click();
    });

    it('updates the paginated collection', () => {
      expect($rootScope.paginatedCollection).toEqual([1, 2, 3, 4, 5]);
    });

    it('updates the navigation', () => {
      expectNavigationToEqual('<<', '1', '2', '3', '4', '5', '...', '>>');
    });
  });

  describe('going to the next section', () => {
    beforeEach(() => {
      mdCollectionPagination.find("button:contains('...')")[1].click(); /* Click the right '...' */
    });

    it('updates the navigation', () => {
      expectNavigationToEqual('<<', '...', '6', '7', '8', '9', '10', '...', '>>');
    });

    it('selects the first page within the navigation', () => {
      expect($rootScope.paginatedCollection).toEqual([26, 27, 28, 29, 30]);
    })
  });

  describe('going to the previous section', () => {
    beforeEach(() => {
      mdCollectionPagination.find("button:contains('>>')").click(); /* Go to the end. */
      mdCollectionPagination.find("button:contains('...')")[0].click(); /* Click the left '...' */
    });

    it('updates the navigation', () => {
      expectNavigationToEqual('<<', '...', '11', '12', '13', '14', '15', '...', '>>');
    });

    it('selects the last page within the navigation', () => {
      expect($rootScope.paginatedCollection).toEqual([71, 72, 73, 74, 75]);
    })
  });

  describe('updating the collection', () => {
    describe('when there are at least two pages', () => {
      beforeEach(() => {
        $rootScope.collection = [1, 2, 3, 4, 5, 6];
        $rootScope.$digest();
      });

      it('updates the navigation', () => {
        expectNavigationToEqual('<<', '1', '2', '>>');
      });
    });

    describe('when all elements fit on a single page', () => {
      beforeEach(() => {
        $rootScope.collection = [1, 2, 3];
        $rootScope.$digest();
      });

      it('hides the navigation', () => {
        expect(mdCollectionPagination.find('section').hasClass('ng-hide')).toBeTruthy();
      });
    });
  });

  describe('custom options', () => {
    let directiveModel;
    beforeEach(() => {
      directiveModel = mdCollectionPagination.isolateScope().vm;
      $rootScope.collection = [1, 2, 3, 4, 5, 6];
    });

    describe('perPage', () => {
      it('defines the count of items to be displayed at once', () => {
        directiveModel.perPage = 2;
        $rootScope.$digest();
        expect($rootScope.paginatedCollection.length).toEqual(2);
        expectNavigationToEqual('<<', '1', '2', '3', '>>');
      });

      it('accepts a string', () => {
        directiveModel.perPage = '2';
        $rootScope.$digest();
        expect($rootScope.paginatedCollection.length).toEqual(2);
        expectNavigationToEqual('<<', '1', '2', '3', '>>');
      });
    });

    describe('navigationLength', () => {
      it('defines the count of navigation buttons with page numbers', () => {
        directiveModel.navigationLength = 2;
        $rootScope.$digest();
        expectNavigationToEqual('<<', '1', '2', '>>');
      });

      it('accepts a string', () => {
        directiveModel.navigationLength = '2';
        $rootScope.$digest();
        expectNavigationToEqual('<<', '1', '2', '>>');
      });
    });
  });
});
