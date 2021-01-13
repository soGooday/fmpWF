import './index.scss'

export class componentBox{
    constructor(config){
        this.init(config);
    }
    init(config){
        
        $(config.el).inner()
    }
    bin(){}
    render(){
        return `
            <div id="component-box"></div> 
        `
    }
}
 