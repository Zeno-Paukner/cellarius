import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline font">
      <Navbar />
      <div class="container mx-auto">
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </h1>
  );
}
