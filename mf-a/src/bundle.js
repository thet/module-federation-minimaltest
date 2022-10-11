import { loadRemoteModule } from './utils/dynamic-federation';
import "./mf-a";

loadRemoteModule({
    remoteName: 'mf_b',
    exposedModule: './main'
});

console.log("BUNDLE A");
