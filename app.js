AOS.init({ duration: 1000, once: true });

gsap.from(".navbar", { y: -80, opacity: 0, duration: 1 });
gsap.from(".hero h1", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.7 });
gsap.from(".btn", { opacity: 0, y: 20, duration: 1, delay: 1 });