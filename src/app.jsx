import { prerender as ssr } from 'preact-iso';
import myFace from './assets/face.webp'
import './app.css'
import Footer from './components/footer'

export function App() {
  return (
    <>
      <div class="app">
        <div>
          <img src={myFace} class="logo" alt="my face" />
        </div>
        <div class="card">
          <h1>Hi, I'm Michał</h1>
          <p>
            and I am Fullstack JavaScript developer.
            <br />
            I am strong beliver in the DevOps culture as well as Product Engineer paradigm.{' '}
            I can help you with architecture design from scratch or scaling your existing business.
          </p>
          <p>
            If you want to check out my work experience or have any questions don't hesitate to
            contact me using any option available in the footer (or you can{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tools.ietf.org/html/rfc1149"
            >
              send me a pigeon
            </a>
            ).
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export async function prerender() {
  const {html, links: discoveredLinks} = await ssr(<App />)
  return {
    html,
    links: discoveredLinks
  }
}
