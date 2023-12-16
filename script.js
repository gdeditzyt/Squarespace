let tl = gsap.timeline();

tl.from("nav img, nav h1, nav h4, nav button", {
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2
})

tl.from("#main-headings h1, #main-announcement", {
    y:100,
    opacity:0,
    stagger:0.2
})

tl.from("main>img", {
    scale:0,
    duration:1,
    opacity:0, 
    stagger:0.2
})

tl.from("#main-icons i", {
    x: -50,
    duration: 0.5,
    opacity: 0,
    scale:0,
    stagger: {
        amount: 0.2,
        from: "end"
    }
});


tl.from("#main-scrool", {
    scale:0, 
    y:-20,
    duration:0.5,
})

tl.to("#main-scrool", {
    y:20,
    duration:0.5,
    repeat:-1,
    yoyo:true
})
