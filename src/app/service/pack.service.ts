import {Pack} from '../model/pack.interface';
import {Site} from '../model/site.interface';


export class PackService {

    private packs: Pack[] = [
        new Pack('englishpack', 'english'),
        new Pack('englishpack1', 'english'),
        new Pack('frenchpack', 'french'),
        new Pack('russianpack', 'russian'),
        new Pack('latinpack', 'latin'),
        new Pack('chinesepack', 'chinese')
    ];

    private sites: Site[] = [
        new Site('englishpack', 'english', {'sitename': 'engsite', 'imagefile': 'image1', 'audiofile': 'audio1'}),
        new Site('englishpack1', 'english', {'sitename': 'engsite', 'imagefile': 'image52', 'audiofile': 'audio2'}),
        new Site('frenchpack', 'french', {'sitename': 'frenchsite', 'imagefile': 'image1', 'audiofile': 'audio1'}),
        new Site('russianpack', 'russian', {'sitename': 'russiansite', 'imagefile': 'image1', 'audiofile': 'audio1'}),
        new Site('englishpack', 'english', {'sitename': 'eng1site', 'imagefile': 'image52', 'audiofile': 'audio2'}),
        new Site('latinpack', 'latin', {'sitename': 'latinsite', 'imagefile': 'image1', 'audiofile': 'audio1'}),
        new Site('chinesepack', 'chinese', {'sitename': 'chinesesite', 'imagefile': 'image1', 'audiofile': 'audio1'})
    ];


    getPack() {
        return this.packs.slice();
    }

    addaudiopack(pack: Pack) {
        this.packs.push(pack);
        this.getPack()
        console.log('total packs', this.packs);
    }

    addnewsite(site: Site) {
        this.sites.push(site);
    }

    getsites() {
        return this.sites.slice();
    }

    getsite(name) {
        return this.sites.filter((obj) => obj.packname === name);
    }

    deleteaudio(index) {
        debugger;
        this.sites.splice(index , 1);
        console.log('delete site is' , this.sites);
    }
}