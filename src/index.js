import './index.scss'

import componentBox from './components/componentBox/index.js'

class fmpWF{
    constructor(){}
    init(){
        this.componentBoxFun()
    }
    bin(){}



    componentBoxFun(){
        return new componentBox({
            el:'#left-box'
        })
    }


}

new fmpWF()