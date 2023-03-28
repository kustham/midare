'use client'
import { Typography } from '@mui/material'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from './page.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main className={styles.main}>
            <Typography
                className={inter.className}
                component="div"
                variant="h1"
            >
                Midare
            </Typography>
            <Link href="/repository">Repository</Link>
        </main>
    )
}
