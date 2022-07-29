function touchStarted() 
            {
              getAudioContext().resume();
            }
            var mic;
            var vol;
            var offset = 0;
            var strum = 1;
            let object;
            let lvl;
            let wav;
            let a;
            function setup () {
                let cnv = createCanvas(windowWidth,40);
                cnv.parent('myCanvas');
                mic = new p5.AudioIn();
                mic.start();
            }
            function draw () {
                background('#F5511E')
                vol = mic.getLevel();
                let one = 1;
                lvl = map(vol,0,1,one,10);
                wav = map(vol,0,1,0,0.5);
                stroke(0);
                strokeWeight(3.2)
                noFill();
                beginShape();
                vertex(x,20);
                for(var x=0; x < width; x++){
                var angle = offset + x * wav;
                var y = map(sin(angle), -strum, strum,20,10);
                vertex(x,y);
                }
                vertex(width,y);
                endShape();
                offset += 0.5;

                if (lvl >= 5) {document.getElementById("ending").innerHTML = "high";
                    
                } else {
                document.getElementById("ending").innerHTML = "low";
                }
                setInterval(() => {
                    a = Math.floor(lvl);
                    document.getElementById('reading').innerHTML = a;
                }, 1000);
            }
            let seconds = 0;
            let time1 = [];
            let reading1 = [];
            let data1 = [];
            let data2 = [];
            let blob1;
            data1 = [["second","reading"]];
            setInterval(() => {
                    if (a === undefined) {
                      a = 1;
                    } else {
                      a=a;
                    }
                    seconds = 1 + seconds;
                    data1.push([seconds,a]);
                    data2 = [data1.join("\r\n")];
                    blob1 = new Blob([data2]);
                    download1.href = URL.createObjectURL(blob1);
              
            }, 1000);
                setInterval(() => {
                  //console.log(data2)
                }, 1000);
               
                    
                      window.onload=function(){
const speaker = document.getElementById('speaker');
const download1 = document.getElementById('download1')
const notice1 = document.getElementById('notice1') 
const open = document.getElementById('open');
const modalcontainer = document.getElementById('modalcontainer');
const close = document.getElementById('close');
notice1.addEventListener('click',()=>{
  alert('never use diy inductor with devices which draws power directly from the wall, this diy mic is suitable only for battery powered devices i.e. smartphone')
});
open.addEventListener('click', () => {
  modalcontainer.classList.add('show');
  modalcontainer.classList.remove('hide');
});
close.addEventListener('click', () => {
  modalcontainer.classList.remove('show');
  modalcontainer.classList.add('hide');
});
let micstate = 0;
speaker.addEventListener('click', () => {
  if (micstate == 0) {
    mic.connect();
    micstate = micstate+1;
    document.getElementById('img1').src='speakermute.svg';
  } else {
    mic.disconnect();
    micstate = micstate-1;
    document.getElementById('img1').src='speaker.svg';
  }
})
}





