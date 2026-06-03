export default function Contact() {
    return (
        <section id="contact" className="contact-section container">
            <div className="section-heading-wrap">
                <h1 className="section-title contact-title">Get in touch</h1>
            </div>

            <div className="contact-intro">
                <h2>Let's work together</h2>
                <p>I'm a CS student at UMT looking for internships in Frontend Development, AI, or ML. I've built projects in all three areas — if you think I'd be a good fit, I'd love to connect!"</p>
            </div>

            <div className="contact-grid">
                <div className="contact-info">
                    <div className="contact-card">
                        <span className="contact-card-label">Email</span>
                        <a href="mailto:haideralithakur747@gmail.com">haideralithakur747@gmail.com</a>
                    </div>

                    <div className="contact-card">
                        <span className="contact-card-label">Phone</span>
                        <a href="tel:+923130423199">+92 313 042 3199</a>
                    </div>

                    <div className="contact-card">
                        <span className="contact-card-label">Location</span>
                        <span>Lahore, Pakistan</span>
                    </div>

                    <div className="contact-card">
                        <span className="contact-card-label">LinkedIn</span>
                        <a href="https://www.linkedin.com/in/haider-ali-0a6948305/" target="_blank" rel="noreferrer">
                            Haider Ali on LinkedIn
                        </a>
                    </div>
                </div>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                    <label>
                        <span>Your name</span>
                        <input type="text" name="name" placeholder="Your name" />
                    </label>

                    <label>
                        <span>Your email</span>
                        <input type="email" name="email" placeholder="Your email" />
                    </label>

                    <label>
                        <span>Your message</span>
                        <textarea name="message" rows="5" placeholder="Tell me about the role or project..."></textarea>
                    </label>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
}