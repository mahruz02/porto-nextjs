import type { NextPage } from 'next'
import profile from '../public/profile_pic.jpg'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IconType } from 'react-icons/lib'
import { createElement } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <motion.div
      className="max-w-sm mx-3 lg:max-w-2xl"
      variants={{
        hidden: { opacity: 0, x: 0, y: 200 },
        enter: { opacity: 1, x: 0, y: 0 },
      }}
      initial="hidden"
      animate="enter"
    >
      <Head>
        <title>Ahmad Mahrus | About me</title>
      </Head>

      {/* Intro */}
      <div className="flex justify-between pt-4">
        <div>
          <h1 className="text-4xl font-bold dark:text-white">Ahmad Mahrus</h1>
          <p className="dark:text-white">
            Software Engineer (Web Developer / IT Support)
          </p>
        </div>
        {/* prof pic */}
        <div className="flex w-24 overflow-hidden border-2 rounded-full h-fit">
          <a
            draggable={false}
            target="_blank"
            href="https://www.linkedin.com/in/ahmad-mahrus-595537261/"
            rel="noreferrer"
          >
            <div className="flex items-center justify-center group">
              <Image
                width="100%"
                height="100%"
                className="duration-200 ease-linear rounded-full group-hover:blur-sm"
                src={profile.src}
                alt="prof-pic"
                draggable={false}
              />
              <FaLinkedin
                className="absolute invisible text-white duration-200 ease-linear opacity-0 group-hover:visible group-hover:opacity-100"
                size={28}
              />
            </div>
          </a>
        </div>
      </div>
      {/* About */}
      <div className="flex flex-col mt-4">
        <h3 className="mb-2 text-xl font-bold text-black w-fit after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-white after:dark:bg-zinc-500">
          About
        </h3>
        <p className="tracking-wide text-justify dark:text-white">
        A passionate web developer with a knack for creating captivating online experiences. Proficient in design, coding,
        troubleshooting, and deploying websites. Skilled in collaborating with clients and teams to deliver exceptional
        results. Experienced in HTML, CSS, JavaScript, Laravel, and MySQL, I thrive on transforming concepts into
        seamless digital realities.</p>
          
      </div>
      {/* Bio */}
      <div className="flex flex-col mt-4">
        <h3 className="mb-2 text-xl font-bold w-fit after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-white after:dark:bg-zinc-500">
          Bio
        </h3>
        <div className="grid grid-cols-[1fr_3fr] gap-4">
          <div className="font-bold w-fit dark:text-white">2003</div>
          <p className="dark:text-white">Born in Tokyo (東京), Japan.</p>

          <div className="font-bold w-fit dark:text-white">2021</div>
          <p className="dark:text-white">
            Started studying Computer Science at University of Auckland
          </p>

          <div className="font-bold w-fit dark:text-white">2021 to present</div>
          <p className="dark:text-white">
            Working as a frontend engineer at{' '}
            <a
              draggable={false}
              className="hover:text-sky500 inline-block origin-bottom-right indent-0 text-sky-700 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 hover:text-sky-600 hover:after:scale-100  hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 hover:dark:text-teal-200 hover:after:dark:bg-teal-200"
              href="https://kekeno.tech/"
              target="_blank"
              rel="noreferrer"
            >
              Kekeno Tech
            </a>
          </p>

          <div className="font-bold w-fit dark:text-white">2022 Summer</div>
          <p className="dark:text-white">
            Working as a Frontend engineer at University of Auckland helping a
            research project called&nbsp;
            <a
              draggable={false}
              className="inline-block origin-bottom-right indent-0 text-sky-700 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 hover:text-sky-600 hover:after:scale-100  hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 hover:dark:text-teal-200 hover:after:dark:bg-teal-200"
              href="https://habits.school/"
              target="_blank"
              rel="noreferrer"
            >
              Habits
            </a>
          </p>
        </div>
      </div>
      {/* Hobbies */}
      <div className="flex flex-col mt-4">
        <h3 className="mb-2 text-xl font-bold w-fit after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-white after:dark:bg-zinc-500">
          I ❤️
        </h3>
        <p className="dark:text-white">Game, music, piano, UI/UX</p>
      </div>
      {/* Social media */}
      <div className="flex flex-col mt-4">
        <h3 className="mb-2 text-xl font-bold w-fit after:float-left after:h-1 after:w-full after:rounded-sm after:bg-gray-700 dark:text-white after:dark:bg-zinc-500">
          On the web
        </h3>
        <div className="flex flex-col">
          <MediaLink
            icon={() => <FaLinkedin />}
            text="@keisuke-hara"
            mediaLink="https://www.linkedin.com/in/keisuke-hara/"
          />
          <MediaLink
            icon={() => <FaGithub />}
            text="@keiHara"
            mediaLink="https://github.com/KeiHara"
          />
          <MediaLink
            icon={() => <FaInstagram />}
            text="@kei.9241"
            mediaLink="https://www.instagram.com/kei.9241/"
          />
        </div>
      </div>
    </motion.div>
  )
}

interface mediaLinkProps {
  icon: IconType
  mediaLink: string
  text: string
}

const MediaLink = ({ icon, mediaLink, text }: mediaLinkProps) => {
  return (
    <a
      draggable={false}
      target="_blank"
      href={mediaLink}
      className="flex items-center px-3 py-2 duration-200 ease-linear rounded-md group w-fit hover:bg-sky-200 hover:bg-opacity-60 dark:hover:bg-teal-200 dark:hover:bg-opacity-20"
      rel="noreferrer"
    >
      <div className="duration-200 ease-linear text-sky-700 group-hover:text-sky-600 dark:text-teal-300 dark:group-hover:text-teal-200">
        {createElement(icon)}
      </div>
      <p className="ml-2 inline-block origin-bottom-right indent-0 text-sky-700 duration-200 ease-linear after:float-left after:h-0.5 after:w-full after:origin-center after:scale-0 after:rounded-sm after:bg-sky-700 after:duration-200 group-hover:text-sky-600 group-hover:after:scale-100  group-hover:after:bg-sky-600 dark:text-teal-300 after:dark:bg-teal-300 dark:group-hover:text-teal-200 dark:group-hover:after:bg-teal-200">
        {text}
      </p>
    </a>
  )
}

export default Home
