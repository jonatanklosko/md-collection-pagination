export default class CollectionPaginationController {
  $onChanges() {
    this.perPage = parseInt(this.perPage) || 5;
    this.shownIndexesCount = parseInt(this.navigationLength) || 5;
    this.lastIndex = Math.ceil(this.collection.length / this.perPage) - 1;
    this.allIndexes = [];
    for(let i = 0; i <= this.lastIndex; this.allIndexes.push(i++)) {}
    this.beginning();
  }

  beginning() {
    this.selectedIndex = 0;
    this.indexesOffset = 0;
    this.update();
  }

  end() {
    this.selectedIndex = this.lastIndex;
    while(this.indexesOffset + this.shownIndexesCount <= this.lastIndex) this.indexesOffset += this.shownIndexesCount;
    this.update();
  }

  select(index) {
    this.selectedIndex = index;
    this.update();
  }

  previousIndexes() {
    this.selectedIndex = this.indexesOffset - 1;
    this.indexesOffset -= this.shownIndexesCount;
    this.update();
  }

  nextIndexes() {
    this.indexesOffset += this.shownIndexesCount;
    this.selectedIndex = this.indexesOffset;
    this.update();
  }

  update() {
    let offset = this.selectedIndex * this.perPage;
    this.paginatedCollection = this.collection.slice(offset, offset + this.perPage);
  }
}
