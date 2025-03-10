import s from './style.module.css'
import Link from 'next/link'

export default function Footer({ openConsentManager }) {
  return (
    <footer className={s.footer}>
      <div className="g-grid-container">
        <ul className={`${s.footerLinks} ${s.nav}`}>
          <li>
            <Link href="/">
              <a>Overview</a>
            </Link>
          </li>
          <li>
            {' '}
            <Link href="/docs">
              <a>Docs</a>
            </Link>
          </li>
          <li>
            <Link href="/plugin">
              <a>Extend</a>
            </Link>
          </li>
          <li>
            <a href="https://www.hashicorp.com/privacy">Privacy</a>
          </li>
          <li>
            <Link href="/security">
              <a>Security</a>
            </Link>
          </li>
          <li>
            <Link href="/assets/files/press-kit.zip">
              <a>Press Kit</a>
            </Link>
          </li>
          <li>
            <a onClick={openConsentManager}>Consent Manager</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
