import { createApp } from 'vue'
import '@/css/_global.scss';
import App from './App.vue'
import VueMobileDetection from 'vue-mobile-detection'
import VueI18n from 'vue-i18n/dist/vue-i18n.global';

const messages = {
    en: {
        inpup: {
            up: 'Upload',
            uptext:'Upload Ｆile'
        }
    },
    tw: {
        inpup: {
            up: '上傳',
            uptext:'上傳檔案'
        }
    },
    cn: {
        inpup: {
            up: '上传',
            uptext:'上传档案'
        }
    },
    jp: {
        inpup: {
            up: 'アップロード',
            uptext:'ファイルをアップロードする'
        }
    }
}
const i18n = new VueI18n({
    //定義默認語言
    locale: 'tw',
    messages
})

new createApp({
    el:"#app",
    i18n,
    data:{
        mag:"改寫上傳選單 custom-file 語言",
        lan:''
    },
    mounted(){
        this.i18n.locale = 'jp'
        // this.lan = this.$i18n.messages
        console.log(this.i18n.locale)
    }
})
createApp({App, i18n}).use(VueMobileDetection).mount('#app')
