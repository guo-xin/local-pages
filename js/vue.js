class Vue{
    constructor(options = {}){
        console.log(options, 666);
        this.$el = document.querySelector(options.el);
        let data = this.data = options.data;
        // 代理data，使其能直接this.xxx的方式访问data，正常的话需要this.data.xxx
        Object.keys(data).forEach((key)=> {
            this.proxyData(key);
    });
        this.methods = options.methods // 事件方法
        this.watcherTask = {}; // 需要监听的任务列表
        this.observer(data); // 初始化劫持监听所有数据
        this.compile(this.$el); // 解析dom
    }
    proxyData(key){
        console.log(111111);
        let that = this;
        Object.defineProperty(that, key, {
            configurable: false,
            enumerable: true,
            get () {
                return that.data[key];
            },
            set (newVal) {
                console.log(666445)
                that.data[key] = newVal;
            }
        });
    }
    observer(data){
        console.log(1233443)
        let that = this
        Object.keys(data).forEach(key=>{
            let value = data[key]
            this.watcherTask[key] = []
        Object.defineProperty(data,key,{
            configurable: false,
            enumerable: true,
            get(){
                console.log(444)
                return value
            },
            set(newValue){
                console.log(5555)
                if(newValue !== value){
                    value = newValue
                    that.watcherTask[key].forEach(task => {
                        task.update()
                })
                }
            }
        })
    })
    }
    compile(el){
        console.log(66666)
        var nodes = el.childNodes;
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if(node.nodeType === 3){
                var text = node.textContent.trim();
                if (!text) continue;
                this.compileText(node,'textContent')
            }else if(node.nodeType === 1){
                if(node.childNodes.length > 0){
                    this.compile(node)
                }
                if(node.hasAttribute('v-model') && (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA')){
                    node.addEventListener('input',(()=>{
                        let attrVal = node.getAttribute('v-model')
                        this.watcherTask[attrVal].push(new Watcher(node,this,attrVal,'value'))
                    node.removeAttribute('v-model')
                    return () => {
                        this.data[attrVal] = node.value
                    }
                })())
                }
                if(node.hasAttribute('v-html')){
                    let attrVal = node.getAttribute('v-html');
                    this.watcherTask[attrVal].push(new Watcher(node,this,attrVal,'innerHTML'))
                    node.removeAttribute('v-html')
                }
                this.compileText(node,'innerHTML')
                if(node.hasAttribute('@click')){
                    let attrVal = node.getAttribute('@click')
                    node.removeAttribute('@click')
                    node.addEventListener('click',e => {
                        this.methods[attrVal] && this.methods[attrVal].bind(this)()
                })
                }
            }
        }
    }
    compileText(node,type){
        console.log(7777)
        let reg = /\{\{(.*?)\}\}/g, txt = node.textContent;
        if(reg.test(txt)){
            node.textContent = txt.replace(reg,(matched,value)=>{
                let tpl = this.watcherTask[value] || []
                tpl.push(new Watcher(node,this,value,type))
            if(value.split('.').length > 1){
                let v = null
                value.split('.').forEach((val,i)=>{
                    v = !v ? this[val] : v[val]
                })
                return v
            }else{
                return this[value]
            }

        })
        }
    }
}

class Watcher{
    constructor(el,vm,value,type){
        console.log(22222);
        this.el = el;
        this.vm = vm;
        this.value = value;
        this.type = type;
        this.update()
    }
    update(){
        console.log(3333);
        this.el[this.type] = this.vm.data[this.value]
    }
}