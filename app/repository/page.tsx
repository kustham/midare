import styles from '../page.module.css'
import Link from 'next/link'

export default function Repository() {
    return (
        <main className={styles.description}>
            <Link href="repository/kusare">Kusare</Link>
            <Link href="repository/yakamashi">Yakamashi</Link>
        </main>
    )
}
