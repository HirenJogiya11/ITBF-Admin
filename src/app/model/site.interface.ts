export class    Site {
    constructor(
        public packid: string,
        public site: {
            sitename: String,
            imagefile: any,
            audiofile: any
        }
    ) {}
}