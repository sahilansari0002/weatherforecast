import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Star } from 'lucide-react';

const mentor = {
  name: 'Nakul Deshmukh',
  role: 'Founder & CEO of iBase',
  image: 'https://media-hosting.imagekit.io//1c5c607e901042b1/nakul%20sir.jpeg?Expires=1837583399&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BE2-rWiCzrQyY08SHyxO794KfA~EjkpI-NiVSVrJd8tHuk14snZIU52cQeKlp3DnQmm4zUgQ8Rc7e7gC4yb~Xf72wu6m5oPsg5IfX3gVkA~ik92pvCYbf-R2IavHp15BlPF3oQdwxT~E8PZI5YvPJeX69OFzNOCq-nxJZ2gVmU6VpyK~h2WjGhJvfpH3l1DEG4SDS-Xt8mWqeyPYfrw15mpILJXMrdUmhsKHd~C0h6Vq029Gwq6JMtSKa4MHd87fHWQYUKa9YRC-nanghoPqPZ7DcaYbc-bGhkzadV74ijLmHmVqOvZzMTOnZJZMxEhmxrSUjpOtg54UtYBTYJZmYw__',
  linkedin: 'https://www.linkedin.com/in/nakul-deshmukh-2540b564/',
  Instagram: 'https://www.instagram.com/ibase_technology_?'
};

const teamMembers = [
  {
    name: 'Sahil Ali',
    role: 'BCA Final Year',
    image: 'https://media-hosting.imagekit.io//361b258c504743a4/sahil%20google.jpg?Expires=1835432378&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=g272EbZK9wQMbotJUeL-f3kxZdEm4MTyzLZwYr1e4eayFjS6M7EK3cGkrbPtWLKrjpUsEfK5TWirD288U-e4Hu0NKIYageYEQIVYqJz70LDoOGlitP6SNHXIFOmZykXisL4vPLk7JoeesSvzyfWiT-TG0pV87wFdrr4mGpSJUEG0rUA9z~-xJTsU59FnEiRFA8o4eXePc~8XaERW3tpclc2lZxGZbbGs3vKNSkoSe~Wj4b~dxz8~sBU5t80cVI7y5aymhMwwgkwTDxi7Iy1K3puIYR-Gh-~sWM2yqAisxYMYhMX5eOJlFNP3jCfyU8h11R0d2i0RshyY3jPdHh1DOA__',
    Instagram: 'https://www.instagram.com/sahilansari0002?',
    linkedin: 'https://www.linkedin.com/in/sahilansari0002/',
    email: 'Sahilali57254@gmail.com'
  },
  {
    name: 'Mujtaba Farooque',
    role: 'BCA Final Year',
    image: 'https://media-hosting.imagekit.io//f38d6297a8844888/muj.jpg?Expires=1837585374&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=r0YUPwDOzSBus83-~-LSnMMpWfRkjlm21vrgj1uioPgjIiuu5qZ0SaGgRvPJCnnApUxW8rX9O0q1OTfiW4muO6grbdKlq-bv0zIjRBYIRwZ08~VhMTt81zxmO8T8kU0ETfAIN0FImRENJ3aPGOl68j7QDsxey140oRt1U0TMQeB2mx-Whsm2dYvog2M5ZjSAF2hpusiaUCserpuK~9p-ly8rz6hizJvzXrkmU1G4ZA5dEi~CcJJnUOvgAwTTsKEwyHJxhQsRalDEXEoc4ICxow2CnbiMnsQVxqMn9lEQuBu-zu7ck6YKj8IkxO6cj6GqAOHQS13cWeJCNztfEVQCyw__',
    Instagram: 'https://www.instagram.com/mujtaba__7788?'
  },
  {
    name: 'Krushna hiralkar ',
    role: 'BCA First Year',
    image: 'https://media-hosting.imagekit.io//af686fb225384695/Krishna.jpg.webp?Expires=1837583399&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=oMtbRooFfNu3q0k1F6fehpLKb16kkkc8yYdkpcHiDmp0XqgYJiZ0dW~YoGzFIlQXzrR0Abain5K5R1S5Ybh-3zy0MQ9VVpLhnYewDSKlraR07Wcz7ms45SmSdOXQoQ~4H4gtBwnvOf9b7D~lpNA-3uMuj9ddC0qaOyvFkdawbejNS-UjF5wzZp4UvB3tkXuPVgSAK7NtcQqwz8F2Girre1e~fqy2VGE8wF3vrTLrJ6PkFhkUubyOxJ3W3FhIo0bFpdPkkSnXCDav0cvPZ5dg9NqG7czYCmaZEGOx5mxs4B2gZlXuKUofHOiUm-hj7KdAPraYw6tqONZSVgC1hnFd5A__',
    Instagram: 'https://www.instagram.com/krishn_hiralkar_?'
  },
  {
    name: 'Himanshu Sharma',
    role: 'BCA First Year',
    image: 'https://media-hosting.imagekit.io//8814f42efcca4957/himanshu.jpg?Expires=1837583399&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=XAuk1OiSiKZDgu7dLNsgsrV1hDYFZTyq8xuElal1i0DT~OCdGyP3RoVaPgrNWnoUyJIr1JwpR-hDv4JOc65m~G1zv-UadHr~4~kQD3YCI7Hrf6CXfxXK5B4sYbHsL7E2wTNHa7vUoM-h5fYvKJArMNmn65aAxSmTkpL4dTOC2odiWNa2ph-QVX-34EhFXZxz7aiuzu49BukkG21qE7Q83LCZXG61Pimk1sHMwJMb1-ugNjQq3CS0z7R8dTwe6DMzBSnrlD81Incr9a3wtFG6XgcS4V5ehn8TLThdQ8qFlFrKW0CqnwgoEFGG5WcSwETTRvlm5eJJJSqGJpNM0aAovg__',
    Instagram: 'https://www.instagram.com/himanshu___563?'
  }
];

