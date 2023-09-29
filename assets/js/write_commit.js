
new Vue({
    el: '#app',
    data: {
        tarefa: '',
        tipo: '',
        acao: '',
        area: '',
        status: '',
        desc: '',
        msg: ''
    },
    watch: {
        tarefa(newer, older){ this.msgWrite() },
        tipo(newer, older){ this.msgWrite() },
        acao(newer, older){ this.msgWrite() },
        area(newer, older){ this.msgWrite() },
        status(newer, older){ this.msgWrite() },
        desc(newer, older){ this.msgWrite() }
    },
    methods: {
        msgWrite(){
            this.msg = 
                (this.tarefa != '' ? '[' + this.tarefa + ']':'') +
                (this.tarefa != '' && this.tipo != '' ? ' ':'') +
                this.tipo +
                (this.tarefa != '' || this.tipo != '' ? ': ':'') +
                this.acao +
                (this.acao != '' && (this.area != '' || this.desc != '') ? ' | ':'') +
                this.area +
                (this.area != '' && this.desc != '' ? ' | ':'') +
                this.desc +
                (this.status != '' ? ' \u{2192} (' + this.status + ')':'');
        }
    }
});