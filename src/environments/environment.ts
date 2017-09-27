// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    baseURL: 'http://192.168.200.72:4200',
    login: '/login',
    language: '/api/language',
    pack: '/api/pack',
    addIntroduction: '/addIntroductionData',
    getIntroduction: '/getIntroductionData',
    bulkUpload: '/api/user/bulkUpload',
    userAdmin: '/api/user'
};
