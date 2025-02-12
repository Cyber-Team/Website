import React from 'react';

const posts = [
  {
    id: 1,
    title: "Host Website For Free On Github Pages Using Custom Domain",
    excerpt: " Why depend on DigitalOcean or AWS to host your website publicly? Let's Host it using github pages using your custom domain.",
    image: "/blog-1.jpg",
    link: "https://medium.com/@raiaditi178/host-your-site-website-on-github-pages-using-custom-domain-280e397b18b2"
  },
  {
    id: 2,
    title: "SyntaxError: Unexpected token ",
    excerpt: "NVM makes it easier to manage multiple versions of Node.js across different projects that require different versions.",
    image: "/blog-2.jpg",
    link: "https://medium.com/@raiaditi178/syntaxerror-unexpected-token-at-module-compile-internal-modules-cjs-loader-js-723-23-60a1f52f658b"
  },
  {
    id: 3,
    title: "How to Create a New User Account on Linux with root?",
    excerpt: "Creating a new user account on Linux with root privileges involves adding the user with the useradd command, ensuring they have a home directory, and granting them sudo access. After that, the passwd command is used to set a password for the new user.",
    image: "/blog-3.jpg",
    link: "https://medium.com/@raiaditi178/how-to-create-a-new-user-account-on-kali-linux-with-root-98c0d76368c4"
  }
];

const BlogSlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? posts.length - 2 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === posts.length - 2 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="heading text-white text-center text-4xl font-bold mb-4">
          Tech
          <span className="text-red-900"> Blogs</span>
        </h1>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {posts.map((post) => (
                <div 
                  key={post.id} 
                  className="w-full md:w-1/2 flex-shrink-0 px-4"
                >
                  <a 
                    href={post.link}
                    className="block transform-gpu transition-all duration-500 ease-out hover:scale-[1.01] hover:shadow-xl"
                  >
                    <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden transition-all duration-500 ease-out hover:border-zinc-700">
                      <div className="h-48">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.02]"
                        />
                      </div>
                      <div className="p-6 h-48">
                        <h2 className="text-xl font-bold mb-3 line-clamp-2 text-white">
                          {post.title}
                        </h2>
                        <p className="text-gray-400 line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-black p-2 rounded-full shadow-lg hover:bg-zinc-800 transition-colors duration-300"
            aria-label="Previous slide"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-black p-2 rounded-full shadow-lg hover:bg-zinc-800 transition-colors duration-300"
            aria-label="Next slide"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;