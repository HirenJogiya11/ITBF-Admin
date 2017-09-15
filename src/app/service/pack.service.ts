import {Pack} from '../model/pack.interface';
import {Site} from '../model/site.interface';


export class PackService {

    private packs: Pack[] = [
        new Pack('englishpack', 'english'),
        new Pack('frenchpack', 'french'),
        new Pack('russianpack', 'russian'),
        new Pack('latinpack', 'latin'),
        new Pack('chinesepack', 'chinese')
    ];

    private sites: Site[] = [
        new Site('englishpack', 'english', {'sitename': 'engsite', 'imagefile': 'image1', 'audiofile': 'audio1'}),
        new Site('englishpack', 'english', {'sitename': 'engsite', 'imagefile': 'image52', 'audiofile': 'audio2'}),
        new Site('frenchpack', 'french', {'sitename': 'frenchsite', 'imagefile': 'image1', 'audiofile': 'audio1'}),
        new Site('russianpack', 'russian', {'sitename': 'russiansite', 'imagefile': 'image1', 'audiofile': 'audio1'}),
        new Site('latinpack', 'latin', {'sitename': 'latinsite', 'imagefile': 'image1', 'audiofile': 'audio1'}),
        new Site('chinesepack', 'chinese', {'sitename': 'chinesesite', 'imagefile': 'image1', 'audiofile': 'audio1'})
    ];


    getPack() {
        return this.packs.slice();
    }

    addaudiopack(pack: Pack) {
        this.packs.push(pack);
        this.getPack()
        console.log(this.packs);
    }

    addnewsite(site: Site) {
        this.sites.push(site);
    }

    getsite(name) {
        return this.sites.filter((obj) => obj.packname === name);

    }
}