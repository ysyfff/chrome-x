const sources = [
    {
        name: '产品&测试',
        list: [
            { name: '系统', url: 'http://confluence.56qq.cn/pages/viewpage.action?pageId=12725880' },
            { name: '需求', url: 'http://confluence.56qq.cn/pages/viewpage.action?pageId=13396416' },
            { name: '排期', url: 'http://confluence.56qq.cn/pages/viewpage.action?pageId=13165022' },
            { name: 'jira', url: 'http://jira.56qq.cn/secure/RapidBoard.jspa?rapidView=312&view=detail&selectedIssue=HARBOR-721&quickFilter=863&quickFilter=990' },
        ]
    },
    {
        name: '前端',
        list: [
            { name: 'antd', url: 'https://ant.design/docs/react/introduce-cn' },
            { name: 'dva', url: 'https://dvajs.com/api/#%E8%BE%93%E5%87%BA%E6%96%87%E4%BB%B6' },
            { name: 'carno', url: 'http://bfe.qa-ag.56qq.com/#/components/about' },
            { name: 'kepler', url: 'http://confluence.56qq.cn/pages/viewpage.action?pageId=13158625' },
            { name: 'review', url: 'http://reviewboard.56qq.com/dashboard/' },
            { name: 'git', url: 'http://git.56qq.com/BCFE/' },
            { name: 'dms', url: 'http://dms.56qq.cn/#manage/projects' },
            { name: 'dms2', url: 'http://dms2.56qq.cn/#/login' },
            { name: '大前端', url: 'http://frontend.dev-ag.56qq.com/docs/basic/about.html' },
            { name: '周报', url: 'http://confluence.56qq.cn/pages/viewpage.action?pageId=13584504' },
            { name: '导航', url: 'http://confluence.56qq.cn/pages/viewpage.action?pageId=13573492' },
        ]
    },
    {
        name: '系统',
        list: [
            {
                subName: '公铁-客户端',
                list: [
                    { name: 'dev', url: 'http://rrct-portal.dev-ag.56qq.com/' },
                    { name: 'beta', url: 'http://rrct-portal.qa-ag.56qq.com/' },
                    { name: 'prod', url: 'https://www.guohuolianyun.com/' },
                ]
            },
            {
                subName: '公铁-管理端',
                list: [
                    { name: 'dev', url: 'http://rrct-manage.dev-ag.56qq.com/#/login' },
                    { name: 'beta', url: 'http://rrct-manage.qa-ag.56qq.com/' },
                    { name: 'prod', url: 'https://admin.guohuolianyun.com/' },
                ]
            },
            {
                subName: '港运通-管理端',
                list: [
                    { name: 'dev', url: 'http://harbor.dev-ag.56qq.com/#/login' },
                    { name: 'beta', url: 'http://harbor.qa-ag.56qq.com/#/login' },
                    { name: 'prod', url: 'http://gytot.56qq.com/#/login' },
                ]
            },
            {
                subName: '港运通-货主端',
                list: [
                    { name: 'dev', url: 'http://dev.s.56qq.cn/BcfeHarborShipper/index.html#/login' },
                    { name: 'beta', url: 'http://qa.s.56qq.cn/BcfeHarborShipper/index.html#/login' },
                    { name: 'prod', url: 'http://gyt.56qq.com/#/login' },
                ]
            },
            {
                subName: '甩挂临时-h5',
                list: [
                    { name: 'dev', url: 'http://dev.s.56qq.cn/internal-h5/login.html' },
                    { name: 'beta', url: 'http://qa.s.56qq.cn/internal-h5/login.html' },
                    { name: 'prod', url: 'http://sgtmph5.56qq.com/internal-h5/login.html' },
                ]
            },
            {
                subName: '甩挂临时-运营端',
                list: [
                    { name: 'dev', url: 'http://dev.s.56qq.cn/SwapTrailerTransport/#/login' },
                    { name: 'beta', url: 'http://qa.s.56qq.cn/SwapTrailerTransport/#/login' },
                    { name: 'prod', url: 'http://sgtmp.56qq.com/#/contractManage' },
                ]
            },

        ]
    }
];

const config = {
    columns: 3,
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
