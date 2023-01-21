import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [queryInput1, setQueryInput1] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prodServiceSolution: queryInput1 }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
    }
  }
  async function onSubmit1(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prodServiceSolution: queryInput1 }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
    }
  }
  async function onSubmit2(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prodServiceSolution: queryInput1 }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
    }
  }
  async function onSubmit3(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate4", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prodServiceSolution: queryInput1 }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
    }
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/science.png" />
      </Head>

      <main className={styles.main}>
        <img src="/science.png" className={styles.icon} />
        <h3>Generate</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="prodServiceSolution"
            placeholder="Enter your products services or solutions"
            value={queryInput1}
            onChange={(e) => setQueryInput1(e.target.value)}
          />
          <div className={styles.btncover}>
            <button onClick={(e) => onSubmit(e)}>{`how could ${queryInput1 ? queryInput1:'........'} integrate gpt 3 in their products?`}</button>
            <button onClick={(e) => onSubmit1(e)}>{`What are the products ${queryInput1 ? queryInput1:'........'}.com offers?`}</button>
            <button onClick={(e) => onSubmit2(e)}>{`How do integrate ChatGPT to increase value and revenue`}</button>
            <button onClick={(e) => onSubmit3(e)}>{`How to integrate ChatGPT on these products or services to maximise value and  revenue`}</button>
          </div>
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
