import './index.scss'
import {GetComponent} from './components/getComponent/index.js'
import {NodeTree} from './components/nodeTree/index.js'

export class componentBox{
    constructor(config){
        this.init(config);
    }
    init(config){ 
        $(config.el).append(this.render());
        new GetComponent({
            el:'#component-box'
        });
        new NodeTree({
            el:'#component-box'
        })
    }
    bin(){}
    render(){
        return `
            <div id="component-box">  
            </div> 
        `
    }
}
 