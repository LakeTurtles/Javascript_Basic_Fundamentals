// method -> obj
// function -> global (window, global)

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

//video.stop = function (){
//    console.log(this);
//};

function Video(title) {
    this.title = title;
    console.log(this);
}



const v = new Video('b');


//video.stop();