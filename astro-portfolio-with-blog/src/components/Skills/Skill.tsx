// src/components/Skill.tsx
import React, { Suspense, lazy, useState } from 'react';
import { Tooltip } from 'reactstrap';
import { Waypoint } from 'react-waypoint';
import { Animated } from 'react-animated-css';
import type { FC } from 'react';

type SkillProps = {
    skill: string;
    icon: string;
};

const loadIcon = (iconName: string) => {
    const prefix = iconName.slice(0, 2);

    const groupMap: Record<string, string> = {
        Fa: 'fa',
        Di: 'di',
        Gr: 'gr',
        Gi: 'gi',
        Fi: 'fi',
        Ri: 'ri',
        Si: 'si',
    };

    const group = groupMap[prefix];
    if (!group) return () => <span>?</span>;

    return lazy(() =>
        import(`@react-icons/all-files/${group}/${iconName}`).then((mod) => ({
            default: mod[iconName],
        }))
    );
};

export const Skill: FC<SkillProps> = ({ skill, icon }) => {
    const [visible, setVisible] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const isSSR = typeof window === 'undefined';
    const id = skill.replace(/[^a-z0-9]/gi, '') + 'Tooltip';

    const Icon = loadIcon(icon);

    return (
        <li style={{ padding: '0 0.5rem', display: 'inline-block' }}>
            {!isSSR && (
                <Suspense fallback={<span>Loading...</span>}>
                    <Animated animationIn="fadeInUp" isVisible={visible}>
                        <span id={id}>
                            <Icon size="2rem" style={{ textAlign: 'center' }} />
                        </span>
                        <Tooltip
                            placement="top"
                            isOpen={tooltipOpen}
                            target={id}
                            toggle={() => setTooltipOpen(!tooltipOpen)}
                        >
                            {skill}
                        </Tooltip>
                        <Waypoint onEnter={() => setVisible(true)} />
                    </Animated>
                </Suspense>
            )}
        </li>
    );
};
