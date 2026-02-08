import React from 'react';
import './SkillSection.css';

const SkillSection = () => {
    return (
        <section className="skill-section">
            <div className="skill-container">
                {/* Left Side: Visuals Grid */}
                <div className="skill-visuals">
                    <div className="visual-grid">

                        {/* 1. Top Left: Team Photo (Women) */}
                        <div className="grid-item item-1">
                            <div className="image-wrapper">
                                <img src="https://dev254.kodesolution.com/edigitaal/wp-content/uploads/2025/11/Skill-1.jpg" alt="Team" />
                            </div>
                        </div>

                        {/* 2. Top Center: Figma */}
                        <div className="grid-item item-2">
                            <div className="icon-wrapper">
                                <img src="https://dev254.kodesolution.com/edigitaal/wp-content/uploads/2025/11/icon.png" alt="Figma" />
                                <span>Figma</span>
                            </div>
                        </div>

                        {/* 3. Top Right: Adobe XD */}
                        <div className="grid-item item-3">
                            <div className="icon-wrapper">
                                <img src="https://dev254.kodesolution.com/edigitaal/wp-content/uploads/2025/11/icon-3.png" alt="Adobe XD" />
                                <span>Adobe XD</span>
                            </div>
                        </div>

                        {/* 4. Left: Photoshop */}
                        <div className="grid-item item-4">
                            <div className="icon-wrapper">
                                <img src="https://dev254.kodesolution.com/edigitaal/wp-content/uploads/2025/11/icon-1.png" alt="Photoshop" />
                                <span>Photoshop</span>
                            </div>
                        </div>

                        {/* 5. Center-Left Inner: Team Photo (2 Men) */}
                        <div className="grid-item item-5">
                            <div className="image-wrapper">
                                <img src="https://dev254.kodesolution.com/edigitaal/wp-content/uploads/2025/11/Skill-2.jpg" alt="Team" />
                            </div>
                        </div>

                        {/* 6. CENTER: Sketch */}
                        <div className="grid-item item-center">
                            <div className="center-wrapper">
                                <div className="pulse-glow"></div>
                                <img src="https://dev254.kodesolution.com/edigitaal/wp-content/uploads/2025/11/640px-Sketch_Logo-1.png" alt="Sketch" />
                                <span className="highlight-label">Sketch</span>
                            </div>
                        </div>

                        {/* 7. Bottom Left: Team Photo (Man) */}
                        <div className="grid-item item-7">
                            <div className="image-wrapper">
                                <img src="https://dev254.kodesolution.com/edigitaal/wp-content/uploads/2025/11/Skill-3.jpg" alt="Team" />
                            </div>
                        </div>

                        {/* 8. Bottom Center: Invision */}
                        <div className="grid-item item-8">
                            <div className="icon-wrapper">
                                <img src="https://dev254.kodesolution.com/edigitaal/wp-content/uploads/2025/11/icon-2.png" alt="Invision" />
                                <span>Invision</span>
                            </div>
                        </div>

                        {/* 9. Bottom Right: Illustrator */}
                        <div className="grid-item item-9">
                            <div className="icon-wrapper">
                                <img src="https://dev254.kodesolution.com/edigitaal/wp-content/uploads/2025/11/icon-4.png" alt="Illustrator" />
                                <span>Illustrator</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="skill-content">
                    <div className="skill-header">
                        <span className="sub-title">✦ OUR SKILL</span>
                        <h2>Innovating <br /> <span className="highlight-text">Through Expertise</span></h2>
                    </div>

                    <div className="skill-bars">
                        <div className="skill-card card-1">
                            <div className="skill-info">
                                <h3>Web Designer</h3>
                                <span className="percentage">70%</span>
                            </div>
                        </div>

                        <div className="skill-card card-2">
                            <div className="skill-info">
                                <h3>Apps Development</h3>
                                <span className="percentage">80%</span>
                            </div>
                        </div>

                        <div className="skill-card card-3">
                            <div className="skill-info">
                                <h3>Web Development</h3>
                                <span className="percentage">90%</span>
                            </div>
                        </div>

                        <div className="skill-card card-4">
                            <div className="skill-info">
                                <h3>Apps Development</h3>
                                <span className="percentage">100%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillSection;