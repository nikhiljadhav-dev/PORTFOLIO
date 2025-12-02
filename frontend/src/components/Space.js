import React, { useEffect, useRef } from "react";
import "./Space.css";
import Img8 from "../images/img8.png";
import Img9 from "../images/img9.png";
import Img10 from "../images/img10.png";
import {
    Engine,
    Render,
    Runner,
    World,
    Bodies,
    Body,
    Events,
    Mouse,
    MouseConstraint,
} from "matter-js";

const Space = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const engine = Engine.create();
        const world = engine.world;
        world.gravity.y = 0;

        const render = Render.create({
            element: container,
            engine: engine,
            options: {
                width: container.offsetWidth,
                height: container.offsetHeight,
                wireframes: false,
                background: "transparent",
            },
        });

        Render.run(render);
        const runner = Runner.create();
        Runner.run(runner, engine);

        const bubbleBodies = [];
        const bubbles = container.querySelectorAll(".bubble");

        bubbles.forEach((bubble) => {
            const rect = bubble.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            const x = rect.left - containerRect.left + rect.width / 2;
            const y = rect.top - containerRect.top + rect.height / 2;

            const body = Bodies.circle(x, y, 30, {
                restitution: 0.4,
                frictionAir: 0.08,
                inertia: Infinity,
                collisionFilter: { group: -1 },
                render: { visible: false },
            });

            World.add(world, body);
            bubbleBodies.push({ el: bubble, body, origin: { x, y } });
        });

        Events.on(engine, "afterUpdate", () => {
            bubbleBodies.forEach(({ el, body }) => {
                el.style.left = `${body.position.x - 30}px`;
                el.style.top = `${body.position.y - 30}px`;
            });
        });

        const mouse = Mouse.create(container);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: {
                stiffness: 0.15,
                render: { visible: false },
            },
        });
        World.add(world, mouseConstraint);

        const interval = setInterval(() => {
            bubbleBodies.forEach(({ body, origin }) => {
                Body.applyForce(body, body.position, {
                    x: (origin.x - body.position.x) * 0.0003,
                    y: (origin.y - body.position.y) * 0.0003,
                });
            });
        }, 1000);

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            bubbleBodies.forEach(({ body }) => {
                const dx = mouseX - body.position.x;
                const dy = mouseY - body.position.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    Body.applyForce(body, body.position, {
                        x: -dx * 0.00001,
                        y: -dy * 0.00001,
                    });
                }
            });
        };

        const handleScroll = () => {
            bubbleBodies.forEach(({ body }) => {
                Body.applyForce(body, body.position, {
                    x: (Math.random() - 0.5) * 0.00008,
                    y: (Math.random() - 0.5) * 0.00008,
                });
            });
        };

        container.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);

        return () => {
            clearInterval(interval);
            container.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
            Render.stop(render);
            Runner.stop(runner);
            World.clear(world);
            Engine.clear(engine);
            render.canvas.remove();
            render.textures = {};
        };
    }, []);

    return (
        <div className="scont1" ref={containerRef}>
            <img src={Img8} alt="Logo" className="img8" />
            <img src={Img9} alt="Logo" className="img9" />
            <img src={Img10} alt="Logo" className="img10" />

            {/* Tech stack bubbles */}
            <img src="https://img.icons8.com/color/144/nodejs.png" alt="Node.js" className="iconNode bubble" />
            <img src="https://img.icons8.com/color/144/react-native.png" alt="React" className="iconReact bubble" />
            <img src="https://img.icons8.com/color/144/visual-studio-code-2019.png" alt="VS Code" className="iconVS bubble" />
            <img src="https://img.icons8.com/color/144/html-5--v1.png" alt="HTML5" className="iconHTML5 bubble" />
            <img src="https://img.icons8.com/color/144/css3.png" alt="CSS3" className="iconCSS3 bubble" />
            <img src="https://img.icons8.com/color/144/javascript--v1.png" alt="JavaScript" className="iconJavaScript bubble" />
            <img src="https://img.icons8.com/color/144/mysql-logo.png" alt="MySQL" className="iconMySQL bubble" />
            <img src="https://img.icons8.com/skeuomorphism/32/mongo-db.png" alt="MongoDB" className="iconMongoDB bubble" />
            <img src="https://img.icons8.com/color/144/tailwind_css.png" alt="Tailwind CSS" className="iconTailwind bubble" />
            <img src="https://img.icons8.com/color-glass/48/bootstrap.png" alt="Bootstrap" className="iconBootstrap bubble" />
            <img src="https://img.icons8.com/color/144/python--v1.png" alt="Python" className="iconPython bubble" />
            <img src="https://img.icons8.com/color/144/java-coffee-cup-logo--v1.png" alt="Java" className="iconJava bubble" />
            <img src="https://img.icons8.com/ios/50/express-js.png" alt="Express.js" className="iconExpress bubble" />
            <img src="https://img.icons8.com/glyph-neue/64/github.png" alt="GitHub" className="iconGitHub bubble" />

            {/* Stars */}
            <img width="10" height="10" src="https://img.icons8.com/external-others-inmotus-design/67/external-Star-result-others-inmotus-design-3.png" alt="Star" className="star1 dropstar" />
            <img width="10" height="10" src="https://img.icons8.com/external-others-inmotus-design/67/external-Star-result-others-inmotus-design-3.png" alt="Star" className="star1-1  dropstar" />
            <img width="10" height="10" src="https://img.icons8.com/external-others-inmotus-design/67/external-Star-result-others-inmotus-design-3.png" alt="Star" className="star1-2  dropstar" />
            <img width="10" height="10" src="https://img.icons8.com/external-others-inmotus-design/67/external-Star-result-others-inmotus-design-3.png" alt="External Star Result" loading="lazy" className="star1-3  dropstar" />
            <img width="10" height="10" src="https://img.icons8.com/external-others-inmotus-design/67/external-Star-result-others-inmotus-design-3.png" alt="External Star Result" loading="lazy" className="star1-4  dropstar" />
            <img width="10" height="10" src="https://img.icons8.com/external-others-inmotus-design/67/external-Star-result-others-inmotus-design-3.png" alt="External Star Result" loading="lazy" className="star1-5  dropstar" />
            <img width="10" height="10" src="https://img.icons8.com/external-others-inmotus-design/67/external-Star-result-others-inmotus-design-3.png" alt="External Star Result" loading="lazy" className="star1-6  dropstar" />
            <img width="10" height="10" src="https://img.icons8.com/external-others-inmotus-design/67/external-Star-result-others-inmotus-design-3.png" alt="External Star Result" loading="lazy" className="star1-7  dropstar" />
            <img width="10" height="10" src="https://img.icons8.com/external-others-inmotus-design/67/external-Star-result-others-inmotus-design-3.png" alt="External Star Result" loading="lazy" className="star1-8  dropstar" />
            <img width="10" height="10" src="https://img.icons8.com/external-others-inmotus-design/67/external-Star-result-others-inmotus-design-3.png" alt="External Star Result" loading="lazy" className="star1-9  dropstar" />
            <img width="10" height="10" src="https://img.icons8.com/external-others-inmotus-design/67/external-Star-result-others-inmotus-design-3.png" alt="External Star Result" loading="lazy" className="star1-10  dropstar" />
            <img width="10" height="10" src="https://img.icons8.com/external-others-inmotus-design/67/external-Star-result-others-inmotus-design-3.png" alt="External Star Result" loading="lazy" className="star1-11  dropstar" />
            <img width="10" height="10" src="https://img.icons8.com/external-others-inmotus-design/67/external-Star-result-others-inmotus-design-3.png" alt="External Star Result" loading="lazy" className="star1-12  dropstar" />

            <img width="15" height="15" src="https://img.icons8.com/small/16/starburst-shape.png" alt="Starburst Shape" loading="lazy" className="star2  dropstar" />
            <img width="15" height="15" src="https://img.icons8.com/small/16/starburst-shape.png" alt="Starburst Shape" loading="lazy" className="star2-1  dropstar" />
            <img width="15" height="15" src="https://img.icons8.com/small/16/starburst-shape.png" alt="Starburst Shape" loading="lazy" className="star2-2  dropstar" />
            <img width="15" height="15" src="https://img.icons8.com/small/16/starburst-shape.png" alt="Starburst Shape" loading="lazy" className="star2-3  dropstar" />
            <img width="15" height="15" src="https://img.icons8.com/small/16/starburst-shape.png" alt="Starburst Shape" loading="lazy" className="star2-4  dropstar" />

            <img width="10" height="10" src="https://img.icons8.com/small/16/christmas-star.png" alt="Christmas Star" loading="lazy" className="star3  dropstar" />
            <img width="30" height="25" src="https://img.icons8.com/ios/50/star-of-bethlehem.png" alt="Star of Bethlehem (iOS)" loading="lazy" className="star4  dropstar" />
        </div>
    );
};

export default Space;








