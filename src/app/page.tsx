"use client";

import {useEffect, useState} from "react";

import Head from "@/app/components/Head";
import Input from "@/app/components/Input";
import SelectSize from "@/app/components/SelectSize";

import styles from './page.module.scss';
import {toast} from "sonner";
import Image from "next/image";

export default function Home() {
    const [password, setPassword] = useState("");
    const [randomPassword, setRandomPassword] = useState("");
    const [size, setSize] = useState(8);
    const [animate, setAnimate] = useState(false);

    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#&$@*!0123456789";

    const generateRandomPassword = () => {
        toast.info("Génération du mot de passe...");
        let newPassword = Array.from({length: size}, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');
        setPassword(newPassword);
        triggerAnimation(newPassword);
    };

    const triggerAnimation = (finalPassword: string) => {
        setAnimate(true);
        let chars = Array(size).fill(''); // Initialize with empty strings for better UX
        let indexes = Array.from({length: size}, (_, index) => index).sort(() => Math.random() - 0.5); // Shuffle once

        const updatePassword = (idx: number) => {
            chars[idx] = finalPassword[idx];
            setRandomPassword(chars.join(''));
        };

        const revealNextChar = () => {
            if (indexes.length === 0) {
                clearInterval(timer);
                setAnimate(false);
                toast.success("Mot de passe généré !");
                return;
            }
            let index = indexes.shift(); // Sequential reveal based on shuffled order
            updatePassword(index || 0);
        };

        const timer = setInterval(revealNextChar, 50);
    };

    useEffect(() => {
        generateRandomPassword();
    }, []);

    return (
        <main className={styles.main}>
            <Image src={'/assets/images/newyork.jpg'} alt={"Photo de code matrix"} width={1920} height={1080}/>
            <div className={styles.container}>
                <Head/>
                <div className={styles.mainContainer}>
                    <div className={styles.sizeContainer}>
                        <p>
                            La taille du mot de passe doit être de
                        </p>
                        <SelectSize onChange={(e) => setSize(parseInt(e.target.value))}/>
                    </div>
                    <Input
                        value={animate ? randomPassword : password}
                        handleReload={generateRandomPassword}
                        handleCopy={() => {
                            navigator.clipboard.writeText(password);
                            toast.success("Mot de passe copié !");
                        }}
                        disabled={animate}
                    />
                    <p className={styles.warn}>évitez de partager vos mots de passes à n&apos;importe qui. Ne les
                        stockez pas dans des fichiers textes,
                        sur des post-it ou dans un drive. Utilisez un gestionnaire de mots de passe pour stocker vos
                        mots de
                        passe en toute sécurité.</p>
                </div>
            </div>
        </main>
    );
}
