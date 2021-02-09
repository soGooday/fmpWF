
import './index.scss'

let _config = {
    el:"body"
}
export class NodeTree{
    constructor(config){
        this.config = Object.assign(_config,config);
        this.init(this.config);
    }
    init(config){
        $(config.el).append(this.render()) 
    }
    render(){
        return `
            <div id="node-tree"></div>
        ` 
    }

}