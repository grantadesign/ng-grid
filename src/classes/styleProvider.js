var ngStyleProvider = function($scope, grid) {
    $scope.headerCellStyle = function(col) {
        return { "height": col.headerRowHeight + "px" };
    };
    $scope.rowStyle = function (row) {
        var ret = { "top": row.offsetTop + "px", "height": $scope.rowHeight + "px" };
        if (row.isAggRow) {
            ret.left = row.offsetLeft;
        }
        return ret;
    };
    $scope.canvasStyle = function() {
        return { "height": grid.maxCanvasHt + "px" };
    };
    $scope.headerScrollerStyle = function() {
        return { "height": grid.config.headerRowHeight + "px" };
    };
    $scope.topPanelStyle = function() {
        return { "height": $scope.topPanelHeight() + "px" };
    };
    $scope.headerStyle = function() {
        return { "height": grid.config.headerRowHeight + "px" };
    };
    $scope.groupPanelStyle = function () {
        return { "height": "32px" };
    };
    $scope.viewportStyle = function() {
        return { "height": $scope.viewportDimHeight() + "px" };
    };
    $scope.footerStyle = function() {
        return { "height": $scope.footerRowHeight + "px" };
    };
};