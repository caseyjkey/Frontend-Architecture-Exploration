import { useState, useRef, useEffect } from 'react';
import {
    FaGithub, FaLinkedin, FaInstagram
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

type IconName = 'github' | 'linkedin' | 'instagram' | 'twitter';
const iconMap = {
    github: FaGithub, linkedin: FaLinkedin,
    instagram: FaInstagram, twitter: FaXTwitter
};

interface Props { link: string; icon: IconName }

export default function FooterSocialClient({ link, icon }: Props) {
    const [visible, setVisible] = useState(false);
    const sentinel = useRef<HTMLSpanElement>(null);
    const IconComp = iconMap[icon];

    /* ───────────────── Observer ───────────────── */
    useEffect(() => {
        const node = sentinel.current;
        if (!node) {
            console.warn('sentinel ref is null');
            return;
        }

        const obs = new IntersectionObserver(
            ([entry]) => {
                console.log('IO callback → isIntersecting:', entry.isIntersecting,
                    'intersectionRatio:', entry.intersectionRatio);
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            },
            {
                root: null,           // viewport
                rootMargin: '0px 0px 0% 0px',    // no margin while debugging
                threshold: 0
            }        // fire as soon as 1 pixel is visible
        );

        console.log('observer.observe(sentence)');
        obs.observe(node);
        return () => obs.disconnect();
    }, []);
    /* ───────────────────────────────────────────── */

    return (
        <>
            {/* Sentinel must exist and have box dimensions */}
            <span ref={sentinel} style={{ display: 'block', width: 1, height: 1 }} />

            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`footer-icon ${visible ? 'fade-in-up' : ''}`}
            >
                <IconComp />
            </a>
        </>
    );
}
