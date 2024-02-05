var tl = gsap.timeline()

tl.from("#nav-section",{
    y:-100,
    duration:1
})
tl.to("#layer h1",{
    opacity:1
})

tl.from(".img1",{
    x:80,
    duration:1,
    opacity:0
})
tl.to(".img2",{
    top:60,
    duration:1,
    opacity:1
})
tl.to(".img3",{
    bottom:50,
    duration:1,
    opacity:1
})
tl.to(".img4",{
    top:280,
    duration:1,
    opacity:1
})

tl.to("#login-ops a:nth-child(2), #icons",{
    opacity:1
})
tl.to("#scroll-arrow",{
    opacity:1
})
tl.from("#scroll-arrow",{
    y:-20,
    repeat:-1,
    yoyo:true
})

