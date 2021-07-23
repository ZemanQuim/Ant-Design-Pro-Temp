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
  title: '投放数据看板',
  pwa: false,
  logo: 'https://p2-static.oss-cn-beijing.aliyuncs.com/sjzt/img/doujia-logo.png',
  iconfontUrl: '',
};

export default Settings;
