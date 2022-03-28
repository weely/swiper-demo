// const manuals = modulesFiles.keys().reduce((modules, modulePath) => {
//   const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
//   modules[moduleName] = {
//     // img: require('./manuals' + `${modulePath}`.replace(/^\./, '')),
//     imgPath: 'devices/manuals' + `${modulePath}`.replace(/^\./, ''),
//     deviceType: moduleName.split('/')[0],
//     value: moduleName
//   }
//   return modules
// }, {})

const deviceManuals = {}
require.context('./manuals', true, /\.png$/).keys().forEach((modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const deviceType = moduleName.split('/')[0]

  const pageItem = {
    // img: require('./manuals' + `${modulePath}`.replace(/^\./, '')),
    imgPath: 'devices/manuals' + `${modulePath}`.replace(/^\./, ''),
    value: moduleName
  }

  deviceManuals[deviceType] = deviceManuals[deviceType] || []
  deviceManuals[deviceType].push(pageItem)
})

export function getManualByDeviceType(deviceType) {
  return deviceManuals[deviceType]?.sort((a,b) =>a.value.localeCompare(b.value)) || []
}
