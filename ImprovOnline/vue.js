const App = {
    data() {
      return {
        counter: 0,
        videoRoot: 'videos/',
        stage: [],
        action: 'addToStage',
        audience:['audience.gif','audience2.gif','audience3.gif','comedian.gif','comedian2.gif','comedian3.gif','comedian4.gif'],
      }
    },
    methods:{
        videoPath(video){
            return `${this.videoRoot}${video}`
        },
        toggleImage(image, location){
            if(location==='stage'){
                let index = this.stage.indexOf(image)
                if(index>-1){
                    //remove from stage
                    console.log("INDE",index)
                    this.stage.splice(index,1)
                }
                    //move to audience
                    this.audience.push(image)
            }
            else if(location==='audience'){
                //move to stage
                let index = this.audience.indexOf(image)
                if(index>-1){
                    //remove from audience
                    this.audience.splice(index,1)
                }
                    //move to stage
                    this.stage.push(image)
            }
            else{console.log("Unable to move --no location")}
            }
                }
  }
  
  Vue.createApp(App).mount('#app')