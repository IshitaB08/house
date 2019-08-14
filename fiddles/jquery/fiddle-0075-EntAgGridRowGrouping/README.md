fiddle-0075-EntAgGridRowGrouping
======

### Title

fiddle-0075-EntAgGridRowGrouping


### Creation Date

08-05-19


### Location

Chicago, IL


### Issue

[Issue 310](https://github.com/bradyhouse/house/issues/310)

### Description

I need to understand how an ag-grid control is populated with hierarchical data without using children nodes.  As a starting point, see => https://www.ag-grid.com/javascript-grid-tree-data/.  The sample set should include 10-15 columns populated with random amounts ranging from -3M to 10M.  The values should use standard financial format with a precision of 2 decimal places.  Negative value should be displayed in the red. The first column in the grid should be used to display hierarchical tree with the following requirements: 

* The first row should be the root parent 
* All rows can be collapsed and expanded
* By default, only the first 3 child rows should be expanded 
* The bottom node should labelled "..."
    ** When clicked, it should disappear from the tree and add its descendants to the parent


### Published Version Link

N/A


### Tags

jquery, ag-grid, mdi, bootstrap
