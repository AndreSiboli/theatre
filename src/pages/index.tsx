import Head from "next/head";
import { Roboto } from "next/font/google";
import styles from "@/styles/Home.module.scss";

import Img from "@/components/utils/Img";
import Link from "next/link";

import image from "@/assets/wallpaper.jpeg";
import { FaFacebookF, FaTwitter, FaInstagram, FaPlay } from "react-icons/fa";

const inter = Roboto({ subsets: ["latin"], weight: ["500", "700"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.main_socialMedia}>
          <div className={styles.social_links}>
            <Link href="https://www.facebook.com">
              <FaFacebookF />
            </Link>

            <Link href="https://www.twitter.com">
              <FaTwitter />
            </Link>

            <Link href="https://www.instagram.com">
              <FaInstagram />
            </Link>
          </div>
        </div>

        <div className={styles.main_image}>
          <div className={styles.image}>
            <Img src={image} style={{ objectFit: "cover" }} />
          </div>
        </div>
        <div className={styles.main_info}>
          <div className={styles.info}>
            <h1>THEATRICAL PERFORMANCES</h1>
            <FaPlay />
          </div>
        </div>
      </main>
    </>
  );
}
