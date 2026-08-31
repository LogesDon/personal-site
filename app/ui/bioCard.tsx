import styles from '@/app/ui/home.module.css'
import { lusitana } from '@/app/ui/fonts'


export default function BioCard() {
    return (
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
            <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
                <div className={styles.shape}/>
                <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                <strong>Welcome to Acme.</strong> This is the example for the{' '}
                <a href="https://nextjs.org/learn/" className="text-blue-500">
                    Next.js Learn Course
                </a>
                , brought to you by Vercel.
                </p>
            </div>
        </div>
    );
}