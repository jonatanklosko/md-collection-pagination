# md-collection-pagination

[Angular Material Design](https://github.com/angular/material) component for paginating a collection.

## Demo
See it in action [here](http://codepen.io/jonatanklosko/full/qRJMeq).

## Installation

```bash
npm install --save md-collection-pagination
```

## Setup

The [Webpack](https://github.com/webpack/webpack) way.

```javascript
import mdCollectionPagination from 'md-collection-pagination';

angular.module('app', [mdCollectionPagination]);
```

Using the `script` tag.

```html
<script src="node_modules/md-collection-pagination/dist/md-collection-pagination.min.js" charset="utf-8"></script>
<script>
  angular.module('app', ['mdCollectionPagination']);
</script>
```

## Example

Consider the following list of items.

```html
<md-list>
  <md-list-item ng-repeat="item in vm.items">{{ item }}</md-list-item>
</md-list>
```

It's likely that you don't want to render thousands of them at once. You can easily deal with this!

```html
<md-list>
  <md-list-item ng-repeat="item in vm.shownItems">{{ item }}</md-list-item>
</md-list>
<md-collection-pagination collection="vm.items" paginated-collection="vm.shownItems"></md-collection-pagination>
```

That's it! The `vm.shownItems` variable is assigned with a small subset of the whole `vm.items` array
and the user can easily go through it using the navigation.

## Configuration

| Attribute | Type | Description |
| --------- | ---- | ----------- |
| `collection` | `Array` | The base collection containing all the items. |
| `paginated-collection` | `Array` | The variable to be updated with a subset of the `collection`. |
| `per-page` | `Number` &#124; `String` | The maximum amount of items to be displayed at once, present in the `paginated-collection`. Default: `5`. |
| `navigation-length` | `Number` &#124; `String` | The maximum amount of numbers to be displayed within the navigation. Default: `5`. |

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).
