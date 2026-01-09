import { useRef, useEffect, useState } from 'react';
import { useSprings, animated } from '@react-spring/web';

const BlurText = ({
    text = '',
    delay = 200,
    className = '',
    animateBy = 'words', // 'words' or 'letters'
    direction = 'top', // 'top' or 'bottom'
    threshold = 0.1,
    rootMargin = '0px',
    animationFrom,
    animationTo,

    onAnimationComplete,
}: {
    text: string;
    delay?: number;
    className?: string;
    animateBy?: 'words' | 'letters';
    direction?: 'top' | 'bottom';
    threshold?: number;
    rootMargin?: string;
    animationFrom?: any;
    animationTo?: any;

    onAnimationComplete?: () => void;
}) => {
    const elements = animateBy === 'words' ? text.split(' ') : text.split('');
    const [inView, setInView] = useState(false);
    const ref = useRef<HTMLParagraphElement>(null);
    const animatedCount = useRef(0);

    // Default animations based on direction
    const defaultFrom =
        direction === 'top'
            ? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }
            : { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' };

    const defaultTo = [
        {
            filter: 'blur(0px)',
            opacity: 1,
            transform: 'translate3d(0,0,0)',
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.unobserve(ref.current!);
                }
            },
            { threshold, rootMargin }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    const springs = useSprings(
        elements.length,
        elements.map((_, i) => ({
            from: animationFrom || defaultFrom,
            to: inView
                ? async (next: any) => {
                    for (const step of (animationTo || defaultTo)) {
                        await next(step);
                    }
                    animatedCount.current += 1;
                    if (animatedCount.current === elements.length && onAnimationComplete) {
                        onAnimationComplete();
                    }
                }
                : animationFrom || defaultFrom,
            delay: i * delay,
            config: { duration: 800, easing: (t: number) => t }, // Simplified config, react-spring doesn't support string easing directly like this usually without custom config
        }))
    );

    return (
        <p ref={ref} className={`font-bold ${className} flex flex-wrap gap-2`}>
            {springs.map((props, index) => (
                <animated.span
                    key={index}
                    style={props}
                    className="inline-block transition-transform will-change-[transform,filter,opacity]"
                >
                    {elements[index] === ' ' ? '\u00A0' : elements[index]}
                </animated.span>
            ))}
        </p>
    );
};

export default BlurText;
