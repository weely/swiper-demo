const deviceIntroObj = {
  '4g01': {
    tag1: '6000mAh',
    tag2: '强磁免安装',
  },
  '4g02': {
    tag1: '6000mAh',
    tag2: '强磁免安装',
  },
  '4g03': {
    tag1: '6000mAh',
    tag2: '强磁免安装',
  },
  '4g05': {
    tag1: '6000mAh',
    tag2: '强磁免安装',
  },
  '4g06': {
    tag1: '6000mAh',
    tag2: '强磁免安装',
  },
  'gw01': {
    tag1: '6000mAh',
    tag2: '强磁免安装',
  },
  'gw02': {
    tag1: '6000mAh',
    tag2: '强磁免安装',
  },
  'gw03': {
    tag1: '6000mAh',
    tag2: '强磁免安装',
  },
}

const modulesFiles = require.context('./intros', true, /\.png$/)
// 首页设备简介
export const deviceIntros = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')

  // 图片资源保存路径，需要得时候再拼接完整路径加载
  modules[moduleName] = {
    // img: require('./intros' + `${modulePath}`.replace(/^\./, '')),
    imgPath: 'devices/intros' + `${modulePath}`.replace(/^\./, ''),
    value: moduleName,
    ...deviceIntroObj[moduleName]
  }
  return modules
}, {})

