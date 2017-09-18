export class    Site {
    constructor(
        public packname: string,
        public language: string,
        public site: {
            sitename: string,
            imagefile: any,
            audiofile: any
        }
    ) {}
}