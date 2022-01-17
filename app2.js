const flightPath = {
    curviness:1.25,
    autoRotate:true,
    values:[



        {height:0},
        {height:'93vh'}

        // {x:100,y:0},
        // {x:300,y:100},
        // {x:500,y:200},
        // {x:750,y:300},
        // {x:350,y:400},
        // {x:600,y:500},
        // {x:800,y:600},
        // {x:window.innerWidth,y:-250},

    ]
};



const tween = new TimelineLite();

tween.add(
    TweenLite.to(".paper-plane",1,{
        bezier:flightPath,
        ease:Power1.easeInOut
    })
);





const scrollController = new ScrollMagic.Controller();

const scrollScene = new ScrollMagic.Scene({
    triggerElement:'.animation',
    duration:2000,
    triggerHook:0
    
   
})

.setTween(tween)
.addIndicators()
.setPin('.animation')

.addTo(scrollController);