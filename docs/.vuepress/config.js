module.exports = {
	title: '个人主页',
	description: '小明爱挑食的博客',
	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }],
	],
	themeConfig: {
        nav: [
          { text: '主页', link: '/' },
		  {
            text: '基础',
            items: [
			  { text: 'Java', link: '/document/base/' },
			  { text: '设计模式', link: '/document/base/' },
            ]
          },
          {
            text: '框架',
            items: [
			  { text: 'maven', link: '/document/frame/' },
            ]
          },
		  {
            text: '中级',
            items: [
			  { text: 'springboot', link: '/document/work/' },
            ]
          },
		  {
            text: '工具',
            items: [
			  { text: 'idea', link: '/document/tool/' },
            ]
          },
		],
		sidebar:{
			'/document/base/':[{
				title:'基础',
				children:[
					{
						title:'集合',
						children:[
							['collection.md',"数组"],
						]
					}
				],
			}],
			'/document/frame/':[{
				title:'框架',
				children:[
					{
						title:'maven',
						children:[
							['maven/maven_install.md',"maven的安装和配置"],
						]
					}
				],
			}],
			'/document/work/':[{
				title:'中级',
				children:[
					{
						title:'springboot',
						children:[
							['springboot/XmlWithMybatisConfig.md',"springboot整合mybstis多数据源操作"],
						]
					}
				],
			}],
			'/document/tool/':[{
				title:'工具',
				children:[
					['idea/helloWorld.md',"搭建Java Project项目"],
				],
			}],
		},
		sidebarDepth: 2,
        lastUpdated: 'Last Updated', 
	}
}