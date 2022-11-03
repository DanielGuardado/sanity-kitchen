export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6363d8bf1212fd049a51ea53',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-studio-sd8n3iw1',
                  apiId: '721cbbba-1ac1-44e1-a1a3-1bbb2165f23d'
                },
                {
                  buildHookId: '6363d8bf7498e9007259904a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-web-wjjw7cd9',
                  apiId: '55a70fe5-0186-4826-a593-db76578559f5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DanielGuardado/sanity-kitchen',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-web-wjjw7cd9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
