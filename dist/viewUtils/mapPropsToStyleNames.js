"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapPropsToStyleNames = void 0;

var mapPropsToStyleNames = function mapPropsToStyleNames(styleNames, props) {
  var keys = Object.keys(props);
  var values = Object.values(props);
  keys.map(function (key, index) {
    if (values[index]) {
      styleNames.push(key);
    }
  });
  return styleNames;
};

exports.mapPropsToStyleNames = mapPropsToStyleNames;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3VXRpbHMvbWFwUHJvcHNUb1N0eWxlTmFtZXMudHMiXSwibmFtZXMiOlsibWFwUHJvcHNUb1N0eWxlTmFtZXMiLCJzdHlsZU5hbWVzIiwicHJvcHMiLCJrZXlzIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwia2V5IiwiaW5kZXgiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxVQUFELEVBQWtCQyxLQUFsQixFQUFpQztBQUNuRSxNQUFNQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZRCxLQUFaLENBQWI7QUFDQSxNQUFNRyxNQUFNLEdBQUdELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxLQUFkLENBQWY7QUFFQUMsRUFBQUEsSUFBSSxDQUFDRyxHQUFMLENBQVMsVUFBQ0MsR0FBRCxFQUFXQyxLQUFYLEVBQTZCO0FBQ3BDLFFBQUlILE1BQU0sQ0FBQ0csS0FBRCxDQUFWLEVBQW1CO0FBQ2pCUCxNQUFBQSxVQUFVLENBQUNRLElBQVgsQ0FBZ0JGLEdBQWhCO0FBQ0Q7QUFDRixHQUpEO0FBTUEsU0FBT04sVUFBUDtBQUNELENBWE0iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbWFwUHJvcHNUb1N0eWxlTmFtZXMgPSAoc3R5bGVOYW1lczogYW55LCBwcm9wczogYW55KSA9PiB7XG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwcm9wcylcbiAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhwcm9wcylcblxuICBrZXlzLm1hcCgoa2V5OiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICBpZiAodmFsdWVzW2luZGV4XSkge1xuICAgICAgc3R5bGVOYW1lcy5wdXNoKGtleSlcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHN0eWxlTmFtZXNcbn1cbiJdfQ==