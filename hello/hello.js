const sources = [
    { name: '百度', url: 'https://www.baidu.com' },
    { name: '百度', url: 'https://www.baidu.com' },
    { name: '百度', url: 'https://www.baidu.com' },
    { name: '百度', url: 'https://www.baidu.com' },
    { name: '百度', url: 'https://www.baidu.com' },
    { name: '百度', url: 'https://www.baidu.com' },
    { name: '百度', url: 'https://www.baidu.com' },
    { name: '百度', url: 'https://www.baidu.com' },
    { name: '百度', url: 'https://www.baidu.com' },
    { name: '百度', url: 'https://www.baidu.com' },
    { name: '百度', url: 'https://www.baidu.com' },
    { name: '百度', url: 'https://www.baidu.com' },
    { name: '百度', url: 'https://www.baidu.com' },
    { name: '百度', url: 'https://www.baidu.com' },
    { name: '百度', url: 'https://www.baidu.com' },
    { name: '百度', url: 'https://www.baidu.com' },
    { name: '百度', url: 'https://www.baidu.com' },
    { name: '百度', url: 'https://www.baidu.com' },
];

const config = {
    columns: 2,
};

let _ = {
    getFR(columns) {
        return Array(columns).fill('1fr ').reduce((prev, next) => {
            return prev + next;
        }, '')
    }
}
// 根据列数配置获取样式的gridTemplateColumns
let gridTemplateColumns = _.getFR(config.columns);
let subGridTemplateColumns = _.getFR(config.subColumns);


console.log(gridTemplateColumns)

const app = new Vue({
    el: '#app',
    data: {
        ...config,
        sources,
        contentStyle: {
            gridTemplateColumns,
        },
        itemStyle: {
            gridTemplateColumns: subGridTemplateColumns
        }
    },
});
