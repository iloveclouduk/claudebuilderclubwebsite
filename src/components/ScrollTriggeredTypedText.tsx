'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollTriggeredTypedTextProps {
    text: string;
    className?: string;
    speed?: number;
    showCursor?: boolean;
    startDelay?: number;
    onTypingComplete?: () => void;
}

export default function ScrollTriggeredTypedText({
    text,
    className = '',
    speed = 40,
    showCursor = true,
    startDelay = 0,
    onTypingComplete
}: ScrollTriggeredTypedTextProps) {
    const [displayedChars, setDisplayedChars] = useState<number>(0);
    const [phase, setPhase] = useState<'waiting' | 'blinking' | 'typing' | 'done'>('waiting');
    const [cursorVisible, setCursorVisible] = useState(true);
    const hasCalledComplete = useRef(false);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const onCompleteRef = useRef(onTypingComplete);
    onCompleteRef.current = onTypingComplete;

    const totalChars = text.length;

    // Start animation when scrolled into view
    useEffect(() => {
        if (isInView && phase === 'waiting') {
            const startTimer = setTimeout(() => {
                setPhase('blinking');

                // Start typing after blinking + start delay
                const typingTimer = setTimeout(() => {
                    setPhase('typing');
                }, 800);

                return () => clearTimeout(typingTimer);
            }, startDelay);

            return () => clearTimeout(startTimer);
        }
    }, [isInView, startDelay, phase]);

    // Cursor blinking animation
    useEffect(() => {
        if (phase === 'done') {
            setCursorVisible(false);
            return;
        }

        if (phase === 'waiting') {
            setCursorVisible(false);
            return;
        }

        const blinkInterval = setInterval(() => {
            setCursorVisible(prev => !prev);
        }, 500);

        return () => clearInterval(blinkInterval);
    }, [phase]);

    // Type characters one by one
    useEffect(() => {
        if (phase !== 'typing') return;

        if (displayedChars < totalChars) {
            const timeout = setTimeout(() => {
                setDisplayedChars(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else if (!hasCalledComplete.current) {
            hasCalledComplete.current = true;

            setTimeout(() => {
                setPhase('done');
                setTimeout(() => {
                    onCompleteRef.current?.();
                }, 300);
            }, 400);
        }
    }, [displayedChars, totalChars, speed, phase]);

    return (
        <motion.span
            ref={ref}
            className={`scroll-triggered-typed-text ${className}`}
            style={{
                position: 'relative',
                display: 'inline'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.3 }}
        >
            {/* Render each character individually for proper wrapping */}
            {text.split('').map((char, index) => (
                <span key={index}>
                    {/* Cursor appears BEFORE the current character being typed */}
                    {showCursor && phase !== 'done' && phase !== 'waiting' && index === displayedChars && (
                        <span
                            className="typing-cursor"
                            style={{
                                fontWeight: 300,
                                color: '#202124',
                                opacity: cursorVisible ? 1 : 0,
                                transition: 'opacity 0.1s ease'
                            }}
                        >
                            |
                        </span>
                    )}
                    <span
                        style={{
                            visibility: index < displayedChars ? 'visible' : 'hidden'
                        }}
                    >
                        {char}
                    </span>
                </span>
            ))}

            {/* Cursor at the very end when all text is typed */}
            {showCursor && phase !== 'done' && phase !== 'waiting' && displayedChars === totalChars && (
                <span
                    className="typing-cursor"
                    style={{
                        fontWeight: 300,
                        color: '#202124',
                        opacity: cursorVisible ? 1 : 0,
                        transition: 'opacity 0.1s ease'
                    }}
                >
                    |
                </span>
            )}
        </motion.span>
    );
}