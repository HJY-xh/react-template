import { Icon } from 'antd';
import React from 'react';

const _menus = [
  {
    key: 'home',
    url: '/home',
    label: '控制台',
    icon: <Icon type="desktop"/>,
    children: [],
  }, {
    key: 'template',
    url: '/template',
    label: '模版页',
    icon: <Icon type="profile"/>,
    children: [],
  },
];
const _rootSubmenuKeys = _menus.map(menu => {
  return menu.children && menu.children.length > 0 && menu.key;
}).filter(m => m);
export let menus = _menus;
export let rootSubmenuKeys = _rootSubmenuKeys;

