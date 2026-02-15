'use client';

// NOTE: This component displays "Claude Builder Club Northumbria" text branding
// This is the official Claude Builder Club Northumbria logo component
interface ClaudeBuilderClubLogoProps {
    height?: number;
    className?: string;
}

export default function ClaudeBuilderClubLogo({ height = 30, className = '' }: ClaudeBuilderClubLogoProps) {
    const fontSize = height * 0.75; // Scale font size based on height - much bigger
    return (
        <div
            className={`flex items-center gap-0 ${className}`}
            style={{ height: `${height}px`, whiteSpace: 'nowrap' }}
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    height: `${height * 1.5}px`,
                    width: 'auto',
                    objectFit: 'contain',
                    marginRight: '-8px',
                    mixBlendMode: 'multiply',
                }}
                src="/videos/claudeiconwhite.mp4"
            />
            <span
                className="text-black font-medium"
                style={{
                    fontSize: `${fontSize}px`,
                    fontFamily: "'Google Sans Flex', sans-serif",
                    lineHeight: 0.9
                }}
            >
                Claude Builder Club{' '}
                <span className="font-bold">Northumbria</span>
            </span>
        </div>
    );
}
