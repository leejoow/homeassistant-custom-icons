var icons = {
  "window-shutter-50":[0,0,24,24,"M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 15H16V17H8V15M8 18H16V20H8V18Z "],
  "window-shutter-75":[0,0,24,24,"M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 12H16V14H8V12M8 15H16V17H8V15M8 18H16V20H8V18Z "],
  "window-shutter-mid":[0,0,24,24,"M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 12H16V14H8V12M8 15H16V17H8V15M8 "],
  }

async function getIcon(name) {
  if (!(name in icons)) {
    console.log(`Icon "${name}" not available`);
    return '';
  }

  var svgDef = icons[name];
  var primaryPath = svgDef[4];
  return {
    path: primaryPath,
    viewBox: svgDef[0] + " " + svgDef[1] + " " + svgDef[2] + " " + svgDef[3]
  }

}

async function getIconList() {
  return Object.entries(icons).map(([icon]) => ({
    name: icon
  }));
}

window.customIconsets = window.customIconsets || {};
window.customIconsets["custom"] = getIcon;

window.customIcons = window.customIcons || {};
window.customIcons["custom"] = { getIcon, getIconList };
