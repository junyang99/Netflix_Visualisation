import Container from "@/components/Container";
import styles from "./styles.module.css"

const About = () => {
  return (
    <Container>

      {/* Main Content Section */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-5xl font-extrabold mb-6">
            <span className={styles.typingone}>Stories are an essential part of our lives.</span>
          </h2>
          <p className="text-lg leading-7 mb-6">
            It is undeniable that streaming platforms, such as Netflix, have transformed how we consume entertainment and connect with stories worldwide. 
            With unlimited access to thousands of films, series, and documentaries, Netflix has become an integral part of the digital entertainment space.
          </p>
          <p className="text-lg leading-7">
            However, with the abundance of content, understanding what drives audience engagement and discovering hidden trends in streaming remains a challenge.
            This project aims to explore these insights, shedding light on the elements that captivate audiences across the globe.
          </p>
        </div>

        {/* Netflix Icon / Graphic Section */}
        <div className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
            alt="Netflix Logo"
            className="w-1/2"
          />
        </div>
      </main>

      <hr className="border-gray-700 my-12" />

      {/* Approach Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src="https://futureparty.com/wp-content/uploads/2022/04/netflix_ad_april_21.214759.gif"
            alt="Netflix Icon"
            className="w-1/3"
          />
        </div>

        <div>
          <h2 className="text-5xl font-extrabold mb-6"> <span className={styles.typingtwo}>Our Approach.</span>
          </h2>
          <p className="text-lg leading-7 mb-4">
            With millions of users watching Netflix daily, the platform generates massive amounts of data. By analyzing these trends, industry stakeholders and content creators 
            can make informed decisions and tailor their strategies to match audience interests.
          </p>
          <p className="text-lg leading-7 mb-4">
            This project analyzes the most-watched Netflix content, exploring the key drivers behind audience engagement.
            We will focus on identifying patterns in viewership data, subscription models, and device usage.
          </p>
          <ul className="list-disc list-inside text-lg">
            <li>
              <a href="https://www.kaggle.com/datasets/shivamb/netflix-shows" className="text-red-500 underline hover:text-red-600">
                Netflix Shows Dataset
              </a>
            </li>
            <li>
              <a href="https://www.kaggle.com/datasets/arnavsmayan/netflix-userbase-dataset" className="text-red-500 underline hover:text-red-600">
                Netflix Userbase
              </a>
            </li>
            <li>
              <a href="ttps://www.kaggle.com/datasets/rounakbanik/the-movies-dataset/data" className="text-red-500 underline hover:text-red-600">
                Most-Watched Movies
              </a>
            </li>
          </ul>
        </div>
      </section>
    </Container>
  );
};

export default About;
