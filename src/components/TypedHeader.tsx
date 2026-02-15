'use client';

import { useEffect, useState, useRef } from 'react';

interface TypedHeaderProps {
    text: string;
    className?: string;
    speed?: number;
    showCursor?: boolean;
    onTypingComplete?: () => void;
}

export default function TypedHeader({
    text,
    className = '',
    speed = 40,
    showCursor = true,
    onTypingComplete
}: TypedHeaderProps) {
    const [displayedChars, setDisplayedChars] = useState<number>(0);
    const [phase, setPhase] = useState<'blinking' | 'typing' | 'done'>('blinking');
    const [cursorVisible, setCursorVisible] = useState(true);
    const hasCalledComplete = useRef(false);

    const onCompleteRef = useRef(onTypingComplete);
    onCompleteRef.current = onTypingComplete;

    const totalChars = text.length;

    // Start with blinking cursor, then start typing after 1 second
    useEffect(() => {
        const startTyping = setTimeout(() => {
            setPhase('typing');
        }, 1000);

        return () => clearTimeout(startTyping);
    }, []);

    // Cursor blinking animation
    useEffect(() => {
        if (phase === 'done') {
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
        <span
            className={`typed-header ${className}`}
            style={{
                position: 'relative',
                display: 'inline'
            }}
        >
            {/* Render each character individually for proper wrapping */}
            {text.split('').map((char, index) => (
                <span key={index}>
                    {/* Cursor appears BEFORE the current character being typed */}
                    {showCursor && phase !== 'done' && index === displayedChars && (
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
            {showCursor && phase !== 'done' && displayedChars === totalChars && (
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
        </span>
    );
}
