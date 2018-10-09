// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  contactService: {
    protocol: 'http:',
    host: 'localhost:8124',
    contextPath: 'server/api',
    resourcePath: 'contacts'
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