export function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h2 
        className="text-4xl font-bold text-white text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Meet Our Team
      </motion.h2>

      {/* Mentor Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h3 className="text-2xl font-semibold text-white text-center mb-8">Our Mentor</h3>
        <div className="max-w-md mx-auto backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20">
          <div className="flex flex-col items-center">
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-40 h-40 rounded-full mb-6 object-cover border-4 border-blue-400/50"
            />
            <h3 className="text-2xl font-bold text-white mb-2">{mentor.name}</h3>
            <p className="text-blue-200 text-lg mb-4">{mentor.role}</p>
            <div className="flex items-center gap-2 text-yellow-300 mb-6">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-blue-100 text-center mb-6">
            Led a transformative 3-day workshop on ReactJS, where a Weather Forecast application was created, demonstrating the practical implementation of modern web technologies.
            </p>
            <div className="flex space-x-4">
              <a href={mentor.linkedin} className="text-white hover:text-blue-300 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href={`mailto:${mentor.email}`} className="text-white hover:text-blue-300 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Workshop Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16 backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20"
      >
        <h3 className="text-2xl font-semibold text-white text-center mb-6">3-Day Workshop Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300 mb-2">Day 1</div>
            <p className="text-blue-100">Learned the basics of HTML and Bootstrap</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300 mb-2">Day 2</div>
            <p className="text-blue-100">Covered the basics of JavaScript and Bootstrap, including how to install Node.js</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300 mb-2">Day 3</div>
            <p className="text-blue-100">Learned ReactJS, including how to link pages and manage navigation, and concluded with building a project.</p>
          </div>
        </div>
      </motion.div>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20"
          >
            <div className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-white/20"
              />
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-blue-200 mb-4">{member.role}</p>
              
              <div className="flex space-x-4">
                <a href={member.github} className="text-white hover:text-blue-300 transition-colors">
                  <Github size={20} />
                </a>
                <a href={member.Instagram} className="text-white hover:text-blue-300 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href={member.linkedin} className="text-white hover:text-blue-300 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href={`mailto:${member.email}`} className="text-white hover:text-blue-300 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}