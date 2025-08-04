var icons = {
  "pager":[,"m19.5,4.5l-15,0c-1.37891,0 -2.5,1.12109 -2.5,2.5l0,10c0,1.37891 1.12109,2.5 2.5,2.5l15,0c1.37891,0 2.5,-1.12109 2.5,-2.5l0,-10c0,-1.37891 -1.12109,-2.5 -2.5,-2.5zm-11.25,11.875l-3.125,0c-0.34375,0 -0.625,-0.28125 -0.625,-0.625l0,-0.625c0,-0.34375 0.28125,-0.625 0.625,-0.625l3.125,0l0,1.875zm5,-0.625c0,0.34375 -0.28125,0.625 -0.625,0.625l-3.125,0l0,-1.875l3.125,0c0.34375,0 0.625,0.28125 0.625,0.625l0,0.625zm6.25,-5c0,0.69141 -0.55859,1.25 -1.25,1.25l-12.5,0c-0.69141,0 -1.25,-0.55859 -1.25,-1.25l0,-2.5c0,-0.69141 0.55859,-1.25 1.25,-1.25l12.5,0c0.69141,0 1.25,0.55859 1.25,1.25l0,2.5zm0,0 "],
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
