
import './index.scss'

let _config = {
    el:"body"
}
export class GetComponent{
    constructor(config){
        this.config = Object.assign(_config,config);
        this.init(this.config);
    }
    init(config){
        $(config.el).append(this.render());
        this.node = $('#get-component');
        this.inputNode = this.node.find('.create-element-input');
        this.btnNode = this.node.find('.create-btn')
        this.bin();
        
    }
    render(){
        return `
            <div id="get-component">
                <span>要创建标签: </span>
                <input class="create-element-input" placeholder="要创建的标签" type="text"/> 
                <button class='create-btn'>创建</button> 
                <div class=''>
                <div>历史记录:</div>
                </div>
            </div>
        ` 
    }
    bin(){
        this.btnNode.click(()=>{ 
            let context = this.inputNode.val(); 
            this.testTable(context)
        })
    }
    testTable(nodeCreateTag){
        if(!(/[a-zA-Z]/g).test(nodeCreateTag)){
            console.log('标签只能是字母组成')
        };  
    }


    

}