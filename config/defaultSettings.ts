import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '后台管理系统',
  pwa: false,
  logo: 'https://p2-static.oss-cn-beijing.aliyuncs.com/sjzt/img/doujia-logo.png',
  iconfontUrl: '//at.alicdn.com/t/font_911845_v0mtyvvk0f.js',
};

export default Settings;
