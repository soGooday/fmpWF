(function(){
    let resourceList={};
    let getID = getResourceUUID();
    function Wf (paramenter){
        this.node = {}
        // console.log('当前传入的参数:',paramenter)
        if(/#/.test(paramenter)){
            this.node = document.getElementById(paramenter.substring(0,1))
        }else if(/\./.test(paramenter)){

        }else{

        }
        console.log('111')
        return newFun(Wf,paramenter);
    } 
    Wf.prototype.append = function(string){
        console.log(this.node);

    }
    function getNode(){

    }
    function newFun(fun,...arg){
        let obj = Object.create(fun.prototype);
        let funo = fun.call(obj,...arg);
        return fun ? funo : obj;


    }
    /**
     * 得到唯一标识符
     * @param {string} params 
     */
    function getResourceUUID(params) {
        let id = 0; 
        return function(params2) {
            params2 = params2 ? params2 : params;
            return params2+"_"+(id+=1);
            
        }
        
    } 
    
    return window.$ = Wf;
})()