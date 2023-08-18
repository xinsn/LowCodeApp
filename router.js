// route file
export default [
    {
        path: 'dataAnalyse',
        name: 'dataAnalyse',
        component: Empty,
        children: [
            {
   
                path: 'download',
                name: 'download',
                component: download,
                meta: {
                    title: '下载',
                    parent: 'download'
                }
            },
        ]
    }
]
