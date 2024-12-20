import whatssap from '../asset/whatsapp.png'
import email from '../asset/email (1) copy.png'
import git from '../asset/github.png'
import link from '../asset/linkedin.png'
const Contact = () => {
  const contactInfo = [
    {
      icon: email,
      title: "Email",
      value: "saadmouiz15@gmail.com",
      link: "mailto:saadmouiz15@gmail.com"
    },
    {
      icon: whatssap,
      title: "WhatsApp",
      value: "+212 669 970 285",
      link: "https://wa.me/212669970285"
    }
  ];

  const socialLinks = [
    { icon: git , url: "https://github.com/saadmouiz", alt: "GitHub" },
    { icon: link , url: "https://www.linkedin.com/in/saad-mouiz-381359269/", alt: "LinkedIn" }
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          <div className="absolute inset-0 bg-lime-400 opacity-5 blur-3xl -z-10"></div>
          
          <div className="bg-zinc-800/50 rounded-3xl backdrop-blur-xl border border-zinc-700/50 p-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Let's Create Something Amazing</h2>
              <p className="text-zinc-400">
                Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                {contactInfo.map(({ icon, title, value, link }) => (
                  <div key={title} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-lime-400/10 rounded-xl flex items-center justify-center">
                      <img src={icon} alt={title} className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-zinc-400 text-sm mb-1">{title}</p>
                      <a href={link} className="text-white hover:text-lime-400 transition-colors">
                        {value}
                      </a>
                    </div>
                  </div>
                ))}

                <div className="flex gap-4">
                  {socialLinks.map(({ icon, url, alt }) => (
                    <a 
                      key={alt}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-lime-400/10 rounded-xl flex items-center justify-center hover:bg-lime-400/20 transition-all duration-300"
                    >
                      <img src={icon} alt={alt} className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center gap-6">
                <a 
                  href="mailto:saadmouiz15@gmail.com"
                  className="gradient-border px-8 py-4 rounded-xl text-white text-center hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <img src={email} alt="Email" className="w-5 h-5" />
                  <span>Send me an email</span>
                </a>
                <a 
                  href="https://wa.me/212669970285"
                  className="bg-lime-400 px-8 py-4 rounded-xl text-black text-center hover:bg-lime-500 transition-colors flex items-center justify-center gap-3"
                >
                  <img src={whatssap} alt="WhatsApp" className="w-5 h-5" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;