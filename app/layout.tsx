import './globals.css'

export const metadata = {
    title: 'Midare',
    description: 'Generative Arts',
    icons: '../public/favicons/favicon.ico'
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <body>{children}</body>
        </html>
    )
}
