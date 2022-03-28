
const deviceManuals = {}
require.context('./manuals', true, /\.(png|jpg)$/).keys().forEach((modulePath) => {
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

function getFileNum(pathValue){
  return parseInt(pathValue.split('/')[1]) || 0
}

export function getManualByDeviceType(deviceType) {
  window.deviceType = deviceManuals[deviceType]?.sort((a,b) => getFileNum(a.value) - getFileNum(b.value))
  return deviceManuals[deviceType]?.sort((a,b) => getFileNum(a.value) - getFileNum(b.value)) || []
}
