import React, { useMemo } from 'react';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
    children: React.ReactNode;
    easing?:
        | [number, number, number, number]
        | 'linear'
        | 'easeIn'
        | 'easeOut'
        | 'easeInOut'
        | 'circIn'
        | 'circOut'
        | 'circInOut'
        | 'backIn'
        | 'backOut'
        | 'backInOut'
        | 'anticipate';
};

const FadeInBox = (props: Props) => {
    const { children, easing = [0.42, 0, 0.58, 1] } = props;

    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    const transition = useMemo(
        () => ({
            duration: 0.6,
            ease: easing,
            delay: 0.15,
        }),
        [easing],
    );

    const variants = {
        hidden: {
            scale: 0,
            opacity: 0,
            transition,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition,
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            exit="hidden"
            variants={variants}
            ref={ref}
        >
            {children}
        </motion.div>
    );
};

export default FadeInBox;
