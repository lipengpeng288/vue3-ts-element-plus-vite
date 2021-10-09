const  Config: Config[] = [{
    name: '仪表板',
    link :'/dashboard',
    icon: 'el-icon-s-grid',
    type: 'item',
}, {
    name: '员工信息',
    link :'/information',
    icon: 'el-icon-user',
    type: 'item',
}];

export default Config;

interface Config {
    name: string;
    link: string;
    icon: string;
    type: 'item'| 'group';
    children?: Config[];
}