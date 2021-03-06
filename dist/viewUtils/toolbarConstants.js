"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nbPageToolbarIcons = exports.nbToolbarIcons = void 0;

var _iconTypeConstants = require("./iconTypeConstants");

// typings
var nbToolbarIcons = {
  ICONS_LEFT_DISMISS: 'ICONS_LEFT_DISMISS',
  ICONS_LEFT_ONLY_DISMISS: 'ICONS_LEFT_ONLY_DISMISS',
  ICONS_LEFT_BACKICON_DISMISS: 'ICONS_LEFT_BACKICON_DISMISS',
  ICONS_LEFT_BACK: 'ICONS_LEFT_BACK',
  ICONS_LEFT_USER_AVATAR: 'ICONS_LEFT_USER_AVATAR',
  ICONS_RIGHT_SETTINGS: 'ICONS_RIGHT_SETTINGS',
  ICONS_RIGHT_ADD: 'ICONS_RIGHT_ADD',
  ICONS_RIGHT_DONE: 'ICONS_RIGHT_DONE',
  ICON_RIGHT_SECTION_BOOKMARK_ICON: 'ICON_RIGHT_SECTION_BOOKMARK_ICON',
  ICON_RIGHT_SECTION_NOTIFICATION_ICON: 'ICON_RIGHT_SECTION_NOTIFICATION_ICON'
};
exports.nbToolbarIcons = nbToolbarIcons;
var nbPageToolbarIcons = {
  ICONS_LEFT_DISMISS: {
    iconName: 'close',
    iconType: nbToolbarIcons.ICONS_LEFT_DISMISS
  },
  ICONS_LEFT_ONLY_DISMISS: {
    iconName: 'close',
    iconType: nbToolbarIcons.ICONS_LEFT_ONLY_DISMISS
  },
  ICONS_LEFT_BACKICON_DISMISS: {
    iconName: 'arrow-back',
    iconType: nbToolbarIcons.ICONS_LEFT_DISMISS
  },
  ICONS_LEFT_BACK: {
    iconName: 'arrow-back',
    iconType: nbToolbarIcons.ICONS_LEFT_BACK
  },
  ICONS_RIGHT_SETTINGS: {
    iconName: 'settings',
    iconType: nbToolbarIcons.ICONS_RIGHT_SETTINGS
  },
  ICONS_RIGHT_ADD: {
    iconName: 'add',
    iconType: nbToolbarIcons.ICONS_RIGHT_ADD
  },
  ICONS_RIGHT_DONE: {
    iconName: 'done',
    iconType: nbToolbarIcons.ICONS_RIGHT_DONE,
    vectorType: _iconTypeConstants.IconVectorTypeMaterialIcons
  },
  ICON_RIGHT_SECTION_BOOKMARK_ICON: {
    iconName: 'bookmark-border',
    iconType: nbToolbarIcons.ICON_RIGHT_SECTION_BOOKMARK_ICON,
    vectorType: _iconTypeConstants.IconVectorTypeMaterialIcons
  },
  ICON_RIGHT_SECTION_NOTIFICATION_ICON: {
    iconName: 'notifications',
    iconType: nbToolbarIcons.ICON_RIGHT_SECTION_NOTIFICATION_ICON
  }
};
exports.nbPageToolbarIcons = nbPageToolbarIcons;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92aWV3VXRpbHMvdG9vbGJhckNvbnN0YW50cy50cyJdLCJuYW1lcyI6WyJuYlRvb2xiYXJJY29ucyIsIklDT05TX0xFRlRfRElTTUlTUyIsIklDT05TX0xFRlRfT05MWV9ESVNNSVNTIiwiSUNPTlNfTEVGVF9CQUNLSUNPTl9ESVNNSVNTIiwiSUNPTlNfTEVGVF9CQUNLIiwiSUNPTlNfTEVGVF9VU0VSX0FWQVRBUiIsIklDT05TX1JJR0hUX1NFVFRJTkdTIiwiSUNPTlNfUklHSFRfQUREIiwiSUNPTlNfUklHSFRfRE9ORSIsIklDT05fUklHSFRfU0VDVElPTl9CT09LTUFSS19JQ09OIiwiSUNPTl9SSUdIVF9TRUNUSU9OX05PVElGSUNBVElPTl9JQ09OIiwibmJQYWdlVG9vbGJhckljb25zIiwiaWNvbk5hbWUiLCJpY29uVHlwZSIsInZlY3RvclR5cGUiLCJJY29uVmVjdG9yVHlwZU1hdGVyaWFsSWNvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7QUFGOEM7QUFJdkMsSUFBTUEsY0FBYyxHQUFHO0FBQzVCQyxFQUFBQSxrQkFBa0IsRUFBRSxvQkFEUTtBQUU1QkMsRUFBQUEsdUJBQXVCLEVBQUUseUJBRkc7QUFHNUJDLEVBQUFBLDJCQUEyQixFQUFFLDZCQUhEO0FBSTVCQyxFQUFBQSxlQUFlLEVBQUUsaUJBSlc7QUFLNUJDLEVBQUFBLHNCQUFzQixFQUFFLHdCQUxJO0FBTTVCQyxFQUFBQSxvQkFBb0IsRUFBRSxzQkFOTTtBQU81QkMsRUFBQUEsZUFBZSxFQUFFLGlCQVBXO0FBUTVCQyxFQUFBQSxnQkFBZ0IsRUFBRSxrQkFSVTtBQVM1QkMsRUFBQUEsZ0NBQWdDLEVBQUUsa0NBVE47QUFVNUJDLEVBQUFBLG9DQUFvQyxFQUFFO0FBVlYsQ0FBdkI7O0FBaUJBLElBQU1DLGtCQUFvQyxHQUFHO0FBQ2xEVixFQUFBQSxrQkFBa0IsRUFBRTtBQUNsQlcsSUFBQUEsUUFBUSxFQUFFLE9BRFE7QUFFbEJDLElBQUFBLFFBQVEsRUFBRWIsY0FBYyxDQUFDQztBQUZQLEdBRDhCO0FBS2xEQyxFQUFBQSx1QkFBdUIsRUFBRTtBQUN2QlUsSUFBQUEsUUFBUSxFQUFFLE9BRGE7QUFFdkJDLElBQUFBLFFBQVEsRUFBRWIsY0FBYyxDQUFDRTtBQUZGLEdBTHlCO0FBU2xEQyxFQUFBQSwyQkFBMkIsRUFBRTtBQUMzQlMsSUFBQUEsUUFBUSxFQUFFLFlBRGlCO0FBRTNCQyxJQUFBQSxRQUFRLEVBQUViLGNBQWMsQ0FBQ0M7QUFGRSxHQVRxQjtBQWFsREcsRUFBQUEsZUFBZSxFQUFFO0FBQ2ZRLElBQUFBLFFBQVEsRUFBRSxZQURLO0FBRWZDLElBQUFBLFFBQVEsRUFBRWIsY0FBYyxDQUFDSTtBQUZWLEdBYmlDO0FBaUJsREUsRUFBQUEsb0JBQW9CLEVBQUU7QUFDcEJNLElBQUFBLFFBQVEsRUFBRSxVQURVO0FBRXBCQyxJQUFBQSxRQUFRLEVBQUViLGNBQWMsQ0FBQ007QUFGTCxHQWpCNEI7QUFxQmxEQyxFQUFBQSxlQUFlLEVBQUU7QUFDZkssSUFBQUEsUUFBUSxFQUFFLEtBREs7QUFFZkMsSUFBQUEsUUFBUSxFQUFFYixjQUFjLENBQUNPO0FBRlYsR0FyQmlDO0FBeUJsREMsRUFBQUEsZ0JBQWdCLEVBQUU7QUFDaEJJLElBQUFBLFFBQVEsRUFBRSxNQURNO0FBRWhCQyxJQUFBQSxRQUFRLEVBQUViLGNBQWMsQ0FBQ1EsZ0JBRlQ7QUFHaEJNLElBQUFBLFVBQVUsRUFBRUM7QUFISSxHQXpCZ0M7QUE4QmxETixFQUFBQSxnQ0FBZ0MsRUFBRTtBQUNoQ0csSUFBQUEsUUFBUSxFQUFFLGlCQURzQjtBQUVoQ0MsSUFBQUEsUUFBUSxFQUFFYixjQUFjLENBQUNTLGdDQUZPO0FBR2hDSyxJQUFBQSxVQUFVLEVBQUVDO0FBSG9CLEdBOUJnQjtBQW1DbERMLEVBQUFBLG9DQUFvQyxFQUFFO0FBQ3BDRSxJQUFBQSxRQUFRLEVBQUUsZUFEMEI7QUFFcENDLElBQUFBLFFBQVEsRUFBRWIsY0FBYyxDQUFDVTtBQUZXO0FBbkNZLENBQTdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVBhZ2VUb29sYmFySWNvbiB9IGZyb20gJy4vYWR2YW5jZWQnIC8vIHR5cGluZ3NcblxuaW1wb3J0IHsgSWNvblZlY3RvclR5cGVNYXRlcmlhbEljb25zIH0gZnJvbSAnLi9pY29uVHlwZUNvbnN0YW50cydcblxuZXhwb3J0IGNvbnN0IG5iVG9vbGJhckljb25zID0ge1xuICBJQ09OU19MRUZUX0RJU01JU1M6ICdJQ09OU19MRUZUX0RJU01JU1MnLFxuICBJQ09OU19MRUZUX09OTFlfRElTTUlTUzogJ0lDT05TX0xFRlRfT05MWV9ESVNNSVNTJyxcbiAgSUNPTlNfTEVGVF9CQUNLSUNPTl9ESVNNSVNTOiAnSUNPTlNfTEVGVF9CQUNLSUNPTl9ESVNNSVNTJyxcbiAgSUNPTlNfTEVGVF9CQUNLOiAnSUNPTlNfTEVGVF9CQUNLJyxcbiAgSUNPTlNfTEVGVF9VU0VSX0FWQVRBUjogJ0lDT05TX0xFRlRfVVNFUl9BVkFUQVInLFxuICBJQ09OU19SSUdIVF9TRVRUSU5HUzogJ0lDT05TX1JJR0hUX1NFVFRJTkdTJyxcbiAgSUNPTlNfUklHSFRfQUREOiAnSUNPTlNfUklHSFRfQUREJyxcbiAgSUNPTlNfUklHSFRfRE9ORTogJ0lDT05TX1JJR0hUX0RPTkUnLFxuICBJQ09OX1JJR0hUX1NFQ1RJT05fQk9PS01BUktfSUNPTjogJ0lDT05fUklHSFRfU0VDVElPTl9CT09LTUFSS19JQ09OJyxcbiAgSUNPTl9SSUdIVF9TRUNUSU9OX05PVElGSUNBVElPTl9JQ09OOiAnSUNPTl9SSUdIVF9TRUNUSU9OX05PVElGSUNBVElPTl9JQ09OJ1xufVxuXG5kZWNsYXJlIGludGVyZmFjZSBJUGFnZVRvb2xiYXJEaWN0IHtcbiAgW0tleTogc3RyaW5nXTogSVBhZ2VUb29sYmFySWNvblxufVxuXG5leHBvcnQgY29uc3QgbmJQYWdlVG9vbGJhckljb25zOiBJUGFnZVRvb2xiYXJEaWN0ID0ge1xuICBJQ09OU19MRUZUX0RJU01JU1M6IHtcbiAgICBpY29uTmFtZTogJ2Nsb3NlJyxcbiAgICBpY29uVHlwZTogbmJUb29sYmFySWNvbnMuSUNPTlNfTEVGVF9ESVNNSVNTXG4gIH0sXG4gIElDT05TX0xFRlRfT05MWV9ESVNNSVNTOiB7XG4gICAgaWNvbk5hbWU6ICdjbG9zZScsXG4gICAgaWNvblR5cGU6IG5iVG9vbGJhckljb25zLklDT05TX0xFRlRfT05MWV9ESVNNSVNTXG4gIH0sXG4gIElDT05TX0xFRlRfQkFDS0lDT05fRElTTUlTUzoge1xuICAgIGljb25OYW1lOiAnYXJyb3ctYmFjaycsXG4gICAgaWNvblR5cGU6IG5iVG9vbGJhckljb25zLklDT05TX0xFRlRfRElTTUlTU1xuICB9LFxuICBJQ09OU19MRUZUX0JBQ0s6IHtcbiAgICBpY29uTmFtZTogJ2Fycm93LWJhY2snLFxuICAgIGljb25UeXBlOiBuYlRvb2xiYXJJY29ucy5JQ09OU19MRUZUX0JBQ0tcbiAgfSxcbiAgSUNPTlNfUklHSFRfU0VUVElOR1M6IHtcbiAgICBpY29uTmFtZTogJ3NldHRpbmdzJyxcbiAgICBpY29uVHlwZTogbmJUb29sYmFySWNvbnMuSUNPTlNfUklHSFRfU0VUVElOR1NcbiAgfSxcbiAgSUNPTlNfUklHSFRfQUREOiB7XG4gICAgaWNvbk5hbWU6ICdhZGQnLFxuICAgIGljb25UeXBlOiBuYlRvb2xiYXJJY29ucy5JQ09OU19SSUdIVF9BRERcbiAgfSxcbiAgSUNPTlNfUklHSFRfRE9ORToge1xuICAgIGljb25OYW1lOiAnZG9uZScsXG4gICAgaWNvblR5cGU6IG5iVG9vbGJhckljb25zLklDT05TX1JJR0hUX0RPTkUsXG4gICAgdmVjdG9yVHlwZTogSWNvblZlY3RvclR5cGVNYXRlcmlhbEljb25zXG4gIH0sXG4gIElDT05fUklHSFRfU0VDVElPTl9CT09LTUFSS19JQ09OOiB7XG4gICAgaWNvbk5hbWU6ICdib29rbWFyay1ib3JkZXInLFxuICAgIGljb25UeXBlOiBuYlRvb2xiYXJJY29ucy5JQ09OX1JJR0hUX1NFQ1RJT05fQk9PS01BUktfSUNPTixcbiAgICB2ZWN0b3JUeXBlOiBJY29uVmVjdG9yVHlwZU1hdGVyaWFsSWNvbnNcbiAgfSxcbiAgSUNPTl9SSUdIVF9TRUNUSU9OX05PVElGSUNBVElPTl9JQ09OOiB7XG4gICAgaWNvbk5hbWU6ICdub3RpZmljYXRpb25zJyxcbiAgICBpY29uVHlwZTogbmJUb29sYmFySWNvbnMuSUNPTl9SSUdIVF9TRUNUSU9OX05PVElGSUNBVElPTl9JQ09OXG4gIH1cbn1cbiJdfQ==