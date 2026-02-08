import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particlesArray = [];

        // Configuration
        const config = {
            particleCount: 120, // Adjust density
            connectionDistance: 150,
            mouseRadius: 150,
            particleSize: 2,
            baseSpeed: 0.5,
            returnForce: 0.02, // Force to return to original position
            mouseForce: 0.02 // Force to follow mouse
        };

        let mouse = {
            x: null,
            y: null,
            active: false
        };

        const setDimensions = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
            mouse.active = true;
        };

        const handleMouseOut = () => {
            mouse.active = false;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);
        window.addEventListener('resize', () => {
            setDimensions();
            init();
        });

        class Particle {
            constructor() {
                this.init();
            }

            init() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * config.baseSpeed;
                this.vy = (Math.random() - 0.5) * config.baseSpeed;
                this.size = Math.random() * config.particleSize + 1;

                // Store original position for return effect
                this.originalX = this.x;
                this.originalY = this.y;

                // Store velocity before mouse interaction
                this.originalVX = this.vx;
                this.originalVY = this.vy;
            }

            update() {
                // Calculate return force to original position
                let returnForceX = (this.originalX - this.x) * config.returnForce;
                let returnForceY = (this.originalY - this.y) * config.returnForce;

                // Apply return force
                this.vx += returnForceX;
                this.vy += returnForceY;

                // Mouse Interaction
                if (mouse.active && mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < config.mouseRadius) {
                        // Calculate force based on distance
                        let forceFactor = (config.mouseRadius - distance) / config.mouseRadius;

                        // Move towards mouse
                        this.vx += dx * config.mouseForce * forceFactor;
                        this.vy += dy * config.mouseForce * forceFactor;
                    }
                }

                // Apply velocity damping to prevent infinite acceleration
                this.vx *= 0.98;
                this.vy *= 0.98;

                // Limit maximum speed
                const maxSpeed = 2;
                const currentSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
                if (currentSpeed > maxSpeed) {
                    this.vx = (this.vx / currentSpeed) * maxSpeed;
                    this.vy = (this.vy / currentSpeed) * maxSpeed;
                }

                // Bounce off edges with some damping
                const bounceDamping = 0.9;
                if (this.x < 0 || this.x > canvas.width) {
                    this.vx = -this.vx * bounceDamping;
                    this.x = this.x < 0 ? 0 : canvas.width;
                }
                if (this.y < 0 || this.y > canvas.height) {
                    this.vy = -this.vy * bounceDamping;
                    this.y = this.y < 0 ? 0 : canvas.height;
                }

                // Update position
                this.x += this.vx;
                this.y += this.vy;
            }

            draw() {
                // Particle color based on distance from mouse
                let color = 'rgba(255, 255, 255, 0.8)';
                if (mouse.active && mouse.x !== null && mouse.y !== null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < config.mouseRadius) {
                        // Brighter when close to mouse
                        let intensity = 1 - (distance / config.mouseRadius);
                        color = `rgba(255, 255, 255, ${0.8 + intensity * 0.2})`;
                    }
                }

                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function init() {
            setDimensions();
            particlesArray = [];
            for (let i = 0; i < config.particleCount; i++) {
                particlesArray.push(new Particle());
            }
        }

        function drawLines() {
            // Draw connections between particles
            for (let i = 0; i < particlesArray.length; i++) {
                for (let j = i + 1; j < particlesArray.length; j++) {
                    let dx = particlesArray[i].x - particlesArray[j].x;
                    let dy = particlesArray[i].y - particlesArray[j].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < config.connectionDistance) {
                        let opacity = 1 - (distance / config.connectionDistance);

                        // Adjust line color based on mouse proximity
                        let lineColor;
                        if (mouse.active && mouse.x !== null) {
                            let mouseDist1 = Math.sqrt(
                                Math.pow(mouse.x - particlesArray[i].x, 2) +
                                Math.pow(mouse.y - particlesArray[i].y, 2)
                            );
                            let mouseDist2 = Math.sqrt(
                                Math.pow(mouse.x - particlesArray[j].x, 2) +
                                Math.pow(mouse.y - particlesArray[j].y, 2)
                            );

                            if (mouseDist1 < config.mouseRadius || mouseDist2 < config.mouseRadius) {
                                // Brighter lines near mouse
                                lineColor = `rgba(255, 255, 255, ${opacity * 0.5})`;
                            } else {
                                lineColor = `rgba(255, 255, 255, ${opacity * 0.2})`;
                            }
                        } else {
                            lineColor = `rgba(255, 255, 255, ${opacity * 0.2})`;
                        }

                        ctx.strokeStyle = lineColor;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                        ctx.stroke();
                    }
                }

                // Draw lines from particles to mouse (optional - can be removed for cleaner look)
                if (mouse.active && mouse.x !== null) {
                    let mDx = particlesArray[i].x - mouse.x;
                    let mDy = particlesArray[i].y - mouse.y;
                    let mDist = Math.sqrt(mDx * mDx + mDy * mDy);

                    if (mDist < config.mouseRadius) {
                        let mOpacity = 1 - (mDist / config.mouseRadius);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${mOpacity * 0.3})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
            }

            // Draw mouse effect circle (optional visual feedback)
            if (mouse.active && mouse.x !== null && mouse.y !== null) {
                ctx.beginPath();
                ctx.arc(mouse.x, mouse.y, config.mouseRadius, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesArray.forEach(p => {
                p.update();
                p.draw();
            });

            drawLines();
            animationFrameId = requestAnimationFrame(animate);
        }

        init();
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            window.removeEventListener('resize', () => {
                setDimensions();
                init();
            });
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: '#000000',
                zIndex: -1
            }}
        />
    );
};

export default ParticleBackground;