'use client'
import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import { Typography } from '@mui/material'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Dissertation() {
    return (
        <main className={styles.main}>
            <h1>記録</h1>
        </main>
    )
}
