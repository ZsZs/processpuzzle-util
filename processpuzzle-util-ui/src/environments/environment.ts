// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  contactService: {
    protocol: 'http:',
    host: 'localhost:8124',
    contextPath: 'server/api'
  },

  documentService: {
    protocol: 'http:',
    host: 'localhost:8124',
    contextPath: 'server/api'
  },

  fileService: {
    protocol: 'http:',
    host: 'localhost:8124',
    contextPath: 'server/api'
  },

  projectService: {
      protocol: 'http:',
      host: 'localhost:8124',
      contextPath: 'server/api'
   }
};
