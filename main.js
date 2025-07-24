        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".header h1", {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
        });

        gsap.utils.toArray(".section").forEach((section, i) => {
            gsap.to(section, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
        });

        gsap.utils.toArray(".fact-card").forEach((card, i) => {
            gsap.to(card, {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "back.out(1.7)",
                delay: i * 0.2,
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play none none none"
                }
            });
        });

        gsap.utils.toArray(".button").forEach(button => {
            button.addEventListener("mouseenter", () => {
                gsap.to(button, {
                    scale: 1.1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            button.addEventListener("mouseleave", () => {
                gsap.to(button, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });
